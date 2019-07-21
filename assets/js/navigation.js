(function () {
    var main = document.getElementsByTagName('main')[0]
    var tod = document.getElementsByClassName('table-of-directories')[0]
    var backButton = document.getElementsByClassName('back-to-documents')[0]
    var documentTitle = document.getElementById('document-title')
    var documentSubtitle = document.getElementById('document-subtitle')
    var navigation = document.getElementsByClassName('navigation')[0]
    var indexDiv = document.getElementById('index-div')


    // Directory navigation
    var allDirectories = document.querySelectorAll('a.tod-container')
    allDirectories.forEach(function (directory) {
        directory.addEventListener('click', function (event) {
            event.stopPropagation()
            event.preventDefault()
            var target = event.target;
            while (target !== this) {
                // Goes to parent node if child element is clicked
                target = target.parentNode;
            }
            // this tocId is basically the directory path
            // e.g. /Document%20One/ with spaces replaced with underscores
            var tocId = target.id.replace(/^dir_/, 'toc_')
            if (showToc(tocId)) {
                // TODO: May break if user changes the html
                // Loads on document click if it hasnt loaded yet
                var directoryTitle = target.innerText.trim()
                loadDocumentContent(directoryTitle, 1)
            }
        }, true)

        /*
         Uncomment this to preload all pages in the background
         -----------------------------------------------------
         */
        // Load pages in background based on directory order
        // var directoryTitle = directory.innerText.trim()
        // loadDocumentContent(directoryTitle, 0)
    })

    // Returns whether corresponding toc is found and displays it
    function showToc(tocId) {
        var correspondingToc = document.getElementById(tocId)
        if (correspondingToc) {
            document.querySelectorAll('.contents').forEach(function (toc) {
                toc.hidden = true
            })
            correspondingToc.hidden = false
            if (tod) tod.classList.add('hidden')
            return true
        }
        return false
    }

    if (backButton) {
        // Reminder: If there is only one document, backButton is hidden
        backButton.addEventListener('click', function () {
            tod.classList.remove('hidden')
        })
    }

    //  Nav bar expansion and selection
    function setSelectedAnchor() {
        var path = window.location.pathname
        var hash = window.location.hash

        // Make the nav - link pointing to this path selected
        var selectedBranches = document.querySelectorAll('li.nav-branch.expanded')
        for (var i = 0; i < selectedBranches.length; i++) {
            selectedBranches[i].classList.remove('expanded')
        }
        var selectedAnchors = document.querySelectorAll('a.nav-link.selected')
        for (var i = 0; i < selectedAnchors.length; i++) {
            selectedAnchors[i].classList.remove('selected')
        }

        selectedAnchors = document.querySelectorAll('a.nav-link[href$="' + path + '"]')
        if (selectedAnchors.length > 0) {
            let parentLinkNode = selectedAnchors[0].parentNode
            parentLinkNode.classList.add('expanded')
            // Checks if there are sublinks (contains <a> and <ul> elements)
            if (parentLinkNode.children.length === 1) {
                // Closes menu if there are no sublinks
                window.dispatchEvent(new Event('link-click'))
            }
        }
        if (hash === '') {
            hash = '#'
        }
        console.log(hash)
        selectedAnchors = document.querySelectorAll('a.nav-link[href$="' + path + hash + '"]')
        if (selectedAnchors.length > 0) {
            selectedAnchors.forEach(function (anchor) {
                anchor.classList.add('selected')
            })
        }
    }

    function scrollAnchorIntoView() {
        if (window.location.hash) {
            // Dont use querySelector because it needs special handling for ids that start with numbers
            // ref: https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
            var anchorEl = document.getElementById(window.location.hash.substring(1))
            if (anchorEl) {
                // When page is rendered by assigning to innerHTML, it does not scroll to anchor.
                // scrollIntoView(true) aligns anchor to top of page
                anchorEl.scrollIntoView(true)
            }
        }
    }

    // Dont use onpopstate as it is not supported in IE
    window.addEventListener('hashchange', function () {
        setSelectedAnchor()
    })

    window.onload = function () {
        setSelectedAnchor()
    }
})()
