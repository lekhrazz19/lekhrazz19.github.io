import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const cursorDotRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)
    const [cursorType, setCursorType] = useState('default')

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorDot = cursorDotRef.current

        let mouseX = 0, mouseY = 0
        let cursorX = 0, cursorY = 0
        let rafId = null

        const moveCursor = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY

            // Dot follows instantly with transform for GPU acceleration
            if (cursorDot) {
                cursorDot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
            }
        }

        const animateCursor = () => {
            // Faster lerp factor = more responsive
            const speed = 0.35
            cursorX += (mouseX - cursorX) * speed
            cursorY += (mouseY - cursorY) * speed

            if (cursor) {
                cursor.style.transform = `translate3d(${cursorX - 20}px, ${cursorY - 20}px, 0)`
            }
            rafId = requestAnimationFrame(animateCursor)
        }

        const handleMouseEnter = (e) => {
            const target = e.target

            if (target.matches('a, button, .btn, .glass-button, [role="button"]')) {
                setIsHovering(true)
                setCursorType('pointer')
            } else if (target.matches('input, textarea')) {
                setIsHovering(true)
                setCursorType('text')
            } else if (target.matches('canvas, .three-scene')) {
                setIsHovering(true)
                setCursorType('crosshair')
            } else if (target.matches('.project-card, .skill-card, .glass-card')) {
                setIsHovering(true)
                setCursorType('pointer')
            }
        }

        const handleMouseLeave = () => {
            setIsHovering(false)
            setCursorType('default')
        }

        document.addEventListener('mousemove', moveCursor, { passive: true })
        document.addEventListener('mouseover', handleMouseEnter)
        document.addEventListener('mouseout', handleMouseLeave)
        rafId = requestAnimationFrame(animateCursor)

        return () => {
            document.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handleMouseEnter)
            document.removeEventListener('mouseout', handleMouseLeave)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    const getCursorClasses = () => {
        const base = `
      fixed top-0 left-0 
      pointer-events-none 
      z-[9999] 
      transition-all duration-200
      mix-blend-difference
    `

        if (cursorType === 'pointer') {
            return `${base} w-12 h-12 bg-emerald-400 rounded-full scale-100`
        } else if (cursorType === 'text') {
            return `${base} w-1 h-8 bg-emerald-400 rounded-full`
        } else if (cursorType === 'crosshair') {
            return `${base} w-8 h-8 border-2 border-emerald-400 rounded-full bg-transparent`
        }

        return `${base} w-10 h-10 border-2 border-emerald-400 rounded-full bg-transparent`
    }

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null
    }

    return (
        <>
            {/* Outer cursor ring */}
            <div
                ref={cursorRef}
                className={getCursorClasses()}
                style={{ willChange: 'transform' }}
            />
            {/* Inner dot */}
            <div
                ref={cursorDotRef}
                className={`
          fixed top-0 left-0 
          w-2 h-2 
          bg-emerald-400 
          rounded-full 
          pointer-events-none 
          z-[9999]
          transition-transform duration-100
          ${isHovering ? 'scale-0' : 'scale-100'}
        `}
                style={{ willChange: 'transform' }}
            />
        </>
    )
}
