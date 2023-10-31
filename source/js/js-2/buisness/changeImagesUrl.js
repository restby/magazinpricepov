const changeImagesUrl = (itemsObject, itemsObjectKey) => {
  if (document.querySelectorAll('[data-button-value]')) {
    const buttonsValue = document.querySelectorAll('[data-button-value]');
    buttonsValue.forEach((buttonValue) => {
      buttonValue.addEventListener('click', () => {
        const itemImg = document.querySelector('[data-item-img]');
        let sourceElement = itemImg.querySelector('source');
        let imgElement = itemImg.querySelector('img');
        let altText = imgElement.getAttribute('alt');

        const buttonDataValue = buttonValue.getAttribute('data-button-value');

        const itemImageUrl = {
          noWheel: 'фото без колес',
          noWheelH300: 'фото без колес с тентом H300',
          noWheelH600: 'фото без колес с тентом H600',
          noWheelH1220: 'фото без колес с тентом H1220',
          noWheelH1220C: 'фото без колес с тентом H1220C',
          wheel2R13: 'фото с 2 колесами R13',
          wheel2R13H300: 'фото с 2 колесами R13 и с тентом H300',
          wheel2R13H600: 'фото без колес с тентом H1220C',
          wheel2R13H1220: 'фото с 2 колесами R13 и с тентом H1220',
          wheel2R13H1220C: 'фото с 2 колесами R13 и с тентом H1220C',
          wheel4R13: 'фото с 4 колесами R13',
          wheel4R13H1220: 'фото с 4 колесами R13 и с тентом H1220',
          wheel4R13H1220C: 'фото с 4 колесами R13 и с тентом H1220C',
        };

        if (buttonDataValue === 'noWheel') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото без колес`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'noWheelH300') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото без колес с тентом H300`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'noWheelH600') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото без колес с тентом H600`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'noWheelH1220') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото без колес с тентом H1220`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'noWheelH1220C') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameStart}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото без колес с тентом H1220C`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel2R13') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 2 колесами R13`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel2R13H300') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 2 колесами R13 и с тентом H300`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel2R13H600') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 2 колесами R13 и с тентом H600`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel2R13H1220') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 2 колесами R13 и с тентом H1220`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel2R13H1220C') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 2 колесами R13 и с тентом H1220C`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel4R13') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 4 колесами R13`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel4R13H1220') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 4 колесами R13 и с тентом H1220`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel4R13H1220C') {
          sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, фото с 4 колесами R13 и с тентом H1220C`);
          imgElement.setAttribute('alt', updatedAltText);
        }
      });
    });
  }
};

export {changeImagesUrl};
