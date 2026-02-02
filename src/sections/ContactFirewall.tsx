import { useState, type FormEvent } from 'react';

export default function ContactFirewall() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    return (
        <section className="section" id="contact" style={{
            background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="section-title glow-text">
                    <span style={{ color: 'var(--matrix-green)' }}>&lt;</span>
                    Contact Firewall
                    <span style={{ color: 'var(--matrix-green)' }}>/&gt;</span>
                </h2>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    textAlign: 'center',
                    maxWidth: '500px',
                    margin: '0 auto 3rem',
                }}>
                    Initiate secure transmission through the firewall
                </p>

                {/* Terminal-style form */}
                <div className="terminal-window">
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
                            secure_channel.exe
                        </span>
                    </div>
                    <div className="terminal-content">
                        <div className="terminal-line" style={{ marginBottom: '1rem' }}>
                            <span className="terminal-prompt">FIREWALL:</span>
                            <span className="terminal-success"> Connection established</span>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    color: 'var(--cyan)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.85rem',
                                    marginBottom: '0.5rem',
                                }}>
                                    SENDER_ID:
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="Enter your name..."
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(10, 255, 0, 0.05)',
                                        border: '1px solid var(--matrix-green-dim)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--matrix-green)';
                                        e.target.style.boxShadow = '0 0 10px var(--matrix-green-glow)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--matrix-green-dim)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            {/* Email Field */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    color: 'var(--cyan)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.85rem',
                                    marginBottom: '0.5rem',
                                }}>
                                    RETURN_ADDRESS:
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    placeholder="Enter your email..."
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(10, 255, 0, 0.05)',
                                        border: '1px solid var(--matrix-green-dim)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--matrix-green)';
                                        e.target.style.boxShadow = '0 0 10px var(--matrix-green-glow)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--matrix-green-dim)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            {/* Message Field */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    color: 'var(--cyan)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.85rem',
                                    marginBottom: '0.5rem',
                                }}>
                                    PACKET_DATA:
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    placeholder="Enter your message..."
                                    rows={5}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(10, 255, 0, 0.05)',
                                        border: '1px solid var(--matrix-green-dim)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        outline: 'none',
                                        resize: 'vertical',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--matrix-green)';
                                        e.target.style.boxShadow = '0 0 10px var(--matrix-green-glow)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--matrix-green-dim)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="cyber-button"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'wait' : 'pointer',
                                }}
                            >
                                {isSubmitting ? (
                                    <span className="loading-pulse">TRANSMITTING...</span>
                                ) : (
                                    '[ TRANSMIT PACKET ]'
                                )}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div style={{
                                    marginTop: '1rem',
                                    padding: '1rem',
                                    background: 'rgba(10, 255, 0, 0.1)',
                                    border: '1px solid var(--matrix-green)',
                                    borderRadius: 'var(--radius-sm)',
                                    color: 'var(--matrix-green)',
                                    fontFamily: 'var(--font-mono)',
                                    textAlign: 'center',
                                }}>
                                    ✓ PACKET TRANSMITTED SUCCESSFULLY
                                </div>
                            )}
                        </form>

                        {/* Transmission Info */}
                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--matrix-green-dim)',
                        }}>
                            <div className="terminal-line">
                                <span className="terminal-prompt">STATUS:</span>
                                <span style={{ color: 'var(--matrix-green)' }}> Firewall: OPEN</span>
                            </div>
                            <div className="terminal-line">
                                <span className="terminal-prompt">PROTOCOL:</span>
                                <span style={{ color: 'var(--text-secondary)' }}> Secure HTTP/3</span>
                            </div>
                            <div className="terminal-line">
                                <span className="terminal-prompt">ENCRYPTION:</span>
                                <span style={{ color: 'var(--text-secondary)' }}> AES-256-GCM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alternative Contact Methods */}
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <a
                        href="https://github.com/lekhrazz19"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            background: 'transparent',
                            border: '1px solid var(--text-secondary)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--cyan)';
                            e.currentTarget.style.color = 'var(--cyan)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--text-secondary)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/lekhraj-singh"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            background: 'transparent',
                            border: '1px solid var(--text-secondary)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--cyan)';
                            e.currentTarget.style.color = 'var(--cyan)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--text-secondary)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://bugcrowd.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            background: 'transparent',
                            border: '1px solid var(--text-secondary)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--vuln-red)';
                            e.currentTarget.style.color = 'var(--vuln-red)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--text-secondary)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <span>Bugcrowd</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
