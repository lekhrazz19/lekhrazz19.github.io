import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { certifications, type Certification } from '../../data/certifications';

interface CertificationOrbProps {
    certification: Certification;
    position: [number, number, number];
    index: number;
}

function CertificationOrb({ certification, position, index }: CertificationOrbProps) {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!groupRef.current) return;

        const t = state.clock.elapsedTime;

        // Floating animation
        groupRef.current.position.y = position[1] + Math.sin(t + index * 0.8) * 0.2;
        groupRef.current.position.x = position[0] + Math.cos(t * 0.3 + index) * 0.1;

        // Rotation
        if (meshRef.current) {
            meshRef.current.rotation.y = t * 0.5;
            meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
        }

        // Glow pulse
        if (glowRef.current) {
            const scale = 1 + Math.sin(t * 2 + index) * 0.1;
            glowRef.current.scale.setScalar(hovered ? scale * 1.3 : scale);
        }
    });

    return (
        <group
            ref={groupRef}
            position={position}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
        >
            {/* Outer glow */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshBasicMaterial
                    color={certification.color}
                    transparent
                    opacity={hovered ? 0.3 : 0.15}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Badge base */}
            <mesh ref={meshRef}>
                <dodecahedronGeometry args={[0.4, 0]} />
                <meshStandardMaterial
                    color={certification.color}
                    emissive={certification.color}
                    emissiveIntensity={hovered ? 0.8 : 0.4}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Holographic rings */}
            <HolographicRings color={certification.color} hovered={hovered} />

            {/* Short name label */}
            <Text
                position={[0, -0.8, 0]}
                fontSize={0.15}
                color={certification.color}
                anchorX="center"
                anchorY="top"
                outlineWidth={0.01}
                outlineColor="#000000"
            >
                {certification.shortName}
            </Text>

            {/* Hover details */}
            {hovered && (
                <group position={[0, 1.2, 0]}>
                    <RoundedBox args={[2.5, 1.5, 0.1]} radius={0.05}>
                        <meshBasicMaterial color="#000000" transparent opacity={0.9} />
                    </RoundedBox>
                    <Text
                        position={[0, 0.4, 0.06]}
                        fontSize={0.12}
                        color="#ffffff"
                        anchorX="center"
                        maxWidth={2.3}
                    >
                        {certification.name}
                    </Text>
                    <Text
                        position={[0, 0.15, 0.06]}
                        fontSize={0.08}
                        color={certification.color}
                        anchorX="center"
                    >
                        {certification.issuer} • {certification.date}
                    </Text>
                    <Text
                        position={[0, -0.2, 0.06]}
                        fontSize={0.06}
                        color="#888888"
                        anchorX="center"
                        maxWidth={2.2}
                        textAlign="center"
                    >
                        {certification.skills.slice(0, 3).join(' • ')}
                    </Text>
                </group>
            )}
        </group>
    );
}

function HolographicRings({ color, hovered }: { color: string; hovered: boolean }) {
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const ring3Ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        if (ring1Ref.current) {
            ring1Ref.current.rotation.x = t * 0.5;
            ring1Ref.current.rotation.y = t * 0.3;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.x = t * 0.3;
            ring2Ref.current.rotation.z = t * 0.5;
        }
        if (ring3Ref.current) {
            ring3Ref.current.rotation.y = t * 0.4;
            ring3Ref.current.rotation.z = t * 0.2;
        }
    });

    const ringOpacity = hovered ? 0.5 : 0.2;

    return (
        <>
            <mesh ref={ring1Ref}>
                <torusGeometry args={[0.55, 0.01, 8, 32]} />
                <meshBasicMaterial color={color} transparent opacity={ringOpacity} />
            </mesh>
            <mesh ref={ring2Ref}>
                <torusGeometry args={[0.5, 0.01, 8, 32]} />
                <meshBasicMaterial color={color} transparent opacity={ringOpacity * 0.7} />
            </mesh>
            <mesh ref={ring3Ref}>
                <torusGeometry args={[0.45, 0.01, 8, 32]} />
                <meshBasicMaterial color={color} transparent opacity={ringOpacity * 0.5} />
            </mesh>
        </>
    );
}

export default function CertificationOrbs() {
    const groupRef = useRef<THREE.Group>(null);

    // Arrange certifications in a circle
    const positions: [number, number, number][] = certifications.map((_, i) => {
        const angle = (i / certifications.length) * Math.PI * 2;
        const radius = 2.5;
        return [
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius,
        ];
    });

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {certifications.map((cert, i) => (
                <CertificationOrb
                    key={cert.id}
                    certification={cert}
                    position={positions[i]}
                    index={i}
                />
            ))}
        </group>
    );
}

// 2D fallback for mobile
export function CertificationsGrid() {
    const [activeCert, setActiveCert] = useState<string | null>(null);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            padding: '2rem 0',
        }}>
            {certifications.map((cert) => (
                <div
                    key={cert.id}
                    className="cyber-card"
                    style={{
                        borderColor: cert.color,
                        cursor: 'pointer',
                        transform: activeCert === cert.id ? 'scale(1.02)' : 'scale(1)',
                        transition: 'all 0.3s ease',
                    }}
                    onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1rem',
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${cert.color}, transparent)`,
                            border: `2px solid ${cert.color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 0 20px ${cert.glowColor}`,
                        }}>
                            <span style={{
                                color: '#fff',
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                            }}>
                                {cert.shortName.slice(0, 3)}
                            </span>
                        </div>
                        <div>
                            <h3 style={{
                                color: cert.color,
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9rem',
                                marginBottom: '0.25rem',
                            }}>
                                {cert.shortName}
                            </h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.75rem',
                            }}>
                                {cert.issuer} • {cert.date}
                            </p>
                        </div>
                    </div>

                    {activeCert === cert.id && (
                        <div style={{ animation: 'fadeIn 0.3s ease' }}>
                            <p style={{
                                color: 'var(--text-primary)',
                                fontSize: '0.85rem',
                                marginBottom: '1rem',
                                lineHeight: '1.6',
                            }}>
                                {cert.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {cert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-tag"
                                        style={{ borderColor: cert.color }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
