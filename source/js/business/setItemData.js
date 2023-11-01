import {items} from './priceData';
import {changeImagesUrl} from './changeImagesUrl';

const setItemData = () => {

  if (document.querySelector('[data-catalog__element]')) {
    const catalogElements = document.querySelectorAll('[data-catalog__element]');

    catalogElements.forEach((el) => {
      el.addEventListener('click', (evt) => {
        let target = evt.target;
        let itemDataValue = null;
        while (target && target !== catalogElements) {
          if (target.getAttribute && target.getAttribute('data-item')) {
            itemDataValue = target.getAttribute('data-item');
            // console.log(`data-item="${itemDataValue}"`);
            break;
          }
          target = target.parentNode;
        }

        if (items.hasOwnProperty(itemDataValue)) {
          if (document.querySelector('[data-item-option="noWheelOption"]')) {
            const dataItemElement = document.querySelector('[data-item-option="noWheelOption"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="noWheelH300Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="noWheelH300Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="noWheelH600Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="noWheelH600Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="noWheelH1220Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="noWheelH1220Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="noWheelH1220COption"]')) {
            const dataItemElement = document.querySelector('[data-item-option="noWheelH1220COption"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel2R13Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel2R13Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel2R13H300Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel2R13H300Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel2R13H600Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel2R13H600Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel2R13H1220Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel2R13H1220Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel2R13H1220COption"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel2R13H1220COption"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel4R13Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel4R13Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel4R13H1220Option"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel4R13H1220Option"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-option="wheel4R13H1220COption"]')) {
            const dataItemElement = document.querySelector('[data-item-option="wheel4R13H1220COption"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-option');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheel"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheel"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH300"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH300"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH600"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH600"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH1220"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH1220"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH1220C"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH1220C"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H300"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H300"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H600"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H600"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H1220"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H1220"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H1220C"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H1220C"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel4R13"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel4R13"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel4R13H1220"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel4R13H1220"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel4R13H1220C"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel4R13H1220C"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-title]')) {
            const itemTitleElement = document.querySelector('[data-item-title]');
            itemTitleElement.textContent = items[itemDataValue][Object.keys(itemTitleElement.dataset)[0]];
          }

          if (document.querySelector('[data-item-descr]')) {
            const itemDescrElement = document.querySelector('[data-item-descr]');
            itemDescrElement.textContent = items[itemDataValue][Object.keys(itemDescrElement.dataset)[0]];
          }

          if (document.querySelector('[data-dimensions]')) {
            const itemDimensionsElement = document.querySelector('[data-dimensions]');
            itemDimensionsElement.textContent = items[itemDataValue][Object.keys(itemDimensionsElement.dataset)[0]];
          }

          if (document.querySelector('[data-full-load-capacity]')) {
            const itemFullLoadCapacityElement = document.querySelector('[data-full-load-capacity]');
            itemFullLoadCapacityElement.textContent = items[itemDataValue][Object.keys(itemFullLoadCapacityElement.dataset)[0]];
          }

          if (document.querySelector('[data-curb-weight]')) {
            const itemCurbWeightElement = document.querySelector('[data-curb-weight]');
            itemCurbWeightElement.textContent = items[itemDataValue][Object.keys(itemCurbWeightElement.dataset)[0]];
          }

          if (document.querySelector('[data-count-spring-leaves]')) {
            const itemCountSpringLeavesElement = document.querySelector('[data-count-spring-leaves]');
            itemCountSpringLeavesElement.textContent = items[itemDataValue][Object.keys(itemCountSpringLeavesElement.dataset)[0]];
          }

          if (document.querySelector('[data-count-axes]')) {
            const itemCountAxesElement = document.querySelector('[data-count-axes]');
            itemCountAxesElement.textContent = items[itemDataValue][Object.keys(itemCountAxesElement.dataset)[0]];
          }

          if (document.querySelector('[data-single-axle-load]')) {
            const itemSingleAxleLoadElement = document.querySelector('[data-single-axle-load]');
            itemSingleAxleLoadElement.textContent = items[itemDataValue][Object.keys(itemSingleAxleLoadElement.dataset)[0]];
          }

          if (document.querySelector('[data-clearance]')) {
            const itemClearanceElement = document.querySelector('[data-clearance]');
            itemClearanceElement.textContent = items[itemDataValue][Object.keys(itemClearanceElement.dataset)[0]];
          }

          if (document.querySelector('[data-boat-dimensions]')) {
            const itemBoatDimensionsElement = document.querySelector('[data-boat-dimensions]');
            itemBoatDimensionsElement.textContent = items[itemDataValue][Object.keys(itemBoatDimensionsElement.dataset)[0]];
          }

          if (document.querySelector('[data-dump-truck-function]')) {
            const itemDumpTruckFunctionElement = document.querySelector('[data-dump-truck-function]');
            itemDumpTruckFunctionElement.textContent = items[itemDataValue][Object.keys(itemDumpTruckFunctionElement.dataset)[0]];
          }

          if (document.querySelector('[data-item-img]')) {
            const itemImg = document.querySelector('[data-item-img]');

            let sourceElement = itemImg.querySelector('source');
            let imgElement = itemImg.querySelector('img');
            let altText = imgElement.getAttribute('alt');

            sourceElement.setAttribute('srcset', `img/items/${items[itemDataValue].itemImgFileNameStart}.webp`);

            imgElement.setAttribute('src', `img/items/${items[itemDataValue].itemImgFileNameStart}.jpg`);

            let updatedAltText = altText.replace(imgElement.getAttribute('alt'), items[itemDataValue].itemTitle);
            imgElement.setAttribute('alt', updatedAltText);
          }

          changeImagesUrl(items, itemDataValue);
        }
      });
    });
  }
};
export {setItemData};
