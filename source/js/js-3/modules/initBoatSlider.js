import Swiper from '../vendor/swiper';
const initBoatSlider = () => {
  if (!document.querySelector('[data-boat__slider]')) {
    return null;
  }

  const boatSliderElement = document.querySelector('[data-boat__slider]');
  const boatSlider = new Swiper(boatSliderElement, {
    simulateTouch: false,
    speed: 500,
    // autoHeight: true,
    navigation: {
      nextEl: '[data-boat__arrow--next]',
      prevEl: '[data-boat__arrow--prev]',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767.5: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1199.5: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  return boatSlider;
};
export {initBoatSlider};
