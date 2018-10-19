(function () {
    var header = document.querySelector('header')
    var headroom = new Headroom(header, {
        tolerance: 2
    })
    headroom.init()
})()