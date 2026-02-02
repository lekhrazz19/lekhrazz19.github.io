import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#home" className="logo-name">&lt;Lekhraj Singh /&gt;</a>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm <span className="gradient-text">Lekhraj Singh</span></h1>
            <p className="hero-subtitle">
              A Full Stack Developer building elegant web applications and scalable solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/lekhraj-singh" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="https://twitter.com/lekhrajsingh" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a full-stack web developer with a passion for creating beautiful, functional websites. With expertise in React, Node.js, and modern web technologies, I build applications that solve real problems.</p>
              <p>My focus is on writing clean, maintainable code and delivering exceptional user experiences.</p>
            </div>
            <div className="about-skills">
              <h3>What I Do</h3>
              <div className="skill-box">
                <h4>🎨 Frontend Development</h4>
                <p>React, JavaScript, CSS3, Responsive Design</p>
              </div>
              <div className="skill-box">
                <h4>⚙️ Backend Development</h4>
                <p>Node.js, Express, MongoDB, PostgreSQL</p>
              </div>
              <div className="skill-box">
                <h4>🚀 Full Stack Solutions</h4>
                <p>End-to-end development with modern stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Vite</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Senior Developer</h3>
                <p className="company">Tech Company Inc.</p>
                <p className="date">2023 - Present</p>
                <p>Led development of full-stack web applications, improved performance by 40%, and mentored junior developers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <p className="company">Startup X</p>
                <p className="date">2021 - 2023</p>
                <p>Built responsive web interfaces with React, developed REST APIs with Node.js, and managed cloud deployments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p className="tech">React • Node.js • MongoDB • Stripe</p>
              <p>Full-stack e-commerce solution with payment integration and real-time inventory management.</p>
              <div className="project-links">
                <a href="#" className="link">View Project</a>
                <a href="#" className="link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Task Management App</h3>
              <p className="tech">React • Firebase • Redux</p>
              <p>Collaborative task management with real-time updates and team collaboration features.</p>
              <div className="project-links">
                <a href="#" className="link">View Project</a>
                <a href="#" className="link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p className="tech">React • Vite • CSS3</p>
              <p>Modern portfolio website with smooth animations and responsive design.</p>
              <div className="project-links">
                <a href="#" className="link">View Project</a>
                <a href="#" className="link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p><strong>Email:</strong> singhlekhraj497@gmail.com</p>
              <p><strong>Location:</strong> Bhilai, India</p>
              <div className="social-links">
                <a href="https://linkedin.com/in/lekhraj-singh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com/lekhrajsingh" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Lekhraj Singh. All rights reserved. Built with React + Vite.</p>
        </div>
      </footer>
    </div>
  );
}
    // Particle Background
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];

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

    function init() {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
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
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 150)})`;
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
      requestAnimationFrame(animate);
    }

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    // Scroll Animations
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animate');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section, .services-grid, .portfolio-grid, .blogs-grid, .timeline, .skills-grid').forEach(el => {
      scrollObserver.observe(el);
    });

    // Custom Cursor
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

      function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.35;
        cursorY += (mouseY - cursorY) * 0.35;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      document.querySelectorAll('a, button, .service-card, .portfolio-card, .blog-card, .skill-item').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
      });
    }
  }, []);

  return (
    <>
      <canvas id="particles"></canvas>
      
      {/* SVG Icons */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="icon-shield" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
        </symbol>
        <symbol id="icon-target" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </symbol>
        <symbol id="icon-tools" viewBox="0 0 24 24">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14 4.14 5.57 2 7.71 3.43 9.14 2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22 14.86 20.57Z" fill="currentColor"/>
        </symbol>
        <symbol id="icon-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </symbol>
        <symbol id="icon-code" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2" fill="none"/>
        </symbol>
        <symbol id="icon-radar" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </symbol>
      </svg>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="logo gradient-text">Lekhraj Singh</a>
            <div className="nav-menu">
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#blogs" className="nav-link">Blogs</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Securing Digital</span><br />Infrastructure
            </h1>
            <p className="hero-subtitle">
              Cybersecurity Researcher | Penetration Tester | Bug Bounty Hunter
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="#portfolio" className="btn btn-secondary">View Projects</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Security Assessments</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Services</span>
            <h2 className="section-title">What I Offer</h2>
          </div>
          <div className="services-grid">
            <CardContainer className="inter-var">
              <CardBody className="service-card glow-card card-3d">
                <CardItem translateZ="50" className="service-icon">
                  <svg width="30" height="30"><use href="#icon-shield"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h3" className="service-title">
                  Penetration Testing
                </CardItem>
                <CardItem translateZ="40" as="p" className="service-desc">
                  Comprehensive security assessments to identify vulnerabilities before attackers do.
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="service-card glow-card card-3d">
                <CardItem translateZ="50" className="service-icon">
                  <svg width="30" height="30"><use href="#icon-target"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h3" className="service-title">
                  Vulnerability Assessment
                </CardItem>
                <CardItem translateZ="40" as="p" className="service-desc">
                  Systematic evaluation of security weaknesses in your systems and applications.
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="service-card glow-card card-3d">
                <CardItem translateZ="50" className="service-icon">
                  <svg width="30" height="30"><use href="#icon-tools"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h3" className="service-title">
                  Security Audits
                </CardItem>
                <CardItem translateZ="40" as="p" className="service-desc">
                  Complete security posture analysis with actionable recommendations.
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="service-card glow-card card-3d">
                <CardItem translateZ="50" className="service-icon">
                  <svg width="30" height="30"><use href="#icon-code"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h3" className="service-title">
                  Secure Code Review
                </CardItem>
                <CardItem translateZ="40" as="p" className="service-desc">
                  Line-by-line analysis to identify security flaws in source code.
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="service-card glow-card card-3d">
                <CardItem translateZ="50" className="service-icon">
                  <svg width="30" height="30"><use href="#icon-globe"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h3" className="service-title">
                  API Security Testing
                </CardItem>
                <CardItem translateZ="40" as="p" className="service-desc">
                  Specialized testing for REST, GraphQL, and other API implementations.
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="service-card glow-card card-3d">
                <CardItem translateZ="50" className="service-icon">
                  <svg width="30" height="30"><use href="#icon-radar"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h3" className="service-title">
                  Threat Intelligence
                </CardItem>
                <CardItem translateZ="40" as="p" className="service-desc">
                  Stay ahead with proactive threat detection and analysis.
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about scroll-animate">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Know Who I Am</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi, I'm <strong>Lekhraj Singh</strong>, a passionate cybersecurity enthusiast and penetration tester
                based in Bhilai, India. With a strong foundation in ethical hacking and vulnerability assessment,
                I specialize in identifying and mitigating security risks in web applications and networks.
              </p>
              <p>
                I have successfully completed over <strong>50+ security assessments</strong> and hold
                multiple certifications including CEH and CompTIA Security+. My approach combines
                technical expertise with a deep understanding of the attacker's mindset.
              </p>
            </div>
            <div className="profile-image-wrapper">
              <div className="profile-image-glow"></div>
            </div>
          </div>
          
          <h3 className="skills-title">Skills & Technologies</h3>
          <div className="skills-grid">
            <CardContainer className="inter-var">
              <CardBody className="skill-card glow-card card-3d">
                <CardItem translateZ="50" className="skill-icon">
                  <svg width="30" height="30"><use href="#icon-shield"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h4">Penetration Testing</CardItem>
                <CardItem translateZ="40" as="p">Web Apps, APIs, Networks</CardItem>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="skill-card glow-card card-3d">
                <CardItem translateZ="50" className="skill-icon">
                  <svg width="30" height="30"><use href="#icon-code"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h4">Programming</CardItem>
                <CardItem translateZ="40" as="p">Python, Bash, JavaScript</CardItem>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="skill-card glow-card card-3d">
                <CardItem translateZ="50" className="skill-icon">
                  <svg width="30" height="30"><use href="#icon-network"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h4">Network Security</CardItem>
                <CardItem translateZ="40" as="p">Firewall, IDS/IPS, VPN</CardItem>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="skill-card glow-card card-3d">
                <CardItem translateZ="50" className="skill-icon">
                  <svg width="30" height="30"><use href="#icon-tools"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h4">Security Tools</CardItem>
                <CardItem translateZ="40" as="p">Burp Suite, Metasploit, Nmap</CardItem>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="skill-card glow-card card-3d">
                <CardItem translateZ="50" className="skill-icon">
                  <svg width="30" height="30"><use href="#icon-shield"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h4">Web Security</CardItem>
                <CardItem translateZ="40" as="p">OWASP Top 10, SQLi, XSS</CardItem>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="skill-card glow-card card-3d">
                <CardItem translateZ="50" className="skill-icon">
                  <svg width="30" height="30"><use href="#icon-code"/></svg>
                </CardItem>
                <CardItem translateZ="60" as="h4">Scripting</CardItem>
                <CardItem translateZ="40" as="p">Automation, Payload Crafting</CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio scroll-animate">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">My Work</h2>
          </div>
          <div className="portfolio-grid">
            <CardContainer className="inter-var">
              <CardBody className="portfolio-card glow-card card-3d">
                <CardItem translateZ="50" className="portfolio-img">
                  <div className="portfolio-placeholder">
                    <svg width="80" height="80"><use href="#icon-network"/></svg>
                  </div>
                </CardItem>
                <div className="portfolio-content">
                  <CardItem translateZ="70" as="h3" className="portfolio-title">Homelab Security Setup</CardItem>
                  <CardItem translateZ="50" as="p" className="portfolio-desc">
                    Built a comprehensive security homelab with pfSense firewall, Splunk SIEM,
                    and vulnerable machines for penetration testing practice.
                  </CardItem>
                  <CardItem translateZ="40">
                    <div className="portfolio-tech">
                      <span className="tech-tag">pfSense</span>
                      <span className="tech-tag">Splunk</span>
                      <span className="tech-tag">Kali Linux</span>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="portfolio-card glow-card card-3d">
                <CardItem translateZ="50" className="portfolio-img">
                  <div className="portfolio-placeholder">
                    <svg width="80" height="80"><use href="#icon-shield"/></svg>
                  </div>
                </CardItem>
                <div className="portfolio-content">
                  <CardItem translateZ="70" as="h3" className="portfolio-title">Web Application Assessment</CardItem>
                  <CardItem translateZ="50" as="p" className="portfolio-desc">
                    Conducted security assessment of an e-commerce platform, identifying and
                    reporting 15+ vulnerabilities including SQL injection and XSS flaws.
                  </CardItem>
                  <CardItem translateZ="40">
                    <div className="portfolio-tech">
                      <span className="tech-tag">Burp Suite</span>
                      <span className="tech-tag">OWASP</span>
                      <span className="tech-tag">SQLMap</span>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="blogs scroll-animate">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Blog</span>
            <h2 className="section-title">Latest Articles</h2>
          </div>
          <div className="blogs-grid">
            <CardContainer className="inter-var">
              <CardBody className="blog-card glow-card card-3d">
                <CardItem translateZ="50" className="blog-img">
                  <div className="blog-placeholder">
                    <svg width="60" height="60"><use href="#icon-shield"/></svg>
                  </div>
                </CardItem>
                <div className="blog-content">
                  <CardItem translateZ="60" as="h3" className="blog-title">
                    Understanding OWASP Top 10 2024
                  </CardItem>
                  <CardItem translateZ="40" as="p" className="blog-desc">
                    A comprehensive guide to the latest OWASP Top 10 vulnerabilities and how to
                    prevent them in modern web applications.
                  </CardItem>
                  <CardItem translateZ="30">
                    <div className="blog-meta">
                      <span className="blog-date">Jan 15, 2025</span>
                      <span className="blog-read">5 min read</span>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="blog-card glow-card card-3d">
                <CardItem translateZ="50" className="blog-img">
                  <div className="blog-placeholder">
                    <svg width="60" height="60"><use href="#icon-code"/></svg>
                  </div>
                </CardItem>
                <div className="blog-content">
                  <CardItem translateZ="60" as="h3" className="blog-title">
                    Advanced Recon Techniques
                  </CardItem>
                  <CardItem translateZ="40" as="p" className="blog-desc">
                    Learn advanced reconnaissance techniques for bug bounty hunting including
                    subdomain enumeration and asset discovery.
                  </CardItem>
                  <CardItem translateZ="30">
                    <div className="blog-meta">
                      <span className="blog-date">Dec 28, 2024</span>
                      <span className="blog-read">8 min read</span>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            
            <CardContainer className="inter-var">
              <CardBody className="blog-card glow-card card-3d">
                <CardItem translateZ="50" className="blog-img">
                  <div className="blog-placeholder">
                    <svg width="60" height="60"><use href="#icon-network"/></svg>
                  </div>
                </CardItem>
                <div className="blog-content">
                  <CardItem translateZ="60" as="h3" className="blog-title">
                    Building a Security Homelab
                  </CardItem>
                  <CardItem translateZ="40" as="p" className="blog-desc">
                    Step-by-step guide to setting up your own security homelab for practicing
                    penetration testing and network security.
                  </CardItem>
                  <CardItem translateZ="30">
                    <div className="blog-meta">
                      <span className="blog-date">Dec 10, 2024</span>
                      <span className="blog-read">12 min read</span>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience scroll-animate">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Experience</span>
            <h2 className="section-title">My Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glow-card">
                <div className="timeline-header">
                  <div className="company-logo">
                    <img src="/assets/company-logos/bugcrowd.svg" alt="Bugcrowd" />
                  </div>
                  <div>
                    <h3 className="timeline-title">Security Researcher</h3>
                    <p className="timeline-company">Bugcrowd</p>
                  </div>
                </div>
                <p className="timeline-date">June 2025 - Present</p>
                <p className="timeline-desc">
                  Active bug bounty researcher on Bugcrowd platform, identifying and reporting
                  security vulnerabilities in web applications and APIs.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glow-card">
                <div className="timeline-header">
                  <div className="company-logo">
                    <svg width="40" height="40"><use href="#icon-shield"/></svg>
                  </div>
                  <div>
                    <h3 className="timeline-title">Cybersecurity Volunteer</h3>
                    <p className="timeline-company">HackerHub8</p>
                  </div>
                </div>
                <p className="timeline-date">October 2025 - Present</p>
                <p className="timeline-desc">
                  Contributing to community security initiatives, conducting workshops,
                  and mentoring aspiring security professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>I'll get back to you within 24 hours</p>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <div className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <input type="text" className="form-input" placeholder="Full Name" required />
                  <label className="form-label">Full Name</label>
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <input type="email" className="form-input" placeholder="Email Address" required />
                  <label className="form-label">Email Address</label>
                </div>
              </div>
              <div className="form-group full-width">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <textarea className="form-input" placeholder="Your message..." rows="6" required></textarea>
                <label className="form-label">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
              <p className="form-footer">Your information is secure and will never be shared.</p>
            </form>
            <div className="contact-info">
              <div className="contact-info-header">
                <h3>Let's Connect</h3>
                <p>Choose your preferred way to reach out</p>
              </div>
              
              <div className="social-buttons">
                <a href="https://linkedin.com/in/lekhraj-singh" target="_blank" rel="noopener noreferrer" className="btn btn-social linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                
                <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="btn btn-social github">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                
                <a href="https://twitter.com/lekhrajsingh" target="_blank" rel="noopener noreferrer" className="btn btn-social twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Lekhraj Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
