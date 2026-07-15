const Experience = () => {
    const experiences = [
        {
            company: "Bharat AI Vyapari",
            role: "AI Automation Intern",
            period: "Apr 2026 – Jun 2026",
            location: "Bhilai, India",
            points: [
                "Designed AI-powered workflow automation solutions for business process optimization across multiple operational use cases.",
                "Developed prompt engineering strategies and evaluated AI tools to improve automation quality and workflow efficiency.",
                "Conducted automation system testing, identified workflow bottlenecks, and contributed to scalable AI-driven business automation initiatives."
            ]
        },
        {
            company: "Cryptonic Area",
            role: "Cyber Security Intern",
            period: "Feb 2026 – Mar 2026",
            location: "Remote",
            points: [
                "Developed SOC-style security tooling and automated reconnaissance workflows using Python and offensive security techniques.",
                "Performed vulnerability assessments against intentionally vulnerable applications aligned with OWASP Top 10 methodologies."
            ]
        },
        {
            company: "Bugcrowd",
            role: "Security Researcher",
            period: "Jun 2025 – Present",
            location: "Remote",
            points: [
                "Conducted manual web application penetration testing across bug bounty programs.",
                "Reported security vulnerabilities with remediation recommendations following responsible disclosure practices."
            ]
        },
        {
            company: "HackerHub8 Company LLP",
            role: "Cybersecurity Volunteer",
            period: "Oct 2025 – Present",
            location: "India",
            points: [
                "Supported vulnerability analysis, security awareness initiatives, and cybersecurity community activities."
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
