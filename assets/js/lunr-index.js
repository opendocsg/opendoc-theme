---
---

// file level variables
var siteIndex = null
var callback = null
var numSectionsIndexed = null

var startBuildingLunrIndex = function (completedCallback) {
    callback = completedCallback
    if ((typeof window.FileReader) !== 'function') {
        console.error('No filereader api')
    }
    if ((typeof completedCallback) !== 'function') {
        callback = function(){}
    }
    request = new XMLHttpRequest()
    request.open('GET', '{{ "/assets/siteIndex.json" | relative_url }}', true)
    request.responseType = 'blob'
    request.onload = function () {
        var fr
        fr = new FileReader()
        fr.onload = function (event) {
            siteIndex = JSON.parse(event.target.result)
            sectionIndex = {}

            indexBuilder = new lunr.Builder()
            indexBuilder.ref('url')
            indexBuilder.field('title', {
                boost: 2
            })
            indexBuilder.field('text')
            indexBuilder.metadataWhitelist = ['position']
            indexBuilder.pipeline.remove(lunr.stemmer)
            numSectionsIndexed = 0
            requestIdleCallback(doLunrIndex)
        }
        return fr.readAsText(request.response)
    }
    request.send()
}

var doLunrIndex = function (deadline) {
    console.log('doLunrIndex')
    while (deadline.timeRemaining() > 0 && numSectionsIndexed < siteIndex.length) {
        var section = siteIndex[numSectionsIndexed]
        if (section.text.length > 0) {
            sectionIndex[section.url] = section
            indexBuilder.add({
                'url': section.url,
                'title': section.title,
                'text': section.text
            })
        }
        numSectionsIndexed++
    }
    if (numSectionsIndexed < siteIndex.length) {
        requestIdleCallback(doLunrIndex)
    } else {
        requestIdleCallback(endLunrIndexing)
    }
}

var endLunrIndexing = function () {
    callback({
        index: indexBuilder.build().toJSON(),
        sectionIndex: sectionIndex
    })
}

