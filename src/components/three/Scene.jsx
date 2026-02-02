import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, Environment } from '@react-three/drei'
import AntiGravityObject from './AntiGravityObject'

function LoadingFallback() {
    return (
        <mesh>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshBasicMaterial color="#10b981" wireframe />
        </mesh>
    )
}

export default function Scene({ scrollProgress }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={<LoadingFallback />}>
                    {/* Lighting */}
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
                    <pointLight position={[10, -10, 5]} intensity={0.5} color="#10b981" />

                    {/* Main 3D Object */}
                    <AntiGravityObject scrollProgress={scrollProgress} />

                    {/* Preload assets */}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}
