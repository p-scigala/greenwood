function inputsInit() {
  const inputs = document.querySelectorAll('.input');

  if (inputs.length > 0) {
    inputs.forEach((input) => {
      const label = input.querySelector('label');
      const field = input.querySelector('input, textarea');
      const hasPlaceholder = field.hasAttribute('placeholder');

      if (label && hasPlaceholder) {
        label.style.opacity = '0';
      }

      field.addEventListener('focus', () => {
        input.classList.add('input--focused');

        if (label && hasPlaceholder) {
          label.style.opacity = '0';
        }
      });

      field.addEventListener('blur', () => {
        if (!field.value || field.value === '') {
          input.classList.remove('input--focused');
        } else {
          if (label && hasPlaceholder) {
            label.style.opacity = '1';
          }
        }
      });
    });
  }
}
