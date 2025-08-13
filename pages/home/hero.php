<section class="hero">

  <div class="hero__slider slider--with-bar">

    <div class="hero__slide">
      <img src="imgs/photos/photo-02.jpg" alt="" class="hero__image">
    </div>

    <div class="hero__slide">
      <img src="imgs/photos/photo-01.jpg" alt="" class="hero__image">
    </div>

  </div>

  <div class="wrapper hero__pagination-wrapper scroll-animation delay-3">
    <div class="hero__pagination pagination-bar">
      <div class="pagination-bar__progress">
        <div class="pagination-bar__progress-bar"></div>
      </div>
    </div>
  </div>

  <div class="hero__content">
    <?php include('imgs/decor-gradient.svg'); ?>
    <?php include('imgs/decor-02.svg'); ?>

    <h2 class="hero__title scroll-animation">GREENWOOD PARK</h2>
    <p class="hero__description scroll-animation delay-1">dodać ul. Jeździecka nr .......,Warszawa - Wesoła</p>
    <div class="searcher hero__searcher scroll-animation delay-2">
      <h3 class="searcher__title">Wyszukiwarka mieszkań</h3>
      <form class="searcher__form">

        <div class="searcher__filters">
          <div class="searcher__selects">

            <select name="surface" id="surface">
              <option value="" disabled selected>Powierzchnia</option>
              <option value="mieszkanie">Mieszkanie</option>
              <option value="dom">Dom</option>
              <option value="lokal">Lokal</option>
            </select>

            <select name="rooms" id="rooms">
              <option value="" disabled selected>Liczba pokoi</option>
              <option value="1">1 pokój</option>
              <option value="2">2 pokoje</option>
              <option value="3">3 pokoje</option>
              <option value="4">4 pokoje</option>
              <option value="5">5 pokoi</option>
            </select>

            <select name="floor" id="floor">
              <option value="" disabled selected>Piętro</option>
              <option value="parter">Parter</option>
              <option value="1">1 piętro</option>
              <option value="2">2 piętro</option>
              <option value="3">3 piętro</option>
              <option value="4">4 piętro</option>
              <option value="5">5 piętro</option>
              <option value="6">6 piętro</option>
              <option value="7">7 piętro</option>
              <option value="8">8 piętro</option>
              <option value="9">9 piętro</option>
              <option value="10">10 piętro</option>
            </select>

            <select name="investition" id="investition">
              <option value="" disabled selected>Inwestycja</option>
              <option value="inwestycja1">Inwestycja 1</option>
              <option value="inwestycja2">Inwestycja 2</option>
              <option value="inwestycja3">Inwestycja 3</option>
            </select>

            <select name="price" id="price">
              <option value="" disabled selected>Przedział cenowy</option>
              <option value="do-300000">do 300 000 zł</option>
              <option value="300000-500000">300 000 - 500 000 zł</option>
              <option value="500000-700000">500 000 - 700 000 zł</option>
              <option value="700000-1000000">700 000 - 1 000 000 zł</option>
              <option value="powyzej-1000000">powyżej 1 000 000 zł</option>
            </select>

            <select name="type" id="type">
              <option value="" disabled selected>Typ nieruchomości</option>
              <option value="mieszkanie">Mieszkanie</option>
              <option value="dom">Dom</option>
              <option value="lokal">Lokal</option>
              <option value="dzialka">Działka</option>
            </select>

            <select name="status" id="status">
              <option value="" disabled selected>Stan nieruchomości</option>
              <option value="nowe">Nowe</option>
              <option value="uzywane">Używane</option>
              <option value="do-remontu">Do remontu</option>
              <option value="do-wykończenia">Do wykończenia</option>
            </select>

          </div>

          <div class="searcher__more-wrapper">
            <button class="searcher__more btn--secondary btn" type="button">
              Więcej filtrów
            </button>
          </div>
        </div>

        <div class="searcher__search">
          <button type="submit" class="searcher__button btn btn--primary">
            Wyszukaj
          </button>
        </div>
      </form>
    </div>
  </div>

</section>