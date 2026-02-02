import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      {/* Background Elements */}
      <div className="grid-background"></div>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#home" className="logo-text">&lt;Lekhraj /&gt;</a>
          </div>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#certifications" className="nav-link">Certs</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-terminal">
              <span>&gt; Lekhraj_Singh.init()</span>
              <span className="cursor-blink">_</span>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Lekhraj Singh</span>
            </h1>
            <p className="hero-subtitle">Cybersecurity Researcher & Penetration Tester</p>
            <p className="hero-location">
              <span>📍</span> Bhilai, Chhattisgarh, India
            </p>
            <p className="hero-description">
              Cybersecurity-focused Computer Engineering undergraduate with hands-on experience 
              in penetration testing, bug bounty hunting, and application security. Passionate 
              about ethical hacking and secure system design.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>🔐</span> View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>📧</span> Get In Touch
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://linkedin.com/in/lekhrazz19" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:singhlekhraj497@gmail.com" className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">// About Me</p>
            <h2 className="section-title">Who I Am</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Cybersecurity Enthusiast</h3>
              <p>
                I'm a passionate cybersecurity professional specializing in penetration testing 
                and vulnerability research. With a strong understanding of OWASP Top 10, web 
                vulnerabilities, and security testing methodologies, I help organizations 
                identify and fix security weaknesses before malicious actors can exploit them.
              </p>
              <p>
                Currently pursuing B.Tech in Computer Engineering at Shri Shankaracharya 
                Technical Campus, I combine academic knowledge with practical experience 
                from bug bounty programs and security research.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🔍</div>
                <h4>Security Research</h4>
                <p>Bug Bounty Hunter</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🛡️</div>
                <h4>Penetration Testing</h4>
                <p>Web App Security</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🎓</div>
                <h4>B.Tech Student</h4>
                <p>Computer Engineering</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">📜</div>
                <h4>Certified</h4>
                <p>ISO 27001 & More</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">// Technical Arsenal</p>
            <h2 className="section-title">Skills & Expertise</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">🛡️</div>
                <h3>Application Security</h3>
              </div>
              <ul className="skill-list">
                <li className="skill-item">OWASP Top 10 Vulnerabilities</li>
                <li className="skill-item">Secure Coding Practices</li>
                <li className="skill-item">Web Application Security</li>
                <li className="skill-item">Input Validation & Sanitization</li>
                <li className="skill-item">Authentication & Authorization</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">🔓</div>
                <h3>Penetration Testing</h3>
              </div>
              <ul className="skill-list">
                <li className="skill-item">Vulnerability Assessment</li>
                <li className="skill-item">Network Reconnaissance</li>
                <li className="skill-item">Manual Security Testing</li>
                <li className="skill-item">Exploitation Techniques</li>
                <li className="skill-item">Post-Exploitation Analysis</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">🔧</div>
                <h3>Security Tools</h3>
              </div>
              <ul className="skill-list">
                <li className="skill-item">Burp Suite Professional</li>
                <li className="skill-item">Nmap & Network Scanners</li>
                <li className="skill-item">OWASP ZAP</li>
                <li className="skill-item">Metasploit Framework</li>
                <li className="skill-item">Kali Linux Environment</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">💻</div>
                <h3>Programming</h3>
              </div>
              <ul className="skill-list">
                <li className="skill-item">Python Scripting</li>
                <li className="skill-item">C / C++ Programming</li>
                <li className="skill-item">HTML / CSS / JavaScript</li>
                <li className="skill-item">HTTP/HTTPS Protocols</li>
                <li className="skill-item">Bash Scripting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">// Experience</p>
            <h2 className="section-title">Professional Journey</h2>
          </div>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-meta">
                <span className="experience-date">Jun 2025 – Present</span>
                <span className="experience-type">Remote</span>
              </div>
              <div className="experience-content">
                <h3>Security Researcher</h3>
                <p className="experience-company">Bugcrowd</p>
                <ul>
                  <li>Performed web application security testing using Burp Suite and Nmap</li>
                  <li>Identified OWASP Top 10 vulnerabilities including XSS, misconfigurations, and input validation issues</li>
                  <li>Reported valid findings following responsible disclosure standards</li>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-meta">
                <span className="experience-date">Oct 2025 – Present</span>
                <span className="experience-type">India</span>
              </div>
              <div className="experience-content">
                <h3>Cybersecurity Volunteer</h3>
                <p className="experience-company">HackerHub8 Company LLP</p>
                <ul>
                  <li>Participated in cybersecurity awareness and training programs</li>
                  <li>Collaborated on vulnerability analysis and penetration testing workflows</li>
                  <li>Contributed to security documentation and best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">// Projects</p>
            <h2 className="section-title">Featured Work</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🖥️</div>
                <div className="project-links">
                  <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View on GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h3>Cybersecurity Homelab</h3>
              <div className="project-tech">
                <span className="tech-tag">Kali Linux</span>
                <span className="tech-tag">Ubuntu Server</span>
                <span className="tech-tag">Burp Suite</span>
                <span className="tech-tag">Metasploit</span>
              </div>
              <div className="project-description">
                <p>Designed and deployed a virtualized attack-defense cybersecurity lab environment for penetration testing research.</p>
                <ul>
                  <li>Configured vulnerable applications: DVWA, Juice Shop, custom services</li>
                  <li>Performed SQL Injection, XSS, authentication bypass attacks</li>
                  <li>Used Nmap, Nikto, Gobuster for reconnaissance</li>
                  <li>Documented findings following OWASP Top 10 standards</li>
                </ul>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🔐</div>
              </div>
              <h3>Bug Bounty Research</h3>
              <div className="project-tech">
                <span className="tech-tag">Burp Suite</span>
                <span className="tech-tag">OWASP ZAP</span>
                <span className="tech-tag">Nmap</span>
                <span className="tech-tag">Python</span>
              </div>
              <div className="project-description">
                <p>Active bug bounty hunting and security research across various platforms.</p>
                <ul>
                  <li>Identified and reported XSS vulnerabilities</li>
                  <li>Discovered misconfiguration issues in web applications</li>
                  <li>Performed input validation testing and bypass techniques</li>
                  <li>Responsible disclosure following platform guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">// Certifications</p>
            <h2 className="section-title">Credentials</h2>
          </div>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <div className="cert-content">
                <h4>ISO 27001 Foundation</h4>
                <p>Information Security Management</p>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🔵</div>
              <div className="cert-content">
                <h4>Cybersecurity Fundamentals</h4>
                <p>IBM</p>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🌐</div>
              <div className="cert-content">
                <h4>Ethical Hacker</h4>
                <p>Cisco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">// Education</p>
            <h2 className="section-title">Academic Background</h2>
          </div>
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <h3>B.Tech in Computer Engineering</h3>
            <p className="institution">Shri Shankaracharya Technical Campus</p>
            <p className="duration">Sep 2024 – Sep 2028</p>
            <div className="coursework">
              <span className="course-tag">Computer Networks</span>
              <span className="course-tag">Web Technologies</span>
              <span className="course-tag">Operating Systems</span>
              <span className="course-tag">Cybersecurity Fundamentals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">// Get In Touch</p>
            <h2 className="section-title">Let's Connect</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to collaborate?</h3>
              <p>
                Whether you're looking for a security researcher, need a penetration test, 
                or just want to discuss cybersecurity, I'd love to hear from you.
              </p>
              <div className="contact-links">
                <a href="mailto:singhlekhraj497@gmail.com" className="contact-link">
                  <div className="contact-link-icon">📧</div>
                  <div className="contact-link-content">
                    <h4>Email</h4>
                    <p>singhlekhraj497@gmail.com</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/lekhrazz19" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-icon">💼</div>
                  <div className="contact-link-content">
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/lekhrazz19</p>
                  </div>
                </a>
                <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-icon">🐙</div>
                  <div className="contact-link-content">
                    <h4>GitHub</h4>
                    <p>github.com/lekhrazz19</p>
                  </div>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <span>📤</span> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Lekhraj Singh. Built with <span className="footer-heart">❤️</span> and React</p>
        </div>
      </footer>
    </div>
  );
}
