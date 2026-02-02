import { motion } from 'framer-motion'
import { Shield, MapPin, ExternalLink, Mail, Github, Linkedin } from 'lucide-react'
import { GlassButton } from '../components/ui/GlassCard'
import ScrollIndicator from '../components/ui/ScrollIndicator'

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
                        >
                            <Shield className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-sm font-medium">Security Researcher</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
                        >
                            <span className="text-white/60 text-2xl md:text-3xl block mb-2">Hello, I'm</span>
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                Lekhraj Singh
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl md:text-2xl text-white/80 mb-4"
                        >
                            Cybersecurity Researcher & Penetration Tester
                        </motion.p>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-2 text-white/50 mb-6"
                        >
                            <MapPin className="w-4 h-4" />
                            <span>Bhilai, Chhattisgarh, India</span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl"
                        >
                            Computer Engineering undergraduate specializing in penetration testing,
                            bug bounty hunting, and application security. Expert in OWASP Top 10
                            vulnerabilities and security testing methodologies.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <a href="#projects">
                                <GlassButton variant="primary" className="group">
                                    <span>View Projects</span>
                                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </GlassButton>
                            </a>
                            <a href="#contact">
                                <GlassButton variant="ghost">
                                    <Mail className="w-4 h-4" />
                                    <span>Get In Touch</span>
                                </GlassButton>
                            </a>
                        </motion.div>

                        {/* Socials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex items-center gap-4"
                        >
                            <a
                                href="https://linkedin.com/in/lekhrazz19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-glow"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-white/80" />
                            </a>
                            <a
                                href="https://github.com/lekhrazz19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-glow"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 text-white/80" />
                            </a>
                            <a
                                href="mailto:singhlekhraj497@gmail.com"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-glow"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 text-white/80" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* 3D Object space - empty div for layout */}
                    <div className="hidden lg:block relative h-[500px]">
                        {/* The 3D scene is rendered at app level, this is just for layout */}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    )
}
