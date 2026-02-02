import { motion } from 'framer-motion'
import { ChevronDown, Mouse } from 'lucide-react'

export default function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-white/40 text-sm font-medium tracking-wider uppercase">
                Scroll to explore
            </span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="p-2"
            >
                <Mouse className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
                <ChevronDown className="w-4 h-4 text-emerald-400/60" />
            </motion.div>
        </motion.div>
    )
}
