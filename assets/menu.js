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

    let mainContent = document.getElementById('main-content')
    mainContent.onclick = () => {
        if (siteNav.offsetLeft === 0) {
            hideMenu()
        }
    }

    let isMobileView = () => window.innerWidth < 768

    // Swipe gestures
    delete Hammer.defaults.cssProps.userSelect;
    let mainContentHammer = new Hammer(mainContent, {
        //  Only for touch input and no click and drag input
        inputClass: Hammer.TouchInput
    })
    let siteNavHammer = new Hammer(siteNav, {
        inputClass: Hammer.TouchInput
    })
    mainContentHammer.on('swiperight', () => {
        if (isMobileView()) {
            showMenu()
        }
    })
    mainContentHammer.on('swipeleft', () => {
        if (isMobileView()) {
            hideMenu()
        }
    })
    siteNavHammer.on('swipeleft', () => {
        if (isMobileView()) {
            hideMenu()
        }
    })
})()