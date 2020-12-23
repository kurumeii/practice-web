$(function () {
    const navbar = $('#my-navbar');
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 90) {
            navbar.addClass('navbar-scroll');
        } else {
            navbar.removeClass('navbar-scroll')
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