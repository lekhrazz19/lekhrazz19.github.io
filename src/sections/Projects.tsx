import GlassCard from '../components/GlassCard';

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
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Practical applications of my skills in secure system design and ethical hacking.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <GlassCard key={index} delay={index * 0.2} className="flex flex-col">
                            <div className="mb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <span className="text-xs font-mono py-1 px-2 rounded bg-white/5 text-slate-400">{project.period}</span>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <h4 className="text-sm font-bold text-accent mb-2">Key Highlights:</h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-center text-sm text-slate-300">
                                                <span className="mr-2 text-green-400">•</span> {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
