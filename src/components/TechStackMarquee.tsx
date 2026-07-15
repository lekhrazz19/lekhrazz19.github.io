import { motion } from 'framer-motion';

const techs = [
    "AI AUTOMATION", "PROMPT ENGINEERING", "AI AGENTS", "OWASP TOP 10", "VULNERABILITY ASSESSMENT", 
    "THREAT DETECTION", "SIEM", "SPLUNK", "ELASTIC STACK", "SIGMA RULES", 
    "MITRE ATT&CK", "BURP SUITE", "NMAP", "METASPLOIT", "OWASP ZAP", 
    "DOCKER", "KALI LINUX", "PYTHON", "FLASK", "C++", "HTML/CSS"
];

const TechStackMarquee = () => {
    return (
        <div className="w-full overflow-hidden border-b border-white/5 bg-black/20 backdrop-blur-sm relative z-30 mt-24 mb-8">
            <div className="flex select-none">
                <motion.div
                    className="flex gap-8 py-3 whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Render the list twice to ensure seamless loop */}
                    {[...techs, ...techs].map((tech, i) => (
                        <div key={i} className="flex items-center gap-2 min-w-max px-4">
                            <span className="text-accent/40 font-bold">#</span>
                            <span className="text-xs md:text-sm font-mono text-slate-400 font-bold tracking-widest hover:text-accent transition-colors cursor-default">
                                {tech}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechStackMarquee;
