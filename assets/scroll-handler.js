// For hiding site header when scrolling on mobile
(() => {
    let header = document.querySelector('header')
    let mainContent = document.getElementById('main-content')
    let headroom = new Headroom(header, {
        scroller: mainContent,
        tolerance: 5
    })
    headroom.init()
})()