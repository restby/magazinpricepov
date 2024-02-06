const setDefaultPrice = () => {
  if (document.querySelectorAll('.modal')) {
    const priceField = document.querySelectorAll(
        '[data-price-input]'
    );
    const pricesDefault = document.querySelectorAll(
        '.config__btn.is-active'
    );
    pricesDefault.forEach((priceDefault, index) => {

      const priceValue = priceDefault.getAttribute('data-price');
      /*
        Вариант с input:
      const numericValue = parseFloat(priceValue.replace(',', '.'));
      priceField[index].value = isNaN(numericValue) ? '' : numericValue;
      */

      /*
        Вариант просто с текстом
      */
      priceField[index].textContent = priceValue;
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
      const buttons = modal.querySelectorAll('.config__btn');

      const priceField = modal.querySelector('[data-price-input]');

      // Обработчик события клика на кнопке
      // function handleButtonClick(event) {
      // // Получаем значение атрибута data-price
      //   const price = event.currentTarget.getAttribute('data-price');
      //   priceInput.value = price;

      // // priceSum.textContent = `Цена: ${price}`;
      // }
      function handleButtonClick(event) {
        const clickedButton = event.target;
        // Проверяем, есть ли у кликнутой кнопки класс "is-active"
        const isActive = clickedButton.classList.contains('is-active');

        // Если у кнопки нет класса "is-active", добавляем его
        if (!isActive) {
          clickedButton.classList.add('is-active');
        }

        // Удаляем класс "is-active" у всех остальных кнопок
        buttons.forEach((button) => {
          if (button !== clickedButton) {
            button.classList.remove('is-active');
          }
        });

        // Получаем значение атрибута data-price
        const price = event.currentTarget.getAttribute('data-price');
        /*
        Вариант с input:
      const numericValue = parseFloat(price.replace(',', '.'));
        priceInput.value = isNaN(numericValue) ? '' : numericValue;
      */
        /*
        Вариант просто с текстом
      */
        priceField.textContent = price;
      }

      // Добавляем обработчик события клика на каждую кнопку в текущем модальном окне
      buttons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
      });
    });
  }
};

export {setDefaultPrice, setPrice};
