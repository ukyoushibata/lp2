$(document).ready(function(){
    $('.voices__slider').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div><img src="/assets/image/arrow-left-circle-fill.jpg" class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div><img src="/assets/image/arrow-right-circle-fill.jpg" class="slide-arrow next-arrow"></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// $('.question__accordion__header:nth-child(1)').addClass('active');
// $('.question__accordion__content:nth-child(2)').css('display', 'block');
$('.question__accordion__header').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});