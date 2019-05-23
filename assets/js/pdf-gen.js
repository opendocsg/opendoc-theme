const fs = require('fs')
const pdf = require('html-pdf')
const glob = require('glob')
const path = require('path')
const jsdom = require('jsdom')
const MT = require('mark-twain')
const jsyaml = require('js-yaml')
const sitePath = __dirname + '/../..'
const options = {
    height: '594mm',        // allowed units: mm, cm, in, px
    width: '420mm',
    base: 'file://' + sitePath + '/',
    border: {
        right: '60px', // default is 0, units: mm, cm, in, px
        left: '60px',
    },
    header: {
        height: '80px',
    },
    footer: {
        height: '80px',
    },
}
// List of top-level folder names which are not to be printed
const printIgnoreFolders = ['assets', 'files', 'iframes', 'images']
// List of top-level .html files which are not to be printed
const printIgnoreFiles = ['export.html']

const main = () => {
    console.log('Base options: ', options.base)
    // creating exports of individual documents
    const docFolders = getDocumentFolders(sitePath, printIgnoreFolders)
    exportPdfDocFolders(sitePath, docFolders)
    exportPdfTopLevelDocs(sitePath)
}

const exportPdfTopLevelDocs = (sitePath) => {
    let htmlFilePaths = glob.sync('*.html', { cwd: sitePath })
    htmlFilePaths = htmlFilePaths.filter((filepath) => !printIgnoreFiles.includes(filepath))
    htmlFilePaths = htmlFilePaths.map((filepath) => path.join(sitePath, filepath))
    // Remove folders without HTML files (don't want empty pdfs)
    if (htmlFilePaths.length === 0) return
    const configFilepath = path.join(sitePath, '..', '_config.yml')
    if (configFileHasValidOrdering(configFilepath)) {
        const configYml = yamlToJs(configFilepath)
        const order = mapSectionNameToHtmlFilename(configYml, sitePath)
        htmlFilePaths = reorderHtmlFilePaths(htmlFilePaths, order)
    }
    createPdf(htmlFilePaths, sitePath)
}

const exportPdfDocFolders = (sitePath, docFolders) => {
    docFolders.forEach(function (folder) {
        // find all the folders containing html files
        const folderPath = path.join(sitePath, folder)
        let htmlFilePaths = glob.sync('*.html', { cwd: folderPath })
        htmlFilePaths = htmlFilePaths.map((filepath) => path.join(folderPath, filepath))

        // Remove folders without HTML files (don't want empty pdfs)
        if (htmlFilePaths.length === 0) return

        const indexFilepath = path.join(sitePath, '..', folder, 'index.md')
        if (indexFileHasValidOrdering(indexFilepath)) {
            const configMd = markdownToJs(indexFilepath)
            const order = configMd.meta.order // names of html files without the .html
            htmlFilePaths = reorderHtmlFilePaths(htmlFilePaths, order)
        }
        createPdf(htmlFilePaths, folderPath)
    })
}

// Concatenates the contents in .html files, and outputs export.pdf in the specified output folder
const createPdf = (htmlFilePaths, outputFolderPath) => {
    // docprint.html is our template to build pdf up from.
    const exportHtmlFile = fs.readFileSync(sitePath + '/../_layouts/docprint.html')
    const exportDom = new jsdom.JSDOM(exportHtmlFile)
    const exportDomMain = exportDom.window.document.getElementById('main-content')

    htmlFilePaths.forEach(function (filePath) {
        const file = fs.readFileSync(filePath)
        const dom = new jsdom.JSDOM(file)

        // html-pdf can't deal with these
        removeTagsFromDom(dom, 'script')
        removeTagsFromDom(dom, 'iframe')

        // If a <img src=...> link src begins with '/', it is a relative link
        // and needs to be prepended with '.' to make the images show in the pdf
        const imgsrcs = dom.window.document.getElementsByTagName('img')
        for (let i=0; i<imgsrcs.length; i++) {
            const imgsrc = imgsrcs[i]
            if (imgsrc.src.startsWith('/')) {
                imgsrc.src = '.' + imgsrc.src
            } else if (imgsrc.src.startsWith('.')) {
                imgsrc.src = outputFolderPath + imgsrc.src.substr(1)
            }
        }

        // Concat all the id:main-content divs
        try {
            const oldNode = dom.window.document.getElementById('main-content')
            const newNode = dom.window.document.importNode(oldNode, true)
            exportDomMain.appendChild(newNode)
        } catch (error) {
            console.log('Failed to append Node, skipping: ' + error)
        }
    })

    pdf.create(exportDom.serialize(), options).toFile(path.join(outputFolderPath, 'export.pdf'), (err, res) => {
        if (err) return console.log(err)
        console.log('Pdf created at: ', res.filename)
    })
}

// Returns a list of the valid document (i.e. folder) paths
const getDocumentFolders = (sitePath, printIgnoreFolders) => {
    return fs.readdirSync(sitePath).filter(function (filePath) {
        return fs.statSync(path.join(sitePath, filePath)).isDirectory() &&
            !printIgnoreFolders.includes(filePath)
    })
}

// Returns true if config file contains section_order field
const configFileHasValidOrdering = (configFilepath) => {
    try {
        const configYml = yamlToJs(configFilepath)
        return 'section_order' in configYml
    } catch (error) {
        return false
    }
}

// Returns true if index.md exists and contains order field
const indexFileHasValidOrdering = (indexFilepath) => {
    try {
        const configMd = markdownToJs(indexFilepath)
        return 'order' in configMd['meta']
    } catch (error) {
        return false
    }
}

// Mutates the htmlFilepath array to match order provided in order
const reorderHtmlFilePaths = (htmlFilePaths, order) => {
    for (let i=0; i<order.length; i++) {
        const name = path.basename(order[i], '.md')
        for (let j=0; j<htmlFilePaths.length; j++) {
            if (path.basename(htmlFilePaths[j], '.html') === name) {
                swap(htmlFilePaths, i, j)
            }
        }
    }
    return htmlFilePaths
}

// Removes <tag></tag> from dom and everything in between them
const removeTagsFromDom = (dom, tagname) => {
    const tags = dom.window.document.getElementsByTagName(tagname)
    for (let i = tags.length - 1; i >= 0; i--) {
        tags[i].parentNode.removeChild(tags[i])
    }
}

// Section names correspond to titles at the top of .md files in source folder
const mapSectionNameToHtmlFilename = (configYml, sitePath) => {
    const section_order = configYml.section_order
    const mdFiles = glob.sync(path.join(sitePath, '..', '*.md'))
    const newSectionorder = []
    section_order.forEach((title) => {
        for (let i=0; i<mdFiles.length; i++) {
            try {
                const mdTitle = markdownToJs(mdFiles[i]).meta.title
                if (title === mdTitle) {
                    newSectionorder.push(mdFiles[i])
                }
            } catch (error) {
                continue // did not contain field
            }
        }
    })
    return newSectionorder
}

// Mutates array by swapping items at index i and j
const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// converts .md to JS Object
const markdownToJs = (filepath) => {
    const configFile = fs.readFileSync(filepath)
    return MT(configFile.toString())
}

const yamlToJs = (filepath) => {
    return jsyaml.safeLoad(fs.readFileSync(filepath))
}

main()
