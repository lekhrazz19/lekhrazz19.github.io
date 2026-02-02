import { skillCategories } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills" className="section" style={{
            background: 'var(--white)',
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="section-header">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Technical capabilities across security domains
                    </p>
                </div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {skillCategories.map((category) => (
                        <div key={category.name} className="card">
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1.25rem',
                            }}>
                                <span style={{
                                    width: '40px',
                                    height: '40px',
                                    background: `${category.color}20`,
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                }}>
                                    {category.name.includes('Security') ? '🔒' :
                                        category.name.includes('Programming') ? '💻' :
                                            category.name.includes('Testing') ? '🔍' :
                                                category.name.includes('Tools') ? '🛠️' : '🌐'}
                                </span>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                }}>
                                    {category.name}
                                </h3>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}>
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '0.4rem',
                                        }}>
                                            <span style={{
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                color: 'var(--text-primary)',
                                            }}>
                                                {skill.name}
                                            </span>
                                            <span style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--text-muted)',
                                            }}>
                                                {skill.proficiency}%
                                            </span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${skill.proficiency}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* OWASP Knowledge */}
                <div style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                }}>
                    <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                    }}>
                        OWASP Top 10 Expertise
                    </h3>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        marginBottom: '1.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 1.5rem',
                    }}>
                        Comprehensive understanding and practical experience with the most critical web application security risks
                    </p>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        justifyContent: 'center',
                    }}>
                        {[
                            'Injection', 'Broken Authentication', 'Sensitive Data Exposure',
                            'XXE', 'Broken Access Control', 'Security Misconfiguration',
                            'XSS', 'Insecure Deserialization', 'Vulnerable Components', 'Logging & Monitoring'
                        ].map((item) => (
                            <span key={item} className="tag">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
