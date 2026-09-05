(() => {
  const HERO_DESKTOP = 'assets/images/hero-founder-desktop.jpg?v=20260905b';
  const HERO_MOBILE = 'assets/images/hero-founder-mobile.jpg?v=20260905b';
  const MAP_URL = 'https://yandex.ru/maps/org/agapova_studio/171314439639/';
  const MAP_EMBED = 'https://yandex.ru/map-widget/v1/?ll=87.137265%2C53.769699&mode=search&oid=171314439639&ol=biz&z=17';

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

  function normalizeYandexMap(section){
    if(!section) return section;

    const frame = section.querySelector('.location-map__frame');
    if(frame){
      frame.querySelectorAll('.location-map__pin').forEach(el => el.remove());
      let iframe = frame.querySelector('iframe');
      if(!iframe){
        iframe = document.createElement('iframe');
        frame.appendChild(iframe);
      }
      iframe.src = MAP_EMBED;
      iframe.loading = 'lazy';
      iframe.allowFullscreen = true;
      iframe.title = 'AGAPOVA STUDIO на Яндекс Картах';
    }

    section.querySelectorAll('a').forEach(a => {
      if(/Яндекс|картах|Карт/i.test(a.textContent || '')){
        a.href = MAP_URL;
        a.target = '_blank';
        a.rel = 'noopener';
      }
    });

    return section;
  }

  function createYandexMap(){
    let section = document.querySelector('.location-map');
    if(section) return normalizeYandexMap(section);

    section = document.createElement('section');
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
          <a href="${MAP_URL}" target="_blank" rel="noopener">Открыть в Яндекс Картах →</a>
        </div>
      </div>
      <div class="container location-map__frame">
        <iframe src="${MAP_EMBED}" loading="lazy" allowfullscreen="true" title="AGAPOVA STUDIO на Яндекс Картах"></iframe>
      </div>`;
    return section;
  }

  function placeYandexMap(){
    const section = createYandexMap();
    const footer = document.querySelector('.site-footer');
    const cta = document.querySelector('.cta');
    if(!section || !footer) return;

    const mobile = window.matchMedia('(max-width:760px)').matches;
    if(mobile && cta){
      /* Mobile: map first, then the loyalty card. */
      cta.insertAdjacentElement('beforebegin', section);
    }else{
      /* Desktop: loyalty card, then map, then footer. */
      footer.insertAdjacentElement('beforebegin', section);
    }
  }

  const boot = () => {
    setFounderHero();
    placeYandexMap();

    const mq = window.matchMedia('(max-width:760px)');
    const onChange = () => {
      const heroImg = document.querySelector('.hero-media img');
      if(heroImg) heroImg.classList.remove('founder-hero-loaded');
      setFounderHero();
      placeYandexMap();
    };
    if(mq.addEventListener) mq.addEventListener('change', onChange);
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
