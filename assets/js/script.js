const menuMobile = document.querySelector('.js-menu-mobile img')
const mainMenu = document.querySelector('.header__main-menu')
const headerContent = document.querySelector('.header__content')

const toggleMenu = () => {
    headerContent.classList.toggle('is-fixed')
    mainMenu.classList.toggle('is-open')
    mainMenu.classList.contains('is-open')
        ? menuMobile.src = './assets/images/icon-close.svg'
        : menuMobile.src = './assets/images/icon-hamburger.svg'
}

menuMobile.addEventListener('click', toggleMenu)
