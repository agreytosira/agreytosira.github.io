// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});

$('document').ready(function () {
    var typed = new Typed('#typed', {
        strings: ["Front-end Dev", "Graphic Designer", "Full-time Freelancer"],
        backSpeed: 40,
        typeSpeed: 40,
        loop: true
    });
});