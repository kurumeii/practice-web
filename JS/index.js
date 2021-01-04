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
    typingEffect();
    scrollAppear();
});

//function transition

const navSlide = () => {
    const $menu = $('#my-navbar .menu');
    $('.burgerMenu').on('click', function () {
        //Change color of the burger menu when clicked
        $menu.toggleClass('dropdown-active');
        $(this).attr("style", () => {
            const $this = $(this).attr("style");
            if ($this !== "color: white" || $this == "") {
                $(this).attr("style", "color: white");
            } else {
                $(this).removeAttr("style");
            }
        });
        //change icon burger
        $('.burgerMenu i').toggleClass('active');
    })
};

//Typing effect
const txtArr = ["Gawr Gura", "Amelia Watson", "Ninomae Ina'nis", "Shirakami Fubuki",
    "Inugami Korone", "Uruha Rushia ", "Houshou Marine", "Omaru Polka"];

let count = 0;
let txtIndex = 0;
let currentTxt = '';
let current
let letter = '';
const typingEffect = () =>{
    if(count === txtArr.length){
        count = 0;
    }
    //Get the current text whenever the cursor on
    currentTxt = txtArr[count];
    letter = currentTxt.slice(0, ++txtIndex); // get individual text from the current txt
    const $txt = $('.typing-effect');
    
    $txt.text(letter);
    if(letter.length === currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(typingEffect, 300);
}

 const scrollAppear = () =>{
     const $txtAppear = $('.card-text');
     const $txtPosition = $txtAppear.offset().top;
     console.log($txtPosition);
}