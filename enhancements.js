(() => {
  const HERO_PARTS = [1,2,3,4,5,6,7].map(n => `hero/part-${n}.txt`);

  async function loadFounderHero(){
    const heroImg = document.querySelector('.hero-media img');
    if(!heroImg) return;
    try{
      const parts = await Promise.all(HERO_PARTS.map(async url => {
        const r = await fetch(url, {cache:'force-cache'});
        if(!r.ok) throw new Error(`Hero part ${url}: ${r.status}`);
        return (await r.text()).trim();
      }));
      heroImg.src = 'data:image/jpeg;base64,' + parts.join('');
      heroImg.classList.add('founder-hero-loaded');
    }catch(err){
      console.warn('Founder hero fallback is being used', err);
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
    loadFounderHero();
    addYandexMap();
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
