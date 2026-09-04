(() => {
  const HERO_DESKTOP = 'assets/images/hero-founder-desktop.jpg?v=20260905a';
  const HERO_MOBILE = 'assets/images/hero-founder-mobile.jpg?v=20260905a';

  function setFounderHero(){
    const heroImg = document.querySelector('.hero-media img');
    if(!heroImg) return;
    const mobile = window.matchMedia('(max-width:760px)').matches;
    const nextSrc = mobile ? HERO_MOBILE : HERO_DESKTOP;
    if(heroImg.getAttribute('src') !== nextSrc){
      heroImg.src = nextSrc;
    }
    heroImg.decoding = 'async';
    heroImg.addEventListener('load', () => {
      requestAnimationFrame(() => heroImg.classList.add('founder-hero-loaded'));
    }, {once:true});
    if(heroImg.complete){
      requestAnimationFrame(() => heroImg.classList.add('founder-hero-loaded'));
    }
  }

  function addYandexMap(){
    if(document.querySelector('.location-map')) return;
    const footer = document.querySelector('.site-footer');
    if(!footer) return;

    const section = document.createElement('section');
    section.className = 'location-map';
    section.id = 'map';
    section.innerHTML = `
      <div class="container location-map__head">
        <div>
          <div class="location-map__eyebrow">AGAPOVA STUDIO</div>
          <h2>Мы на карте</h2>
        </div>
        <div class="location-map__info">
          <strong>Новокузнецк · ул. Запорожская, 73Б</strong>
          <span>Ежедневно 09:00—21:00</span>
          <a href="https://yandex.ru/maps/237/novokuznetsk/house/bE4YdwRnS0MCQFtpfXt3eHpqbQ%3D%3D/" target="_blank" rel="noopener">Открыть в Яндекс Картах →</a>
        </div>
      </div>
      <div class="container location-map__frame">
        <iframe src="https://yandex.ru/map-widget/v1/?ll=87.137265%2C53.769699&mode=search&text=Agapova%20Studio%2C%20Новокузнецк%2C%20Запорожская%2073Б&z=16" loading="lazy" allowfullscreen="true" title="AGAPOVA STUDIO на Яндекс Картах"></iframe>
      </div>`;
    footer.insertAdjacentElement('afterend', section);
  }

  const boot = () => {
    setFounderHero();
    addYandexMap();
    const mq = window.matchMedia('(max-width:760px)');
    const onChange = () => {
      const heroImg = document.querySelector('.hero-media img');
      if(heroImg) heroImg.classList.remove('founder-hero-loaded');
      setFounderHero();
    };
    if(mq.addEventListener) mq.addEventListener('change', onChange);
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
