import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      {/* Background Doodles */}
      <div className="doodle doodle-1"></div>
      <div className="doodle doodle-2"></div>
      <div className="doodle doodle-3"></div>

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
        {/* Decorative Doodles */}
        <svg className="hero-doodle hero-doodle-1" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="2"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(236, 72, 153, 0.15)" strokeWidth="1.5"/>
          <path d="M 20 50 Q 50 20 80 50" fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="2"/>
        </svg>
        
        <svg className="hero-doodle hero-doodle-2" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="2" rx="10"/>
          <line x1="30" y1="30" x2="70" y2="70" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1"/>
          <line x1="70" y1="30" x2="30" y2="70" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1"/>
        </svg>

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
        <svg className="section-doodle" viewBox="0 0 120 120">
          <path d="M 60 20 L 80 60 L 60 100 L 40 60 Z" fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="2"/>
          <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(236, 72, 153, 0.1)" strokeWidth="1"/>
        </svg>
        
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
                <span className="skill-emoji">🎨</span>
                <div>
                  <h4>Frontend Development</h4>
                  <p>React, JavaScript, CSS3, Responsive Design</p>
                </div>
              </div>
              <div className="skill-box">
                <span className="skill-emoji">⚙️</span>
                <div>
                  <h4>Backend Development</h4>
                  <p>Node.js, Express, MongoDB, PostgreSQL</p>
                </div>
              </div>
              <div className="skill-box">
                <span className="skill-emoji">🚀</span>
                <div>
                  <h4>Full Stack Solutions</h4>
                  <p>End-to-end development with modern stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <svg className="section-doodle" viewBox="0 0 120 120">
          <g fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="2">
            <circle cx="60" cy="30" r="15"/>
            <circle cx="30" cy="75" r="15"/>
            <circle cx="90" cy="75" r="15"/>
            <line x1="60" y1="45" x2="30" y2="60"/>
            <line x1="60" y1="45" x2="90" y2="60"/>
          </g>
        </svg>
        
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>💻 Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>🗄️ Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>🛠️ Tools</h3>
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
        <svg className="section-doodle" viewBox="0 0 120 120">
          <rect x="20" y="20" width="80" height="80" fill="none" stroke="rgba(236, 72, 153, 0.15)" strokeWidth="2" rx="8"/>
          <line x1="20" y1="50" x2="100" y2="50" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1"/>
          <circle cx="35" cy="35" r="4" fill="rgba(168, 85, 247, 0.3)"/>
          <circle cx="35" cy="65" r="4" fill="rgba(168, 85, 247, 0.3)"/>
        </svg>
        
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Senior Developer</h3>
                <p className="company">💼 Tech Company Inc.</p>
                <p className="date">2023 - Present</p>
                <p>Led development of full-stack web applications, improved performance by 40%, and mentored junior developers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <p className="company">💼 Startup X</p>
                <p className="date">2021 - 2023</p>
                <p>Built responsive web interfaces with React, developed REST APIs with Node.js, and managed cloud deployments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <svg className="section-doodle" viewBox="0 0 120 120">
          <g fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="2">
            <rect x="15" y="15" width="40" height="40" rx="4"/>
            <rect x="65" y="15" width="40" height="40" rx="4"/>
            <rect x="40" y="65" width="40" height="40" rx="4"/>
          </g>
        </svg>
        
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🛒</div>
              <h3>E-Commerce Platform</h3>
              <p className="tech">React • Node.js • MongoDB • Stripe</p>
              <p>Full-stack e-commerce solution with payment integration and real-time inventory management.</p>
              <div className="project-links">
                <a href="#" className="link">View Project</a>
                <a href="#" className="link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">✓</div>
              <h3>Task Management App</h3>
              <p className="tech">React • Firebase • Redux</p>
              <p>Collaborative task management with real-time updates and team collaboration features.</p>
              <div className="project-links">
                <a href="#" className="link">View Project</a>
                <a href="#" className="link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">💼</div>
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
        <svg className="section-doodle" viewBox="0 0 120 120">
          <g fill="none" stroke="rgba(236, 72, 153, 0.15)" strokeWidth="2">
            <path d="M 20 40 L 60 70 L 100 40 L 100 90 Q 100 100 90 100 L 30 100 Q 20 100 20 90 Z"/>
            <polyline points="20 40 60 70 100 40"/>
          </g>
        </svg>
        
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
                <span className="form-underline"></span>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
                <span className="form-underline"></span>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <span className="form-underline"></span>
              </div>
              <button type="submit" className="btn btn-primary">Send Message ✉️</button>
            </form>
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p><strong>📧 Email:</strong> <a href="mailto:singhlekhraj497@gmail.com">singhlekhraj497@gmail.com</a></p>
              <p><strong>📍 Location:</strong> Bhilai, India</p>
              <div className="social-links">
                <a href="https://linkedin.com/in/lekhraj-singh" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                <a href="https://twitter.com/lekhrajsingh" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Lekhraj Singh. All rights reserved. Built with React + Vite.</p>
          <p className="footer-emoji">✨ Made with ❤️ by Lekhraj ✨</p>
        </div>
      </footer>
    </div>
  );
}
