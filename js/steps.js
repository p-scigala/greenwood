function stepsInit() {
  const items = document.querySelectorAll('.steps__item');
  if (!items) return;

  const line = document.querySelector('.steps__line-inner');
  const contentWrapper = document.querySelector('.steps__content-items');
  const content = document.querySelectorAll('.steps__content');

  if (content.length > 0) {
    contentWrapper.style.height = `${content[0].offsetHeight}px`;
  }

  items.forEach((item, itemIndex) => {
    const dot = item.querySelector('.steps__item-dot');

    dot.addEventListener('click', () => {
      items.forEach((el, elIndex) => {
        el.classList.remove('active');
        if (elIndex <= itemIndex) {
          el.classList.add('active');
        }
      });

      if(vw <= 800) {
        line.style.height = `${itemIndex * 33.33}%`;
      } else {
        line.style.width = `${itemIndex * 33.33}%`;
      }

      if (content.length > 0) {
        contentWrapper.style.height = `${content[itemIndex].offsetHeight}px`;

        content.forEach((el, elIndex) => {
          el.classList.remove('active');
          if (elIndex === itemIndex) {
            el.classList.add('active');
          }
        });
      }
    });
  });
}
