const lunr = require('lunr'),
    path = require('path'),
    fs = require('fs'),
    stdin = process.stdin,
    buffer = [],
    sitePath = __dirname + '/../..'

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (data) {
    buffer.push(data)
})

stdin.on('end', function () {
    var documents = JSON.parse(buffer.join(''))
    var sectionIndex = {}
    var idx = lunr(function () {
        this.ref('url')
        this.field('title', {
            boost: 2
        })
        this.field('text')
        this.metadataWhitelist = ['position', 'documentTitle']
        this.pipeline.remove(lunr.stemmer)
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

    filepath = path.join(sitePath, 'assets', 'lunrIndex.json')
    fs.writeFileSync(filepath,
        JSON.stringify({
            index: idx,
            sectionIndex: sectionIndex
        })
    )
    console.log('Wrote lunr index file to ' + filepath)
})
