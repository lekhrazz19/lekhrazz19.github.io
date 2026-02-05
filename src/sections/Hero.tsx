import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
                        👋 Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Lekhraj</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-8">
                        Cybersecurity Researcher & <br />
                        <span className="text-secondary font-medium">Ethical Hacker</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                        Building secure digital ecosystems and uncovering vulnerabilities before the bad guys do.
                        Passionate about red teaming, secure coding, and educating the next generation of defenders.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="btn-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <GlassCard className="max-w-md mx-auto relative z-20 !bg-slate-900/60 !border-white/20">
                        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl">
                                👨‍💻
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Lekhraj Singh</h3>
                                <p className="text-xs text-slate-400 font-mono">@lekhrazz19</p>
                            </div>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-green-400">➜</span>
                                <span className="text-purple-400">const</span>
                                <span className="text-blue-400">mission</span>
                                <span className="text-white">=</span>
                                <span className="text-orange-300">"Secure everything"</span>;
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-green-400">➜</span>
                                <span className="text-purple-400">let</span>
                                <span className="text-blue-400">skills</span>
                                <span className="text-white">=</span>
                                <span className="text-white">[</span>
                                <span className="text-orange-300">"Pentesting"</span>,
                                <span className="text-orange-300">"Research"</span>
                                <span className="text-white">]</span>;
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-green-400">➜</span>
                                <span className="text-white">launch(</span>
                                <span className="text-blue-400">mission</span>
                                <span className="text-white">)</span>;
                            </div>
                        </div>
                    </GlassCard>

                    {/* Floating decorators */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 w-20 h-20 glass rounded-2xl flex items-center justify-center text-3xl z-10"
                    >
                        🛡️
                    </motion.div>
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-5 -left-5 w-16 h-16 glass rounded-2xl flex items-center justify-center text-2xl z-30"
                    >
                        🔐
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
