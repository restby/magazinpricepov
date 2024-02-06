import {setImagesData} from './setImagesData';
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
      button.addEventListener('click', () => {

        const buttonDataValue = button.getAttribute('data-button-value');

        if (buttonDataValue === 'urlNoWheel') {
          // setImagesData();
          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlNoWheelH300') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlNoWheelH600') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlNoWheelH1220') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlNoWheelH1220C') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel2R13') {
          // setImagesData();
          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel2R13H300') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel2R13H600') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel2R13H1220') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel2R13H1220C') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel4R13') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel4R13H1220') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }

        if (buttonDataValue === 'urlWheel4R13H1220C') {
          // setImagesData();

          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }
      });
    });
  }
};

export { changeImagesUrl };

/*
чатгпт
*/
import { setImagesData } from './setImagesData';

const changeImagesUrl = (itemsObject, itemsObjectKey) => {
  if (document.querySelectorAll('[data-button-value]')) {
    const buttons = document.querySelectorAll('[data-button-value]');

    const itemImageAltTextChapter = {
      urlNoWheel: 'фото без колес',
      urlNoWheelH300: 'фото без колес с тентом H300',
      urlNoWheelH600: 'фото без колес с тентом H600',
      // Добавьте остальные значения сюда
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const buttonDataValue = button.getAttribute('data-button-value');

        if (itemImageAltTextChapter[buttonDataValue]) {
          setImagesData(buttonDataValue, itemImageAltTextChapter, itemsObject, itemsObjectKey);
        }
      });
    });
  }
};

export { changeImagesUrl };
