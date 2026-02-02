import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Lock, Terminal, Code, CheckCircle } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'

const skills = [
    {
        icon: Shield,
        title: 'Application Security',
        items: [
            'OWASP Top 10 Vulnerabilities',
            'Secure Coding Practices',
            'Web Application Security',
            'Input Validation & Sanitization'
        ]
    },
    {
        icon: Lock,
        title: 'Penetration Testing',
        items: [
            'Vulnerability Assessment',
            'Network Reconnaissance',
            'Manual Security Testing',
            'Exploitation Techniques'
        ]
    },
    {
        icon: Terminal,
        title: 'Security Tools',
        items: [
            'Burp Suite Professional',
            'Nmap & Network Scanners',
            'Metasploit Framework',
            'Kali Linux Environment'
        ]
    },
    {
        icon: Code,
        title: 'Programming',
        items: [
            'Python Scripting',
            'C / C++ Programming',
            'HTML, CSS, JavaScript',
            'Bash Scripting'
        ]
    }
]

export default function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="skills"
            ref={ref}
            className="relative min-h-screen py-32 flex items-center"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                        Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Specialized tools and methodologies for security assessment
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <GlassCard className="p-6 h-full group hover:scale-[1.02] transition-transform">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform">
                                        <skill.icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h3 className="text-white font-semibold text-lg">{skill.title}</h3>
                                </div>

                                {/* Items */}
                                <ul className="space-y-3">
                                    {skill.items.map((item, i) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 + i * 0.05 }}
                                            className="flex items-center gap-3 text-white/70 text-sm"
                                        >
                                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
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
