$(document).ready(function () {
    $('.navbar li').click(function () {
        $(this).find('ul').slideToggle(function () {});
    })
});

$(function () {
    $('.to_top').hide().on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.to_top').show();
        } else {
            $('.to_top').hide();
        }
    });
});