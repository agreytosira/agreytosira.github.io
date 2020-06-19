// AnimateOnScroll.js
AOS.init();

// Hide on Scroll Navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {

    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.background = "#222222";
    } else {
        document.getElementById("navbar").style.top = "-300px";
    }

    prevScrollpos = currentScrollpos;

};

// Typed.js

$('document').ready(function () {
    var typed = new Typed('#typed', {
        strings: ["Front-end Dev", "Graphic Designer", "Freelancer"],
        backSpeed: 10,
        typeSpeed: 40,
        loop: true
    });
});