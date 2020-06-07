$(document).ready(function () {

    AOS.init({
        duration: 1000,
    });
});

const navbar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".jumbotron");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function (
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.classList.add('transparent');
                navbar.classList.remove('shadow');
            } else {
                navbar.classList.remove('transparent');
                navbar.classList.add('shadow');
            }
        });
    },
    sectionOneOptions);


sectionOneObserver.observe(sectionOne);