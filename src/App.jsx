import React, { useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from './components/ui/3d-card';

function App() {
  useEffect(() => {
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
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <div className="contact-info">
              <p>Email: singhlekhraj497@gmail.com</p>
              <p>Location: Bhilai, India</p>
              <a href="https://linkedin.com/in/lekhraj-singh" className="btn btn-secondary">LinkedIn</a>
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
