window.addEventListener('DOMContentLoaded', event => {

    // Navbar fade function
    var navbarFade = function () {
        const navbarCollapsible = document.body.querySelector('#topNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-fade')
        } else {
            navbarCollapsible.classList.add('navbar-fade')
        }

    };

    // Fade the navbar 
    navbarFade();

    // Fade the navbar when page is scrolled
    document.addEventListener('scroll', navbarFade);

    // Activate Bootstrap scrollspy on the top nav element
    const topNav = document.body.querySelector('#topNav');
    if (topNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#topNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});