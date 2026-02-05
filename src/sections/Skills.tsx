const Skills = () => {
    const skillCategories = [
        {
            title: "Application Security",
            skills: ["OWASP Top 10", "Secure Coding", "Web Security", "API Security"],
        },
        {
            title: "Penetration Testing",
            skills: ["Vulnerability Assessment", "Reconnaissance", "Manual Testing", "Exploitation"],
        },
        {
            title: "Security Tools",
            skills: ["Burp Suite", "Nmap", "Metasploit", "Kali Linux", "Wireshark"],
        },
        {
            title: "Programming",
            skills: ["Python", "C/C++", "HTML/CSS", "JavaScript/TypeScript", "SQL"],
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
                        A toolkit honed through rigorous practice and continuous learning in the evolving landscape of cybersecurity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger">
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

                <div className="mt-16 border-t border-border pt-12">
                    <h3 className="text-xl font-semibold mb-8">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> languages --version
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="border border-border rounded p-4 hover:border-accent/60 transition-colors">
                            <div className="text-slate-400 mb-2">Python</div>
                            <div className="text-accent font-mono">3.9+</div>
                        </div>
                        <div className="border border-border rounded p-4 hover:border-accent/60 transition-colors">
                            <div className="text-slate-400 mb-2">JavaScript/TypeScript</div>
                            <div className="text-accent font-mono">ES2022+</div>
                        </div>
                        <div className="border border-border rounded p-4 hover:border-accent/60 transition-colors">
                            <div className="text-slate-400 mb-2">C/C++</div>
                            <div className="text-accent font-mono">C++17</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
