import React, { Suspense, lazy } from 'react'

// Lazy load the 3D scene for code splitting
const Scene = lazy(() => import('./Scene'))

// Loading spinner component
function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-16 h-16 border-2 border-emerald-500/30 rounded-full animate-spin"
                    style={{ borderTopColor: '#10b981' }} />
                {/* Inner pulse */}
                <div className="absolute inset-2 bg-emerald-500/20 rounded-full animate-pulse" />
            </div>
        </div>
    )
}

export default function SceneLoader({ scrollProgress }) {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Scene scrollProgress={scrollProgress} />
        </Suspense>
    )
}
