// To generate Lunr index that will be served alongside static assets

const lunr = require('../js/lunr.min'),
    path = require('path'),
    fs = require('fs'),
    sitePath = __dirname + '/../..'

const OUT_FILEPATH = path.join(sitePath, 'assets', 'lunrIndex.json')
const IN_FILEPATH = path.join(sitePath, 'assets', 'siteIndex.json')

let siteIndex
try {
    siteIndex = fs.readFileSync(IN_FILEPATH)
} catch (err) {
    console.log('Could not find siteIndex.json, check IN_FILEPATH.')
    siteIndex = {}
}

const documents = JSON.parse(siteIndex)
const sectionIndex = {}
const idx = lunr(function () {
    this.ref('url')
    this.field('title', {
        boost: 2
    })
    this.field('text')
    this.metadataWhitelist = ['position', 'documentTitle']
    this.pipeline.remove(lunr.stemmer)
    this.searchPipeline.remove(lunr.stemmer)
    documents.forEach((function (_this) {
        return function (section) {
            if (section.text.length > 0) {
                sectionIndex[section.url] = section
                return _this.add({
                    'url': section.url,
                    'title': section.title,
                    'documentTitle': section.documentTitle,
                    'text': section.text
                })
            }
        }
    })(this))
})

fs.writeFileSync(OUT_FILEPATH,
    JSON.stringify({
        index: idx,
        sectionIndex: sectionIndex
    })
)

console.log('Wrote lunr index file to ' + OUT_FILEPATH)
