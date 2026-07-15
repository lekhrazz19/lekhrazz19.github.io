const Skills = () => {
    const skillCategories = [
        {
            title: "AI Automation",
            skills: ["Workflow Automation", "Prompt Engineering", "Business Process Automation", "AI Agents", "AI Tool Research"],
        },
        {
            title: "Cybersecurity",
            skills: ["OWASP Top 10", "Vulnerability Assessment", "Web Penetration Testing", "Threat Detection"],
        },
        {
            title: "Security Operations",
            skills: ["SIEM", "Splunk", "Elastic Stack", "Sigma Rules", "MITRE ATT&CK", "Incident Response"],
        },
        {
            title: "Security Tools",
            skills: ["Burp Suite", "Nmap", "Metasploit", "OWASP ZAP", "Gobuster", "Nikto"],
        },
        {
            title: "Platforms",
            skills: ["Docker", "Kali Linux", "Ubuntu Server", "DVWA", "OWASP Juice Shop"],
        },
        {
            title: "Programming",
            skills: ["Python", "Flask", "C", "C++", "HTML", "CSS"],
        }
    ];

    return (
        <section id="skills" className="py-20 relative gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> skills --list
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A toolkit honed through rigorous practice and continuous learning in the evolving landscapes of cybersecurity and AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="gsap-stagger-item border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-colors duration-300 bg-surface/50"
                        >
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <span style={{ color: 'var(--color-accent)' }}>▶</span>
                                    {category.title}
                                </h3>
                            </div>

                            <ul className="space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm text-slate-300 flex items-start gap-3 hover:text-white transition-colors"
                                    >
                                        <span style={{ color: 'var(--color-accent)' }} className="mt-1 flex-shrink-0">•</span>
                                        <span>{skill}</span>
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

export default Skills;
