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
        strings: ["Front-end Dev", "Graphic Designer", "Freelancer", "UI/UX Designer"],
        backSpeed: 10,
        typeSpeed: 40,
        loop: true
    });
});

$('document').ready(function () {
    // Project Button

    $('.button-all').click(function () {
        $('.webdesign').show('slow');
        $('.mobileappdesign').show('slow');
        $('.posterdesign').show('slow');
        $('.logodesign').show('slow');
        $('.fbcoverdesign').show('slow');
        $('.tshirtdesign').show('slow');
        $('.pricelistdesign').show('slow');
    })

    $('.button-webdesign').click(function () {
        $('.webdesign').show('slow');
        $('.mobileappdesign').hide('slow');
        $('.posterdesign').hide('slow');
        $('.logodesign').hide('slow');
        $('.fbcoverdesign').hide('slow');
        $('.tshirtdesign').hide('slow');
        $('.pricelistdesign').hide('slow');
    });

    $('.button-mobileappdesign').click(function () {
        $('.webdesign').hide('slow');
        $('.mobileappdesign').show('slow');
        $('.posterdesign').hide('slow');
        $('.logodesign').hide('slow');
        $('.fbcoverdesign').hide('slow');
        $('.tshirtdesign').hide('slow');
        $('.pricelistdesign').hide('slow');
    });

    $('.button-posterdesign').click(function () {
        $('.webdesign').hide('slow');
        $('.mobileappdesign').hide('slow');
        $('.posterdesign').show('slow');
        $('.logodesign').hide('slow');
        $('.fbcoverdesign').hide('slow');
        $('.tshirtdesign').hide('slow');
        $('.pricelistdesign').hide('slow');
    });

    $('.button-pricelistdesign').click(function () {
        $('.webdesign').hide('slow');
        $('.mobileappdesign').hide('slow');
        $('.posterdesign').hide('slow');
        $('.logodesign').hide('slow');
        $('.fbcoverdesign').hide('slow');
        $('.tshirtdesign').hide('slow');
        $('.pricelistdesign').show('slow');
    });

    $('.button-logodesign').click(function () {
        $('.webdesign').hide('slow');
        $('.mobileappdesign').hide('slow');
        $('.posterdesign').hide('slow');
        $('.logodesign').show('slow');
        $('.fbcoverdesign').hide('slow');
        $('.tshirtdesign').hide('slow');
        $('.pricelistdesign').hide('slow');
    });

    $('.button-fbcoverdesign').click(function () {
        $('.webdesign').hide('slow');
        $('.mobileappdesign').hide('slow');
        $('.posterdesign').hide('slow');
        $('.logodesign').hide('slow');
        $('.fbcoverdesign').show('slow');
        $('.tshirtdesign').hide('slow');
        $('.pricelistdesign').hide('slow');
    });

    $('.button-tshirtdesign').click(function () {
        $('.webdesign').hide('slow');
        $('.mobileappdesign').hide('slow');
        $('.posterdesign').hide('slow');
        $('.logodesign').hide('slow');
        $('.fbcoverdesign').hide('slow');
        $('.tshirtdesign').show('slow');
        $('.pricelistdesign').hide('slow');
    });
})