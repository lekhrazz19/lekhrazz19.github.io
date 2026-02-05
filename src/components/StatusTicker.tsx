import { useRef } from 'react';
import { motion } from 'framer-motion';

const StatusTicker = () => {
    const stats = [
        { label: "ENCRYPTION", value: "AES-256-GCM", status: "SECURE" },
        { label: "IP ADDRESS", value: "192.168.0.1", status: "HIDDEN" },
        { label: "SYSTEM", value: "LEKHRAZZ_OS v3.0", status: "OPTIMAL" },
        { label: "THREAT_LEVEL", value: "ZERO", status: "SAFE" },
        { label: "CONNECTION", value: "ENCRYPTED", status: "STABLE" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md overflow-hidden"
        >
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between text-[10px] md:text-xs font-mono text-slate-500 tracking-widest">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span>LIVE_MONITORING</span>
                    </div>

                    <div className="hidden md:flex gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex gap-2">
                                <span className="text-slate-600">{stat.label}:</span>
                                <span className="text-accent/80">{stat.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-accent">
                        <span>SYSr_99</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StatusTicker;
