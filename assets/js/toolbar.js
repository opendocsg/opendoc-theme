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
        var repoUrl = '{{ site.github.repository_url }}'
        var page = pageIndex[window.location.pathname]
        var pageUrl = page ? page['absolute_url'] : null
        var pageName = page ? page.name : null
        if (pageUrl && pageName) {
            console.log(pageUrl)
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

    {% if jekyll.environment == 'production' %}
    var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
    if (iOS) {
        printButton.style.display = 'none'
    } else {
        printButton.addEventListener('click', function () {
            trackButton('pdf', null, isMobileView())
            window.open('{{ "/export.html" | relative_url }}', '_blank')
        })
    }
    {% else %}
    printButton.addEventListener('click', function () {
        trackButton('pdf', null, isMobileView())
        window.open('{{ "/export.pdf" | relative_url }}', '_blank')
    })
    {% endif %}
})()