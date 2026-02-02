import { useState, useEffect } from 'react';
import TerminalText, { BootSequence } from '../components/cyber/TerminalText';

const bootLines = [
    { text: 'System: Lekhraj_Portfolio_v1.0', status: 'success' as const, delay: 400 },
    { text: 'Loading: Cybersecurity Modules...', status: 'loading' as const, delay: 500 },
    { text: 'OWASP Top 10 loaded', status: 'success' as const, delay: 300 },
    { text: 'Penetration Testing tools initialized', status: 'success' as const, delay: 300 },
    { text: 'Experience timeline synchronized', status: 'success' as const, delay: 300 },
    { text: 'Security protocols active', status: 'success' as const, delay: 300 },
    { text: 'Welcome, Security Researcher', status: 'success' as const, delay: 500 },
];

export default function TerminalHero() {
    const [bootComplete, setBootComplete] = useState(false);
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        if (bootComplete) {
            const timer = setTimeout(() => setShowMainContent(true), 500);
            return () => clearTimeout(timer);
        }
    }, [bootComplete]);

    return (
        <section className="section" id="hero" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            position: 'relative',
        }}>
            <div className="terminal-window" style={{
                maxWidth: '800px',
                width: '90%',
                marginBottom: '2rem',
            }}>
                <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span style={{
                        marginLeft: 'auto',
                        color: 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                    }}>
                        neural_matrix.exe
                    </span>
                </div>
                <div className="terminal-content">
                    <BootSequence lines={bootLines} onComplete={() => setBootComplete(true)} />

                    {showMainContent && (
                        <div style={{
                            marginTop: '1.5rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--matrix-green-dim)',
                            animation: 'fadeIn 0.5s ease',
                        }}>
                            <div className="terminal-line">
                                <span className="terminal-prompt">~$ </span>
                                <TerminalText
                                    text="whoami --verbose"
                                    typingSpeed={50}
                                    showCursor={false}
                                />
                            </div>

                            <div style={{
                                marginTop: '1rem',
                                paddingLeft: '1rem',
                            }}>
                                <h1 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                    color: 'var(--matrix-green)',
                                    marginBottom: '0.5rem',
                                    textShadow: '0 0 20px var(--matrix-green-glow)',
                                }}>
                                    LEKHRAJ SINGH
                                </h1>
                                <p style={{
                                    color: 'var(--cyan)',
                                    fontSize: '1.1rem',
                                    marginBottom: '1rem',
                                }}>
                                    Security Researcher | Penetration Tester | Ethical Hacker
                                </p>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    maxWidth: '500px',
                                }}>
                                    Passionate about discovering vulnerabilities, breaking into systems (legally),
                                    and making the digital world a safer place.
                                </p>
                            </div>

                            <div style={{
                                marginTop: '2rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                            }}>
                                {['OWASP Top 10', 'Burp Suite', 'Metasploit', 'Kali Linux', 'Python'].map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showMainContent && (
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    animation: 'fadeIn 0.5s ease',
                }}>
                    <a href="#projects" className="cyber-button">
                        View Projects
                    </a>
                    <a href="#contact" className="cyber-button" style={{
                        borderColor: 'var(--cyan)',
                        color: 'var(--cyan)',
                    }}>
                        Contact Me
                    </a>
                </div>
            )}

            {/* Scroll indicator */}
            {showMainContent && (
                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite',
                }}>
                    <span style={{
                        color: 'var(--matrix-green)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                    }}>
                        ↓ Scroll to explore
                    </span>
                </div>
            )}

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
        </section>
    );
}
