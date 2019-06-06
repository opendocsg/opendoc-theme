var queue = new PQueue({ concurrency: 4 })

/*  
    Priority should be as follows:
    All content loading: 0
    Per document loading: 1
    Per page loading: 2
*/

function loadDocumentContent(documentTitle, priority) {
    if (!documentList || !documentList[documentTitle]) {
        return
    }
    var pagesInDocument = documentList[documentTitle]
    pagesInDocument.forEach(function (page) {
        loadPageContent(page, priority)
    })
}

function loadPageContent(documentPage, priority) {
    if (documentPage.content) {
        if (!(documentPage.content instanceof Promise) || documentPage.priority >= priority ) {
        // if already cached, pull from memory
        // Promise.resolve can take in both promises and non-promises
            return Promise.resolve(documentPage.content)
        }
    }
    // or else fetch it from server and cache it
    documentPage.priority = priority
    documentPage.content = queue.add(function () {
        return fetch(documentPage.url)
            .then(checkStatus)
            .then(parseText)
            .then(function (html) {
                var parser = new DOMParser().parseFromString(html, 'text/html')
                var main = parser.getElementsByTagName('main')[0]
                documentPage.content = main.innerHTML
                return documentPage.content
            })
    }, { priority: priority })
    return documentPage.content
}

