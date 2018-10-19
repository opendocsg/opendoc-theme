(function () {
    var header = document.querySelector('header')
    var headroom = new Headroom(header, {
        tolerance: 2
    })
    headroom.init()

    // Prevent the header from appearing when scrolling to anchors
    window.addEventListener('link-click', function () {
        if (isMobileView()) {
            if (window.pageYOffset > 0) {
                setTimeout(function () {
                    header.classList.remove('headroom--pinned')
                    header.classList.add('headroom--unpinned')
                }, 200)
            }
        }
    })

})()