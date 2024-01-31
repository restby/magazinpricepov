import Swiper from '../vendor/swiper';
// eslint-disable-next-line consistent-return
const initModalSlider = () => {
  if (!document.querySelector('[data-modal-slider]')) {
    return null;
  }
  // Получаем все модальные окна на странице
  const modals = document.querySelectorAll('.modal');
  // Перебираем каждое модальное окно
  modals.forEach((modal) => {
    const modalSliderElement = modal.querySelector('[data-modal-slider]');
    const modalSlider = new Swiper(modalSliderElement, {
      simulateTouch: false,
      speed: 500,
      // autoHeight: true,
      navigation: {
        nextEl: '[data-modal-slider__arrow--next]',
        prevEl: '[data-modal-slider__arrow--prev]',
      },
      slidesPerView: 1,
    });
    return modalSlider;
  });

  // const modalSliderElement = document.querySelector('[data-modal-slider]');
  // const modalSlider = new Swiper(modalSliderElement, {
  //   simulateTouch: false,
  //   speed: 500,
  //   // autoHeight: true,
  //   navigation: {
  //     nextEl: '[data-modal-slider__arrow--next]',
  //     prevEl: '[data-modal-slider__arrow--prev]',
  //   },
  //   slidesPerView: 1,
  // });
  // return modalSlider;
};
export {initModalSlider};
