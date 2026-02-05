import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 gsap-reveal">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float gsap-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float gsap-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] gsap-float" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
                        Welcome to my portfolio
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
                    <div className="portrait-frame premium-ring">
                        <div className="portrait-placeholder">
                            <span>Professional Portrait</span>
                        </div>
                    </div>


                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
