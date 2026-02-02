import { forwardRef } from 'react'

const GlassCard = forwardRef(({
    children,
    className = '',
    hover = true,
    glow = false,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={`
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        rounded-2xl 
        shadow-glass
        transition-all duration-300
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-glow' : ''}
        ${glow ? 'shadow-glow' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    )
})

GlassCard.displayName = 'GlassCard'

export default GlassCard

// Variants
export function GlassButton({
    children,
    className = '',
    variant = 'default',
    ...props
}) {
    const variants = {
        default: 'bg-white/10 hover:bg-white/20',
        primary: 'bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-500/30',
        ghost: 'bg-transparent hover:bg-white/10'
    }

    return (
        <button
            className={`
        backdrop-blur-xl 
        ${variants[variant]}
        border border-white/10 
        rounded-xl 
        px-6 py-3
        font-medium
        transition-all duration-300
        hover:border-white/20
        hover:shadow-glow
        active:scale-95
        flex items-center gap-2
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    )
}

export function GlassInput({
    className = '',
    ...props
}) {
    return (
        <input
            className={`
        w-full
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        rounded-xl 
        px-4 py-3
        text-white
        placeholder:text-white/40
        transition-all duration-300
        focus:outline-none
        focus:bg-white/10
        focus:border-emerald-500/50
        focus:shadow-glow
        ${className}
      `}
            {...props}
        />
    )
}

export function GlassTextarea({
    className = '',
    ...props
}) {
    return (
        <textarea
            className={`
        w-full
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        rounded-xl 
        px-4 py-3
        text-white
        placeholder:text-white/40
        transition-all duration-300
        focus:outline-none
        focus:bg-white/10
        focus:border-emerald-500/50
        focus:shadow-glow
        resize-none
        ${className}
      `}
            {...props}
        />
    )
}
