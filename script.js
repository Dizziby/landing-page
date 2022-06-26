$(function () {

    // Fixed Header
    let header = $("#header");
    let first = $("#first");
    let firstH = first.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        firstH = first.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > (firstH - 45)) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    //Smooth scroll
    $("[data-scroll]").on("click", function (e) {
        e.preventDefault();
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 40
        }, 700)
    })

    // Testimonials https://kenwheeler.github.io/slick/
    let slider = $("#testimonialsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});