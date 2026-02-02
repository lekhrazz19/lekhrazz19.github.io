import { useState, useEffect } from 'react'

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e) => {
            const x = e.clientX
            const y = e.clientY

            setMousePosition({ x, y })

            // Normalize to -1 to 1 range for 3D calculations
            setNormalizedPosition({
                x: (x / window.innerWidth) * 2 - 1,
                y: -(y / window.innerHeight) * 2 + 1
            })
        }

        window.addEventListener('mousemove', updateMousePosition, { passive: true })

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    return { mousePosition, normalizedPosition }
}
