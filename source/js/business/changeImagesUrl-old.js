const changeImagesUrl = (itemsObject, itemsObjectKey) => {
  if (document.querySelectorAll('[data-button-value]')) {
    const buttons = document.querySelectorAll('[data-button-value]');

    const itemImageAltTextChapter = {
      urlNoWheel: 'фото без колес',
      urlNoWheelH300: 'фото без колес с тентом H300',
      urlNoWheelH600: 'фото без колес с тентом H600',
      urlNoWheelH1220: 'фото без колес с тентом H1220',
      urlNoWheelH1220C: 'фото без колес с тентом H1220C',
      urlWheel2R13: 'фото с 2 колесами R13',
      urlWheel2R13H300: 'фото с 2 колесами R13 и с тентом H300',
      urlWheel2R13H600: 'фото без колес с тентом H1220C',
      urlWheel2R13H1220: 'фото с 2 колесами R13 и с тентом H1220',
      urlWheel2R13H1220C: 'фото с 2 колесами R13 и с тентом H1220C',
      urlWheel4R13: 'фото с 4 колесами R13',
      urlWheel4R13H1220: 'фото с 4 колесами R13 и с тентом H1220',
      urlWheel4R13H1220C: 'фото с 4 колесами R13 и с тентом H1220C',
    };

    buttons.forEach((button) => {

      // button.classList.remove('is-active');
      // Решить проблему с классом is-active

      button.addEventListener('click', () => {
        const itemImg = document.querySelector('[data-item-img]');
        let sourceElement = itemImg.querySelector('source');
        let imgElement = itemImg.querySelector('img');
        let altText = imgElement.getAttribute('alt');

        const buttonDataValue = button.getAttribute('data-button-value');
        let selectedValue = null;

        // button.classList.toggle('is-active');


        if (itemImageAltTextChapter.hasOwnProperty(buttonDataValue)) {
          selectedValue = itemImageAltTextChapter[buttonDataValue];
        }

        const setImagesData = () => {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey][buttonDataValue]}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey][buttonDataValue]}.jpg`);

          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, ${selectedValue}`);
          imgElement.setAttribute('alt', updatedAltText);
        };

        if (buttonDataValue === 'urlNoWheel') {
          setImagesData();
        }

        if (buttonDataValue === 'urlNoWheelH300') {
          setImagesData();
        }

        if (buttonDataValue === 'urlNoWheelH600') {
          setImagesData();
        }

        if (buttonDataValue === 'urlNoWheelH1220') {
          setImagesData();
        }

        if (buttonDataValue === 'urlNoWheelH1220C') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel2R13') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel2R13H300') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel2R13H600') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel2R13H1220') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel2R13H1220C') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel4R13') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel4R13H1220') {
          setImagesData();
        }

        if (buttonDataValue === 'urlWheel4R13H1220C') {
          setImagesData();
        }
      });
    });
  }
};

export { changeImagesUrl };
