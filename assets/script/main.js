$(document).ready(function () {
    $('.voices__slider').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<img src="/assets/image/arrow_left_circle_fill.jpg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="/assets/image/arrow_right_circle_fill.jpg" class="slide-arrow next-arrow">',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$('.question__accordion__header').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});

$(function () {
    var to_top = $('.to-top');
    to_top.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            to_top.fadeIn();
        } else {
            to_top.fadeOut();
        }
    });
    to_top.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});