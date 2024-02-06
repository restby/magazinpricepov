const setOrderData = () => {
  if (document.querySelectorAll('.modal')) {
    // На каждой странице с модальными окнами
    document.querySelectorAll('.modal__price-pay').forEach(function (button) {
      button.addEventListener('click', function () {
        const modalContainer = button.closest('.modal__content');
        const modalInfoTitle = modalContainer.querySelector('.modal__info-title').textContent;
        const modalPriceSum = modalContainer.querySelector('.modal__price-sum').textContent;
        localStorage.removeItem('itemTitle');
        localStorage.setItem('itemTitle', modalInfoTitle);
        localStorage.removeItem('itemPrice');
        localStorage.setItem('itemPrice', modalPriceSum);
      });
    });

  }
};

const getOrderData = () => {
  if (document.querySelector('.ym-form')) {
    const itemTitle = document.querySelector('[data-item__title]');
    const storedItemTitle = localStorage.getItem('itemTitle');
    itemTitle.textContent = storedItemTitle;

    const itemPrice = document.querySelector('[data-price-input]');
    const storedItemPrice = localStorage.getItem('itemPrice');
    itemPrice.value = storedItemPrice;
  }
};
export {setOrderData, getOrderData};
