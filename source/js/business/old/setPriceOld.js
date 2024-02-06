const setDefaultPrice = () => {
  if (document.querySelectorAll('.modal')) {
    // const defaultPriceSum = document.querySelectorAll(
    //     '.modal__price-sum'
    // );
    const yoomoneyFormPriceInputs = document.querySelectorAll(
        '.yoomoney-form__price-input'
    );
    const pricesDefault = document.querySelectorAll(
        '.modal__tabs-control.is-active'
    );
    // pricesDefault.forEach((priceDefault, index) => {
    //   const priceValue = priceDefault.getAttribute('data-price');
    //   defaultPriceSum[index].textContent = `Цена: ${priceValue}`;
    // });
    pricesDefault.forEach((priceDefault, index) => {
      const priceValue = priceDefault.getAttribute('data-price');
      yoomoneyFormPriceInputs[index].value = priceValue;
    });
  }
};

const setPrice = () => {
  if (document.querySelectorAll('.modal')) {
    // Получаем все модальные окна на странице
    const modals = document.querySelectorAll('.modal');
    // Перебираем каждое модальное окно
    modals.forEach(function (modal) {
      // Получаем элементы DOM внутри каждого модального окна
      const buttons = modal.querySelectorAll('.item-config');
      const priceInput = modal.querySelector('.yoomoney-form__price-input');
      // const priceSum = modal.querySelector('.modal__price-sum');

      // Обработчик события клика на кнопке
      function handleButtonClick(event) {
        // Получаем значение атрибута data-price
        const price = event.currentTarget.getAttribute('data-price');
        priceInput.value = price;

        // priceSum.textContent = `Цена: ${price}`;
      }

      // Добавляем обработчик события клика на каждую кнопку в текущем модальном окне
      buttons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
      });
    });
  }
};

export {setDefaultPrice, setPrice};
