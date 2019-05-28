const lunr = require('lunr'),
    stdin = process.stdin,
    stdout = process.stdout,
    buffer = []

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
    this.metadataWhitelist = ['position']
    this.pipeline.remove(lunr.stemmer)
    documents.forEach((function (_this) {
        return function (section) {
            if (section.text.length > 0) {
                sectionIndex[section.url] = section
                return _this.add({
                    'url': section.url,
                    'title': section.title,
                    'text': section.text
                })
            }
        }
    })(this))
  })

  stdout.write(JSON.stringify({
      index: idx,
      sectionIndex: sectionIndex
  }))
})
