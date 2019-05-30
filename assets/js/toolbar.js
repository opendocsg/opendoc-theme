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
        trackButton('sidebar', menuToggle.checked, isMobileView())
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

    // Feedback button
    // --------------------------
    var contactUsButton = document.getElementById('contact-us')
    contactUsButton.addEventListener('click', function() {
        trackButton('feedback', null, isMobileView())
    })

    // Edit button
    // --------------------------
    var editButton = document.getElementById('edit-btn')
    editButton.addEventListener('click', function() { 
        var repoUrl = '{{ site.github.repository_url }}' + '/blob/master'
        var page = pageIndex[window.location.pathname]
        var pageUrl = page ? page['nobase_url'] : null
        var pageName = page ? page.name : null
        if (pageUrl && pageName) {
            console.log('opening:', pageUrl)
            var markdownUrl = pageUrl.split('/')
            markdownUrl[markdownUrl.length - 1] = pageName
            markdownUrl = markdownUrl.join('/')
            repoUrl += markdownUrl
        }
        window.open(repoUrl, '_blank')
    });

    // Print button
    // --------------------------
    var printButton = document.getElementById('print-btn')

    printButton.addEventListener('click', function () {
        trackButton('pdf', null, isMobileView())
        window.open('./export.pdf', '_blank')
    })
})()
