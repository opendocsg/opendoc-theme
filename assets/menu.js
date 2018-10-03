// Handles hiding and showing of menu for both mobile and desktop
(() => {
    let menuToggle = document.getElementById('menu-toggle')
    let siteNav = document.getElementsByClassName('site-nav')[0]
    let showMenu = () => {
        menuToggle.checked = true
        siteNav.classList.add('menu-toggled')
    }

    let hideMenu = () => {
        menuToggle.checked = false
        siteNav.classList.remove('menu-toggled')
    }

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            showMenu()
        } else {
            hideMenu()
        }
    })

    let isMobileView = () => window.innerWidth < 768
    let mainContent = document.getElementById('main-content')

    window.addEventListener('link-click', (event) => {
        if (isMobileView()) {
            hideMenu()
            // Prevent the header from appearing when scrolling to anchors
            if ( mainContent.scrollTop > 0) {
                setTimeout(() => {
                    document.querySelector('header').classList.remove('headroom--pinned')
                    document.querySelector('header').classList.add('headroom--unpinned')
                }, 200)
            }
        }
    })
})()