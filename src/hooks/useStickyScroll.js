import { useScroll, useTransform, useSpring } from 'framer-motion'

export default function useStickyScroll() {
    const { scrollYProgress } = useScroll()

    // Smooth the scroll progress for fluid animations
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Map scroll to section states
    // 0-25%: Hero, 25-50%: About, 50-75%: Projects, 75-100%: Contact
    const section = useTransform(scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ['hero', 'about', 'projects', 'contact', 'contact']
    )

    // 3D object scale - shrinks as user scrolls
    const objectScale = useTransform(smoothProgress,
        [0, 0.25, 0.5, 0.75],
        [1, 0.85, 0.7, 0.5]
    )

    // 3D object opacity
    const objectOpacity = useTransform(smoothProgress,
        [0, 0.15, 0.3, 0.5],
        [1, 0.8, 0.6, 0.3]
    )

    // Disassembly progress (0 = assembled, 1 = fully disassembled)
    const disassemblyProgress = useTransform(smoothProgress,
        [0.1, 0.4, 0.7, 0.9],
        [0, 0.5, 1, 0.5]
    )

    // X position offset for 3D object (moves to side as content appears)
    const objectX = useTransform(smoothProgress,
        [0, 0.2, 0.5, 0.8],
        [0, -200, 200, 0]
    )

    return {
        scrollProgress: smoothProgress,
        rawProgress: scrollYProgress,
        section,
        objectScale,
        objectOpacity,
        objectX,
        disassemblyProgress
    }
}
