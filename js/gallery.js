function galleryInit() {
  const gallery = document.querySelectorAll(
    '.gallery-slider__slide, .gallery__item'
  );

  if (gallery.length > 0) {
    const parent = gallery[0].parentElement;
    let moved = false;

    parent.addEventListener('mousedown', () => {
      moved = false;
    });

    parent.addEventListener('touchstart', () => {
      moved = false;
    });

    parent.addEventListener('mousemove', () => {
      moved = true;
    });

    parent.addEventListener('touchmove', () => {
      moved = true;
    });

    gallery.forEach((item) => {
      const src = item.getAttribute('data-src');

      if (src) {
        item.addEventListener('click', () => {
          if (moved) {
            e.preventDefault(); // zapobiega domyślnemu kliknięciu
            e.stopPropagation(); // zatrzymuje propagację kliknięcia
            return;
          }

          const modal = document.createElement('div');
          modal.classList.add('gallery-modal');
          modal.style.left = `${item.getBoundingClientRect().left}px`;
          modal.style.top = `${item.getBoundingClientRect().top}px`;
          modal.style.width = `${item.offsetWidth}px`;
          modal.style.height = `${item.offsetHeight}px`;
          modal.innerHTML = `<img src="${src}" alt="Galeria - obraz" class="gallery-modal__image">`;
          document.body.appendChild(modal);

          setTimeout(() => {
            modal.style.left = '0';
            modal.style.top = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.classList.add('active');
          }, 10);

          modal.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => {
              document.body.removeChild(modal);
            }, 300);
          });
        });
      }
    });
  }

  /* categories */

  const wrapper = document.querySelector('.gallery__wrapper');
  const catWrapper = document.querySelector('.gallery__categories-wrapper');
  const categories = document.querySelectorAll('.gallery__category');
  const galleries = document.querySelectorAll('.gallery__items-wrapper');

  if (categories.length !== 0) {
    categories.forEach((category) => {
      category.addEventListener('click', () => {
        const categoryName = category.getAttribute('data-category');

        galleries.forEach((gallery) => {
          if (gallery.getAttribute('data-category') === categoryName) {
            gallery.classList.add('active');
            const height = gallery.scrollHeight;
            wrapper.style.height = `${height}px`;
            catWrapper.classList.add('hidden');
          }
        });
      });
    });

    const backButtons = document.querySelectorAll('.gallery__back-button');
    if (backButtons) {
      backButtons.forEach((backButton) => {
        backButton.addEventListener('click', () => {
          galleries.forEach((gallery) => {
            gallery.classList.remove('active');
          });
          wrapper.style.height = 'auto';
          catWrapper.classList.remove('hidden');
        });
      });
    }
  }
}
