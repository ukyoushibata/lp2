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
});