function galleryInit() {
  /* slider gallery */

  const gallerySlider = document.querySelectorAll(
    '.gallery-slider__slide'
  );

  if (gallerySlider.length > 0) {
    const parent = gallerySlider[0].parentElement;
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

    gallerySlider.forEach((item) => {
      const src = item.getAttribute('data-src');

      if (src) {
        item.addEventListener('click', (e) => {
          if (moved) {
            e.preventDefault(); // zapobiega domyślnemu kliknięciu
            e.stopPropagation(); // zatrzymuje propagację kliknięcia
            return;
          }

          modal(item, src);
        });
      }
    });
  }

  /* categories */

  const categories = document.querySelectorAll('.gallery__category');

  if (categories.length !== 0) {
    const wrapper = document.querySelector('.gallery__wrapper');
    const catWrapper = document.querySelector('.gallery__categories-wrapper');
    const galleries = document.querySelectorAll('.gallery__items-wrapper');

    categories.forEach((category) => {
      category.addEventListener('click', () => {
        const categoryName = category.getAttribute('data-category');

        galleries.forEach((gallery) => {
          if (gallery.getAttribute('data-category') === categoryName) {
            gallery.classList.add('active');
            wrapper.style.height = `${gallery.scrollHeight}px`;
            catWrapper.classList.add('hidden');

            setTimeout(() => {
              wrapper.style.height = `${gallery.scrollHeight}px`;
            }, 10);

            const galleryItems = gallery.querySelectorAll('.gallery__item');

            galleryItems.forEach((item) => {
              const thumb = item.getAttribute('data-thumb');
              const src = item.getAttribute('data-src');
              const type = item.getAttribute('data-type');
              let content = null;

              if (thumb) {
                if (item.querySelector('img')) {
                  content = item.querySelector('img');
                  content.src = thumb;
                } else {
                  content = document.createElement('img');
                  content.src = thumb;
                  item.appendChild(content);
                }

                if (src) {
                  item.addEventListener('click', () => {
                    modal(content, src, type);
                  });
                }
              }
            });
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

function modal(item, src, type) {
  if (!document.querySelector('.gallery-modal')) {
    const modal = document.createElement('div');
    modal.classList.add('gallery-modal');
    modal.style.left = `${item.getBoundingClientRect().left}px`;
    modal.style.top = `${item.getBoundingClientRect().top}px`;
    modal.style.width = `${item.offsetWidth}px`;
    modal.style.height = `${item.offsetHeight}px`;

    if (!type || type === 'image') {
      modal.innerHTML = `<img src="${src}" alt="Galeria - obraz" class="gallery-modal__image">`;
    }

    if (type === 'video') {
      modal.innerHTML = `<video controls class="gallery-modal__video">
                        <source src="${src}" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>`;
    }

    if (type === 'iframe') {
      modal.innerHTML = `<iframe src="${src}" class="gallery-modal__iframe" frameborder="0" allowfullscreen></iframe>`;
    }

    const close = document.createElement('button');
    close.classList.add('gallery-modal__close');
    close.addEventListener('click', () => {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    });
    modal.appendChild(close);

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
      setTimeout(() => modal.remove(), 300);
    });
  }
}