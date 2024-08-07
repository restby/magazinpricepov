import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initUniaxialSlider} from './modules/initUniaxialSlider';
import {initBiaxialSlider} from './modules/initBiaxialSlider';
import {initBoatSlider} from './modules/initBoatSlider';
import {initModalSlider} from './modules/initModalSlider';
import {initTabs} from './modules/tabs/init-tabs';
import {Burger} from './modules/header/burger';
// import {Form} from './modules/form-validate/form';
import {editInputsPlaceholder} from './modules/form-validate/form-fields';
// import {setDefaultPrice, setPrice} from './business/setPrice';
// import {setOrderData, getOrderData} from './business/initOrder';
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
    initModalSlider();
    // setDefaultPrice();
    // setPrice();
    // setOrderData();
    // getOrderData();

    // const form = new Form();
    // window.form = form;
    // form.init();
    editInputsPlaceholder();
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
