import { motion } from 'framer-motion';
import React from 'react';
import type { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = "",
    delay = 0,
    hoverEffect = true
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            className={`
                bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-6
                ${hoverEffect ? 'transition-all duration-300 hover:bg-slate-800/50 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1' : ''}
                ${className}
            `}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
