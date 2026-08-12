import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content';

type Theme = 'dark' | 'light';

const Header = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="logo" href="#top">
          {profile.firstName}
          <span className="logo-sep">/</span>
          <span className="logo-alias">.404</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle color theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '[light]' : '[dark]'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
