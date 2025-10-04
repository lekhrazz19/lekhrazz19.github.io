// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('show');
  });
  // Close on Escape or outside click
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      links.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && e.target !== toggle) {
      links.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }, true);
}

// Close menu on nav link click (mobile)
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('show');
  toggle?.setAttribute('aria-expanded', 'false');
}));

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  // Fallback: show all
  revealEls.forEach(el => el.classList.add('in'));
}

// Dynamic projects
async function loadProjects() {
  const container = document.getElementById('projects-cards');
  if (!container) return;
  try {
    const res = await fetch('projects.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load projects');
    const items = await res.json();
    container.innerHTML = '';
    items.forEach((p) => {
      const art = document.createElement('article');
      art.className = 'card reveal';
      art.innerHTML = `
        <div class="card-body">
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
        </div>
        <div class="card-actions">
          ${p.demo ? `<a class="btn small" target="_blank" rel="noopener" href="${p.demo}">Live</a>` : ''}
          ${p.repo ? `<a class="btn small ghost" target="_blank" rel="noopener" href="${p.repo}">Code</a>` : ''}
        </div>
      `;
      container.appendChild(art);
    });
    // Ensure newly added elements animate
    document.querySelectorAll('#projects-cards .reveal').forEach(el => {
      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('in');
      } else {
        const entry = { isIntersecting: true, target: el };
        el.classList.add('in');
      }
    });
  } catch (e) {
    console.error(e);
  }
}
loadProjects();

// Smooth scroll offset for header (optional fine-tune)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 10; // tiny offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
