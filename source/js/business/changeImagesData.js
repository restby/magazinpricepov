import {setImagesData} from './setImagesData';

const changeImagesData = (itemsObject, itemsObjectKey) => {
  if (document.querySelectorAll('[data-button-value]')) {
    const buttons = document.querySelectorAll('[data-button-value]');

    const itemImageAltTextChapter = {
      urlNo2Wheel: 'фото без колес 1 ось',
      urlNo2WheelH300: 'фото без колес 1 осьс тентом H300',
      urlNo2WheelH600: 'фото без колес 1 ось с тентом H600',
      urlNo2WheelH1220: 'фото без колес 1 ось с тентом H1220',
      urlNo2WheelH1220C: 'фото без колес 1 ось с тентом H1220C',
      urlNo4Wheel: 'фото без колес 2 оси',
      urlNo4WheelH1220: 'фото без колес 2 оси с тентом H1220',
      urlNo4WheelH1220C: 'фото без колес 2 оси с тентом H1220C',
      urlWheel2R13: 'фото с 2 колесами R13 1 ось',
      urlWheel2R13H300: 'фото с 2 колесами R13 1 ось и с тентом H300',
      urlWheel2R13H600: 'фото с 2 колесами R13 1 ось с тентом H600',
      urlWheel2R13H1220: 'фото с 2 колесами R13 1 ось и с тентом H1220',
      urlWheel2R13H1220C: 'фото с 2 колесами R13 1 ось и с тентом H1220C',
      urlWheel4R13: 'фото с 4 колесами R13 2 оси',
      urlWheel4R13H1220: 'фото с 4 колесами R13 2 оси и с тентом H1220',
      urlWheel4R13H1220C: 'фото с 4 колесами R13 2 оси и с тентом H1220C',
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

export {changeImagesData};
