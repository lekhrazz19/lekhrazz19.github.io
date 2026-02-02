import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

// Custom hook for scroll animations
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
}

// Animated wrapper component
function Animate({ children, delay = 0, className = '', animation = 'fade-up' }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`animate ${animation} ${isInView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Stagger animation wrapper
function StaggerChildren({ children, staggerDelay = 100, className = '' }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={`animate fade-up ${isInView ? 'in-view' : ''}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// SVG Icon Components
const Icons = {
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Lock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Terminal: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Bug: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="8" height="14" rx="4" />
      <path d="M19 9h-1a4 4 0 0 0-4-4V3" />
      <path d="M5 9h1a4 4 0 0 1 4-4V3" />
      <path d="M19 15h2" />
      <path d="M5 15H3" />
      <path d="M19 12h2" />
      <path d="M5 12H3" />
    </svg>
  ),
  Server: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Award: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  GraduationCap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Send: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Cpu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  Target: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  CheckCircle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
};

// Decorative Doodle Components
const Doodles = {
  CirclePattern: () => (
    <svg className="doodle doodle-circles" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    </svg>
  ),
  GridDots: () => (
    <svg className="doodle doodle-dots" viewBox="0 0 100 100">
      {[...Array(5)].map((_, i) =>
        [...Array(5)].map((_, j) => (
          <circle key={`${i}-${j}`} cx={10 + i * 20} cy={10 + j * 20} r="2" fill="currentColor" opacity="0.15" />
        ))
      )}
    </svg>
  ),
  CrossPattern: () => (
    <svg className="doodle doodle-cross" viewBox="0 0 100 100">
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  ),
  WavePattern: () => (
    <svg className="doodle doodle-wave" viewBox="0 0 200 80">
      <path d="M0 40 Q25 10 50 40 T100 40 T150 40 T200 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path d="M0 50 Q25 20 50 50 T100 50 T150 50 T200 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  ),
  HexPattern: () => (
    <svg className="doodle doodle-hex" viewBox="0 0 100 100">
      <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  )
};

export default function App() {
  return (
    <div className="app">
      {/* Background Elements */}
      <div className="bg-noise"></div>
      <div className="bg-gradient"></div>

      {/* Floating Doodles */}
      <div className="doodle-container">
        <Doodles.CirclePattern />
        <Doodles.GridDots />
        <Doodles.CrossPattern />
        <Doodles.WavePattern />
        <Doodles.HexPattern />
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <Icons.Terminal />
            </div>
            <span className="logo-text">lekhraj</span>
          </a>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">
            <span>Let's Talk</span>
            <Icons.ExternalLink />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Icons.Shield />
              <span>Security Researcher</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Lekhraj Singh</span>
            </h1>
            <p className="hero-subtitle">
              Cybersecurity Researcher & Penetration Tester
            </p>
            <div className="hero-location">
              <Icons.MapPin />
              <span>Bhilai, Chhattisgarh, India</span>
            </div>
            <p className="hero-description">
              Computer Engineering undergraduate specializing in penetration testing,
              bug bounty hunting, and application security. Expert in OWASP Top 10
              vulnerabilities and security testing methodologies.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <Icons.ExternalLink />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Icons.Mail />
                <span>Get In Touch</span>
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://linkedin.com/in/lekhrazz19" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <Icons.Linkedin />
              </a>
              <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <Icons.Github />
              </a>
              <a href="mailto:singhlekhraj497@gmail.com" className="social-btn" aria-label="Email">
                <Icons.Mail />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="card-title">terminal</span>
              </div>
              <div className="card-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">whoami</span>
                </div>
                <div className="terminal-output">lekhraj_singh</div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">cat skills.txt</span>
                </div>
                <div className="terminal-output">
                  → Penetration Testing<br />
                  → Bug Bounty Hunting<br />
                  → OWASP Top 10<br />
                  → Web App Security
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Passionate About Security</h2>
            <p className="section-subtitle">
              Combining academic excellence with hands-on security research experience
            </p>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p>
                I'm a cybersecurity enthusiast currently pursuing B.Tech in Computer Engineering
                at Shri Shankaracharya Technical Campus. My passion lies in finding vulnerabilities
                before malicious actors do.
              </p>
              <p>
                With hands-on experience in penetration testing and bug bounty programs, I've developed
                a deep understanding of web application security, OWASP Top 10 vulnerabilities, and
                security testing methodologies.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-icon"><Icons.Target /></div>
                  <div className="stat-content">
                    <span className="stat-label">Focus Area</span>
                    <span className="stat-value">Web Security</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon"><Icons.Zap /></div>
                  <div className="stat-content">
                    <span className="stat-label">Specialization</span>
                    <span className="stat-value">Pen Testing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-cards">
              <div className="feature-card">
                <div className="feature-icon"><Icons.Search /></div>
                <h4>Security Research</h4>
                <p>Active bug bounty hunter on Bugcrowd</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icons.Shield /></div>
                <h4>Penetration Testing</h4>
                <p>Web application security testing</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icons.GraduationCap /></div>
                <h4>B.Tech Student</h4>
                <p>Computer Engineering (2024-2028)</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icons.Award /></div>
                <h4>Certified</h4>
                <p>ISO 27001, Cisco, IBM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Specialized tools and methodologies for security assessment
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon"><Icons.Shield /></div>
                <h3>Application Security</h3>
              </div>
              <ul className="skill-list">
                <li><Icons.CheckCircle /><span>OWASP Top 10 Vulnerabilities</span></li>
                <li><Icons.CheckCircle /><span>Secure Coding Practices</span></li>
                <li><Icons.CheckCircle /><span>Web Application Security</span></li>
                <li><Icons.CheckCircle /><span>Input Validation & Sanitization</span></li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon"><Icons.Lock /></div>
                <h3>Penetration Testing</h3>
              </div>
              <ul className="skill-list">
                <li><Icons.CheckCircle /><span>Vulnerability Assessment</span></li>
                <li><Icons.CheckCircle /><span>Network Reconnaissance</span></li>
                <li><Icons.CheckCircle /><span>Manual Security Testing</span></li>
                <li><Icons.CheckCircle /><span>Exploitation Techniques</span></li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon"><Icons.Terminal /></div>
                <h3>Security Tools</h3>
              </div>
              <ul className="skill-list">
                <li><Icons.CheckCircle /><span>Burp Suite Professional</span></li>
                <li><Icons.CheckCircle /><span>Nmap & Network Scanners</span></li>
                <li><Icons.CheckCircle /><span>Metasploit Framework</span></li>
                <li><Icons.CheckCircle /><span>Kali Linux Environment</span></li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon"><Icons.Code /></div>
                <h3>Programming</h3>
              </div>
              <ul className="skill-list">
                <li><Icons.CheckCircle /><span>Python Scripting</span></li>
                <li><Icons.CheckCircle /><span>C / C++ Programming</span></li>
                <li><Icons.CheckCircle /><span>HTML, CSS, JavaScript</span></li>
                <li><Icons.CheckCircle /><span>Bash Scripting</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Career</span>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Professional journey in cybersecurity
            </p>
          </div>
          <div className="experience-list">
            <div className="experience-item">
              <div className="exp-timeline">
                <div className="exp-dot"></div>
                <div className="exp-line"></div>
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3>Security Researcher</h3>
                    <p className="exp-company">Bugcrowd</p>
                  </div>
                  <span className="exp-badge">Remote</span>
                </div>
                <span className="exp-date">Jun 2025 – Present</span>
                <ul className="exp-list">
                  <li>Performed web application security testing using Burp Suite and Nmap</li>
                  <li>Identified OWASP Top 10 vulnerabilities including XSS and misconfigurations</li>
                  <li>Reported findings following responsible disclosure standards</li>
                </ul>
              </div>
            </div>
            <div className="experience-item">
              <div className="exp-timeline">
                <div className="exp-dot"></div>
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3>Cybersecurity Volunteer</h3>
                    <p className="exp-company">HackerHub8 Company LLP</p>
                  </div>
                  <span className="exp-badge">India</span>
                </div>
                <span className="exp-date">Oct 2025 – Present</span>
                <ul className="exp-list">
                  <li>Participated in cybersecurity awareness and training programs</li>
                  <li>Collaborated on vulnerability analysis and penetration testing workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Hands-on security research and lab environments
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-header">
                <div className="project-icon"><Icons.Server /></div>
                <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="project-link">
                  <Icons.Github />
                </a>
              </div>
              <h3>Cybersecurity Homelab</h3>
              <p className="project-subtitle">Attack–Defense Environment</p>
              <p className="project-desc">
                Virtualized cybersecurity lab for penetration testing research with Kali Linux
                and Ubuntu Server. Configured vulnerable applications including DVWA and Juice Shop.
              </p>
              <div className="project-tags">
                <span>Kali Linux</span>
                <span>Burp Suite</span>
                <span>Metasploit</span>
                <span>Nmap</span>
              </div>
              <ul className="project-features">
                <li><Icons.CheckCircle /><span>SQL Injection & XSS exploitation</span></li>
                <li><Icons.CheckCircle /><span>Authentication bypass techniques</span></li>
                <li><Icons.CheckCircle /><span>OWASP Top 10 documentation</span></li>
              </ul>
            </div>
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon"><Icons.Bug /></div>
              </div>
              <h3>Bug Bounty Research</h3>
              <p className="project-subtitle">Security Vulnerability Hunting</p>
              <p className="project-desc">
                Active participation in bug bounty programs, identifying and reporting
                security vulnerabilities across web applications.
              </p>
              <div className="project-tags">
                <span>Burp Suite</span>
                <span>OWASP ZAP</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Credentials</span>
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-icon"><Icons.Award /></div>
              <div className="cert-content">
                <h4>ISO 27001 Foundation</h4>
                <p>Information Security Management</p>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon"><Icons.Cpu /></div>
              <div className="cert-content">
                <h4>Cybersecurity Fundamentals</h4>
                <p>IBM</p>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon"><Icons.Shield /></div>
              <div className="cert-content">
                <h4>Ethical Hacker</h4>
                <p>Cisco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Education</span>
            <h2 className="section-title">Academic Background</h2>
          </div>
          <div className="education-card">
            <div className="edu-icon"><Icons.GraduationCap /></div>
            <div className="edu-content">
              <h3>B.Tech in Computer Engineering</h3>
              <p className="edu-institution">Shri Shankaracharya Technical Campus, Bhilai</p>
              <span className="edu-date">Sep 2024 – Sep 2028</span>
              <div className="edu-courses">
                <span>Computer Networks</span>
                <span>Web Technologies</span>
                <span>Operating Systems</span>
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Open to security research opportunities and collaborations
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in touch</h3>
              <p>
                Whether you're looking for a security researcher, need a penetration test,
                or want to discuss cybersecurity, I'd love to hear from you.
              </p>
              <div className="contact-buttons">
                <a href="mailto:singhlekhraj497@gmail.com" className="contact-btn">
                  <Icons.Mail />
                  <span>Email Me</span>
                </a>
                <a href="https://linkedin.com/in/lekhrazz19" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-outline">
                  <Icons.Linkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-outline">
                  <Icons.Github />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <span>Send Message</span>
                <Icons.Send />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2025 Lekhraj Singh. Crafted with precision.</p>
            <div className="footer-links">
              <a href="https://linkedin.com/in/lekhrazz19" target="_blank" rel="noopener noreferrer"><Icons.Linkedin /></a>
              <a href="https://github.com/lekhrazz19" target="_blank" rel="noopener noreferrer"><Icons.Github /></a>
              <a href="mailto:singhlekhraj497@gmail.com"><Icons.Mail /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
