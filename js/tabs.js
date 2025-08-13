function tabsInit() {
  /* parent of tabs can be any parent element, but it should contains .tabs and .tabs__content */
  const tabs = document.querySelectorAll('.tabs');

  if (tabs) {
    tabs.forEach((wrapper) => {
      const buttons = wrapper.querySelectorAll('.tabs__button');
      const content = wrapper.querySelector('.tabs__content');
      const items = wrapper.querySelectorAll('.tabs__item');
      const isAdaptive = wrapper.classList.contains('tabs--adaptive');

      const activeItem = content.querySelector(
        `.tabs__item.tabs__item--active`
      );

      content.style.height = `${activeItem.scrollHeight}px`;
      
      if (!isAdaptive) {
        let minHeight = content.style.height;
        minHeight = parseInt(minHeight, 10);

        items.forEach((item) => {
          if (item.scrollHeight > minHeight) {
            minHeight = item.scrollHeight;
          }
        });

        content.style.minHeight = `${minHeight}px`;
      }

      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          buttons.forEach((t) => t.classList.remove('tabs__button--active'));
          items.forEach((c) => c.classList.remove('tabs__item--active'));

          button.classList.add('tabs__button--active');
          const contentId = button.getAttribute('data-tab');
          const activeItem = wrapper.querySelector(
            `.tabs__item[data-content="${contentId}"]`
          );
          activeItem.classList.add('tabs__item--active');
          if(isAdaptive) {
            content.style.height = `${activeItem.scrollHeight + 15}px`;
          } else {
            content.style.height = `${activeItem.scrollHeight}px`;
          }
        });
      });
    });
  }
}
