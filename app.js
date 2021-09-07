const hamburgerMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Hamburger Menu
const mobileMenu = () => {
hamburgerMenu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}

hamburgerMenu.addEventListener('click', mobileMenu);