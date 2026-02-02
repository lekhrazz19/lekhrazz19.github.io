import { useState, type FormEvent } from 'react';

export default function Contact() {
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

        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    return (
        <section id="contact" className="section" style={{
            background: 'var(--white)',
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="section-header">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">
                        Have a security project or opportunity? Let's connect.
                    </p>
                </div>

                <div className="card" style={{
                    padding: '2.5rem',
                }}>
                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-input"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                className="form-input"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                placeholder="Tell me about your project or opportunity..."
                                rows={5}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'wait' : 'pointer',
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                border: '1px solid var(--success)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--success)',
                                textAlign: 'center',
                                fontWeight: 500,
                            }}>
                                ✓ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>

                {/* Alternative Contact */}
                <div style={{
                    marginTop: '2rem',
                    textAlign: 'center',
                }}>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                    }}>
                        Or reach out directly
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <a
                            href="https://github.com/lekhrazz19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ padding: '0.75rem 1.5rem' }}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/lekhraj-singh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ padding: '0.75rem 1.5rem' }}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://bugcrowd.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ padding: '0.75rem 1.5rem' }}
                        >
                            Bugcrowd
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
