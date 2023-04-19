/** 
 * Smooth Scroll
 */
$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
    
    $('html, body').animate({ 
        scrollTop: targetOffset - 50
    }, 500);
});

/** 
 * Menu Toggle
 */
const nav = document.querySelector('.nav')
const menuLink = document.querySelector('.nav__list')
const menuToggle = document.querySelector('.menu__toggle')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()

    nav.classList.toggle('active')
    menuToggle.classList.toggle('active')

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
const btnTheme = document.querySelector('.btn__toggle__theme')

function toggleTheme(e) {
    const btnIcon = document.querySelector('.btn__toggle__theme span')
    const themeIcon = btnIcon.classList.item(1)

    if (themeIcon === 'la-sun') {
        btnIcon.classList.remove('la-sun')
        btnIcon.classList.add('la-moon')
    } else {
        btnIcon.classList.remove('la-moon')
        btnIcon.classList.add('la-sun')
    }

    return document.documentElement.classList.toggle('dark')
}

btnTheme.addEventListener('click', toggleTheme)