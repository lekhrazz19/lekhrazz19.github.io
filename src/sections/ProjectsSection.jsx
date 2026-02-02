import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Bug, Github, CheckCircle } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'

const projects = [
    {
        icon: Server,
        title: 'Cybersecurity Homelab',
        subtitle: 'Attack–Defense Environment',
        description: 'Virtualized cybersecurity lab for penetration testing research with Kali Linux and Ubuntu Server. Configured vulnerable applications including DVWA and Juice Shop.',
        tags: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap'],
        features: [
            'SQL Injection & XSS exploitation',
            'Authentication bypass techniques',
            'OWASP Top 10 documentation'
        ],
        github: 'https://github.com/lekhrazz19',
        featured: true
    },
    {
        icon: Bug,
        title: 'Bug Bounty Research',
        subtitle: 'Security Vulnerability Hunting',
        description: 'Active participation in bug bounty programs, identifying and reporting security vulnerabilities across web applications.',
        tags: ['Burp Suite', 'OWASP ZAP', 'Python'],
        features: [],
        github: null,
        featured: false
    }
]

export default function ProjectsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="projects"
            ref={ref}
            className="relative min-h-screen py-32 flex items-center"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Hands-on security research and lab environments
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                        >
                            <GlassCard
                                className={`p-8 h-full group hover:scale-[1.02] transition-transform ${project.featured ? 'ring-1 ring-emerald-500/30' : ''}`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform">
                                        <project.icon className="w-8 h-8 text-emerald-400" />
                                    </div>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                                        >
                                            <Github className="w-5 h-5 text-white/70" />
                                        </a>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl text-white font-semibold mb-1">{project.title}</h3>
                                <p className="text-emerald-400 text-sm mb-4">{project.subtitle}</p>

                                {/* Description */}
                                <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Features */}
                                {project.features.length > 0 && (
                                    <ul className="space-y-2">
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-white/70 text-sm"
                                            >
                                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
