/** 
 * Menu Toggle
 */
const menuLink = document.querySelector('.nav__list')
const menuToggle = document.querySelector('.menu__toggle')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()

    const menuIcon = document.querySelector('.menu__toggle i')
    const classIcon = menuIcon.classList.item(1)

    if (classIcon === 'fa-bars') {
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-times')
    } else {
        menuIcon.classList.remove('fa-times')
        menuIcon.classList.add('fa-bars')
    }

    const nav = document.querySelector('.nav')
    nav.classList.toggle('active')

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if (event.target.tagName === 'A') nav.classList.remove('active')

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

menuLink.addEventListener('click', toggleMenu)

menuToggle.addEventListener('click', toggleMenu)

menuToggle.addEventListener('touchstart', toggleMenu)

/** 
 * Theme Toggle
 */
const btnTheme = document.querySelector('.btn__theme')

function toggleTheme(e) {
    const btnIcon = document.querySelector('.btn__theme i')
    const themeIcon = btnIcon.classList.item(1)

    if (themeIcon === 'la-moon') {
        btnIcon.classList.remove('la-moon')
        btnIcon.classList.add('la-sun')
    } else {
        btnIcon.classList.remove('la-sun')
        btnIcon.classList.add('la-moon')
    }

    return document.documentElement.classList.toggle('dark')
}

btnTheme.addEventListener('click', toggleTheme)