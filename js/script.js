$('document').ready(function () {
    var typed = new Typed('#typed', {
        strings: ["Front-end Web Developer", "UI/UX Designer", "Graphic Designer"],
        backSpeed: 10,
        typeSpeed: 40,
        loop: true
    });

    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

