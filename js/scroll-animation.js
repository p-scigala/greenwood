function scrollAnimationInit() {
  const items = document.querySelectorAll('.scroll-animation');

  const animatedNumbers = document.querySelectorAll('.animated-number');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (entry.target.classList.contains('data-banner__item')) {
          entry.target.style.minWidth = entry.target.offsetWidth + 'px';
        }

        if (entry.target.classList.contains('animated-number')) {
          const value = entry.target.textContent.trim();
          let speed = 2000; // Default speed
          let multiplier = ''; // Default multiplier
          let multiplierValue = 1;
          let prefix = '';
          let postfix = '';

          if (entry.target.getAttribute('data-speed') === 'slow') {
            speed = 3000;
          } else if (entry.target.getAttribute('data-speed') === 'fast') {
            speed = 1000;
          }

          if (entry.target.getAttribute('data-multiplier') === '10') {
            multiplier = '0';
            multiplierValue = 10;
          } else if (entry.target.getAttribute('data-multiplier') === '100') {
            multiplier = '00';
            multiplierValue = 100;
          }

          if (entry.target.getAttribute('data-prefix')) {
            prefix = entry.target.getAttribute('data-prefix');
          }

          if (entry.target.getAttribute('data-postfix')) {
            postfix = entry.target.getAttribute('data-postfix');
          }

          if (!entry.target.classList.contains('done')) {
            animateNumber(
              entry.target,
              value / multiplierValue + multiplier,
              speed,
              prefix,
              postfix
            );
            setTimeout(() => entry.target.classList.add('done'), speed + 1);
          }
        }
      }
    });
  }, observerOptions);

  items.forEach((item) => {
    observer.observe(item);
  });

  animatedNumbers.forEach((item) => {
    observer.observe(item);
  });
}
