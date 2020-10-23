// Navbar Animate on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0)
    navbar.classList.toggle("navbar-dark", window.scrollY > 0)
});