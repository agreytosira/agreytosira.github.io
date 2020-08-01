$('document').ready(function () {
    setTimeout(function () {
        $('.loader.bg').fadeToggle();
    }, 1500);

    // Typed.js
    var typed = new Typed('#typed', {
        strings: ["Front-end Developer", "UI/UX Designer", "Graphic Designer"],
        backSpeed: 10,
        typeSpeed: 40,
        loop: true
    });


});