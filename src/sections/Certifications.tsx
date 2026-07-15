const Certifications = () => {
    const certifications = [
        {
            name: "Internship Completion Certificate — AI Automation Intern",
            issuer: "Bharat AI Vyapari",
            status: "Completed",
            icon: "🤖",
            color: "#10B981",
            link: null
        },
        {
            name: "Cyber Security Internship",
            issuer: "Cryptonic Area",
            status: "Completed",
            icon: "🛡️",
            color: "#EF4444",
            link: null
        },
        {
            name: "ISO 27001 Foundation",
            issuer: "Information Security",
            status: "Completed",
            icon: "🔐",
            color: "#4285F4",
            link: "https://www.skillfront.com/Badges/07913698924389"
        },
        {
            name: "Cybersecurity Fundamentals",
            issuer: "IBM",
            status: "Completed",
            icon: "💻",
            color: "#054ADA",
            link: null
        },
        {
            name: "Ethical Hacker",
            issuer: "Cisco",
            status: "Completed",
            icon: "🎯",
            color: "#049FD9",
            link: "https://www.credly.com/badges/b38976c5-d363-4986-847f-c357bcdb8ad2/linked_in_profile"
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto gsap-stagger">
                    {certifications.map((cert, index) => {
                        const CardWrapper = cert.link ? 'a' : 'div';
                        const cardProps = cert.link ? { href: cert.link, target: "_blank", rel: "noreferrer" } : {};

                        return (
                            <CardWrapper
                                key={index}
                                {...cardProps}
                                className={`gsap-stagger-item group relative border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-all duration-300 bg-surface/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/5 ${cert.link ? 'cursor-pointer' : ''}`}
                            >
                                {/* Status Badge */}
                                <div className="absolute top-3 right-3 flex items-center gap-2">
                                    {cert.link && (
                                        <span className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                            Verify ↗
                                        </span>
                                    )}
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
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${cert.color}20` }}
                                >
                                    <svg className="w-6 h-6" style={{ color: cert.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-slate-400">
                                    {cert.issuer}
                                </p>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
