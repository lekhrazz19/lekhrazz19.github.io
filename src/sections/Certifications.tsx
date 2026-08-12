import { certifications } from '../data/content';

const Certifications = () => (
  <section id="certifications" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> certifications --verify
    </h2>
    <div className="cert-grid fade-in">
      {certifications.map((cert) => {
        const inner = (
          <>
            <span className="cert-badge">{cert.icon}</span>
            <div className="cert-info">
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>
            {cert.link && <span className="arrow">→</span>}
          </>
        );
        return cert.link ? (
          <a key={cert.name} className="cert-item" href={cert.link} target="_blank" rel="noreferrer">
            {inner}
          </a>
        ) : (
          <div key={cert.name} className="cert-item">
            {inner}
          </div>
        );
      })}
    </div>
  </section>
);

export default Certifications;
