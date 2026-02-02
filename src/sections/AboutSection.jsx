import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Zap, Search, Shield, GraduationCap, Award } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'

const features = [
    {
        icon: Search,
        title: 'Security Research',
        description: 'Active bug bounty hunter on Bugcrowd'
    },
    {
        icon: Shield,
        title: 'Penetration Testing',
        description: 'Web application security testing'
    },
    {
        icon: GraduationCap,
        title: 'B.Tech Student',
        description: 'Computer Engineering (2024-2028)'
    },
    {
        icon: Award,
        title: 'Certified',
        description: 'ISO 27001, Cisco, IBM'
    }
]

const stats = [
    { icon: Target, label: 'Focus Area', value: 'Web Security' },
    { icon: Zap, label: 'Specialization', value: 'Pen Testing' }
]

export default function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="about"
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
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Passionate About Security
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Combining academic excellence with hands-on security research experience
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            I'm a cybersecurity enthusiast currently pursuing B.Tech in Computer Engineering
                            at Shri Shankaracharya Technical Campus. My passion lies in finding vulnerabilities
                            before malicious actors do.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            With hands-on experience in penetration testing and bug bounty programs, I've developed
                            a deep understanding of web application security, OWASP Top 10 vulnerabilities, and
                            security testing methodologies.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                >
                                    <GlassCard className="p-4 flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-emerald-500/20">
                                            <stat.icon className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <span className="text-white/50 text-sm block">{stat.label}</span>
                                            <span className="text-white font-medium">{stat.value}</span>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            >
                                <GlassCard className="p-6 h-full group">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                                    <p className="text-white/50 text-sm">{feature.description}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
