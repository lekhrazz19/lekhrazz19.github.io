// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('show');
  });
}

// Close menu on nav link click (mobile)
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('show');
  toggle?.setAttribute('aria-expanded', 'false');
}));

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
