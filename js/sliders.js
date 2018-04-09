$(document).ready(function(){
    $('.header__slider').slick({
        autoplay: 5000,
        arrows: false,
        draggable: false,
        speed: 500
    });
    $('.team__slider').slick({
        arrows: false,
        draggable: false,
        speed: 500,
        dots: true
    });
    $('.testimonials__slider').slick({
        arrows: false,
        draggable: false,
        speed: 500,
        dots: true
    });
});