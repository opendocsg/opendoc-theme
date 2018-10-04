(function () {
    var header = document.querySelector('header')
    var mainContent = document.getElementById('main-content')
    var headroom = new Headroom(header, {
        scroller: mainContent,
        tolerance: 2
    })
    headroom.init()
})()