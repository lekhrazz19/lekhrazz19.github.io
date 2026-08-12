import { skillCategories } from '../data/content';

const Skills = () => (
  <section id="skills" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> skills --list
    </h2>
    <div className="skills-grid fade-in">
      {skillCategories.map((category) => (
        <div key={category.title} className="skill-card">
          <h3>▶ {category.title}</h3>
          <ul>
            {category.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
