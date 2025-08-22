<section class="text-img text-img--multiple">

  <div class="wrapper">

    <div class="text-img__content">
      <h2 class="text-img__title scroll-animation">O inwestorze</h2>
      <div class="text-img__description scroll-animation delay-2">
        <div class="text-1">
          <p><strong>Greenwood Sp. z o. o.</strong>, to polska spółka deweloperska, która łączy doświadczenie branżowe z
            umiejętnością tworzenia przestrzeni sprzyjających codziennemu życiu. Zespół specjalistów z wieloletnim
            stażem
            w budownictwie realizuje projekty z dbałością o każdy detal – od etapu planowania po finalne przekazanie
            kluczy mieszkańcom.</p>
          <p>Działalność firmy rozpoczęła się od realizacji hotelu Narvil pod Warszawą, co pozwoliło zdobyć cenne
            doświadczenie w branży budowlanej i zarządzaniu inwestycjami na wysokim poziomie jakościowym. Następnie
            Spółka
            Greenwood rozpoczęła realizację projektów mieszkaniowych, a pierwszą, czteroetapową inwestycję było
            Miasteczko
            Greenwood na warszawskiej Białołęce. Osiedle charakteryzuje się nowoczesną, niską zabudową, komfortowymi
            układami mieszkań i dużymi przestrzeniami zielonymi, które tworzą kameralną i przyjazną atmosferę. Cały
            osiedle zaprojektowano z myślą o wygodzie i komforcie codziennego życia mieszkańców. </p>
        </div>

        <div class="text-2 hidden">
          <p>Wszystkie inwestycje Spółki Greenwood są realizowane zgodnie z wymogami Ustawy Deweloperskiej. Środki
            klientów są deponowane na mieszkaniowym rachunku powierniczym prowadzonym przez Bank Millennium, co
            gwarantuje
            pełne bezpieczeństwo zakupu i spokój inwestorów. Dzięki doświadczeniu zdobytemu przy Miasteczku Greenwood i
            hotelu Narvil pod Warszawą, firma zapewnia profesjonalną pomoc przy wyborze mieszkania oraz pełną obsługę
            podczas całego procesu realizacji inwestycji oraz po jej zakończeniu.</p>
        </div>

        <button onclick="toggleText()" class="btn btn--primary">Więcej o nas</button>
      </div>
    </div>

    <div class="text-img__image">
      <div class="text-img__image-inner">
        <img src="imgs/photos/photo-10.jpg" alt="GREENWOOD PARK" class="text-img__img scroll-animation delay-1">
        <img src="imgs/photos/photo-09.jpg" alt="GREENWOOD PARK" class="text-img__img scroll-animation delay-2">
        <img src="imgs/photos/photo-08.jpg" alt="GREENWOOD PARK" class="text-img__img scroll-animation delay-3">
        <img src="imgs/photos/photo-02.jpg" alt="GREENWOOD PARK" class="text-img__img scroll-animation delay-4">
      </div>
    </div>

  </div>

  <script>
    function toggleText() {
      const text1 = document.querySelector('.text-1');
      const text2 = document.querySelector('.text-2');
      text1.classList.toggle('hidden'); 
      text2.classList.toggle('hidden'); 
    }
  </script>

</section>