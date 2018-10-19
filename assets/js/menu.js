---
---
(function () {
    // Hard coded max-width for mobile view
    var isMobileView = function isMobileView() {
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

    // Top header
    // --------------------------
    window.addEventListener('link-click', function (event) {
        if (isMobileView()) {
            hideMenu()
            // Prevent the header from appearing when scrolling to anchors
            if (window.pageYOffset > 0) {
                setTimeout(function () {
                    document.querySelector('header').classList.remove('headroom--pinned')
                    document.querySelector('header').classList.add('headroom--unpinned')
                }, 200)
            }
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