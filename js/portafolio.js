document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.empresasSwiper', {
        loop: true,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 1,
    });
});