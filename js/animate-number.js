function animateNumber(element, to, duration, prefix = "", postfix = "") {
  /* function making animation of incrementing number from 0 to set value */

  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // max 1
    const current = Math.floor(progress * to);

    element.textContent = prefix + current + postfix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
