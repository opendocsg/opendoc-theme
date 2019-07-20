---
---
(function () {
    // Hard coded max-width for mobile view
    window.isMobileView = function () {
        return window.innerWidth < 992
    }

    // Documents - Section toggle

    // Site-nav
    // --------------------------
    var menuToggle = document.getElementById('menu-toggle')
    var showMenu = function showMenu() {
        menuToggle.checked = true
        document.body.classList.add('menu-toggled')
    }
    var hideMenu = function hideMenu() {
        menuToggle.checked = false
        document.body.classList.remove('menu-toggled')
    }
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            showMenu()
        } else {
            hideMenu()
        }
    })

    var welcomeButton = document.getElementsByClassName('welcome-button')[0]
    if (welcomeButton) {
        welcomeButton.onclick = showMenu
    }

    // Hide site-nav on navigation
    window.addEventListener('link-click', function () {
        if (isMobileView()) {
            hideMenu()
        }
    })

    // Edit button
    // --------------------------
    var editButtons = document.querySelectorAll('.edit-btn')
    editButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var repoUrl = '{{ site.github.repository_url }}' + '/blob/master/'
            var page = pageIndex[window.location.pathname]
            var pageUrl = page ? page.escapedPath : null
            if (pageUrl) {
                console.log('opening:', pageUrl)
                repoUrl += pageUrl
            }
            window.open(repoUrl, '_blank')
        })
    })

    // Print button
    // --------------------------
    var printButtons = document.querySelectorAll('.print-btn')

    printButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // S3 folder name; replace slashes to avoid creating sub-folders
            var replacedRepoName = '{{ site.repository }}'.replace(/\//g, '-')
            var pdfUrl = '{{ site.offline }}' === 'true' ?
                '{{ "/assets/pdfs" | relative_url }}' :
                'https://opendoc-theme-pdf.s3-ap-southeast-1.amazonaws.com/' + replacedRepoName
            var page = pageIndex[window.location.pathname]
            // documentTitle refers to the name of the document folder
            // If page.dir is slash, that indicates the root directory
            // PDF at root dir is named export.pdf
            var documentTitle = page.dir !== '/' ? page.dir : '/export/'
            if (documentTitle) {
                pdfUrl += documentTitle.substring(0, documentTitle.length-1) + '.pdf'
            }
            window.open(pdfUrl, '_blank')
        })
    })

    // Share button 
    // -------------------------
    var shareButtons = document.querySelectorAll('.share-btn')
    shareButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: {{ site.title | jsonify }},
                    text: document.title,
                    url: window.location.href
                }).then()
            }
        })
    })

    // Floating Action Button
    // -----------------------
    var floatingActionButtonTrigger = document.getElementById('fab-trigger')
    var floatingActionButton = document.getElementById('fab')
    floatingActionButtonTrigger.addEventListener('click', function () {
        floatingActionButton.classList.toggle('open')
    });

    var fabOverlay = document.getElementById('fab-overlay')
    fabOverlay.addEventListener('click', function() {
        floatingActionButton.classList.remove('open')
    })    

    var backToTopButton = document.getElementById('back-to-top')
    backToTopButton.addEventListener('click', function() {
        // jump.js
        Jump(-(window.pageYOffset || document.documentElement.scrollTop), {
            duration: 300
        })
    })

    // show/hide back-to-top button on scroll and on load
    function scrollListener() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > (window.innerHeight * 2)) {
            backToTopButton.classList.remove('hidden')
        } else {
            backToTopButton.classList.add('hidden')
        }
    }

    scrollListener()

    window.addEventListener("scroll", scrollListener)

    //  Search Button for mobile 
    // --------------------------
    var searchButtons = document.querySelectorAll('.search-btn')
    var searchBoxElement = document.getElementById('search-box')
    searchButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.body.classList.toggle('search-toggled')
            if (document.body.classList.contains('search-toggled')) {
                searchBoxElement.focus()
            }
        })
    })
})()
