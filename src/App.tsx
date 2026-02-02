import { useState, useEffect } from 'react';
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Experience from './sections/Experience.tsx';
import Skills from './sections/Skills.tsx';
import Certifications from './sections/Certifications.tsx';
import Contact from './sections/Contact.tsx';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'experience', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--gray-200)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="#hero" style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          color: 'var(--primary)',
          textDecoration: 'none',
        }}>
          Lekhraj Singh
        </a>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2rem',
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: activeSection === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: '3rem 2rem',
      background: 'var(--gray-900)',
      color: 'var(--white)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{
          color: 'var(--gray-400)',
          fontSize: '0.9rem',
          marginBottom: '1rem',
        }}>
          Building secure digital experiences
        </p>
        <p style={{
          color: 'var(--gray-500)',
          fontSize: '0.85rem',
        }}>
          © {new Date().getFullYear()} Lekhraj Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
