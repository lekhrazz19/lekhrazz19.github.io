import GlassCard from '../components/GlassCard';

const Experience = () => {
    const experiences = [
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
        <section id="experience" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-secondary">Experience</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My professional journey in the field of cybersecurity and ethical hacking.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-[11px] top-6 w-5 h-5 rounded-full bg-dark border-4 border-accent z-10 md:left-1/2 md:-translate-x-1/2 md:top-6 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                    <GlassCard
                                        className={`md:mx-8 ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}
                                        delay={index * 0.2}
                                    >
                                        <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'align-start' : 'md:items-end'}`}>
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <span className="text-primary font-medium">{exp.company}</span>
                                            <div className="flex gap-4 text-xs text-slate-400 mt-1 font-mono">
                                                <span>{exp.period}</span>
                                                <span>•</span>
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                        <ul className={`space-y-2 text-sm text-slate-300 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="leading-relaxed">
                                                    • {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </GlassCard>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
