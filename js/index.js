let vw = document.body.clientWidth;
let vh = document.body.clientHeight;

window.addEventListener('resize', function () {
  if (document.body.clientWidth !== vw) {
    vw = document.body.clientWidth;
    vh = document.body.clientHeight;
  }

  debounce(fixApartmentGalleryItemsWidth, 300);
});

document.addEventListener('DOMContentLoaded', function () {
  scrollAnimationInit();
  customSelectInit();
  slickInit();
  searcherInit();
  tabsInit();
  tabsVideoInit();
  poiInit();
  headerInit();
  ratingInit();
  inputsInit();
  filtersInit();
  stepsInit();
  galleryInit();
});

/* debounce function to limit the rate at which a function can fire */

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
