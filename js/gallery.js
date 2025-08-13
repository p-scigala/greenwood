function galleryInit() {
  const gallery = document.querySelectorAll('.gallery-slider__item');

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
}
