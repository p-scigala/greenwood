function customSelectInit() {
  const realSelects = document.querySelectorAll('select');

  realSelects.forEach((realSelect) => {
    const customSelect = document.createElement('div');
    customSelect.className = 'select';

    const selected = document.createElement('div');
    selected.className = 'select__selected';
    selected.innerHTML = realSelect.options[realSelect.selectedIndex].innerHTML;
    customSelect.appendChild(selected);

    const items = document.createElement('div');
    items.className = 'select__items';

    Array.from(realSelect.options).forEach((option) => {
      const item = document.createElement('div');
      item.innerHTML = option.innerHTML;
      item.className = 'select__item';

      item.addEventListener('click', () => {
        selected.innerHTML = option.innerHTML;
        realSelect.value = option.value;

        // Upewnij się, że option jest zaznaczony
        Array.from(realSelect.options).forEach((opt) => (opt.selected = false));
        option.selected = true;
        realSelect.selectedIndex = Array.from(realSelect.options).indexOf(
          option
        );

        // Force change event in vanilla JS as well
        const changeEvent = new Event('change', { bubbles: true });
        realSelect.dispatchEvent(changeEvent);

        setTimeout(() => customSelect.classList.remove('moving'), 0);
        setTimeout(() => customSelect.classList.remove('active'), 150);
      });

      if (!option.value) item.classList.add('select__item--placeholder');

      items.appendChild(item);
    });

    customSelect.appendChild(items);
    customSelect.querySelector('.select__items').style.width =
      customSelect.scrollWidth + 'px';
    realSelect.style.display = 'none'; // Ukryj oryginalny select
    realSelect.parentNode.insertBefore(customSelect, realSelect);

    const label = document.querySelector("[label='" + realSelect.id + "']");
    if (label) {
      label.classList.add('select-label');
      label.addEventListener('click', () => {
        document.querySelectorAll('.select').forEach((el) => {
          el.classList.remove('active');
        });
        customSelect.querySelector('.select__items').style.width =
          customSelect.scrollWidth + 'px';
        customSelect.classList.toggle('active'); // Przełącz aktywność custom select
        customSelect.classList.add('moving'); // Dodaj klasę moving
        setTimeout(() => customSelect.classList.remove('moving'), 150);
      });
    }

    customSelect.addEventListener('click', (e) => {
      e.stopPropagation(); // Zapobiegaj propagacji kliknięcia
      document.querySelectorAll('.select').forEach((el) => {
        el.classList.remove('active');
      });
      customSelect.querySelector('.select__items').style.width =
        customSelect.scrollWidth + 'px';
      customSelect.classList.toggle('active');
      customSelect.classList.add('moving'); // Dodaj klasę moving
      setTimeout(() => customSelect.classList.remove('moving'), 150);
    });

    document.addEventListener('click', () => {
      setTimeout(() => customSelect.classList.remove('active'), 150);
      customSelect.classList.remove('moving'); // Zamknij select, gdy klikniesz poza
    });
  });
}
