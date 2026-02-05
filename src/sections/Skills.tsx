import GlassCard from '../components/GlassCard';

const Skills = () => {
    const skillCategories = [
        {
            title: "Application Security",
            skills: ["OWASP Top 10", "Secure Coding", "Web Security", "API Security"],
            icon: "AS",
            color: "text-blue-400"
        },
        {
            title: "Penetration Testing",
            skills: ["Vulnerability Assessment", "Reconnaissance", "Manual Testing", "Exploitation"],
            icon: "PT",
            color: "text-purple-400"
        },
        {
            title: "Security Tools",
            skills: ["Burp Suite", "Nmap", "Metasploit", "Kali Linux", "Wireshark"],
            icon: "ST",
            color: "text-pink-400"
        },
        {
            title: "Programming",
            skills: ["Python", "C/C++", "HTML/CSS", "JavaScript/TypeScript", "SQL"],
            icon: "PR",
            color: "text-green-400"
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & <span className="text-primary">Expertise</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A toolkit honed through rigorous practice and continuous learning in the evolving landscape of cybersecurity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <GlassCard
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className={`text-xs font-semibold tracking-wider mb-6 ${category.color} bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center`}>
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center text-slate-300 text-sm">
                                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${category.color.replace('text-', 'bg-')}`}></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
