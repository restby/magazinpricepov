import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initUniaxialSlider} from './modules/initUniaxialSlider';
import {initBiaxialSlider} from './modules/initBiaxialSlider';
import {initBoatSlider} from './modules/initBoatSlider';
import {initTabs} from './modules/tabs/init-tabs';
import {Burger} from './modules/header/burger';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  // Modules
  // ---------------------------------
  const burger = new Burger();
  burger.init();
  initTabs();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initUniaxialSlider();
    initBiaxialSlider();
    initBoatSlider();

    const itemsDefaultPriceText = document.querySelectorAll('.modal__price-text');

    const yoomoneyFormPriceInputs = document.querySelectorAll('.yoomoney-form__price-input');

    // // Перебираем элементы из первого массива
    // itemsDefaultPriceText.forEach((item, index) => {
    //   // Получаем текст из элемента
    //   const textValue = item.textContent.trim();

    //   // Преобразуем текст в число, заменяем запятую на точку
    //   const numericValue = parseFloat(textValue.replace(',', '.'));

    //   // Устанавливаем значение в соответствующий элемент из второго массива
    //   yoomoneyFormPriceInputs[index].value = isNaN(numericValue) ? '' : numericValue;
    // });

    const buttonsPrice = document.querySelectorAll('.modal__tabs-control.is-active');
    buttonsPrice.forEach((button, index) => {
      const dataPriceValue = button.getAttribute('data-price');
      const numericValue = parseFloat(dataPriceValue.replace(',', '.'));
      yoomoneyFormPriceInputs[index].value = isNaN(numericValue) ? '' : numericValue;
  });

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
