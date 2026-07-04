/* ==========================================================================
   Home page logic — mirrors the original React Home component:
   hero slider, countdown, rotating images, speakers strip + modal,
   scroll reveal animations, gallery strips, important dates status.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const _base = window.location.pathname.includes('/pages/') ? '../' : '';

  /* ---------- Hero Slider ---------- */
  const slides = [
    {
      image: _base + 'assets/images/slide4.JPG',
      overlay: 'rgba(0,0,0,0.3)',
      title: '3<sup>rd</sup> International Conference',
      subtitle: 'Signal Processing, Communication, Power &amp; Embedded Systems',
      tag: 'IEEE Technically Co-Sponsored',
    },
    {
      image: _base + 'assets/images/slide1.png',
      overlay: 'rgba(0,0,0,0.2)',
      title: 'Centurion University of Technology and Management, Parlakhemundi, Odisha',
      subtitle: '04<sup>th</sup>-06<sup>th</sup> February 2027',
      tag: 'Hybrid Mode',
    },
    {
      image: _base + 'assets/images/slide5.JPG',
      overlay: 'rgba(0,0,0,0.3)',
      title: '',
      subtitle: 'Call for Papers',
      tag: 'IEEE Conference',
    },
  ];

  let currentSlide = 0;
  const sliderSlidesEl = document.getElementById('slider-slides');

  function renderSlides() {
    sliderSlidesEl.innerHTML = slides.map((slide, index) => `
      <div class="slider-slide ${index === currentSlide ? 'active' : ''}"
           style="background-image: linear-gradient(${slide.overlay}, ${slide.overlay}), url(${slide.image});">
        <div class="slide-content">
          <div class="slide-badge">${slide.tag}</div>
          ${slide.title ? `<h1 class="slide-title">${slide.title}</h1>` : ''}
          <h2 class="slide-subtitle">${slide.subtitle}</h2>
          <div class="slide-actions">
            <button class="secondary-btn" onclick="window.open(_base + 'pages/paper-submission.html', '_blank')">
              <i class="fas fa-paper-plane btn-icon"></i>
              Submit Paper
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
  renderSlides();

  document.getElementById('slider-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlides();
  });
  document.getElementById('slider-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlides();
  });
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlides();
  }, 4000);

  /* ---------- Countdown ---------- */
  function updateCountdown() {
    const targetDate = new Date('2027-02-04T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance > 0) {
      document.getElementById('cd-days').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
      document.getElementById('cd-hours').textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById('cd-minutes').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById('cd-seconds').textContent = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---------- Conference Quick Info ---------- */
  const conferenceInfo = [
    { icon: 'fa-calendar-days', label: 'Dates', value: '04-06 Feb 2027', color: '#FF6B6B', link: _base + 'pages/imp-dates.html' },
    { icon: 'fa-location-dot', label: 'Venue', value: 'Centurion University of Technology and Management, Paralakhemundi', color: '#4ECDC4', link: 'https://maps.app.goo.gl/hVvbqeLRXWvEa9gT9' },
    { icon: 'fa-paper-plane', label: 'Submissions', value: 'Open Now', color: '#45B7D1', link: _base + 'pages/paper-submission.html' },
    { icon: 'fa-award', label: 'Publication', value: 'IEEE Xplore', color: '#96CEB4', link: _base + 'pages/publication.html' },
    { icon: 'fa-clipboard-list', label: 'Mode', value: 'Hybrid', color: '#DDA0DD', link: _base + 'pages/program-schedule.html' },
  ];
  const infoGrid = document.getElementById('info-grid');
  infoGrid.innerHTML = conferenceInfo.map((item) => {
    const isExternal = item.link.startsWith('http');
    const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `
      <a href="${item.link}"${target} class="info-card" style="text-decoration:none;">
        <div class="info-icon" style="background-color:${item.color};"><i class="fas ${item.icon}"></i></div>
        <div class="info-content">
          <div class="info-label">${item.label}</div>
          <div class="info-value">${item.value}</div>
        </div>
      </a>`;
  }).join('');

  /* ---------- Keynote Speakers ---------- */
  const speakersTrack = document.getElementById('speakers-strip-track');
  let speakersData = [];

  fetch(_base + 'data/speakers.json')
    .then((res) => res.json())
    .then((data) => {
      speakersData = data;
      const cardsHtml = [0, 1].flatMap(() => data.map((speaker) => `
        <div class="speaker-card" data-speaker-id="${speaker.id}">
          <div class="speaker-image-wrapper">
            <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image" />
          </div>
          <div class="speaker-card-divider"></div>
          <h3 class="speaker-name">${speaker.name}</h3>
          <div class="speaker-card-divider2"></div>
          <p class="speaker-profession">${speaker.profession}</p>
          <button class="speaker-see-more" data-speaker-id="${speaker.id}">See More →</button>
        </div>
      `)).join('');
      speakersTrack.innerHTML = cardsHtml;

      speakersTrack.querySelectorAll('.speaker-see-more').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = Number(btn.getAttribute('data-speaker-id'));
          const speaker = speakersData.find((s) => s.id === id);
          if (speaker) openSpeakerModal(speaker);
        });
      });
    })
    .catch((err) => console.error('Error loading speakers:', err));

  const speakerModalOverlay = document.getElementById('speaker-modal-overlay');
  const speakerModalContent = document.getElementById('speaker-modal-content');
  const speakerModalClose = document.getElementById('speaker-modal-close');

  function openSpeakerModal(speaker) {
    const aboutShort = speaker.about.length > 300;
    speakerModalContent.innerHTML = `
      <div class="modal-left">
        <img src="${speaker.image}" alt="${speaker.name}" class="modal-speaker-image" />
      </div>
      <div class="modal-right">
        <h2 class="modal-speaker-name">${speaker.name}</h2>
        <p class="modal-speaker-profession">${speaker.profession}</p>
        <div class="modal-section">
          <h3>About</h3>
          <p>
            <span id="modal-about-text">${aboutShort ? speaker.about.substring(0, 300) + '...' : speaker.about}</span>
            ${aboutShort ? '<button class="read-more-btn" id="modal-read-more">Read More</button>' : ''}
          </p>
        </div>
        <div class="modal-section">
          <h3>Talk Title</h3>
          <p class="talk-title">${speaker.talkTitle}</p>
        </div>
        <div class="modal-section">
          <h3>Abstract</h3>
          <p>${speaker.abstract}</p>
        </div>
      </div>
    `;
    speakerModalOverlay.style.display = 'flex';

    const readMoreBtn = document.getElementById('modal-read-more');
    if (readMoreBtn) {
      readMoreBtn.addEventListener('click', () => {
        document.getElementById('modal-about-text').textContent = speaker.about;
        readMoreBtn.style.display = 'none';
      });
    }
  }

  speakerModalClose.addEventListener('click', () => { speakerModalOverlay.style.display = 'none'; });
  speakerModalOverlay.addEventListener('click', (e) => {
    if (e.target === speakerModalOverlay) speakerModalOverlay.style.display = 'none';
  });
  document.getElementById('speaker-modal').addEventListener('click', (e) => e.stopPropagation());

  /* ---------- Rotating Images (About / Dept / SoET) ---------- */
  const aboutImages = [
    { src: _base + 'assets/images/slide1.png', title: 'CUTM Campus' },
    { src: _base + 'assets/images/slide2.png', title: 'University Area' },
    { src: _base + 'assets/images/promod_udyan.jpg', title: 'Pramod Udhyan' },
  ];
  const deptImages = [
    { src: _base + 'assets/images/ece1.png', title: 'ECE' },
    { src: _base + 'assets/images/ece2.png', title: 'Department of ECE' },
    { src: _base + 'assets/images/slide2.png', title: 'University Area' },
  ];
  const scopesImages = [
    { src: _base + 'assets/images/soet1.jpg', title: 'SoET Drone Performance' },
    { src: _base + 'assets/images/soet2.jpg', title: 'SoET Building' },
    { src: _base + 'assets/images/soet3.jpg', title: 'SoET Building' },
  ];

  function startRotator(images, imgId, titleId) {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % images.length;
      const imgEl = document.getElementById(imgId);
      const titleEl = document.getElementById(titleId);
      imgEl.src = images[index].src;
      titleEl.textContent = images[index].title;
    }, 3000);
  }
  startRotator(aboutImages, 'about-img', 'about-img-title');
  startRotator(deptImages, 'dept-img', 'dept-img-title');
  startRotator(scopesImages, 'scopes-img', 'scopes-img-title');

  /* ---------- Gallery Strips (2024 / 2016) ---------- */
  const galleryImages = [
    { n: 1, ext: 'png' }, { n: 2, ext: 'png' }, { n: 3, ext: 'jpeg' },
    { n: 4, ext: 'jpeg' }, { n: 5, ext: 'jpeg' }, { n: 6, ext: 'jpeg' },
    { n: 7, ext: 'jpeg' }, { n: 8, ext: 'jpeg' }, { n: 9, ext: 'jpeg' },
  ];
  function renderGallery(trackId, folder, label) {
    const track = document.getElementById(trackId);
    const html = [0, 1].flatMap(() => galleryImages.map((img) =>
      `<img src="${_base}assets/gallery/${folder}/scope${img.n}.${img.ext}" alt="${label} - ${img.n}" class="gallery-strip-img" />`
    )).join('');
    track.innerHTML = html;
  }
  renderGallery('gallery-2024-track', 'scopes2024', 'SCOPES 2024');
  renderGallery('gallery-2016-track', 'scopes2024', 'SCOPES 2016');

  /* ---------- Important Dates status ---------- */
  const importantDates = [
    { title: 'Paper Submission open', date: '01 May 2026', start: new Date('2026-05-01'), end: new Date('2026-08-30') },
    { title: 'Paper Submission close', date: '30 August 2026', start: new Date('2026-08-30'), end: new Date('2026-08-30') },
    { title: 'Notification of Acceptance', date: '30 October 2026', start: new Date('2026-10-30'), end: new Date('2026-10-30') },
    { title: "Start date of registration & camera ready submission", date: '01 November 2026', start: new Date('2026-11-01'), end: new Date('2026-11-30') },
    { title: 'Conference Dates', date: '04-06 February 2027', start: new Date('2027-02-04'), end: new Date('2027-02-07') },
  ];
  function getStatus(d) {
    const now = new Date();
    if (now > d.end) return 'over';
    if (now >= d.start) return 'active';
    return 'upcoming';
  }
  const datesListEl = document.getElementById('home-dates-list');
  datesListEl.innerHTML = importantDates.map((d) => `
    <div class="date-item ${getStatus(d)}">
      <div class="date-dot"></div>
      <div class="date-content">
        <h4 class="date-title">${d.title}</h4>
        <div class="date-value">${d.date}</div>
      </div>
    </div>
  `).join('');

  /* ---------- Scroll reveal animations ---------- */
  const animatedSections = [
    'info-grid-wrapper', 'conf-about-section', 'speakers-section',
    'about-university-section', 'soet-section', 'dept-section',
    'copyright-section', 'dates-fees-section',
  ];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('anim-visible');
    });
  }, { threshold: 0.15 });
  animatedSections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
