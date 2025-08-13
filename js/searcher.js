function searcherInit() {
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
}
