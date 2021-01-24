const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');


const navSlide = () => {

    burger.addEventListener('click', () => {
        //Toggle view
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            // var something = index;
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // something = something / 7 + 1;
                link.style.animation = 'navLinkFade 0.5s ease forwards 0.2s';
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}


navSlide();