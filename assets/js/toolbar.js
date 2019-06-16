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
        })
    })

    // Print button
    // --------------------------
    var printButtons = document.querySelectorAll('.print-btn')

    printButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            window.open('./export.pdf', '_blank')
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
            } else {
                alert(navigator.share)
            }
        })
    })

    // Floating Action Button
    // -----------------------
    var floatingActionButton = document.getElementById('fab')
    floatingActionButton.addEventListener('click', function () {
        floatingActionButton.classList.toggle('open')
    });

})()
