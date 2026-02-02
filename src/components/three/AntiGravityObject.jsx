import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Shield geometry vertices for cybersecurity theme
const createShieldGeometry = () => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 1.2)
    shape.lineTo(0.8, 0.8)
    shape.lineTo(0.8, -0.2)
    shape.quadraticCurveTo(0.8, -0.8, 0, -1.2)
    shape.quadraticCurveTo(-0.8, -0.8, -0.8, -0.2)
    shape.lineTo(-0.8, 0.8)
    shape.lineTo(0, 1.2)

    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 3
    }

    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
}

// Fragment component for disassembly effect
function Fragment({ position, targetPosition, rotation, geometry, scrollProgress, index }) {
    const meshRef = useRef()
    const initialPos = useMemo(() => new THREE.Vector3(...position), [position])
    const targetPos = useMemo(() => new THREE.Vector3(...targetPosition), [targetPosition])

    useFrame((state) => {
        if (!meshRef.current) return

        const progress = scrollProgress.get()
        const fragmentProgress = Math.max(0, Math.min(1, (progress - 0.2) * 2))

        // Lerp between initial and target position based on scroll
        meshRef.current.position.lerpVectors(initialPos, targetPos, fragmentProgress)

        // Add floating animation
        const floatY = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1
        meshRef.current.position.y += floatY * (1 - fragmentProgress)

        // Rotation based on scroll
        meshRef.current.rotation.x = rotation[0] + fragmentProgress * Math.PI * 0.5
        meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.2
    })

    return (
        <mesh ref={meshRef} geometry={geometry}>
            <meshStandardMaterial
                color="#10b981"
                emissive="#10b981"
                emissiveIntensity={0.3}
                wireframe
                transparent
                opacity={0.8}
            />
        </mesh>
    )
}

export default function AntiGravityObject({ scrollProgress }) {
    const groupRef = useRef()
    const mainMeshRef = useRef()
    const { mouse, viewport } = useThree()

    // Create fragments for disassembly
    const fragments = useMemo(() => {
        const frags = []
        const count = 8

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2
            const radius = 0.4
            frags.push({
                position: [
                    Math.cos(angle) * radius * 0.2,
                    Math.sin(angle) * radius * 0.2,
                    (Math.random() - 0.5) * 0.2
                ],
                targetPosition: [
                    Math.cos(angle) * radius * 3,
                    Math.sin(angle) * radius * 3 + (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2
                ],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
                geometry: new THREE.IcosahedronGeometry(0.15, 1)
            })
        }
        return frags
    }, [])

    // Main object geometry
    const mainGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.8, 2), [])
    const innerGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.5, 1), [])

    useFrame((state) => {
        if (!groupRef.current) return

        const progress = scrollProgress.get()

        // Mouse-reactive rotation
        const targetRotationX = mouse.y * 0.3
        const targetRotationY = mouse.x * 0.3

        groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05
        groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05

        // Floating animation
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15

        // Scale down as we scroll
        const scale = 1 - progress * 0.3
        groupRef.current.scale.setScalar(scale)

        // Main mesh opacity based on scroll
        if (mainMeshRef.current) {
            const opacity = 1 - Math.min(1, progress * 2)
            mainMeshRef.current.material.opacity = Math.max(0.1, opacity)
        }
    })

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Main outer shell */}
                <mesh ref={mainMeshRef} geometry={mainGeometry}>
                    <meshStandardMaterial
                        color="#10b981"
                        emissive="#06b6d4"
                        emissiveIntensity={0.2}
                        wireframe
                        transparent
                        opacity={0.6}
                    />
                </mesh>

                {/* Inner core */}
                <mesh geometry={innerGeometry}>
                    <meshStandardMaterial
                        color="#06b6d4"
                        emissive="#10b981"
                        emissiveIntensity={0.5}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                {/* Orbiting ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.2, 0.02, 16, 100]} />
                    <meshStandardMaterial
                        color="#10b981"
                        emissive="#10b981"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.5}
                    />
                </mesh>

                {/* Second ring */}
                <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                    <torusGeometry args={[1.0, 0.015, 16, 80]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        emissive="#06b6d4"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.4}
                    />
                </mesh>
            </Float>

            {/* Fragments for disassembly effect */}
            {fragments.map((frag, i) => (
                <Fragment
                    key={i}
                    index={i}
                    position={frag.position}
                    targetPosition={frag.targetPosition}
                    rotation={frag.rotation}
                    geometry={frag.geometry}
                    scrollProgress={scrollProgress}
                />
            ))}

            {/* Ambient particles */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={50}
                        array={new Float32Array(
                            Array.from({ length: 150 }, () => (Math.random() - 0.5) * 4)
                        )}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color="#10b981"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>
        </group>
    )
}
