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
  // Close on link click
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

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');
    btn.disabled = true;
    btn.textContent = 'Wird gesendet…';
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Nachricht senden';
      if (success) {
        success.style.display = 'block';
        setTimeout(() => success.style.display = 'none', 6000);
      }
    }, 1200);
  });
}

// Scroll animations — CSS class approach, with fallback timer
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

// Fallback: reveal everything after 800ms regardless
setTimeout(() => {
  animEls.forEach(el => {
    el.classList.remove('scroll-hidden');
    el.classList.add('scroll-visible');
  });
}, 800);
