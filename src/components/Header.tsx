import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Articles', href: '#articles' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
            >
                <div
                    className={`
                        pointer-events-auto
                        transition-all duration-300 ease-in-out
                        flex items-center justify-between
                        px-6 py-3 rounded-full
                        backdrop-blur-md border 
                        ${scrolled
                            ? 'bg-black/60 border-white/10 w-[90%] md:w-[80%] max-w-5xl shadow-lg shadow-accent/5'
                            : 'bg-black/20 border-white/5 w-[95%] max-w-7xl'
                        }
                    `}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:border-accent/50 transition-colors">
                            <span className="text-accent font-mono font-bold">$</span>
                        </div>
                        <span className="font-bold tracking-tight text-white hidden md:block">
                            KENSHII
                        </span>
                    </a>

                    {/* Nav Links (Desktop) */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all uppercase tracking-wider"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Action Button */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            animate={{ 
                                boxShadow: ["0px 0px 0px rgba(0, 255, 136, 0)", "0px 0px 15px rgba(0, 255, 136, 0.3)", "0px 0px 0px rgba(0, 255, 136, 0)"] 
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded bg-black/90 text-[#00ff88] text-xs font-mono font-bold tracking-widest relative group border border-[#00ff88]/40 hover:bg-[#00ff88] hover:text-black hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.6)] transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center">
                                <span className="text-[#00ff88] group-hover:text-black mr-2">&gt;</span>
                                RESUME
                                <span className="w-1.5 h-3.5 bg-[#00ff88] group-hover:bg-black inline-block ml-1 animate-pulse"></span>
                            </span>
                        </motion.a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-28 px-6"
                >
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-slate-300 hover:text-accent transition-colors border-b border-white/10 pb-4"
                            >
                                <span className="text-accent mr-2">//</span> {link.name}
                            </a>
                        ))}
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            onClick={() => setIsOpen(false)}
                            animate={{ 
                                boxShadow: ["0px 0px 0px rgba(0, 255, 136, 0)", "0px 0px 20px rgba(0, 255, 136, 0.4)", "0px 0px 0px rgba(0, 255, 136, 0)"] 
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded bg-black/90 text-[#00ff88] text-sm font-mono font-bold tracking-widest relative group border border-[#00ff88]/40 hover:bg-[#00ff88] hover:text-black hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.8)] transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center">
                                <span className="text-[#00ff88] group-hover:text-black mr-2">&gt;</span>
                                DOWNLOAD_RESUME
                                <span className="w-2 h-4 bg-[#00ff88] group-hover:bg-black inline-block ml-1 animate-pulse"></span>
                            </span>
                        </motion.a>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Header;
