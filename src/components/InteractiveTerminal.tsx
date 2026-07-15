import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandHistory {
    cmd: string;
    output: React.ReactNode;
}

const InteractiveTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandHistory[]>([
        { cmd: "init", output: "Welcome to LEKHRAJ.404 Terminal. Type 'help' for commands." }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Keyboard shortcut Ctrl+K to toggle
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = "";

        switch (cleanCmd) {
            case 'help':
                output = (
                    <div className="text-slate-300">
                        <div>Available commands:</div>
                        <div className="grid grid-cols-[100px_1fr] gap-2 mt-2">
                            <span className="text-accent">about</span> <span>Who am I?</span>
                            <span className="text-accent">projects</span> <span>List key projects</span>
                            <span className="text-accent">skills</span> <span>Technical capability</span>
                            <span className="text-accent">contact</span> <span>Get in touch</span>
                            <span className="text-accent">clear</span> <span>Clear terminal</span>
                            <span className="text-accent">exit</span> <span>Close terminal</span>
                        </div>
                    </div>
                );
                break;
            case 'about':
                output = "AI Automation Intern & Cybersecurity Researcher based in India. Focused on web application security, threat detection, and AI-driven business process optimization.";
                break;
            case 'projects':
                output = (
                    <div className="flex flex-col gap-1">
                        <a href="#projects" className="text-accent hover:underline">1. VRRS (Vulnerability Research & Reporting System)</a>
                        <a href="#projects" className="text-accent hover:underline">2. SOC-in-a-Box (Security Monitoring Lab)</a>
                        <a href="#projects" className="text-accent hover:underline">3. SecureTodo (Flask Application Hardening)</a>
                        <a href="#projects" className="text-accent hover:underline">4. Cybersecurity Homelab (Attack & Defense)</a>
                    </div>
                );
                break;
            case 'skills':
                output = "AI Automation, Prompt Engineering, Pentesting (OWASP Top 10), Splunk, Elastic, Sigma Rules, MITRE ATT&CK, Docker, Python, Flask, C++";
                break;
            case 'contact':
                output = "Email: singhlekhraj497@gmail.com | GitHub: @lekhrazz19 | LinkedIn: @lekhrazz19";
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'exit':
                setIsOpen(false);
                return;
            default:
                output = <span className="text-red-400">Command not found: {cleanCmd}. Type 'help'.</span>;
        }

        setHistory(prev => [...prev, { cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput("");
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-black/80 border border-accent/20 text-accent hover:bg-accent hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)] group"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/90 text-xs text-white rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity border border-white/10">
                    Terminal (Ctrl+K)
                </span>
            </button>

            {/* Terminal Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
                    >
                        <div className="w-full max-w-2xl h-[500px] bg-[#0a0a0a] rounded-lg border border-accent/20 shadow-[0_0_50px_rgba(0,255,136,0.1)] flex flex-col font-mono overflow-hidden relative">

                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="ml-2 text-xs text-slate-400">visitor@lekhraj-portfolio:~</span>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            {/* Terminal Body */}
                            <div className="flex-grow p-6 overflow-y-auto custom-scrollbar" onClick={() => inputRef.current?.focus()}>
                                <div className="text-accent/50 mb-4 text-xs">
                                    Connected to server lekhraj.404...<br />
                                    Encryption: AES-256-GCM<br />
                                    Last login: {new Date().toLocaleTimeString()}
                                </div>

                                {history.map((entry, i) => (
                                    <div key={i} className="mb-3">
                                        <div className="flex gap-2 text-slate-400">
                                            <span className="text-accent">➜</span>
                                            <span className="text-blue-400">visitor</span>
                                            <span>{entry.cmd}</span>
                                        </div>
                                        <div className="ml-5 mt-1 text-sm text-slate-200 whitespace-pre-wrap">
                                            {entry.output}
                                        </div>
                                    </div>
                                ))}

                                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4 text-accent">
                                    <span>➜</span>
                                    <span className="text-blue-400">visitor</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-grow bg-transparent border-none outline-none text-slate-200 caret-accent"
                                        autoFocus
                                        spellCheck={false}
                                        autoComplete="off"
                                    />
                                </form>
                                <div ref={bottomRef} />
                            </div>

                            {/* CRT Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default InteractiveTerminal;
