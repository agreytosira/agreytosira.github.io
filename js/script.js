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

    // Typed.js

    var typed = new Typed('#typed', {
        strings: ["Front-end Dev", "UI/UX Designer", "Freelancer"],
        backSpeed: 10,
        typeSpeed: 40,
        loop: true
    });
});

//Script Redirect CTRL + U
function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace("/404.html");
        return false;
    }
}
document.onkeydown = redirectCU;