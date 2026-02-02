import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GlassCard from '../components/ui/GlassCard'

const experiences = [
    {
        title: 'Security Researcher',
        company: 'Bugcrowd',
        location: 'Remote',
        date: 'Jun 2025 – Present',
        points: [
            'Performed web application security testing using Burp Suite and Nmap',
            'Identified OWASP Top 10 vulnerabilities including XSS and misconfigurations',
            'Reported findings following responsible disclosure standards'
        ],
        current: true
    },
    {
        title: 'Cybersecurity Volunteer',
        company: 'HackerHub8 Company LLP',
        location: 'India',
        date: 'Oct 2025 – Present',
        points: [
            'Participated in cybersecurity awareness and training programs',
            'Collaborated on vulnerability analysis and penetration testing workflows'
        ],
        current: true
    }
]

export default function ExperienceSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="experience"
            ref={ref}
            className="relative min-h-screen py-32 flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                        Career
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Experience
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Professional journey in cybersecurity
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title + exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline line */}
                            {index < experiences.length - 1 && (
                                <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
                            )}

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-1.5">
                                <div className={`w-6 h-6 rounded-full border-2 ${exp.current ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/30 bg-dark-900'} flex items-center justify-center`}>
                                    {exp.current && (
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <GlassCard className="p-6">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl text-white font-semibold">{exp.title}</h3>
                                        <p className="text-emerald-400">{exp.company}</p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
                                        {exp.location}
                                    </span>
                                </div>

                                <span className="text-white/50 text-sm block mb-4">{exp.date}</span>

                                <ul className="space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                                            <span className="text-emerald-400 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
