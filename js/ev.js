var open_menu = document.querySelector('#open-menu')
var close_menu = document.querySelector('#close-menu')
var nav_bar = document.querySelector('.nav-bar')
open_menu.addEventListener('click', function (e) {
    nav_bar.classList.add('active')
})
close_menu.addEventListener('click', function (e) {
    nav_bar.classList.remove('active')
})
window.onscroll = () => {
    console.log(this.scrollY)
}
window.onscroll = () => {
    if (this.scrollY > 20) {
        nav_bar.classList.add('sticky')
        console.log('add class')


    }
    else {
        nav_bar.classList.remove('sticky')
    }
}