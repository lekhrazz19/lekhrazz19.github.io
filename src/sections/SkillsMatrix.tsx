import { SkillsGrid } from '../components/cyber/SkillsSphere';
import { owaspTop10 } from '../data/skills';

export default function SkillsMatrix() {
    return (
        <section className="section" id="skills" style={{
            background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="section-title glow-text">
                    <span style={{ color: 'var(--matrix-green)' }}>&lt;</span>
                    Skills Matrix
                    <span style={{ color: 'var(--matrix-green)' }}>/&gt;</span>
                </h2>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                }}>
                    Technical expertise across security domains
                </p>

                {/* OWASP Top 10 Visualization */}
                <div className="cyber-card" style={{
                    marginBottom: '2rem',
                    textAlign: 'center',
                }}>
                    <h3 style={{
                        color: 'var(--vuln-red)',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                    }}>
                        OWASP Top 10 Expertise
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '1rem',
                    }}>
                        {owaspTop10.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    padding: '1rem',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    border: `1px solid ${item.color}`,
                                    borderRadius: 'var(--radius-md)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{
                                    color: item.color,
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '0.9rem',
                                    marginBottom: '0.5rem',
                                }}>
                                    {item.id}
                                </div>
                                <div style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '0.8rem',
                                    lineHeight: '1.4',
                                }}>
                                    {item.name}
                                </div>
                                <div style={{
                                    marginTop: '0.5rem',
                                    display: 'inline-block',
                                    padding: '0.2rem 0.5rem',
                                    background: `${item.color}20`,
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.65rem',
                                    color: item.color,
                                    textTransform: 'uppercase',
                                }}>
                                    {item.severity}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <SkillsGrid />

                {/* Skill Level Legend */}
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                }}>
                    {[
                        { level: 'Expert', range: '85-100%', color: 'var(--matrix-green)' },
                        { level: 'Advanced', range: '70-84%', color: 'var(--cyan)' },
                        { level: 'Intermediate', range: '50-69%', color: 'var(--warning-orange)' },
                    ].map((item) => (
                        <div key={item.level} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}>
                            <span style={{
                                display: 'inline-block',
                                width: '12px',
                                height: '12px',
                                background: item.color,
                                borderRadius: '2px',
                            }} />
                            <span style={{
                                color: 'var(--text-secondary)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.75rem',
                            }}>
                                {item.level} ({item.range})
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
