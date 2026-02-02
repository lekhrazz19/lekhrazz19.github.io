import { useEffect, useRef } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Optional: Add simple paranoid parallax or hover effect here if needed later
    }, []);

    return (
        <section id="hero" className="section" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
            }}>
                {/* Left Column: Intro */}
                <div>
                    <div style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: 'rgba(112, 66, 248, 0.15)',
                        border: '1px solid rgba(112, 66, 248, 0.3)',
                        borderRadius: '20px',
                        color: '#c496ff',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        letterSpacing: '0.02em',
                    }}>
                        ✨ Available for new opportunities
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                    }}>
                        Protecting the <br />
                        <span className="heading-gradient">Digital Frontier</span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        maxWidth: '540px',
                        marginBottom: '2.5rem',
                    }}>
                        I'm <strong style={{ color: '#fff' }}>Lekhraj Singh</strong>, a Security Researcher exploring the depths of web vulnerabilities. Identifying critical risks before they become breaches.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-glow">
                            View Research
                        </a>
                        <a href="#contact" style={{
                            padding: '12px 28px',
                            borderRadius: '99px',
                            border: '1px solid var(--border-glass)',
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            fontWeight: 500,
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-glass)';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Column: Visual Bento Grid Abstract */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    position: 'relative',
                }} ref={containerRef}>
                    {/* Glass Card 1: Stats */}
                    <div className="glass-card animate-float" style={{ padding: '1.5rem', gridColumn: 'span 2' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Vulnerabilities Found</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff' }}>50+</div>
                            </div>
                            <div style={{
                                width: '50px', height: '50px',
                                background: 'linear-gradient(135deg, #7042f8 0%, #00d4ff 100%)',
                                borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}>🛡️</div>
                        </div>
                        <div style={{ marginTop: '1rem', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                            <div style={{ width: '85%', height: '100%', background: 'var(--primary)', borderRadius: '2px' }}></div>
                        </div>
                    </div>

                    {/* Glass Card 2: Current Status */}
                    <div className="glass-card" style={{ padding: '1.5rem', animationDelay: '1s' }}>
                        <div style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Active Status</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hunting on Bugcrowd</div>
                    </div>

                    {/* Glass Card 3: Tech Stack */}
                    <div className="glass-card" style={{ padding: '1.5rem', animationDelay: '2s' }}>
                        <div style={{ color: 'var(--accent)', fontSize: '2rem', marginBottom: '0.5rem' }}>💻</div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Focus</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Web / Network / Cloud</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
