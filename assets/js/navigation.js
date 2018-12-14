---
---

(function() {
    var main = document.getElementsByTagName('main')[0]
    var toc = document.getElementsByClassName('table-of-contents')[0]

    //  Nav bar expansion and selection
    var setSelectedAnchor = function() {
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
        if (hash.length > 0) {
            selectedAnchors = document.querySelectorAll('a.nav-link[href$="' + path + hash + '"]')
            if (selectedAnchors.length > 0) {
                selectedAnchors.forEach(function(anchor) {
                    anchor.classList.add('selected')
                })
            }
        }
    }

    // Initial anchoring
    setSelectedAnchor()

        // HTML5 History
    // =============================================================================
    // Setup HTML 5 history for single page goodness

    document.body.addEventListener('click', function(event) {
        // Check if its within an anchor tag any any point
        // Traverse up its click tree and see if it affects any of them
        // If it does not find anything it just terminates as a null
        var anchor = event.target
        while (anchor && anchor.tagName !== 'A') {
            anchor = anchor.parentNode
        }
        if (anchor && (anchor.host === '' || anchor.host === window.location.host) && !anchor.hasAttribute('download')) {
            event.preventDefault()
            event.stopPropagation()
            if (anchor.hash.length > 0) {
                if ((window.location.pathname + window.location.hash).endsWith(anchor.hash)) {
                    // If clicked on the same anchor, just scroll to view
                    scrollToView()
                    return
                }
                window.location = anchor.hash
            } else {
                window.location = '#'
            }
            // This does not trigger hashchange for IE but is needed to replace the url
            history.pushState(null, null, anchor.href)
        }
    }, true)

    // Event when path changes
    // =============================================================================
    var onHashChange = function(event) {
        var path = window.location.pathname
        setSelectedAnchor()
        var page = pageIndex[path]
        // Only reflow the main content if necessary
        if (page) {
            var originalBody = new DOMParser().parseFromString(page.content, 'text/html').body
            // Not sure if comparing html or reflow no matter what is quicker
            if (main.innerHTML.trim() !== originalBody.innerHTML.trim()) {
                main.innerHTML = page.content
                document.title = page.title
            }
        }

        // Make sure it is scrolled to the anchor
        scrollToView()

        // Hide menu if sub link clicked or clicking on search results        
        if (window.location.hash.replace('#', '').length > 0 || toc.hidden) {
            window.dispatchEvent(new Event('link-click'))
        }
        highlightBody()
    }

    var scrollToView = function() {
        var id = window.location.hash.replace('#', '')
        var topOffset = document.getElementsByTagName('header')[0].offsetHeight
        var top = 0
        if (id.length > 0) {
            var anchor = document.getElementById(id)
        }
        if (anchor) {
            top = anchor.offsetTop
            // hardcoded: topOffset not needed for mobile view
            if (!isMobileView()) {
                top -= topOffset
            }
            window.scrollTo(0, top)
        }
    }

    // Dont use onpopstate as it is not supported in IE
    window.addEventListener('hashchange', onHashChange)

    // Scroll to view onload
    window.onload = scrollToView
})()