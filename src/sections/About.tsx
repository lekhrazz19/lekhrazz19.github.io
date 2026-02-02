import { homelabProject } from '../data/projects';

export default function About() {
    return (
        <section id="about" className="section" style={{
            background: 'var(--white)',
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Security enthusiast with a passion for finding vulnerabilities and protecting systems
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '2rem',
                }}>
                    {/* About Card */}
                    <div className="card">
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '1rem',
                        }}>
                            My Journey
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                            marginBottom: '1.5rem',
                        }}>
                            I'm a dedicated security researcher focused on web application security and penetration testing.
                            My work involves identifying vulnerabilities in live systems through bug bounty programs and
                            building secure applications from the ground up.
                        </p>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                        }}>
                            With hands-on experience in OWASP Top 10 vulnerabilities, I help organizations
                            strengthen their security posture through ethical hacking and responsible disclosure.
                        </p>
                    </div>

                    {/* Project Card */}
                    <div className="card" style={{
                        background: 'linear-gradient(135deg, var(--gray-50), var(--white))',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                        }}>
                            <span style={{
                                width: '40px',
                                height: '40px',
                                background: 'var(--primary-glow)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem',
                            }}>
                                🔬
                            </span>
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                            }}>
                                Featured Project
                            </h3>
                        </div>

                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: 'var(--primary)',
                            marginBottom: '0.5rem',
                        }}>
                            {homelabProject.title}
                        </h4>

                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            marginBottom: '1.5rem',
                        }}>
                            {homelabProject.description}
                        </p>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                        }}>
                            {homelabProject.tools.slice(0, 5).map((tool) => (
                                <span key={tool} className="tag tag-secondary">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div style={{
                    marginTop: '3rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {[
                        { value: '5+', label: 'Vulnerabilities Found' },
                        { value: '10+', label: 'Security Tools' },
                        { value: '4+', label: 'Certifications' },
                        { value: '2025', label: 'Started Research' },
                    ].map((stat) => (
                        <div key={stat.label} style={{
                            textAlign: 'center',
                            padding: '1.5rem',
                        }}>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 800,
                                color: 'var(--primary)',
                                marginBottom: '0.5rem',
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
