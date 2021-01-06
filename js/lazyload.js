//<![CDATA[
// LazyLoad
function loadScript(d) {
    var o = document.createElement("script");
    o.src = d, document.body.appendChild(o)
}

function downloadJSAtOnload() {
    loadScript("https://cdn.jsdelivr.net/gh/Arlina-Design/phantom@master/lazyarlinas.js")
}
window.addEventListener ? window.addEventListener("load", downloadJSAtOnload, !1) : window.attachEvent ? window.attachEvent("onload", downloadJSAtOnload) : window.onload = downloadJSAtOnload;
//]]>