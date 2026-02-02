import { certifications } from '../data/certifications';

export default function Certifications() {
    return (
        <section id="certifications" className="section" style={{
            background: 'var(--gray-50)',
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="section-header">
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        Professional credentials and security certifications
                    </p>
                </div>

                {/* Certifications Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {certifications.map((cert) => (
                        <div key={cert.id} className="card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            {/* Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                marginBottom: '1rem',
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: `${cert.color}15`,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    flexShrink: 0,
                                }}>
                                    🏆
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        color: 'var(--text-primary)',
                                        marginBottom: '0.25rem',
                                        lineHeight: 1.3,
                                    }}>
                                        {cert.name}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        color: cert.color,
                                    }}>
                                        {cert.issuer}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1rem',
                                paddingBottom: '1rem',
                                borderBottom: '1px solid var(--gray-200)',
                            }}>
                                <span style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                }}>
                                    Issued: {cert.date}
                                </span>
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.35rem',
                                    padding: '0.25rem 0.75rem',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    borderRadius: '9999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--success)',
                                }}>
                                    ✓ Verified
                                </span>
                            </div>

                            {/* Skills */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                marginTop: 'auto',
                            }}>
                                {cert.skills.slice(0, 3).map((skill) => (
                                    <span key={skill} className="tag tag-secondary" style={{
                                        fontSize: '0.8rem',
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div style={{
                    marginTop: '2.5rem',
                    textAlign: 'center',
                    padding: '2rem',
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--gray-200)',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                    }}>
                        <div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: 'var(--primary)',
                            }}>
                                {certifications.length}+
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                            }}>
                                Certifications
                            </div>
                        </div>
                        <div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: 'var(--primary)',
                            }}>
                                100%
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                            }}>
                                Verified & Active
                            </div>
                        </div>
                        <div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: 'var(--primary)',
                            }}>
                                2024
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                            }}>
                                Latest Certification
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
