import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Articles', href: '#articles' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'py-4 backdrop-blur-md border-b' : 'py-6'
            }`}
            style={{
                backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                borderColor: scrolled ? 'var(--color-border)' : 'transparent'
            }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-mono font-bold tracking-tight">
                    <span style={{ color: 'var(--color-accent)' }}>$</span> lekhrazz
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="terminal-link text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="btn-terminal"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Button (Placeholder for simplicity) */}
                <button className="md:hidden text-slate-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
