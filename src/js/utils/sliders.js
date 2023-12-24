import { Swiper, Navigation } from "swiper";

const swiperSlides = document.querySelectorAll('[data-swiper]');
if (swiperSlides.length) {
    swiperSlides.forEach(slide => {
        const swiper = slide.querySelector('.swiper')
        const prevEl = slide.querySelector('.button-prev')
        const nextEl = slide.querySelector('.button-next')

        new Swiper(swiper, {
            modules: [
                Navigation
            ],

            slidesPerView: 'auto',
            grabCursor: true,

            navigation: {
                prevEl: prevEl,
                nextEl: nextEl
            },

            breakpoints: {
                300: {
                    spaceBetween: 10,
                },

                769: {
                    spaceBetween: 20,
                },

                1025: {
                    spaceBetween: 30,
                },

                1201: {
                    spaceBetween: 50,
                }
            }
        });
    });
}