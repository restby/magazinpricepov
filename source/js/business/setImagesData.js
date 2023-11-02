const setImagesData = (buttonDataValue, altTextChapter, itemsObject, itemsObjectKey) => {
  const itemImg = document.querySelector('[data-item-img]');
  let sourceElement = itemImg.querySelector('source');
  let imgElement = itemImg.querySelector('img');
  let altText = imgElement.getAttribute('alt');
  let selectedValue = null;

  if (altTextChapter.hasOwnProperty(buttonDataValue)) {
    selectedValue = altTextChapter[buttonDataValue];
  }

  sourceElement.setAttribute('srcset', `img/items/${itemsObject[itemsObjectKey][buttonDataValue]}.webp`);
  imgElement.setAttribute('src', `img/items/${itemsObject[itemsObjectKey][buttonDataValue]}.jpg`);

  let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${itemsObject[itemsObjectKey].itemTitle}, ${selectedValue}`);
  imgElement.setAttribute('alt', updatedAltText);
};

export {setImagesData};
