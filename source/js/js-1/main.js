import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initUniaxialSlider} from './modules/initUniaxialSlider';
import {initBiaxialSlider} from './modules/initBiaxialSlider';
import {initBoatSlider} from './modules/initBoatSlider';
import {initTabs} from './modules/tabs/init-tabs';
import {Burger} from './modules/header/burger';

import {setItemData} from './buisness/setItemData';
// import {initCardItem} from './buisness/initCardItem';
// import {Burger} from './modules/header/burger';
// import {Burger} from './modules/header/burger';
// import {Burger} from './modules/header/burger';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  setItemData();
  // initCardItem();
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
