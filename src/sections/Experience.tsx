const Experience = () => {
    const experiences = [
        {
            company: "Cryptonic Area",
            role: "Security Intern",
            period: "Feb 2026 - Mar 2026",
            location: "Remote",
            points: [
                "Developed a Vulnerability Research & Reporting System (VRRS): Built custom Python automation tools (scanners, fuzzers) and Docker-containerized labs to ethically discover and report vulnerabilities using CVSS-aligned documentation.",
                "Architected SOC-in-a-Box (Security Monitoring & IR): Created detection rules (Sigma, Splunk SPL), automated attack simulations via Python, and designed Incident Response playbooks mapping to MITRE ATT&CK techniques.",
                "Engineered SecureTodo (AppSec): A secure Python/Flask web application defending against OWASP Top 10 vulnerabilities, featuring pbkdf2 password hashing, anti-SQLi ORM query structuring, and XSS neutralization."
            ]
        },
        {
            company: "Bugcrowd",
            role: "Security Researcher",
            period: "Jun 2025 - Present",
            location: "Remote",
            points: [
                "Conducting web application security testing using Burp Suite and manual techniques.",
                "Identifying and reporting OWASP Top 10 vulnerabilities with actionable remediation steps.",
                "Participating in responsible disclosure programs to secure public infrastructure."
            ]
        },
        {
            company: "HackerHub8",
            role: "Cybersecurity Volunteer",
            period: "Oct 2025 - Present",
            location: "India",
            points: [
                "Organizing cybersecurity awareness programs for local communities.",
                "Collaborating on vulnerability analysis and penetration testing workflows.",
                "Mentoring students in basic security concepts and ethical hacking."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> work --history
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My professional journey in the field of cybersecurity and ethical hacking.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8 gsap-stagger">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="gsap-stagger-item border-l-2 border-accent pl-6 hover:border-accent/80 transition-colors duration-300"
                        >
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <span style={{ color: 'var(--color-accent)' }} className="text-lg">›</span>
                                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                                </div>
                                <div className="ml-6 flex flex-wrap gap-3 text-sm">
                                    <span className="text-accent font-mono">{exp.company}</span>
                                    <span className="text-slate-500">•</span>
                                    <span className="text-slate-400">{exp.period}</span>
                                    <span className="text-slate-500">•</span>
                                    <span className="text-slate-400">{exp.location}</span>
                                </div>
                            </div>

                            <ul className="ml-6 space-y-2">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-slate-300 text-sm flex gap-3">
                                        <span style={{ color: 'var(--color-accent)' }} className="flex-shrink-0">-</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
