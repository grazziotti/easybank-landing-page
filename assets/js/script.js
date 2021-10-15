const hamburgerIcon = document.querySelector('.js-hamburger')
const mainMenu = document.querySelector('.header__main-menu')
const mainMenuList = document.querySelector('.header__main-menu__list')
const headerContent = document.querySelector('.header__content')


const openMenu = () => {
    mainMenu.classList.add('is-open')
    setTimeout( () => {
        mainMenu.classList.add('animate')
        mainMenuList.classList.add('animate')
    }, 1)
    headerContent.classList.add('is-fixed')
    hamburgerIcon.classList.add('header__hamburger--open')
}

const closeMenu = () => {
    mainMenu.classList.remove('animate')
    mainMenuList.classList.remove('animate')
    setTimeout( () => {
        mainMenu.classList.remove('is-open')
    }, 200)
    headerContent.classList.remove('is-fixed')
    hamburgerIcon.classList.remove('header__hamburger--open')
}

const isMenuOpen = () => mainMenu.classList.contains('is-open')

const toggleMenu = () => {
    isMenuOpen()
        ? closeMenu()
        : openMenu()
}

hamburgerIcon.addEventListener('click', toggleMenu)
