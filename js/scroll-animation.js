function scrollAnimationInit() {
  const items = document.querySelectorAll('.scroll-animation');
  const animatedNumbers = document.querySelectorAll('.animated-number');
  const steps = document.querySelectorAll('.steps__item');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer2Options = {
    root: null,
    rootMargin: '-50% 0% -20% 0%',
    threshold: 0,
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

 const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observer2Options);

  items.forEach((item) => {
    observer.observe(item);
  });

  animatedNumbers.forEach((item) => {
    observer.observe(item);
  });

  steps.forEach((item) => {
    observer2.observe(item);
  });
}
