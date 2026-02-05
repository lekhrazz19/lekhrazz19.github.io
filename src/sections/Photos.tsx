const Photos = () => {
    return (
        <section id="articles" className="py-20 relative gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> articles --read
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Technical breakdowns, security research, and field notes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto gsap-stagger">
                    <article className="gsap-stagger-item border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-colors duration-300 bg-surface/50 flex flex-col group">
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-xs font-mono text-slate-400">Research · Jan 2026</span>
                            <span style={{ color: 'var(--color-accent)' }} className="text-lg">›</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                            Deep Dive: Web Security Misconfigurations
                        </h3>
                        <p className="text-slate-300 text-sm mb-4 flex-grow">
                            A practical guide to identifying misconfigurations and hardening modern web stacks.
                        </p>
                        <a className="text-accent hover:text-white text-sm font-mono flex items-center gap-2 transition-colors" href="#">
                            read_writeup.sh
                            <span>→</span>
                        </a>
                    </article>

                    <article className="gsap-stagger-item border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-colors duration-300 bg-surface/50 flex flex-col group">
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-xs font-mono text-slate-400">Case Study · Dec 2025</span>
                            <span style={{ color: 'var(--color-accent)' }} className="text-lg">›</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                            API Security: Threat Modeling in Practice
                        </h3>
                        <p className="text-slate-300 text-sm mb-4 flex-grow">
                            A structured method for assessing API risk, aligned with real-world attacker behavior.
                        </p>
                        <a className="text-accent hover:text-white text-sm font-mono flex items-center gap-2 transition-colors" href="#">
                            read_writeup.sh
                            <span>→</span>
                        </a>
                    </article>

                    <article className="gsap-stagger-item border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-colors duration-300 bg-surface/50 flex flex-col group">
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-xs font-mono text-slate-400">Notes · Nov 2025</span>
                            <span style={{ color: 'var(--color-accent)' }} className="text-lg">›</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                            Burp Suite Workflow: Efficiency Patterns
                        </h3>
                        <p className="text-slate-300 text-sm mb-4 flex-grow">
                            A streamlined workflow for faster triage, reporting, and validation.
                        </p>
                        <a className="text-accent hover:text-white text-sm font-mono flex items-center gap-2 transition-colors" href="#">
                            read_writeup.sh
                            <span>→</span>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Photos;
