function headerInit() {
  /* menu toggle button */
  const btn = document.querySelector('.header__menu-toggle');
  const header = document.querySelector('.header');

  btn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    header.classList.toggle('header--active');
  });

  const main = document.querySelector('main');
  if (main) {
    if (main.id === 'page-home') {
      header.classList.add('header--home');
    }
  }

  /* set active menu element */
  const menuItems = document.querySelectorAll('.header__nav > ul > li');

  menuItems.forEach((item) => {
    if (item.querySelector('a').href === window.location.href) {
      item.classList.add('active');
    }

    if (vw <= 1024) {
      const submenu = item.querySelector('ul');
      const submenuTrigger = item.querySelector('i');

      if (submenuTrigger) {
        submenuTrigger.addEventListener('click', (e) => {
          e.preventDefault();
          submenu.classList.toggle('active');
          submenuTrigger.classList.toggle('active');
        });
      }
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}
