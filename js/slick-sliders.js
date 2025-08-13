function slickInit() {
  const prevArrow = `<button type='button' class='slick-prev btn btn--arrow btn--arrow-left btn--border'></button>`;
  const nextArrow = `<button type='button' class='slick-next btn btn--arrow btn--arrow-right btn--border'></button>`;

  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    variableWidth: false,
    centerMode: false,
    fade: true,
    cssEase: 'linear',
    // appendArrows: '.hero .pagination-bar__buttons',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  let sliderCount = 1;

  $('.slider').each(function () {
    if ($(this).hasClass('slider--with-bar')) {
      const $buttonsWrapper = $(this).next().find('.pagination-bar__buttons');
      if ($buttonsWrapper.length !== 0) {
        $buttonsWrapper.prop('id', `slider-buttons-${sliderCount}`);
      }
    }

    if ($(this).hasClass('apartment__gallery-slider')) {
      const sliderNav = document.createElement('div');
      sliderNav.className = 'slider-nav';

      Array.from(this.children).forEach((child) => {
        // generate items from data attributes
        if (child.hasAttribute('data-content')) {

          if (child.getAttribute('data-type') === 'iframe') {
            const iframe = document.createElement('iframe');
            iframe.src = child.getAttribute('data-content');
            child.append(iframe);
          } else if (child.getAttribute('data-type') === 'video') {
            const video = document.createElement('video');
            video.src = child.getAttribute('data-content');
            video.controls = true;
            child.append(video);
          } else if (child.getAttribute('data-type') === 'image') {
            const img = document.createElement('img');
            img.src = child.getAttribute('data-content');
            child.append(img);
          }
        }

        // create navigation item
        const navItem = document.createElement('div');
        navItem.className = 'slider-nav__item';

        if (child.hasAttribute('data-thumb')) {
          const thumb = document.createElement('img');
          thumb.src = child.getAttribute('data-thumb') || 'imgs/photos/placeholder.jpg';
          thumb.alt = child.getAttribute('data-label') || 'Thumbnail';
          navItem.appendChild(thumb);
        }
        if (child.hasAttribute('data-label')) {
          const label = document.createElement('span');
          label.className = 'slider-nav__label';
          label.textContent = child.getAttribute('data-label');
          navItem.appendChild(label);
        }

        sliderNav.appendChild(navItem);
      });

      $(this).after(sliderNav);

      $(this).not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        variableWidth: true,
        infinite: true,
        centerMode: true,
        cssEase: 'ease-in-out',
        asNavFor: '.slider-nav',
        appendArrows: `#slider-buttons-${sliderCount}`,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
            },
          },
        ],
      });

      $(sliderNav).not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.apartment__gallery-slider',
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        infinite: true,
        cssEase: 'ease-in-out',
      });
    } else {

      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        variableWidth: true,
        infinite: true,
        centerMode: true,
        cssEase: 'ease-in-out',
        // appendArrows: `#slider-buttons-${sliderCount}`,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
            },
          },
        ],
      });
    }

    sliderCount++;

    $(this).on('mousedown touchstart', function (e) {
      $(this)
        .find('.panel--main, .panel--news, .panel--plan')
        .removeClass('opacity-50');
    });
  });

  $(document).ready(function () {
    var $sliders = $('.slider--with-bar');
    $sliders.each(function () {
      initSliderWithProgressBar($(this));
    });
  });

  window.addEventListener('resize', function () {
    var $sliders = $('.slider--with-bar');
    $sliders.each(function () {
      initSliderWithProgressBar($(this));
    });
  });

  function initSliderWithProgressBar($slider) {
    // if (vw <= 800) {
    //   var progressTrackWidth = 246;
    //   var progressBarWidth = 200;
    // } else if (vw > 800 && vw <= 1024) {
    //   var progressTrackWidth = 270;
    //   var progressBarWidth = 170;
    // } else {
      var progressTrackWidth = 260;
      var progressBarWidth = 111;
    // }

    var $progressTrack = $slider.parent().find('.pagination-bar__progress');
    var $progressBar = $progressTrack.find('.pagination-bar__progress-bar');
    // var progressTrackWidth = $progressTrack.width() | 529;
    // var progressBarWidth = $progressBar.width() | 243;
    var maxOffset = progressTrackWidth - progressBarWidth;
    var isDragging = false;
    var startX, startLeft;

    // Aktualizacja paska przy zmianie slajdu
    $slider.on(
      'init reInit afterChange',
      function (event, slick, currentSlide) {
        updateProgress(currentSlide, slick.slideCount);
      }
    );

    function updateProgress(currentSlide, totalSlides) {
      var newLeft = (maxOffset / (totalSlides - 1)) * currentSlide;
      $progressBar.css('transform', `translateX(${newLeft}px)`);
    }

    // Obsługa przeciągania
    $progressBar.on('mousedown touchstart', function (e) {
      e.preventDefault();
      isDragging = true;
      startX = e.pageX || e.originalEvent.touches[0].pageX;
      startLeft = parseFloat($progressBar.css('transform').split(',')[4]) || 0;
      $progressBar.css('transition', 'none'); // Wyłącz animację podczas przeciągania
    });

    $(document).on('mousemove touchmove', function (e) {
      // e.preventDefault(); // Zapobiegaj przewijaniu strony podczas przeciągania
      if (!isDragging) return;
      var moveX = (e.pageX || e.originalEvent.touches[0].pageX) - startX;
      var newLeft = Math.min(Math.max(startLeft + moveX, 0), maxOffset);
      $progressBar.css('transform', `translateX(${newLeft}px)`);
      $progressBar.css('transition', 'none'); // Wyłącz animację podczas przeciągania
    });

    $(document).on('mouseup touchend', function () {
      if (!isDragging) return;
      isDragging = false;
      $progressBar.css('transition', ''); // Wyłącz animację podczas przeciągania

      // Oblicz najbliższy slajd na podstawie pozycji paska
      var percent =
        parseFloat($progressBar.css('transform').split(',')[4]) / maxOffset;
      var totalSlides = $slider.slick('getSlick').slideCount;
      var newSlide = Math.round(percent * (totalSlides - 1));

      // Przejdź do wybranego slajdu
      $slider.slick('slickGoTo', newSlide);
    });

    /* add opacity to every slider item except the one with mouse over */
    $slider
      .find('.panel--main, .panel--news, .panel--plan')
      .on('mouseover', function () {
        $(this).siblings().addClass('opacity-50');
      });
    $slider
      .find('.panel--main, .panel--news, .panel--plan')
      .on('mouseout', function () {
        $(this).siblings().removeClass('opacity-50');
      });
  }

  fixApartmentGalleryItemsWidth();
}

function fixApartmentGalleryItemsWidth() {
  const apartmentSlider = document.querySelector('.apartment__gallery-slider');

  if (apartmentSlider) {
    const apartmentSliderWidth = apartmentSlider.offsetWidth;
    const apartmentGalleryItems = apartmentSlider.querySelectorAll(
      '.apartment__gallery-item'
    );
    apartmentGalleryItems.forEach((item) => {
      item.style.width = `${apartmentSliderWidth}px`;
    });
  }
}
