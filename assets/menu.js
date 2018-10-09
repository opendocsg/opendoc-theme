(function () {
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
        if (menuToggle.checked) {
            showMenu()
        } else {
            hideMenu()
        }
    })

    // Hard coded max-width for mobile view
    var isMobileView = function isMobileView() {
        return window.innerWidth < 992
    }

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
})()