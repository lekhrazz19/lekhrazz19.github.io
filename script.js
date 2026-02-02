// ===========================
// Particles Background Animation
// ===========================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
let animationId;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
        ctx.fill();
    }
}

function createParticles() {
    particles = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();

    animationId = requestAnimationFrame(animate);
}

// Initialize particles
resizeCanvas();
createParticles();
animate();

// Resize handler
window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
});

// ===========================
// Mobile Navigation Toggle
// ===========================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling
// ===========================
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

// ===========================
// Navbar Scroll Effect
const scrollAnimationOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate');
            // Don't unobserve to allow re-triggering on scroll back up
        }
    });
}, scrollAnimationOptions);

// Observe hero section
const hero = document.querySelector('.hero');
if (hero) {
    scrollObserver.observe(hero);
}

// Observe about section
const about = document.querySelector('.about');
if (about) {
    scrollObserver.observe(about);
    const skillsGrid = about.querySelector('.skills-grid');
    if (skillsGrid) {
        scrollObserver.observe(skillsGrid);
    }
    const imageWrapper = about.querySelector('.image-wrapper');
    if (imageWrapper) {
        scrollObserver.observe(imageWrapper);
    }
}

// Observe services grid
const servicesGrid = document.querySelector('.services-grid');
if (servicesGrid) {
    scrollObserver.observe(servicesGrid);
}

// Observe portfolio grid
const portfolioGrid = document.querySelector('.portfolio-grid');
if (portfolioGrid) {
    scrollObserver.observe(portfolioGrid);
}

// Observe blogs grid
const blogsGrid = document.querySelector('.blogs-grid');
if (blogsGrid) {
    scrollObserver.observe(blogsGrid);
}

// Observe timeline
const timeline = document.querySelector('.timeline');
if (timeline) {
    scrollObserver.observe(timeline);
}

// Observe contact section
const contact = document.querySelector('.contact');
if (contact) {
    scrollObserver.observe(contact);
}

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(10, 15, 28, 0.95)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(10, 15, 28, 0.9)';
    }

    lastScroll = currentScroll;
});

// ===========================
// Contact Form Handler
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show success message (you can replace this with actual form submission)
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// ===========================
// Cursor Follow Effect - Cybersecurity Scanner Style
// ===========================
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    cursor.appendChild(cursorDot);
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor following animation
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.35;
        cursorY += (mouseY - cursorY) * 0.35;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            position: fixed;
            width: 24px;
            height: 24px;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
        }
        
        .cursor-dot {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid #00D4FF;
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.6), inset 0 0 10px rgba(0, 212, 255, 0.3);
            animation: cursorScan 3s linear infinite;
        }
        
        .cursor-dot::before {
            content: '';
            position: absolute;
            inset: 25%;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.8), transparent);
            border-radius: 50%;
            animation: cursorPulse 1.5s ease-in-out infinite;
        }
        
        .custom-cursor.active .cursor-dot {
            border-color: #7C3AED;
            box-shadow: 0 0 25px rgba(124, 58, 237, 0.8), inset 0 0 15px rgba(124, 58, 237, 0.4);
        }
        
        @keyframes cursorScan {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        
        @keyframes cursorPulse {
            0%, 100% {
                opacity: 0.4;
                transform: scale(0.8);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        @media (prefers-reduced-motion: reduce) {
            .cursor-dot,
            .cursor-dot::before {
                animation: none;
            }
        }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('a, button, .service-card, .portfolio-card, .blog-card, .skill-item').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// ===========================
// Typing Effect for Hero (Optional)
// ===========================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// }

// ===========================
// Stats Counter Animation
// ===========================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Observe stats and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target;
            const endValue = parseInt(statValue.textContent);
            statValue.dataset.suffix = statValue.textContent.replace(/[0-9]/g, '');
            animateValue(statValue, 0, endValue, 2000);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(stat => {
    statsObserver.observe(stat);
});

// ===========================
// 3D Tilt Interaction (Premium)
// ===========================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tiltElements = document.querySelectorAll('.service-card, .portfolio-card, .blog-card, .skill-item, .timeline-item, .cert-item, .contact-form');

// Add Aceternity-style 3D layers to all cards
document.querySelectorAll('.service-card, .portfolio-card, .blog-card, .skill-item, .timeline-item, .cert-item, .contact-form').forEach((card) => {
    card.classList.add('card-3d');
});

if (!prefersReducedMotion) {
    tiltElements.forEach((card) => {
        card.addEventListener('mousemove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;
            const rotateX = ((y - midY) / midY) * 6;
            const rotateY = ((x - midX) / midX) * -6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===========================
// Aceternity UI Components
// ===========================

// Spotlight Component - Creates floating spotlight effects
function initSpotlight() {
    if (prefersReducedMotion) return;
    
    const spotlight1 = document.createElement('div');
    spotlight1.className = 'spotlight spotlight-primary';
    spotlight1.style.top = '10%';
    spotlight1.style.left = '10%';
    document.body.appendChild(spotlight1);

    const spotlight2 = document.createElement('div');
    spotlight2.className = 'spotlight spotlight-secondary';
    spotlight2.style.top = '60%';
    spotlight2.style.right = '10%';
    document.body.appendChild(spotlight2);

    document.addEventListener('mousemove', (e) => {
        spotlight1.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
    });
}

// Sparkles Effect - Creates floating particles on hover
function createSparkles(element) {
    if (prefersReducedMotion) return;

    element.addEventListener('mouseenter', () => {
        const rect = element.getBoundingClientRect();
        const sparkleCount = 8;

        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.setProperty('--duration', `${2 + Math.random() * 1}s`);
            element.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 3000);
        }
    });
}

// Apply sparkles to CTA buttons
function initSparkles() {
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(btn => createSparkles(btn));
}

// Enhanced Glowing Effect on Cards
function initGlowingBorders() {
    const cards = document.querySelectorAll('.service-card, .portfolio-card, .blog-card');
    cards.forEach(card => {
        card.classList.add('glowing-border');
    });
}

// Animated Tooltip Helper
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        const tooltipText = el.getAttribute('data-tooltip');
        const wrapper = document.createElement('span');
        wrapper.className = 'tooltip-wrapper';
        
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = tooltipText;
        
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
        wrapper.appendChild(tooltip);
    });
}

// Ripple Effect on Buttons
function initRippleEffect() {
    if (prefersReducedMotion) return;

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple-button';
            ripple.style.position = 'absolute';
            ripple.style.pointerEvents = 'none';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Pulse Glow on Important CTAs
function initPulseGlow() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => btn.classList.add('pulse-glow'));
}

// Initialize all Aceternity components
window.addEventListener('load', () => {
    initSpotlight();
    initSparkles();
    initGlowingBorders();
    initTooltips();
    initRippleEffect();
    initPulseGlow();
});
