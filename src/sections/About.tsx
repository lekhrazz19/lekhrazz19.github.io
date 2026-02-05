const About = () => {
    return (
        <section id="about" className="py-20 relative gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    {/* Image / Visual Column */}
                    <div className="relative group gsap-stagger-item">
                        {/* Frame/Border Effect */}
                        <div className="absolute -inset-4 border-2 border-accent/20 rounded-xl opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
                        <div className="absolute -inset-4 border-2 border-accent/20 rounded-xl opacity-30 rotate-3 group-hover:rotate-0 transition-all duration-500"></div>

                        {/* Image Container */}
                        <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-[4/5] shadow-2xl">
                            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

                            {/* Placeholder for Profile Image */}
                            <img
                                src="/profile.jpg"
                                alt="Lekhraj Singh"
                                className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                                onError={(e) => {
                                    // Fallback if image doesn't exist
                                    (e.target as HTMLImageElement).src = '/profile.jpg';
                                }}
                            />

                            {/* Cyber Overlay Details */}
                            <div className="absolute bottom-4 left-4 z-20 font-mono text-xs text-accent">
                                <div className="flex flex-col gap-1">
                                    <span>ID: KENSHII</span>
                                    <span>STATUS: ONLINE</span>
                                    <span>LOC: INDIA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Column */}
                    <div className="space-y-6 gsap-stagger-item">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span style={{ color: 'var(--color-accent)' }}>$</span> whoami
                        </h2>

                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                            <p>
                                I'm <strong className="text-white">Lekhraj Singh</strong>, a Cybersecurity Researcher and Ethical Hacker with a passion for breaking secure systems to make them stronger.
                            </p>
                            <p>
                                My journey began with curiosity—wondering how digital systems tick, and more importantly, how they break. Today, I specialize in <span className="text-accent">Web Application Security</span>
                            </p>
                            <p>
                                When I'm not hunting vulnerabilities on Bugcrowd or analyzing malware in my homelab, I'm building tools to automate the offensive security workflow.
                            </p>
                        </div>

                        {/* Stats / Quick Facts */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-8">
                            <div>
                                <h4 className="text-accent font-mono text-sm mb-1">CURRENT FOCUS</h4>
                                <p className="text-white font-bold">AI Security & Web Security</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
