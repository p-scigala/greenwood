function heroInit() {
  const searcherMore = document.querySelector('.hero .searcher__more');
  const pagination = document.querySelector('.hero__pagination-wrapper');
  const title = document.querySelector('.hero__title');
  const description = document.querySelector('.hero__description');

  if (searcherMore) {
    searcherMore.addEventListener('click', function () {
      if (pagination) pagination.classList.toggle('hidden');
      if (title) title.classList.toggle('hidden');
      if (description) description.classList.toggle('hidden');
    });
  }
}
