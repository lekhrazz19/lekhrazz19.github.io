const Photos = () => {
    return (
        <section id="articles" className="py-20 relative gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Articles & <span className="text-primary">Writeups</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Technical breakdowns, security research, and field notes.
                    </p>
                </div>

                <div className="article-grid gsap-stagger">
                    <article className="article-card premium-ring gsap-stagger-item">
                        <div className="article-card__content">
                            <p className="article-meta">Research · Jan 2026</p>
                            <h3>Deep Dive: Web Security Misconfigurations</h3>
                            <p>
                                A practical guide to identifying misconfigurations and hardening
                                modern web stacks.
                            </p>
                            <a className="article-link" href="#">Read Writeup</a>
                        </div>
                    </article>

                    <article className="article-card premium-ring gsap-stagger-item">
                        <div className="article-card__content">
                            <p className="article-meta">Case Study · Dec 2025</p>
                            <h3>API Security: Threat Modeling in Practice</h3>
                            <p>
                                A structured method for assessing API risk, aligned with real-world
                                attacker behavior.
                            </p>
                            <a className="article-link" href="#">Read Writeup</a>
                        </div>
                    </article>

                    <article className="article-card premium-ring gsap-stagger-item">
                        <div className="article-card__content">
                            <p className="article-meta">Notes · Nov 2025</p>
                            <h3>Burp Suite Workflow: Efficiency Patterns</h3>
                            <p>
                                A streamlined workflow for faster triage, reporting, and validation.
                            </p>
                            <a className="article-link" href="#">Read Writeup</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Photos;
