$(function () {
    const navbar = $('#my-navbar');
    $(window).on('scroll', () => {
        if ($(window).scrollTop() <= 150) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll')
        }
    });
});
    //function transition

const navSlide = () =>{
    const $burger = $('.burgerMenu');
    const $nav = $('.menu');

    $burger.on('click', () =>{
        $nav.toggleClass('dropdown-active');
    })
};

navSlide();