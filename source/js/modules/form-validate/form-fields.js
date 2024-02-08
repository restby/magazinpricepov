export const editInputsPlaceholder = () => {
  if (document.querySelector('form[data-ym-form]')) {
    const ymForm = document.querySelector('form[data-ym-form]');
    ymForm.querySelectorAll('input').forEach((input) => {
      input.addEventListener('focus', () => {
        input.removeAttribute('placeholder');
      });

      if (ymForm.querySelector('input[name="custName"]') && input.getAttribute('name') === 'custName') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Имя');
        });
      }

      if (ymForm.querySelector('input[name="cps_phone"]') && input.getAttribute('name') === 'cps_phone') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Телефон');
        });
      }

      if (ymForm.querySelector('input[name="cps_email"]') && input.getAttribute('name') === 'cps_email') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Email');
        });
      }

      if (ymForm.querySelector('input[name="custAddr"]') && input.getAttribute('name') === 'custAddr') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Адрес');
        });
      }
      if (ymForm.querySelector('input[name="orderDetails"]') && input.getAttribute('name') === 'orderDetails') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Комментарий');
        });
      }
    });
    ymForm.querySelectorAll('textarea').forEach((textarea) => {
      textarea.addEventListener('focus', () => {
        textarea.removeAttribute('placeholder');
      });
      if (ymForm.querySelector('textarea[name="orderDetails"]') && textarea.getAttribute('name') === 'orderDetails') {
        textarea.addEventListener('blur', () => {
          textarea.setAttribute('placeholder', 'Комментарий к заказу');
        });
      }
    });
  }
};
