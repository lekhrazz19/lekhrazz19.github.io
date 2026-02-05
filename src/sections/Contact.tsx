const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden gsap-reveal">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> contact --reach
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Open to opportunities in cybersecurity research, penetration testing, and red teaming.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="border border-accent/30 rounded-lg p-8 hover:border-accent/60 transition-colors duration-300 bg-surface/50 text-center">
                        <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                            <span style={{ color: 'var(--color-accent)' }}>◆</span>
                            Connect Directly
                        </h3>
                        <p className="text-slate-400 mb-10">
                            Choose a channel below for a direct conversation.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 gsap-stagger">
                            <a
                                href="https://linkedin.com/in/lekhrazz19"
                                target="_blank"
                                rel="noreferrer"
                                className="gsap-stagger-item group flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all duration-300 hover:-translate-y-2"
                                aria-label="LinkedIn"
                            >
                                <div className="p-3 rounded-lg bg-[#0077b5]/20 text-[#0077b5] mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/lekhrazz19"
                                target="_blank"
                                rel="noreferrer"
                                className="gsap-stagger-item group flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffffff]/50 hover:bg-[#ffffff]/10 transition-all duration-300 hover:-translate-y-2"
                                aria-label="GitHub"
                            >
                                <div className="p-3 rounded-lg bg-[#24292e]/80 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">GitHub</span>
                            </a>

                            <a
                                href="https://x.com/lekhii404"
                                target="_blank"
                                rel="noreferrer"
                                className="gsap-stagger-item group flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#000000]/50 hover:bg-[#000000]/20 transition-all duration-300 hover:-translate-y-2"
                                aria-label="X (Twitter)"
                            >
                                <div className="p-3 rounded-lg bg-black/80 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">X</span>
                            </a>

                            <a
                                href="https://discord.com/users/_kenshi_19"
                                target="_blank"
                                rel="noreferrer"
                                className="gsap-stagger-item group flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-all duration-300 hover:-translate-y-2"
                                aria-label="Discord"
                            >
                                <div className="p-3 rounded-lg bg-[#5865F2]/20 text-[#5865F2] mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-[#5865F2] transition-colors">Discord</span>
                            </a>

                            <a
                                href="mailto:singhlekhraj497@gmail.com"
                                className="gsap-stagger-item group flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ea4335]/50 hover:bg-[#ea4335]/10 transition-all duration-300 hover:-translate-y-2"
                                aria-label="Gmail"
                            >
                                <div className="p-3 rounded-lg bg-[#ea4335]/20 text-[#ea4335] mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75zm2.3-.75l6.7 5.1L18.7 5H5.3zm13.95 2.2l-6.5 4.95a1.5 1.5 0 01-1.8 0L4.45 7.2v10.9c0 .3.25.55.55.55h14a.55.55 0 00.55-.55V7.2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-[#ea4335] transition-colors">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-20 py-8 text-center text-slate-500 text-sm border-t border-border">
                <p className="text-slate-400">© {new Date().getFullYear()} Lekhraj Singh. All Rights Reserved.</p>
                <p className="mt-2 text-xs text-slate-600">Protected by <span style={{ color: 'var(--color-accent)' }}>127.0.0.1</span> and a hope.</p>
            </footer>
        </section>
    );
};

export default Contact;
