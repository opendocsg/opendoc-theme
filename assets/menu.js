
let menuToggle = document.getElementById('menu-toggle')
let siteNav = document.getElementsByClassName('site-nav')[0]
menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        siteNav.classList.add('menu-toggled')
    } else {
        siteNav.classList.remove('menu-toggled')
    }
})

let closeButton = document.getElementById('close-button')
closeButton.onclick = () => {
    menuToggle.checked = false
    siteNav.classList.remove('menu-toggled')
}
