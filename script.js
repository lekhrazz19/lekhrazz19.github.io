// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.style.color = 'var(--text-light)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--text)';
        }
    });
});

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
            entry.target.style.opacity = '0';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all items
document.querySelectorAll('.work-item, .about-item, .skill-group, .timeline-item').forEach(item => {
    observer.observe(item);
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover glow effect to cards
document.querySelectorAll('.work-item, .about-item, .skill-group').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// Stagger animation for grid items
document.querySelectorAll('.work-grid, .about-grid, .skills-container').forEach(grid => {
    const items = grid.querySelectorAll(':scope > *');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Cursor effect on hover
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    document.querySelectorAll('.work-item, .about-item, .skill-group, .timeline-item').forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(x - elementX, 2) + Math.pow(y - elementY, 2));
        
        if (distance < 200) {
            element.style.opacity = '1';
        }
    });
});

// Observe all cards
document.querySelectorAll('.about-item, .project-card, .skill-group, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Smooth scroll indicator
window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    document.documentElement.style.setProperty('--scroll', scrollPercentage);
});

console.log('🎨 Three.js Portfolio loaded!');
