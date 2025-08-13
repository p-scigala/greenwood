function ratingInit() {
  const ratings = document.querySelectorAll('.rating');

  if (ratings.length !== 0) {
    ratings.forEach((rating) => {
      const ratingValue = rating.getAttribute('data-rating');
      rating.style.setProperty('--rating', ratingValue);
      rating.classList.add(`rating--${ratingValue}`);

      for(let i = 0; i < ratingValue; i++) {
        const star = document.createElement('span');
        star.classList.add('rating__star');
        rating.appendChild(star);
      }
    });
  }
}