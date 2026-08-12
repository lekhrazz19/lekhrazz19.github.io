import { useState } from 'react';
import { profile, socials } from '../data/content';

const Contact = () => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEmail = async () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const masked = profile.email.replace(/^(.{4}).*(@.*)$/, '$1••••$2');

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="contact-heading fade-in">Let's talk.</h2>
        <button className="email-link fade-in" type="button" onClick={handleEmail}>
          {revealed ? profile.email : masked}
        </button>
        {revealed && (
          <p className="email-hint fade-in">{copied ? 'copied to clipboard' : 'click to copy'}</p>
        )}
        <div className="social-links fade-in">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
          <p className="footer-note">
            Protected by <span>127.0.0.1</span> and a hope.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
