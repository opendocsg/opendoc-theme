function loadDocumentContent(documentTitle) {
    if (!documentList || !documentList[documentTitle]) {
        return
    }
    var pagesInDocument = documentList[documentTitle]
    pagesInDocument.forEach(function (page) {
        loadPageContent(page)
    })
}

function loadPageContent(documentPage) {
    return new Promise(function (resolve, reject) {
        if (documentPage.content) {
            // if already cached, pull from memory
            resolve(documentPage.content)
        } else {
            // or else fetch it from server and cache it
            var request = new XMLHttpRequest()
            request.open('GET', documentPage.url, true)
            request.onload = function(event) {
                var html = event.target.response
                var parser = new DOMParser().parseFromString(html, 'text/html')
                var main = parser.getElementsByTagName('main')[0]
                documentPage.content = main.innerHTML
                resolve(documentPage.content)
            }
            request.send()
        }
    })
}