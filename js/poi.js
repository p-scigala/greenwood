function poiInit() {
  const poiItems = document.querySelectorAll('.poi__item');

  if (poiItems.length !== 0) {
    poiItems.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('poi__item--active');

        if(vw < 800) {
          let poiPositionX = item.getBoundingClientRect().left + window.scrollX - vw / 2;
          let poiDescription = item.querySelector('.poi__item-description');
          poiDescription.style.left = `${poiPositionX}px`;
        }
      });
    });
  }
}
