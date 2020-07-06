AOS.init();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {

  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("contact-nav").style.top = "0";
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "#222222";
  } else {
    document.getElementById("contact-nav").style.top = "-300px";
    document.getElementById("navbar").style.top = "-40px";
  }

  prevScrollpos = currentScrollpos;

};