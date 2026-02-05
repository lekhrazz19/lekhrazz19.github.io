const Projects = () => {
    const projects = [
        {
            title: "Cybersecurity Homelab",
            period: "2024 - Present",
            description: "A self-hosted virtualized penetration testing environment designed to simulate real-world attack scenarios. Serves as a sandbox for testing vulnerable applications and analyzing malware behavior safely.",
            technologies: ["Kali Linux", "DVWA", "Burp Suite", "Metasploit", "VirtualBox"],
            highlights: ["SQL Injection exploitation", "XSS Attack vectors", "Authentication Bypass techniques", "Network traffic analysis"]
        },
        {
            title: "Portfolio 3.0 (Ecological)",
            period: "2025",
            description: "An experimental 3D portfolio visualization using React Three Fiber, exploring the metaphor of a digital ecosystem. (Archived/Previous Iteration)",
            technologies: ["React Three Fiber", "TypeScript", "Procedural Generation", "WebGL"],
            highlights: ["3D Scene Graph", "Organic shaders", "Interactive particle systems"]
        }
    ];

    return (
        <section id="projects" className="py-20 gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> projects --featured
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Practical applications of my skills in secure system design and ethical hacking.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto gsap-stagger">
                    {projects.map((project, index) => (
                        <div key={index} className="gsap-stagger-item border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-colors duration-300 bg-surface/50 flex flex-col">
                            <div className="mb-4">
                                <div className="flex justify-between items-start mb-2 pb-3 border-b border-border">
                                    <h3 className="text-2xl font-bold flex items-center gap-2">
                                        <span style={{ color: 'var(--color-accent)' }}>◆</span>
                                        {project.title}
                                    </h3>
                                    <span className="text-xs font-mono text-slate-400">{project.period}</span>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span>›</span> Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs border border-accent/40 rounded px-2 py-1 text-slate-300 hover:border-accent/80 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-border">
                                    <h4 className="text-sm font-bold text-accent mb-3 flex items-center gap-2">
                                        <span>✓</span> Key Highlights
                                    </h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-center text-sm text-slate-300">
                                                <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span> {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
