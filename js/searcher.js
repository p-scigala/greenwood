function searcherInit() {
  const displayFilters = document.querySelector('.searcher__display-filters');

  if (displayFilters) {
    const filterButton = displayFilters.querySelectorAll('button');
    const displayItems = displayFilters.nextElementSibling;
    const hasItemsList = displayItems.classList.contains('searcher__items');

    filterButton.forEach((button) => {
      button.addEventListener('click', () => {
        filterButton.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        displayItems.classList.remove('searcher__items--list');
        displayItems.classList.remove('searcher__items--block');

        if (hasItemsList) {
          if (button.classList.contains('filter__display--list')) {
            displayItems.classList.add('searcher__items--list');
          } else if (button.classList.contains('filter__display--block')) {
            displayItems.classList.add('searcher__items--block');
          }
        }
      });
    });
  }

  const searcher = document.querySelector('.searcher__filters');

  if (searcher) {
    const searcherMore = searcher.querySelector('.searcher__more');
    const searcherSelects = searcher.querySelector('.searcher__selects');

    if (searcherMore) {
      searcherMore.addEventListener('click', (e) => {
        e.preventDefault();

        searcher.classList.toggle('active');
        searcherSelects.classList.toggle('searcher__selects--expanded');

        if (searcher.classList.contains('active')) {
          searcherMore.textContent = 'Mniej filtrów';
        } else {
          searcherMore.textContent = 'Więcej filtrów';
        }
      });
    }
  }

  removeListTypeOnMobile();
}

function removeListTypeOnMobile() {
  const list = document.querySelector('.searcher__items--list');
  if (vw <= 800 && list) {
    list.classList.add('searcher__items--block');
    list.classList.remove('searcher__items--list');
  }
}
