$(function () {
    const navbar = $('#my-sticky-navbar');
    $(window).on('scroll', () => {
        if ($(window).scrollTop() <= 190) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll')
        }
    });
});
    //function add gif
const $row = $(".row");

