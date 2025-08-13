function tabsVideoInit() {
  const wrappers = document.querySelectorAll('.tabs-video');

  if (wrappers.length !== 0) {
    wrappers.forEach((wrapper) => {
      const buttons = wrapper.querySelectorAll('.tabs-video__btn');
      const video = wrapper.querySelector('.tabs-video__video');
      const items = wrapper.querySelectorAll('.tabs-video__item');

      buttons[0].classList.add('tabs-video__btn--active');
      video.src = buttons[0].getAttribute('data-src');
      video.classList.remove('tabs-video__video--hidden');

      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          buttons.forEach((btn) => btn.classList.remove('tabs-video__btn--active'));
          items.forEach((item) => item.classList.remove('tabs-video__item--active'));

          button.classList.add('tabs-video__btn--active');
          const src = button.getAttribute('data-src');
          video.classList.add('tabs-video__video--hidden');

          setTimeout(() => {
            video.src = src;
          }, 300);

          setTimeout(() => {
            video.classList.remove('tabs-video__video--hidden');
          }, 600);
        });
      });
    });
  }
}
