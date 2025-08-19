<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Greenwood</title>
  <link rel="stylesheet" href="style.min.css">
  <link rel="icon" href="imgs/favicon/favicon.png" type="image/x-icon">
  <script src="js/jquery/jquery-3.7.1.min.js"></script>
  <script src="js/slick/slick.min.js"></script>
</head>

<body>

  <header class="header">
    <div class="wrapper">

      <h1 class="header__logo">
        <a href="/">
          <img src="imgs/logos/logo.svg" alt="GREENWOOD PARK" class="header__logo-img">
        </a>
      </h1>

      <div class="header__menu">

        <nav class="header__nav">
          <ul>
            <li><a href="/">Strona główna</a></li>
            <li><a href="/mieszkania.php">Mieszkania</a></li>
            <li><a href="/o-inwestycji.php">O inwestycji</a></li>
            <li><a href="/galeria.php">Galeria</a></li>
            <li><a href="/lokalizacja.php">Lokalizacja</a></li>
            <li><a href="/kontakt.php">Kontakt</a></li>
          </ul>
        </nav>

        <a href="tel:+48123456789" class="header__phone btn btn--primary">123 456 789</a>

        <div class="header__socials socials">
          <div class="socials__icons">
            <a href="#" class="socials__icon">
              <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="31.929" height="31.929"
                viewBox="0 0 31.929 31.929">
                <path d="M213.111,210.056A3.056,3.056,0,1,1,210.056,207,3.056,3.056,0,0,1,213.111,210.056Zm0,0"
                  transform="translate(-194.091 -194.091)" fill="#fff" />
                <path
                  d="M150.146,137.6a3.036,3.036,0,0,0-1.74-1.74,5.072,5.072,0,0,0-1.7-.315c-.967-.044-1.257-.054-3.7-.054s-2.738.009-3.7.053a5.075,5.075,0,0,0-1.7.316,3.037,3.037,0,0,0-1.74,1.74,5.074,5.074,0,0,0-.315,1.7c-.044.967-.054,1.256-.054,3.7s.01,2.738.054,3.7a5.072,5.072,0,0,0,.315,1.7,3.036,3.036,0,0,0,1.74,1.74,5.066,5.066,0,0,0,1.7.316c.967.044,1.256.053,3.7.053s2.738-.009,3.7-.053a5.066,5.066,0,0,0,1.7-.316,3.036,3.036,0,0,0,1.74-1.74,5.076,5.076,0,0,0,.316-1.7c.044-.967.053-1.257.053-3.7s-.009-2.738-.053-3.7A5.066,5.066,0,0,0,150.146,137.6ZM143,147.711A4.707,4.707,0,1,1,147.707,143,4.707,4.707,0,0,1,143,147.711Zm4.893-8.5a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,147.894,139.211Zm0,0"
                  transform="translate(-127.036 -127.039)" fill="#fff" />
                <path
                  d="M15.964,0A15.964,15.964,0,1,0,31.929,15.964,15.966,15.966,0,0,0,15.964,0Zm9.112,19.744a6.726,6.726,0,0,1-.426,2.225,4.687,4.687,0,0,1-2.681,2.681,6.73,6.73,0,0,1-2.225.426c-.978.045-1.29.055-3.779.055s-2.8-.011-3.78-.055A6.73,6.73,0,0,1,9.96,24.65a4.687,4.687,0,0,1-2.681-2.681,6.724,6.724,0,0,1-.426-2.225c-.045-.978-.056-1.29-.056-3.78s.01-2.8.055-3.779A6.726,6.726,0,0,1,7.278,9.96,4.69,4.69,0,0,1,9.96,7.279a6.732,6.732,0,0,1,2.225-.426c.978-.045,1.29-.055,3.779-.055s2.8.011,3.779.056a6.733,6.733,0,0,1,2.225.426A4.689,4.689,0,0,1,24.65,9.96a6.725,6.725,0,0,1,.426,2.225c.045.978.055,1.29.055,3.779S25.121,18.766,25.076,19.744Zm0,0"
                  fill="#fff" />
              </svg>
            </a>
            <a href="#" class="socials__icon">
              <svg id="fb" xmlns="http://www.w3.org/2000/svg" width="31.929" height="31.929"
                viewBox="0 0 31.929 31.929">
                <g>
                  <path
                    d="M15.964,0A15.964,15.964,0,1,0,31.929,15.964,15.964,15.964,0,0,0,15.964,0Zm4.541,10.39c0,.3-.126.42-.42.42-.565,0-1.13,0-1.693.023s-.87.279-.87.868c-.013.63,0,1.248,0,1.891h2.418c.344,0,.462.118.462.464v2.533c0,.342-.109.45-.456.452H17.5v6.835c0,.365-.113.481-.475.481H14.4c-.317,0-.441-.124-.441-.441V17.05H11.868c-.328,0-.445-.12-.445-.45V14.053c0-.328.124-.452.447-.452h2.086V11.763A4.6,4.6,0,0,1,14.53,9.4a3.468,3.468,0,0,1,1.876-1.559,4.6,4.6,0,0,1,1.607-.277h2.065c.3,0,.42.13.42.42.011.809.011,1.609.008,2.407Z"
                    fill="#fff" />
                </g>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <button class="header__menu-toggle">
        <span></span>
      </button>

    </div>
  </header>