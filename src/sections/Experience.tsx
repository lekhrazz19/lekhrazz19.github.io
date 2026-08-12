import { experiences } from '../data/content';

const Experience = () => (
  <section id="experience" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> work --history
    </h2>
    <div className="work-list fade-in">
      {experiences.map((exp) => (
        <div key={exp.company} className="work-item">
          <span className="tag">{exp.period}</span>
          <h3 className="company">{exp.company}</h3>
          <span className="role">{exp.role}</span>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
