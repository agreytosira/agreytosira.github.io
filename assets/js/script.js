$(document).ready(function () {

    var menuBtn = document.getElementById("menuBtn");
    var navbar = document.getElementById("navbar");

    navbar.style.right = "-270px";
    menuBtn.onclick = function () {
        if (navbar.style.right == "-270px") {
            navbar.style.right = "0";
        } else {
            navbar.style.right = "-270px";
        }
    }

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });

    // Tombol Portfolio

    $('#tombol-semua').click(function () {
        $(this).css('background', '#005c9d');
        $('#tombol-blogger').css('background', '#0396ff');
        $('#tombol-website').css('background', '#0396ff');

        $('.tipe-website').show();
        $('.tipe-blogger').show();
    })

    $('#tombol-blogger').click(function () {
        $(this).css('background', '#005c9d');
        $('#tombol-semua').css('background', '#0396ff');
        $('#tombol-website').css('background', '#0396ff');
        $('.tipe-website').hide();
        $('.tipe-blogger').show();
    })

    $('#tombol-website').click(function () {
        $(this).css('background', '#005c9d');
        $('#tombol-blogger').css('background', '#0396ff');
        $('#tombol-semua').css('background', '#0396ff');
        $('.tipe-blogger').hide();
        $('.tipe-website').show();
    })
});