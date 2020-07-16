var prevScrollpos = window.pageYOffset;
window.onscroll = function () {

  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "#171717";
  } else {}

  prevScrollpos = currentScrollpos;

};