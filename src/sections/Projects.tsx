const Projects = () => {
    const projects = [
        {
            title: "Vulnerability Research & Reporting System",
            period: "March 2026",
            description: "Developed an end-to-end framework to formalize the vulnerability research lifecycle. Built custom Python automation tools (scanners, fuzzers) and Docker-containerized labs to ethically discover and report vulnerabilities using CVSS-aligned documentation.",
            technologies: ["Python", "Docker", "CVSS", "Custom Tooling"],
            highlights: ["Custom Python automation (scanners, payload generators)", "Docker-based vulnerable lab environments", "Professional CVSS v3.1 aligned reporting format", "Ethical disclosure and risk assessment workflows"],
            github: "https://github.com/lekhrazz19/Vulnerability-Research-Reporting-System"
        },
        {
            title: "SOC-in-a-Box (Security Monitoring & Incident Response)",
            period: "March 2026",
            description: "Architected a practical Security Operations Center simulation combining log collection, detection engineering, and incident response playbooks. Engineered rules mapped to MITRE ATT&CK and created automated attack simulation scripts.",
            technologies: ["Elastic", "Splunk SPL", "Sigma", "Python"],
            highlights: ["Multi-platform detection content (Sigma, Splunk, Elastic)", "Automated attack simulation and log ingestion via Python", "Comprehensive IR Playbooks (Ransomware, Phishing, Data Exfiltration)", "Mapped to MITRE ATT&CK techniques"],
            github: "https://github.com/lekhrazz19/Security-Monitoring-Incident-Response-Project"
        },
        {
            title: "SecureTodo (AppSec Demonstration)",
            period: "March 2026",
            description: "Engineered a secure Python/Flask web application designed specifically to defend against the OWASP Top 10 vulnerabilities. Implemented secure authentication, robust data protection, and hardened browser security headers.",
            technologies: ["Python", "Flask", "SQLite", "AppSec"],
            highlights: ["pbkdf2:sha256 password hashing with salting", "Anti-SQL Injection via Flask-SQLAlchemy ORM", "Strict Jinja2 XSS neutralization and auto-escaping", "Secure session management (HttpOnly, SameSite=Lax)"],
            github: "https://github.com/lekhrazz19/SecureTodo"
        },
        {
            title: "Cybersecurity Homelab",
            period: "2024 - Present",
            description: "A self-hosted virtualized penetration testing environment designed to simulate real-world attack scenarios. Serves as a sandbox for testing vulnerable applications and analyzing malware behavior safely.",
            technologies: ["Kali Linux", "DVWA", "Burp Suite", "Metasploit", "VirtualBox"],
            highlights: ["SQL Injection exploitation", "XSS Attack vectors", "Authentication Bypass techniques", "Network traffic analysis"],
            github: "https://github.com/lekhrazz19/homelab"
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

                                {project.github && (
                                    <div className="pt-6 mt-6 border-t border-border">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
                                        >
                                            <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">View on GitHub</span>
                                            <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
