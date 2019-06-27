(function () {
    var header = document.querySelector('header')
    var headroom = new Headroom(header, {
        tolerance: 30,
        offset : 50 
    })
    headroom.init()

    // Flash and hide header
    function hideHeader() {
        if (window.pageYOffset > 0) {
            setTimeout(function () {
                header.classList.remove('headroom--pinned')
                header.classList.add('headroom--unpinned')
            }, 200)
        }
    }

    // Prevent the header from appearing when scrolling to anchors
    window.addEventListener('link-click', function () {
        if (isMobileView()) {
            hideHeader()
        }
    })
    window.addEventListener('load', function() {
        if (isMobileView()) {
            hideHeader()
        }
    })

})()