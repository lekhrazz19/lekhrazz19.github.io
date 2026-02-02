import { experiences } from '../data/experience';

export default function Experience() {
    return (
        <section id="experience" className="section" style={{
            background: 'var(--gray-50)',
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        My journey in cybersecurity and security research
                    </p>
                </div>

                {/* Timeline */}
                <div style={{
                    position: 'relative',
                    paddingLeft: '2rem',
                }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '6px',
                        top: '8px',
                        bottom: '8px',
                        width: '2px',
                        background: 'var(--gray-200)',
                    }} />

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            style={{
                                position: 'relative',
                                paddingBottom: index < experiences.length - 1 ? '2.5rem' : 0,
                            }}
                        >
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                left: '-2rem',
                                top: '6px',
                                width: '14px',
                                height: '14px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                border: '3px solid var(--white)',
                                boxShadow: '0 0 0 3px var(--primary-glow)',
                            }} />

                            {/* Experience Card */}
                            <div className="card" style={{
                                marginLeft: '0.5rem',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '0.75rem',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                }}>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.15rem',
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            marginBottom: '0.25rem',
                                        }}>
                                            {exp.role}
                                        </h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            color: 'var(--primary)',
                                        }}>
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-muted)',
                                        fontWeight: 500,
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.7,
                                    marginBottom: '1rem',
                                }}>
                                    {exp.description}
                                </p>

                                {/* Responsibilities */}
                                <div style={{ marginBottom: '1rem' }}>
                                    <h4 style={{
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                    }}>
                                        Key Responsibilities
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                    }}>
                                        {exp.responsibilities.slice(0, 3).map((resp, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.9rem',
                                                    padding: '0.25rem 0',
                                                    paddingLeft: '1.25rem',
                                                    position: 'relative',
                                                }}
                                            >
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: 'var(--primary)',
                                                }}>
                                                    →
                                                </span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                }}>
                                    {exp.technologies.slice(0, 5).map((tech) => (
                                        <span key={tech} className="tag tag-secondary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
