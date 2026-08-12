import { navLinks, profile } from '../data/content';

const Header = () => (
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
      </nav>
    </div>
  </header>
);

export default Header;
