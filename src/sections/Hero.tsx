import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import GlassCard from '../components/GlassCard';
import HackerText from '../components/HackerText';
import StatusTicker from '../components/StatusTicker';

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!titleRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 20;
            const y = (clientY / innerHeight - 0.5) * 20;
            titleRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-accent text-sm font-mono tracking-wider mb-8">
                            SYSTEM ONLINE • SECURE CONNECTION ESTABLISHED
                        </div>

                        <h1
                            ref={titleRef}
                            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 transition-transform duration-100 ease-out flex flex-col md:block"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mr-0 md:mr-4">
                                <HackerText text="LEKHRAZZ" speed={50} />
                            </span>
                            <span className="text-accent">
                                <HackerText text=".19" speed={80} />
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Architecting <span className="text-white font-semibold">Resilient Digital Fortresses</span> &
                            <br className="hidden md:block" />
                            Uncovering <span className="text-accent">Zero-Day Vulnerabilities</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <GlassCard className="p-1 inline-flex rounded-xl bg-white/5 border-white/10">
                            <div className="flex items-center gap-6 px-8 py-4">
                                <span className="flex items-center gap-2 text-sm font-mono text-slate-300">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                                    OPEN TO COLLABORATION
                                </span>
                                <div className="h-4 w-px bg-white/20" />
                                <span className="text-sm font-mono text-slate-300">
                                    BASED IN INDIA
                                </span>
                            </div>
                        </GlassCard>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="#projects"
                                className="group relative px-8 py-4 rounded-lg bg-accent text-black font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-2">
                                    INITIALIZE PROJECTS
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="group px-8 py-4 rounded-lg border border-white/20 hover:border-accent/50 hover:bg-accent/5 transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                <span className="text-white group-hover:text-accent transition-colors font-semibold">
                                    CONTACT PROTOCOL
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Status Ticker located at bottom */}
            <div className="relative z-20 mt-auto">
                <StatusTicker />
            </div>

            {/* Decorative Grid */}
            <div className="absolute bottom-10 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};

export default Hero;
