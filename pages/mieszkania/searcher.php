<section class="searcher-section">
  <div class="wrapper--small">

    <div class="searcher scroll-animation delay-2">
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

    <div class="searcher__display-filters scroll-animation">
      <button class="filter__display--block active">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <g id="boxy" transform="translate(-1594 -2872)">
            <g transform="translate(1594 2872)">
              <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" />
            </g>
            <g transform="translate(1594 2882)">
              <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" />
            </g>
            <g transform="translate(1604 2872)">
              <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" />
            </g>
            <g transform="translate(1604 2882)">
              <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" />
            </g>
          </g>
        </svg>

      </button>
      <button class="filter__display--list">
        <svg id="lista" xmlns="http://www.w3.org/2000/svg" width="22" height="18.789" viewBox="0 0 22 18.789">
          <path d="M22,11H2a.9.9,0,1,0,0,1.789H22A.9.9,0,1,0,22,11Z" transform="translate(-1 -11)" fill="#181a1c" />
          <path d="M22,11H2a.9.9,0,1,0,0,1.789H22A.9.9,0,1,0,22,11Z" transform="translate(-1 6)" fill="#181a1c" />
          <path d="M22,11H2a.9.9,0,1,0,0,1.789H22A.9.9,0,1,0,22,11Z" transform="translate(-1 0.333)" fill="#181a1c" />
          <path d="M22,11H2a.9.9,0,1,0,0,1.789H22A.9.9,0,1,0,22,11Z" transform="translate(-1 -5.333)" fill="#181a1c" />
        </svg>
      </button>
    </div>

    <div class="searcher__items searcher__items--block scroll-animation">

      <div class="panel available">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Dostępne</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

      <div class="panel available">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Dostępne</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

      <div class="panel available">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Dostępne</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

      <div class="panel available">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Dostępne</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

      <div class="panel available">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Dostępne</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

      <div class="panel available">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Dostępne</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

      <div class="panel reserved">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Rezerwacja</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

      <div class="panel sold">
        <h3 class="panel__name">Mieszkanie F4/M25</h3>
        <div class="panel__status">Sprzedane</div>
        <img src="imgs/plans/plan-04.jpg" alt="" class="panel__img">
        <div class="panel__data">
          <p>Powierzchnia:<br><span>55,68 m<sup>2</sup></span></p>
          <p>Pokoje:<br><span>3</span></p>
          <p>Piętro:<br><span>2</span></p>
          <p>Cena<br><span>od 300 000 zł</span></p>
        </div>
        <a href="/mieszkanie.php" class="panel__btn btn btn--primary">Zobacz więcej</a>
      </div>

    </div>
  </div>
</section>