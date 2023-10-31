import Swiper from '../vendor/swiper';
const initBiaxialSlider = () => {
  if (!document.querySelector('[data-biaxial__slider]')) {
    return null;
  }

  const biaxialSliderElement = document.querySelector('[data-biaxial__slider]');
  const biaxialSlider = new Swiper(biaxialSliderElement, {
    simulateTouch: false,
    speed: 500,
    navigation: {
      nextEl: '[data-biaxial__arrow--next]',
      prevEl: '[data-biaxial__arrow--prev]',
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
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  return biaxialSlider;
};
export {initBiaxialSlider};
