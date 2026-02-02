import { ExperienceTimeline2D } from '../components/cyber/ExperienceTimeline3D';
import { experiences } from '../data/experience';

export default function SecurityOperations() {
    return (
        <section className="section" id="experience" style={{
            background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 className="section-title glow-text-cyan">
                    <span style={{ color: 'var(--cyan)' }}>&lt;</span>
                    Security Operations
                    <span style={{ color: 'var(--cyan)' }}>/&gt;</span>
                </h2>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                }}>
                    Active missions and security research experience
                </p>

                {/* SOC Dashboard Header */}
                <div className="cyber-card" style={{
                    marginBottom: '2rem',
                    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(10, 255, 0, 0.05))',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                    }}>
                        <div>
                            <span style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.8rem',
                                fontFamily: 'var(--font-mono)',
                            }}>
                                OPERATOR STATUS
                            </span>
                            <h3 style={{
                                color: 'var(--matrix-green)',
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.2rem',
                            }}>
                                ACTIVE SECURITY RESEARCHER
                            </h3>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    color: 'var(--matrix-green)',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.5rem',
                                }}>
                                    {experiences.length}
                                </div>
                                <div style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase',
                                }}>
                                    Active Roles
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    color: 'var(--cyan)',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.5rem',
                                }}>
                                    5+
                                </div>
                                <div style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase',
                                }}>
                                    Vulnerabilities
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    color: 'var(--warning-orange)',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.5rem',
                                }}>
                                    2025
                                </div>
                                <div style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase',
                                }}>
                                    Started
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Timeline */}
                <ExperienceTimeline2D />

                {/* Mission Highlights */}
                <div style={{
                    marginTop: '3rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {/* Bugcrowd Highlight */}
                    <div className="cyber-card" style={{
                        borderColor: experiences[0].color,
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${experiences[0].color}, transparent)`,
                                border: `2px solid ${experiences[0].color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>🎯</span>
                            </div>
                            <span style={{
                                color: experiences[0].color,
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9rem',
                            }}>
                                Bug Bounty
                            </span>
                        </div>
                        <h4 style={{
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            marginBottom: '0.5rem',
                        }}>
                            Active Researcher
                        </h4>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                        }}>
                            Hunting vulnerabilities in live systems through responsible disclosure programs
                        </p>
                    </div>

                    {/* Community Highlight */}
                    <div className="cyber-card" style={{
                        borderColor: experiences[1].color,
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${experiences[1].color}, transparent)`,
                                border: `2px solid ${experiences[1].color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>🤝</span>
                            </div>
                            <span style={{
                                color: experiences[1].color,
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9rem',
                            }}>
                                Community
                            </span>
                        </div>
                        <h4 style={{
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            marginBottom: '0.5rem',
                        }}>
                            Knowledge Sharing
                        </h4>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                        }}>
                            Contributing to the cybersecurity community through mentorship and collaboration
                        </p>
                    </div>

                    {/* Skills Highlight */}
                    <div className="cyber-card" style={{
                        borderColor: 'var(--matrix-green)',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--matrix-green), transparent)',
                                border: '2px solid var(--matrix-green)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>🔓</span>
                            </div>
                            <span style={{
                                color: 'var(--matrix-green)',
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9rem',
                            }}>
                                Specialization
                            </span>
                        </div>
                        <h4 style={{
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            marginBottom: '0.5rem',
                        }}>
                            Web Security
                        </h4>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                        }}>
                            Expert in OWASP Top 10 vulnerabilities with hands-on penetration testing experience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
