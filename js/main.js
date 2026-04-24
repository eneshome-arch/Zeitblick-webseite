// Navigation scroll effect
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
document.querySelectorAll('.nav__mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.style.color = 'var(--primary)';
  }
});

// ── Google Maps Lazy Load ──
function loadMap() {
  const iframe = document.getElementById('googleMap');
  const consent = document.getElementById('mapConsent');
  if (iframe && iframe.dataset.src) {
    iframe.src = iframe.dataset.src;
    iframe.style.display = 'block';
  }
  if (consent) consent.style.display = 'none';
  localStorage.setItem('cookie_consent', 'all');
}

// Auto-load map if consent was previously given
if (localStorage.getItem('cookie_consent') === 'all') {
  document.addEventListener('DOMContentLoaded', loadMap);
}

// ── Cookie Banner ──
(function () {
  if (localStorage.getItem('cookie_consent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie-Einstellungen');
  banner.innerHTML = `
    <div class="cookie-banner__inner">
      <div class="cookie-banner__text">
        <strong>Cookies & Datenschutz</strong>
        <p>Wir nutzen externe Dienste wie Google Maps, die beim Laden Daten an Dritte übertragen. Bitte wählen Sie Ihre Einstellungen.</p>
        <a href="datenschutz.html">Datenschutzerklärung</a>
      </div>
      <div class="cookie-banner__actions">
        <button id="cookieNecessary" class="btn btn--outline">Nur notwendige</button>
        <button id="cookieAcceptAll" class="btn btn--primary">Alle akzeptieren</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('cookieAcceptAll').addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'all');
    banner.remove();
    loadMap();
  });

  document.getElementById('cookieNecessary').addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'necessary');
    banner.remove();
  });
})();

// ── Kontaktformular — Formspree ──
// WICHTIG: Ersetze YOUR_FORMSPREE_ID mit deiner echten ID von formspree.io
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');
    const error = document.getElementById('formError');

    btn.disabled = true;
    btn.textContent = 'Wird gesendet…';
    if (error) error.style.display = 'none';

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        if (success) {
          success.style.display = 'block';
          setTimeout(() => (success.style.display = 'none'), 7000);
        }
      } else {
        if (error) error.style.display = 'block';
      }
    } catch (_) {
      if (error) error.style.display = 'block';
    }

    btn.disabled = false;
    btn.textContent = 'Nachricht senden';
  });
}

// ── Scroll Animations ──
const animEls = document.querySelectorAll('.card, .job-card, .step, .testimonial');
animEls.forEach(el => el.classList.add('scroll-hidden'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('scroll-hidden');
      entry.target.classList.add('scroll-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

animEls.forEach(el => observer.observe(el));

setTimeout(() => {
  animEls.forEach(el => {
    el.classList.remove('scroll-hidden');
    el.classList.add('scroll-visible');
  });
}, 800);

// ── Count-Up Animation ──
function countUp(el) {
  const raw = el.textContent.trim();
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return;
  const target = parseInt(match[1], 10);
  const suffix = match[2] || '';
  const start = target > 100 ? target - 100 : 0;
  const duration = 1600;
  const startTime = performance.now();

  function frame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * ease);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stats__number').forEach(el => countObserver.observe(el));
