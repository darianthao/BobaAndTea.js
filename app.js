const hamburgerMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display Hamburger Menu Button
const mobileMenu = () => {
hamburgerMenu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}

hamburgerMenu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homePage= document.querySelector('#home-page');
    const aboutPage = document.querySelector('#about-page');
    const menuPage = document.querySelector('#menu-page');
    const locationPage = document.querySelector('#location-page');
    let scrollPos = window.scrollY;
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      homePage.classList.add('highlight');
      aboutPage.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutPage.classList.add('highlight');
        homePage.classList.remove('highlight');
        menuPage.classList.remove('highlight');
        locationPage.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2500) {
        menuPage.classList.add('highlight');
        locationPage.classList.remove('highlight');
        aboutPage.classList.remove('highlight');
        homePage.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 3700) {
        locationPage.classList.add('highlight');
        menuPage.classList.remove('highlight');
        return;
      }
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };

window.addEventListener('scroll', highlightMenu);

window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 980 && menuBars)
        {
            hamburgerMenu.classList.toggle('is-active')
            menuLinks.classList.remove('active')
        }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
