<section class="contact">

  <img src="imgs/decor-03.png" alt="" class="decor-03 decor--left decor--bottom" />

  <div class="wrapper contact__wrapper">

    <div class="contact__data">
      <h2 class="contact-data__title scroll-animation">Kontakt</h2>
      <p class="contact-data__description scroll-animation delay-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      <div class="contact-data__icons scroll-animation delay-2">
        <p>Biuro sprzedaży</p>
        <p><a href="tel: 123456789"><?php include('imgs/icons/phone.svg'); ?>123 456 789</a></p>
        <p><a href="mailto:biuro@greenwoodpark.pl"><?php include('imgs/icons/mail.svg'); ?>biuro@greenwoodpark.pl</a>
        </p>
        <p><?php include('imgs/icons/pin.svg'); ?>ul. Jeździecka 20</p>
      </div>
    </div>

    <div class="contact__form">

      <div class="contact-form__image scroll-animation delay-2">
        <img src="imgs/photos/photo-19.jpg" alt="" class="contact-form__img" />
      </div>

      <div class="contact-form__content scroll-animation">
        <h3 class="contact-form__form-title">Formularz kontaktowy</h3>
        <form class="form" action="">
          <div class="input input--text">
            <label for="name">Imię i nazwisko</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="input input--text">
            <label for="email">Adres e-mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="input input--text">
            <label for="phone">Telefon</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div class="input input--textarea">
            <label for="message">Wiadomość</label>
            <textarea id="message" name="message"
              placeholder="Proszę o więcej szczegółów dotyczących mieszkania nr... oraz propozycję terminu spotkania"></textarea>
          </div>
          <div class="form__agreements">
            <div class="input input--checkbox">
              <input type="checkbox" id="privacy" name="privacy" />
              <label for="privacy">Wyrażam zgodę na przetwarzanie przez Greenwood II sp. z o.o. z siedzibą przy ul.
                Henryka Dembińskiego 13, 01-644 w Warszawie, moich danych osobowych zawartych w niniejszym formularzu w
                celu umożliwienia kontaktu oraz przekazywania materiałów marketingowych i promocyjnych dotyczących
                inwestycji realizowanych przez Spółkę.</label>
            </div>
            <div class="input input--checkbox">
              <input type="checkbox" id="privacy-2" name="privacy-2" />
              <label for="privacy-2">Wyrażam zgodę na otrzymywanie od Greenwood II sp. z o.o. drogą elektroniczną na
                wskazany przeze mnie adres e-mail informacji handlowej dotyczących produktów oferowanych przez Greenwood
                II sp. z o.o. w rozumieniu art. 10 ust. 1 Ustawy z dnia 18 lipca 2002 roku o świadczeniu usług drogą
                elektroniczną.</label>
            </div>
            <div class="input input--checkbox">
              <input type="checkbox" id="privacy-3" name="privacy-3" />
              <label for="privacy-3">Wyrażam zgodę na otrzymywanie od Greenwood II sp. z o.o. drogą elektroniczną na
                wskazany przeze mnie adres e-mail informacji handlowej dotyczących produktów oferowanych przez Greenwood
                II sp. z o.o. w rozumieniu art. 10 ust. 1 Ustawy z dnia 18 lipca 2002 roku o świadczeniu usług drogą
                elektroniczną.</label>
            </div>
          </div>

          <button type="submit" class="btn btn--primary form__submit">Wyślij</button>
        </form>
      </div>

    </div>

  </div>
</section>