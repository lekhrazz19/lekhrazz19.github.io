import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import { GlassInput, GlassTextarea, GlassButton } from '../components/ui/GlassCard'

export default function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [formState, setFormState] = useState({ status: 'idle', message: '' })
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormState({ status: 'loading', message: '' })

        // Simulate form submission - replace with actual API call
        setTimeout(() => {
            setFormState({
                status: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            })
            setFormData({ name: '', email: '', message: '' })
        }, 1500)
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'singhlekhraj497@gmail.com', href: 'mailto:singhlekhraj497@gmail.com' },
        { icon: MapPin, label: 'Location', value: 'Bhilai, Chhattisgarh, India', href: null }
    ]

    const socials = [
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/lekhrazz19' },
        { icon: Github, label: 'GitHub', href: 'https://github.com/lekhrazz19' },
        { icon: Mail, label: 'Email', href: 'mailto:singhlekhraj497@gmail.com' }
    ]

    return (
        <section
            id="contact"
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
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Have a security project or need a penetration test? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <GlassCard className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white/70 text-sm mb-2">
                                        Your Name
                                    </label>
                                    <GlassInput
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                                        Email Address
                                    </label>
                                    <GlassInput
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white/70 text-sm mb-2">
                                        Message
                                    </label>
                                    <GlassTextarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <GlassButton
                                    type="submit"
                                    variant="primary"
                                    className="w-full justify-center"
                                    disabled={formState.status === 'loading'}
                                >
                                    {formState.status === 'loading' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </GlassButton>

                                {/* Status Message */}
                                {formState.status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-emerald-400 text-sm"
                                    >
                                        <CheckCircle className="w-4 h-4" />
                                        <span>{formState.message}</span>
                                    </motion.div>
                                )}

                                {formState.status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-red-400 text-sm"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{formState.message}</span>
                                    </motion.div>
                                )}
                            </form>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Info Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                            >
                                <GlassCard className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                                            <info.icon className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <span className="text-white/50 text-sm block">{info.label}</span>
                                            {info.href ? (
                                                <a href={info.href} className="text-white hover:text-emerald-400 transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <span className="text-white">{info.value}</span>
                                            )}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <GlassCard className="p-6">
                                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                                <div className="flex items-center gap-4">
                                    {socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-glow transition-all"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5 text-white/80" />
                                        </a>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
