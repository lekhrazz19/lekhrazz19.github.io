import { aboutQuickFacts } from '../data/content';

const About = () => (
  <section id="about" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> whoami
    </h2>
    <div className="about-content fade-in">
      <div className="about-photo">
        <img src="/profile.jpg" alt="Lekhraj Singh" loading="lazy" />
      </div>
      <div className="about-text">
        <p className="about-statement">
          "<span className="statement-accent">Automating</span> workflows.{" "}
          <span className="statement-accent">Hardening</span> environments.{" "}
          <span className="statement-accent">Engineering</span> secure systems."
        </p>
        <p>
          Hi, I'm <strong>Lekhraj Singh</strong>, a B.Tech Computer Engineering
          student specializing in IoT, Cybersecurity, and Blockchain at Shri
          Shankaracharya Technical Campus.
        </p>
        <p>
          I bridge the gap between autonomous efficiency and security. My work
          focuses on designing AI-powered workflow automation solutions alongside
          performing penetration testing and detection engineering.
        </p>
        <p>
          With hands-on experience scripting custom reconnaissance tools,
          containerizing vulnerability labs, and writing detection rules mapped
          to MITRE ATT&CK, I focus on building defensive systems that resist
          modern attack vectors.
        </p>
        <div className="about-facts">
          {aboutQuickFacts.map((fact) => (
            <div key={fact.label} className="fact">
              <h4>{fact.label}</h4>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
