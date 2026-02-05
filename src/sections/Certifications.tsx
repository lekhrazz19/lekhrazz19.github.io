const Certifications = () => {
    const certifications = [
        {
            name: "ISO 27001 Foundation",
            issuer: "Information Security",
            status: "Completed",
            icon: "🔐",
            color: "#4285F4"
        },
        {
            name: "Cybersecurity Fundamentals",
            issuer: "IBM",
            status: "Completed",
            icon: "🛡️",
            color: "#054ADA"
        },
        {
            name: "Ethical Hacker",
            issuer: "Cisco",
            status: "Completed",
            icon: "🎯",
            color: "#049FD9"
        }
    ];

    return (
        <section id="certifications" className="py-20 relative gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> certifications --verify
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Professional credentials and ongoing learning journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto gsap-stagger">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="gsap-stagger-item group relative border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-all duration-300 bg-surface/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/5"
                        >
                            {/* Status Badge */}
                            <div className="absolute top-3 right-3">
                                <span
                                    className={`text-xs font-mono px-2 py-1 rounded-full ${cert.status === 'Completed'
                                        ? 'bg-green-500/20 text-green-400'
                                        : cert.status === 'In Progress'
                                            ? 'bg-yellow-500/20 text-yellow-400'
                                            : cert.status === 'Coming Soon'
                                                ? 'bg-blue-500/20 text-blue-400'
                                                : 'bg-slate-500/20 text-slate-400'
                                        }`}
                                >
                                    {cert.status}
                                </span>
                            </div>

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: `${cert.color}20` }}
                            >
                                {cert.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
                                {cert.name}
                            </h3>
                            <p className="text-sm text-slate-400">
                                {cert.issuer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
