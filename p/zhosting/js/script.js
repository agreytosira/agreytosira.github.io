AOS.init();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 50) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.boxShadow = "0px 6px 12px rgba(0,0,0,0.2)";
    } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.boxShadow = "none"
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
    // Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});