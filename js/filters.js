function filtersInit() {
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
}
