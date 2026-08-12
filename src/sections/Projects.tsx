import { projects } from '../data/content';

const Projects = () => (
  <section id="projects" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> projects --featured
    </h2>
    <div className="project-grid fade-in">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <div className="project-head">
            <h3>{project.title}</h3>
            <span className="period">{project.period}</span>
          </div>
          <p>{project.description}</p>
          <div className="tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <a className="view-link" href={project.github} target="_blank" rel="noreferrer">
            view →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
