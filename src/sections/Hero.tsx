import { useState } from 'react';
import AsciiRain from '../components/asciiRain';
import { heroBadges, profile } from '../data/content';

const Hero = () => {
  const [score, setScore] = useState(0);

  return (
    <section id="top" className="hero">
      <AsciiRain onScore={setScore} />
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">
          {profile.firstName} <span className="accent">{profile.lastName}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-badges">
          {heroBadges.map((badge) => (
            <a key={badge.label} className="badge" href={badge.href} target="_blank" rel="noreferrer">
              {badge.label} →
            </a>
          ))}
        </div>
        <p className="hero-score">
          PWN <span className={score > 0 ? 'score-hot' : ''}>{score}</span>
        </p>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
