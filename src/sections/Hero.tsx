import { useState } from 'react';
import ResumeModal from '../components/ResumeModal';
import { profile } from '../data/content';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="top" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">
          {profile.firstName} <span className="accent">{profile.lastName}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <button className="resume-link" type="button" onClick={() => setShowResume(true)}>
            [~]$ ./view_resume
          </button>
          <a className="resume-link" href="#contact">
            contact me →
          </a>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
      </div>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </section>
  );
};

export default Hero;
