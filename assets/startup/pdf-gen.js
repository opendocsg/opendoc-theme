---
---
const fs = require('fs')
const crypto = require('crypto')
const pAll = require('p-all')
const https = require('https')
const glob = require('glob')
const path = require('path')
const URL = require('url').URL;
const jsdom = require('jsdom')
const jsyaml = require('js-yaml')
const SITE_PATH = __dirname + '/../..'

const IS_PROD = '{{ jekyll.environment }}' === 'production'
const GENERATE_PDF_LOCALLY = '{{ site.offline }}' === 'true' || false
const S3_STORAGE_URL = new URL('https://opendoc-theme-pdf.s3-ap-southeast-1.amazonaws.com')

// For dealing with imagess when baseurl is set, remove leading slashes, if any, for standardization
const BASEURL = '{{ site.baseurl }}'.replace('/', '')
const LOCAL_PDF_DOLER = path.join(SITE_PATH, 'assets', 'pdfs') // local folder for pdfs
 // S3 folder; replace slashes to avoid creating sub-folders
const S3_PDF_FOLDER = '{{ site.repository }}'.replace(/\//g, '-') + (IS_PROD ? '' : '-staging')

const BUCKET_NAME = S3_STORAGE_URL.hostname.split('.')[0]

// CSS to be applied to the PDFs, this will be inserted in <head>
const PATH_TO_CSS = path.join(SITE_PATH, 'assets', 'styles', 'main.css')

// Hash is stored as S3 metadata and served as custom header whenever the pdf is requested
const SERIALIZED_HTML_HASH_HEADER = 'x-amz-meta-html-hash'

// Config.yml file path
const CONFIG_YAML_PATH = path.join(SITE_PATH, '..', '_config.yml')

let pdf
let pdfGenConcurrency = 1
if (GENERATE_PDF_LOCALLY) {
    pdf = require('html-pdf')
    console.log('Generating PDFs and storing locally instead.')
} else {
    if (process.env.PDF_LAMBDA_KEY === undefined || 
        process.env.PDF_LAMBDA_SERVER === undefined) {
            console.log('Environment variables PDF_LAMBDA_KEY or PDF_LAMBDA_SERVER for AWS Lambda not present')
            process.exit(1)
        }
    pdfGenConcurrency = process.env.PDF_GEN_CONCURRENCY !== undefined ?
        parseInt(process.env.PDF_GEN_CONCURRENCY) :
        50 // Tuned for Netlify
    console.log(`Generating PDFs on AWS Lambda with concurrency of ${pdfGenConcurrency}.`)
    console.log(`PDFs will be placed in bucket: ${BUCKET_NAME} in folder ${S3_PDF_FOLDER}.`)
}

// These options are only applied when PDFs are built locally
const localPdfOptions = {
    height: '594mm',        // allowed units: mm, cm, in, px
    width: '420mm',
    base: 'file://' + SITE_PATH + '/',
    border: {
        right: '100px', // default is 0, units: mm, cm, in, px
        left: '100px',
    },
    header: {
        height: '80px',
    },
    footer: {
        height: '80px',
    },
}

// List of top-level folder names which may contain html but are not to be printed
const printIgnoreFolders = ['assets', 'files', 'iframes', 'images']
// List of top-level .html files which are not to be printed
const printIgnoreFiles = ['export.html', 'index.html']

// Tracking statistics
let numPdfsStarted = 0
let numPdfsUnchanged = 0
let numPdfsError = 0
let numPdfsSuccess = 0
let numTotalPdfs = 0
const TIMER = 'Time to create PDFs'

const main = async () => {
    // creating exports of individual documents
    console.time(TIMER)
    const docFolders = getDocumentFolders(SITE_PATH, printIgnoreFolders)
    await exportPdfTopLevelDocs(SITE_PATH)
    await exportPdfDocFolders(SITE_PATH, docFolders)
    console.log(`PDFs created with success:${numPdfsSuccess} unchanged:${numPdfsUnchanged} error:${numPdfsError} total:${numTotalPdfs}`)
    console.timeEnd(TIMER)
}

const exportPdfTopLevelDocs = async (sitePath) => {
    let htmlFilePaths = glob.sync('*.html', { cwd: sitePath })
    htmlFilePaths = htmlFilePaths.filter((filepath) => !printIgnoreFiles.includes(filepath))
    htmlFilePaths = htmlFilePaths.map((filepath) => path.join(sitePath, filepath))
    // Remove folders without HTML files (don't want empty pdfs)
    if (htmlFilePaths.length === 0) return
    numTotalPdfs++
    const orderForFolder = getOrderFromConfig('/')
    if (orderForFolder && orderForFolder.length) {
        htmlFilePaths = reorderHtmlFilePaths(htmlFilePaths, orderForFolder)
    }
    await createPdf(htmlFilePaths, sitePath, 'export')
}

const exportPdfDocFolders = (sitePath, docFolders) => {
    const actions = []
    for (let folder of docFolders) {
        // find all the folders containing html files
        const folderPath = path.join(sitePath, folder)
        let htmlFilePaths = glob.sync('*.html', { cwd: folderPath })
        htmlFilePaths = htmlFilePaths.filter((filepath) => !printIgnoreFiles.includes(filepath))
        htmlFilePaths = htmlFilePaths.map((filepath) => path.join(folderPath, filepath))

        // Remove folders without HTML files (don't want empty pdfs)
        if (htmlFilePaths.length === 0) continue
        numTotalPdfs++
        const orderForFolder = getOrderFromConfig(folder)

        if (orderForFolder && orderForFolder.length) {
            htmlFilePaths = reorderHtmlFilePaths(htmlFilePaths, orderForFolder)
        }
        actions.push((() => createPdf(htmlFilePaths, folderPath, folder)))
    }
    return pAll(actions, { concurrency: pdfGenConcurrency })
}

// Concatenates the contents in .html files, and outputs export.pdf in the specified output folder
const createPdf = (htmlFilePaths, outputFolderPath, documentName) => {
    logStartedPdf(outputFolderPath)
    // docprint.html is our template to build pdf up from.
    const exportHtmlFile = fs.readFileSync(__dirname + '/docprint.html')
    let cssFile = ''
    try {
        cssFile = fs.readFileSync(PATH_TO_CSS)
    } catch(err) {
        console.log('Failed to read CSS file at ' + PATH_TO_CSS +', CSS will not be applied')
    }
    const exportDom = new jsdom.JSDOM(exportHtmlFile)
    const exportDomBody = exportDom.window.document.body
    const exportDomMain = exportDom.window.document.getElementById('main-content')
    let addedTitle = false
    let addedDocTitle = false

    htmlFilePaths.forEach(function (filePath) {
        const file = fs.readFileSync(filePath)
        const dom = new jsdom.JSDOM(file, {
            resources: 'usable' // to get JSDOM to load stylesheets
        })

        // html-pdf can't deal with these
        removeTagsFromDom(dom, 'script')
        removeTagsFromDom(dom, 'iframe')
        inlineImages(dom, outputFolderPath)

        // Site titles needs only be added once
        if (!addedTitle) {
            try {
                const oldTitle = dom.window.document.getElementsByClassName('site-header-text')[0]
                exportDomBody.insertBefore(oldTitle, exportDomMain)
                addedTitle = true
            } catch (error) {
                console.log('Failed to append Title, skipping: ' + error)
            }
        }
        // Document titles too
        if (!addedDocTitle) {
            try {
                const oldDocTitle = dom.window.document.getElementsByClassName('description-container')[0]
                exportDomBody.insertBefore(oldDocTitle, exportDomMain)
                const hr = dom.window.document.createElement('HR')
                exportDomBody.insertBefore(hr, exportDomMain)
                addedDocTitle = true
            } catch (error) {
                console.log('Failed to append Doc Title, skipping: ' + error)
            }
        }

        // Concat all the id:main-content divs
        try {
            const oldNode = dom.window.document.getElementById('main-content')
            exportDomMain.innerHTML += oldNode.innerHTML
        } catch (error) {
            console.log('Failed to append Node, skipping: ' + error)
        }
        dom.window.close()
    })
    const serializedHtmlHash = crypto.createHash('md5').update(exportDom.serialize()).digest('base64')
    exportDom.window.document.head.innerHTML += '<style>' + cssFile + '</style>'
    console.log('createpdf hash for:' + outputFolderPath + ': ' + serializedHtmlHash)
    if (GENERATE_PDF_LOCALLY) {
        exportDomBody.className += ' print-content-large'
        // Generate and store locally
        return new Promise((resolve, reject) => {
            const url = path.join(LOCAL_PDF_DOLER, documentName + '.pdf')
            pdf.create(exportDom.serialize(), localPdfOptions).toFile(url, (err, res) => {
                if (err) {
                    logErrorPdf('Creating PDFs locally', err)
                    return reject()
                }
                logSuccessPdf(res.filename)
                resolve()
            })
            exportDom.window.close()
        })
    } else {
        // Apply small font sizes because puppeteer tends to print big
        exportDomBody.className += ' print-content-small'
        // Code for this API lives at https://github.com/opendocsg/pdf-lambda
        const pdfName = `${documentName}.pdf`
        return new Promise(function (resolve, reject) {
            // Promise resolves if PDF is present and hash matches. Else reject.
            const pdfS3Url = S3_STORAGE_URL.toString() + S3_PDF_FOLDER + '/' + pdfName
            const options = {
                method: 'HEAD'
            }
            const pdfExistsRequest = https.request(pdfS3Url, options, function (res) {
                if (res.statusCode === 404) {
                    return reject('PDF not present')
                }
                if (!(SERIALIZED_HTML_HASH_HEADER in res.headers)) {
                    return reject('HTML hash header not present')
                }
                if (res.headers[SERIALIZED_HTML_HASH_HEADER] !== serializedHtmlHash) {
                    return reject('PDF hash does not match')
                }
                logUnchangedPdf(pdfName, pdfS3Url)
                resolve()
            })
            pdfExistsRequest.on('error', function (err) {
                console.log(`pdfExistsRequest encountered error for ${pdfName}:, ${err}`)
                return reject()
            })
            pdfExistsRequest.end()
        }).then(() => {},
            function (rejected) {
                // Rejected: send to lambda function to create PDF
                const options = {
                    method: 'POST',
                    headers: {
                        'x-api-key': process.env.PDF_LAMBDA_KEY,
                        'content-type': 'application/json',
                    }
                }

                const pdfCreationBody = {
                    'serializedHTML': exportDom.serialize(),
                    'serializedHTMLName': S3_PDF_FOLDER + '/' + pdfName,
                    'serializedHTMLHash': serializedHtmlHash,
                    'bucketName': BUCKET_NAME
                }
                return new Promise(function (resolve, reject) {
                    const pdfCreationRequest = https.request(process.env.PDF_LAMBDA_SERVER, options, function (res) {
                        if (res.statusCode < 200 || res.statusCode >= 300) {
                            logErrorPdf(`pdfCreationRequest status code for ${pdfName}: `, res.statusCode)
                            return reject()
                        }
                        logSuccessPdf(pdfName)
                        return resolve()
                    })
                    pdfCreationRequest.on('error', function(err) {
                        logErrorPdf(`pdfCreationRequest encountered error for ${pdfName}:`, err)
                        return reject()
                    })
                    pdfCreationRequest.write(JSON.stringify(pdfCreationBody))
                    pdfCreationRequest.end()
                }).catch((error) => {
                    logErrorPdf(`pdfCreation promise error for ${pdfName}`, error)
                }).finally(() => {
                    exportDom.window.close()
                })

            })
    }
}

const logStartedPdf = (outputFolderPath) => {
    numPdfsStarted++
    console.log(`createpdf started for:${outputFolderPath} (${numPdfsStarted}/${numTotalPdfs})`)
}

const logUnchangedPdf = (outputFolderPath, pdfUrl) => {
    numPdfsUnchanged++
    console.log(`createpdf unchanged for:${outputFolderPath} at ${pdfUrl} (${numPdfsUnchanged}/${numTotalPdfs})`)
}

const logErrorPdf = (origin, error) => {
    numPdfsError++
    console.log(`createpdf error for: ${origin}: ${error}(${numPdfsError}/${numTotalPdfs})`)
}

const logSuccessPdf = (outputPdfPath) => {
    numPdfsSuccess++
    console.log(`createpdf success for:${outputPdfPath} (${numPdfsSuccess}/${numTotalPdfs})`)
}

const imageType = {
    '.png':'image/png',
    '.jpg':'image/jpeg',
    '.jpeg':'image/jpeg',
    '.bmp':'image/bmp',
    '.webp':'image/webp',
}

// Load images and inline them
const inlineImages = (dom, outputFolderPath) => {
    const imgs = dom.window.document.getElementsByTagName('img')
    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i]
        const originalImagePath = img.src
        if (!originalImagePath.startsWith('http://') && !originalImagePath.startsWith('https://')) {
            // Convert all file paths into absolute file paths
            let imgPath
            if (originalImagePath.startsWith('/')) {
                // If baseurl is set, remove baseurl for images to be found
                if (BASEURL.length > 0) {
                    imgPath = path.join(__dirname, '..', '..', originalImagePath.replace('/' + BASEURL, ''))
                } else {
                    imgPath = path.join(__dirname, '..', '..', originalImagePath)
                }
            } else {
                // relative path
                imgPath = path.join(outputFolderPath, originalImagePath).toString()
            }
            if (fs.existsSync(imgPath)) {
                const imgRaw = fs.readFileSync(imgPath)
                if (path.extname(imgPath) === '.svg') { // don't encode svgs in base64, simply insert them
                    img.src = 'data:image/svg+xml;utf8,' + imgRaw.toString('utf-8')
                } else {
                    const dataType = imageType[path.extname(imgPath)] || 'image/png'
                    const uri = 'data:' + dataType + ';base64,' + imgRaw.toString('base64')
                    img.src = uri
                }
            }
        }
    }
}

// Returns a list of the valid document (i.e. folder) paths
const getDocumentFolders = (sitePath, printIgnoreFolders) => {
    return fs.readdirSync(sitePath).filter(function (filePath) {
        return fs.statSync(path.join(sitePath, filePath)).isDirectory() &&
            !printIgnoreFolders.includes(filePath)
    })
}

// Returns true if config file has order for particular folder
const getOrderFromConfig = (folderName) => {
    try {
        const configYml = yamlToJs(CONFIG_YAML_PATH)
        const folders = configYml.folders
        for (folder of folders) {
            if (folder.name.toLowerCase() === folderName.toLowerCase()) {
                return folder.order
            }
        }
        return null
    } catch (error) {
        return null
    }
}


// Mutates the htmlFilepath array to match order provided in order
const reorderHtmlFilePaths = (htmlFilePaths, order) => {
    const orderedHtmlFilePaths = []
    for (let i = 0; i < order.length; i++) {
        const name = path.basename(order[i], '.md')
        htmlFilePaths.some((filePath) => {
            if (path.basename(filePath, '.html') === name) {
                orderedHtmlFilePaths.push(filePath)
            }
        })
    }
    return orderedHtmlFilePaths
}

// Removes <tag></tag> from dom and everything in between them
const removeTagsFromDom = (dom, tagname) => {
    const tags = dom.window.document.getElementsByTagName(tagname)
    for (let i = tags.length - 1; i >= 0; i--) {
        tags[i].parentNode.removeChild(tags[i])
    }
}

// converts .md to JS Object
const markdownToJs = (filepath) => {
    const configString = fs.readFileSync(filepath).toString().replace(/---/g, '')
    return jsyaml.load(configString)
}

const yamlToJs = (filepath) => {
    return jsyaml.load(fs.readFileSync(filepath))
}

main()
