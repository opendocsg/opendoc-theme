function loadDocumentContent(documentTitle) {
    if (!documentList || !documentList[documentTitle]) {
        return
    }
    var pagesInDocument = documentList[documentTitle]
    pagesInDocument.forEach(function (page) {

    })
}

function loadPageContent(documentPage) {
    return new Promise(function (resolve, reject) {
        if (documentPage.content) {
            resolve(documentPage.content)
        } else {
            var request = new XMLHttpRequest()
            request.addEventListener()
            request.open('GET', documentPage.url, true)
            request.onload(function (event) {
                console.log(event)
            })
        }
    })
}