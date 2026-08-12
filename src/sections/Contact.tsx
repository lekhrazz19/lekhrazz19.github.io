import { profile, socials } from '../data/content';

const Contact = () => (
  <section id="contact" className="contact-section section">
    <div className="container">
      <h2 className="contact-heading fade-in">Let's talk.</h2>
      <a className="email-link fade-in" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
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

export default Contact;
