const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const navMenu = document.querySelector('.nav-menu')

function toggleNav() {
    navMenu.classList.toggle('show-nav-menu');
}

function windowOnClick (event) {
    if (event.target === navMenu){
        toggleNav();
    }
}
menu.addEventListener('click', toggleNav);
window.addEventListener('click', windowOnClick);