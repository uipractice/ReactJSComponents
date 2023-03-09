function setItem(itemName, value) {
  localStorage.setItem(itemName, value);
}

function getItem(itemName) {
  return localStorage.getItem(itemName);
}

const isBasicOpen = () => JSON.parse(getItem('isBasicOpen')) ?
  JSON.parse(getItem('isBasicOpen')) : false;

const isOverlayOpen = () => JSON.parse(getItem('isOverlayOpen')) ?
JSON.parse(getItem('isOverlayOpen')) : false;

const isUtilOpen = () => JSON.parse(getItem('isUtilOpen')) ?
JSON.parse(getItem('isUtilOpen')) : false;

const isTableOpen = () => JSON.parse(getItem('isTableOpen')) ?
JSON.parse(getItem('isTableOpen')) : false;

export { setItem, getItem, isBasicOpen, isOverlayOpen, isUtilOpen, isTableOpen };
