import GlassCard from '../components/GlassCard';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Open to opportunities in cybersecurity research, penetration testing, and red teaming.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <GlassCard delay={0.1}>
                        <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
                                    📍
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase">Location</h4>
                                    <p className="text-lg">Bhilai, Chhattisgarh, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
                                    📧
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase">Email</h4>
                                    <a href="mailto:singhlekhraj497@gmail.com" className="text-lg hover:text-primary transition-colors">
                                        singhlekhraj497@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
                                    💼
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase">Social</h4>
                                    <div className="flex gap-4 mt-1">
                                        <a href="https://linkedin.com/in/lekhrazz19" target="_blank" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a>
                                        <a href="https://github.com/lekhrazz19" target="_blank" className="text-slate-300 hover:text-white transition-colors">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Contact Form */}
                    <GlassCard delay={0.3}>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Hello, I'd like to discuss..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full btn-primary mt-2">
                                Send Message
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>

            <footer className="mt-20 py-8 text-center text-slate-500 text-sm border-t border-white/5">
                <p>© {new Date().getFullYear()} Lekhraj Singh. All Rights Reserved.</p>
                <p className="mt-2">Built with React, Tailwind CSS & Framer Motion</p>
            </footer>
        </section>
    );
};

export default Contact;
