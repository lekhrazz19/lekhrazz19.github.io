import { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';

const ScrollDrawing = () => {
    const pathRef = useRef<SVGPathElement | null>(null);
    const controllerRef = useRef<any>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        const controller = new (ScrollMagic as any).Controller();
        controllerRef.current = controller;

        const scene = new (ScrollMagic as any).Scene({
            triggerElement: '#scroll-drawing',
            triggerHook: 0.8,
            duration: 500,
        })
            .on('progress', (event: { progress: number }) => {
                const offset = length * (1 - event.progress);
                path.style.strokeDashoffset = `${offset}`;
            })
            .addTo(controller);

        return () => {
            scene.destroy(true);
            controller.destroy(true);
        };
    }, []);

    return (
        <section id="scroll-drawing" className="py-20 relative gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Scroll <span className="text-primary">Signature</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A scroll-driven vector trace powered by ScrollMagic.
                    </p>
                </div>

                <div className="scroll-drawing-card premium-ring gsap-stagger">
                    <div className="gsap-stagger-item">
                    <svg
                        className="scroll-drawing"
                        viewBox="0 0 900 220"
                        role="img"
                        aria-label="Signature line drawing"
                    >
                        <path
                            ref={pathRef}
                            d="M30 150 C 120 40, 220 40, 300 150 S 480 260, 560 150 S 700 40, 820 150"
                            fill="none"
                            stroke="url(#signatureGradient)"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="signatureGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#2563eb" />
                                <stop offset="50%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollDrawing;
