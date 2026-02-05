import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import HackerText from '../components/HackerText';
import TechStackMarquee from '../components/TechStackMarquee';


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
            {/* Tech Stack Marquee at the top */}
            <TechStackMarquee />

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
                                <HackerText text="LEKHRAJ" speed={50} />
                            </span>
                            <span className="text-accent">
                                <HackerText text=".404" speed={80} />
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Protecting your data from becoming <span className="text-accent font-semibold">Public Property</span>.
                        </p>

                        <div className="mt-8 flex justify-center">
                            <a href="#contact" className="relative z-[999] inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-green-400 bg-zinc-900 shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-transform hover:scale-105 duration-300 group">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 shadow-[0_0_15px_#4ade80]"></span>
                                </span>
                                <span className="text-base font-mono tracking-widest text-green-300 font-extrabold uppercase drop-shadow-md group-hover:text-green-200 transition-colors">
                                    OPEN TO COLLABORATION
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col items-center gap-10 relative z-50"
                    >



                    </motion.div>
                </div>
            </div>



            {/* Decorative Grid */}
            <div className="absolute bottom-10 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};

export default Hero;
