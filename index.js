$(function () {
    const navbar = $('#my-navbar');
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 90) {
            navbar.addClass('navbar-scroll');
        } else {
            navbar.removeClass('navbar-scroll')
        }
    });
    navSlide();
});
//function transition

const navSlide = () => {
    const $menu = $('#my-navbar .menu');
    $('.burgerMenu').on('click', function(){
        //Change color of the burger menu when clicked
        $menu.toggleClass('dropdown-active');
        $(this).attr("style", () =>{
            const $this = $(this).attr("style");
            if($this!== "color: white" || $this == ""){
                $(this).attr("style", "color: white");
            } else{
                $(this).removeAttr("style");
            }
        });
        //change icon burger
        $('.burgerMenu i').toggleClass('active');
    })
};

