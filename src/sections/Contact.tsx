import GlassCard from '../components/GlassCard';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        GET IN <span style={{ color: 'var(--color-accent)' }}>TOUCH</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                        Open to opportunities in cybersecurity research, penetration testing, and red teaming.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="terminal-card text-center">
                        <h3 className="text-2xl font-bold mb-6">Connect Directly</h3>
                        <p style={{ color: 'var(--color-text-secondary)' }} className="mb-10">
                            Choose a channel below for a direct conversation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://linkedin.com/in/lekhrazz19"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-terminal"
                                aria-label="LinkedIn"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/lekhrazz19"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-terminal"
                                aria-label="GitHub"
                            >
                                GitHub
                            </a>

                            <a
                                href="mailto:singhlekhraj497@gmail.com"
                                className="btn-terminal"
                                aria-label="Gmail"
                            >
                                Gmail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
                                        <path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75zm2.3-.75l6.7 5.1L18.7 5H5.3zm13.95 2.2l-6.5 4.95a1.5 1.5 0 01-1.8 0L4.45 7.2v10.9c0 .3.25.55.55.55h14a.55.55 0 00.55-.55V7.2z"/>
                                    </svg>
                                </span>
                                Gmail
                            </a>
                        </div>
                    </GlassCard>
                </div>
            </div>

            <footer className="mt-20 py-8 text-center text-slate-500 text-sm border-t border-white/5">
                <p>© {new Date().getFullYear()} Lekhraj Singh. All Rights Reserved.</p>
                <p className="mt-2">Built with React, Tailwind CSS & Framer Motion</p>
            </footer>
        </section>
    );
};

export default Contact;
