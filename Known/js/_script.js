const menuBtn = document.querySelector('.menu-bar'),
    hamburger = document.querySelector('.menu-bar__burger'),
    nav = document.querySelector('.nav'),
    nav_menu_bar = document.querySelector('.menu-nav '),
    menu_nav__item = document.querySelectorAll('.menu-nav__items');

let showMenuBar = false;

menuBtn.addEventListener('click', toggleMenuBar);

function toggleMenuBar() {
    if (!showMenuBar) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        nav_menu_bar.classList.add('open');
        menu_nav__item.forEach(item => item.classList.add('open'));
        showMenuBar = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        nav_menu_bar.classList.remove('open');
        menu_nav__item.forEach(item => item.classList.remove('open'));
        showMenuBar = false;
    }
}