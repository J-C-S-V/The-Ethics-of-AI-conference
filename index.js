const hamburguerMenuIndex = document.querySelector('.header__svg');
const menu = document.querySelector('.DOM-menu--inactive');

hamburguerMenuIndex.addEventListener('click', () => {
  menu.classList.toggle('DOM-menu');
  menu.innerHTML = `
  <svg
    class="DOM-menu__svg"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-x"
    viewBox="0 0 16 16"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
  <ul class="DOM-menu__ul">
    <li><a href="about.html">About</a></li>
    <li><a href="#">Program</a></li>
    <li><a href="#">Join</a></li>
    <li><a href="#">Sponsor</a></li>
    <li><a href="#">News</a></li>
    <li class="li-special"><a href="#">CC Campaign</a></li>
  </ul>

`;
  const closeMenu = document.querySelector('.DOM-menu__svg');
  closeMenu.addEventListener('click', () => {
    menu.innerHTML = '';
    menu.classList.toggle('DOM-menu');
  });
});

const speakerList = [
  {
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    photo: './img/speaker_1.png',
  },
  {
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    photo: './img/speaker_2.png',
  },
  {
    name: 'Kilnam Chon',
    role: '',
    description:
      "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame",
    photo: './img/speaker_3.png',
  },
  {
    name: 'Julia Leda',
    role: 'President of Young Pirates of Europe',
    description:
      'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    photo: './img/speaker_4.png',
  },
  {
    name: 'Lila tretikov',
    role: 'Executive Director of the Wikimedia Foundation',
    description:
      'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    photo: './img/speaker_5.png',
  },
  {
    name: 'Ryan Merkley',
    role: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    photo: './img/speaker_6.png',
  },
];

const speakersSection2 = document.querySelector('.footer2');

window.addEventListener('load', () => {
  speakersSection2.innerHTML = `
  <h2>Featured Speakers</h2>
  <svg
    class="footer__svg"
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="3"
    viewBox="0 0 31 3"
    fill="none"
  >
    <line
      x1="0.5"
      y1="1.5"
      x2="30.5"
      y2="1.5"
      stroke="#A04038"
      stroke-width="2"
    />
  </svg>
  <article class="speakers">
    <img src="${speakerList[0].photo}" alt="speaker one" />
    <aside>
      <h3 class="speakers__h3">${speakerList[0].name}</h3>
      <p class="speakers__p-1">
      ${speakerList[0].role}
      </p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
<line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
</svg>
      <p class="speakers__p-2">
      ${speakerList[0].description}
      </p>
    </aside>
  </article>
  <article class="speakers">
    <img src="${speakerList[1].photo}" />
    <aside>
      <h3 class="speakers__h3">${speakerList[1].name}</h3>
      <p class="speakers__p-1">
      ${speakerList[1].role}
      </p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
      <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
      </svg>
      <p class="speakers__p-2">
      ${speakerList[1].description}
      </p>
    </aside>
  </article>
  <button class="speakers__button">
  <img src="./img/more-btn.png" alt="More options" />
  </button>
  `;
});

const speakersSection = document.querySelector('.footer');

window.addEventListener('load', () => {
  speakersSection.innerHTML = `

<h2>Featured Speakers</h2>
<svg
  class="footer__svg"
  xmlns="http://www.w3.org/2000/svg"
  width="31"
  height="3"
  viewBox="0 0 31 3"
  fill="none"
>
  <line
    x1="0.5"
    y1="1.5"
    x2="30.5"
    y2="1.5"
    stroke="#A04038"
    stroke-width="2"
  />
</svg>
<div class="speakers-flex-container">
  <article class="speakers">
    <img src="${speakerList[0].photo}" alt="speaker one" />
    <aside>
      <h3 class="speakers__h3">${speakerList[0].name}</h3>
      <p class="speakers__p-1">
      ${speakerList[0].role}
      </p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
      <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
      </svg>
      <p class="speakers__p-2">
      ${speakerList[0].description}
      </p>
    </aside>
  </article>
  <article class="speakers">
    <img src="${speakerList[2].photo}" alt="speaker one" />
    <aside>
      <h3 class="speakers__h3">${speakerList[2].name}</h3>
      <p class="speakers__p-1"></p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
      <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
      </svg>
      <p class="speakers__p-2">
      ${speakerList[2].description}
      </p>
    </aside>
  </article>
  <article class="speakers">
    <img src="${speakerList[1].photo}" alt="speaker one" />
    <aside>
      <h3 class="speakers__h3">${speakerList[1].name}</h3>
      <p class="speakers__p-1">
      ${speakerList[1].role}
      </p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
      <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
      </svg>
      <p class="speakers__p-2">
      ${speakerList[1].description}
      </p>
    </aside>
  </article>

  <article class="speakers">
    <img src="${speakerList[3].photo}" alt="speaker one" />
    <aside>
      <h3 class="speakers__h3">${speakerList[3].name}</h3>
      <p class="speakers__p-1">${speakerList[3].role}</p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
      <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
      </svg>
      <p class="speakers__p-2">
      ${speakerList[3].description}
      </p>
    </aside>
  </article>
  <article class="speakers">
    <img src="${speakerList[4].photo}" alt="speaker one" />
    <aside>
      <h3 class="speakers__h3">${speakerList[4].name}</h3>
      <p class="speakers__p-1">
      ${speakerList[4].role}
      </p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
      <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
      </svg>
      <p class="speakers__p-2">
      ${speakerList[4].description}
      </p>
    </aside>
  </article>
  <article class="speakers">
    <img src="${speakerList[5].photo}" alt="speaker one" />
    <aside>
      <h3 class="speakers__h3">${speakerList[5].name}</h3>
      <p class="speakers__p-1">
      ${speakerList[5].role}
      </p>
      <svg class="short-horizontal-line" xmlns="http://www.w3.org/2000/svg" width="26" height="2" viewBox="0 0 26 2" fill="none">
      <line x1="0.5" y1="1" x2="25.5" y2="1" stroke="#D9D9D9" stroke-width="2"/>
      </svg>
      <p class="speakers__p-2">
      ${speakerList[5].description}
      </p>
    </aside>
  </article>
</div>`;
});
