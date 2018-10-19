---
---
(function () {
    // Hard coded max-width for mobile view
    window.isMobileView = function () {
        return window.innerWidth < 992
    }

    // Site-nav
    // --------------------------
    var menuToggle = document.getElementById('menu-toggle')
    var siteNav = document.getElementsByClassName('site-nav')[0]
    var showMenu = function showMenu() {
        menuToggle.checked = true
        siteNav.classList.add('menu-toggled')
    }

    var hideMenu = function hideMenu() {
        menuToggle.checked = false
        siteNav.classList.remove('menu-toggled')
    }

    menuToggle.addEventListener('change', function () {
        trackButton('sidebar', menuToggle.checked, isMobileView())
        if (menuToggle.checked) {
            showMenu()
        } else {
            hideMenu()
        }
    })

    // Hide site-nav on navigation
    window.addEventListener('link-click', function () {
        if (isMobileView()) {
            hideMenu()
        }
    })

    // Feedback button
    // --------------------------
    var feedbackButton = document.getElementById('feedback-btn')
    feedbackButton.addEventListener('click', function() {
        trackButton('feedback', null, isMobileView())
    })


    // Print button
    // --------------------------
    var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
    var printButton = document.getElementById('print-btn')
    if (iOS) {
        printButton.style.display = 'none'
    } else {
        printButton.addEventListener('click', function () {
            trackButton('pdf', null, isMobileView())
            window.open('{{ "/export.html" | relative_url }}', '_blank')
        })
    }
})()