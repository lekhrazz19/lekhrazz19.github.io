import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { experiences, type Experience } from '../../data/experience';

interface TimelineNodeProps {
    experience: Experience;
    position: [number, number, number];
    index: number;
}

function TimelineNode({ experience, position, index }: TimelineNodeProps) {
    const groupRef = useRef<THREE.Group>(null);
    const nodeRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!groupRef.current) return;

        const t = state.clock.elapsedTime;

        // Floating animation
        groupRef.current.position.y = position[1] + Math.sin(t + index * 0.5) * 0.1;

        // Rotation
        if (nodeRef.current) {
            nodeRef.current.rotation.y = t * 0.3;
        }
    });

    const color = experience.color;

    return (
        <group
            ref={groupRef}
            position={position}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
        >
            {/* Connection to timeline */}
            <Line
                points={[[0, 0, 0], [0, -1, 0]]}
                color={color}
                lineWidth={2}
                opacity={0.5}
                transparent
            />

            {/* Glow sphere */}
            <Sphere args={[hovered ? 0.5 : 0.4, 16, 16]}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>

            {/* Main node */}
            <mesh ref={nodeRef}>
                <octahedronGeometry args={[0.25, 0]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={hovered ? 0.8 : 0.4}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Date label */}
            <Text
                position={[0, 0.6, 0]}
                fontSize={0.12}
                color={color}
                anchorX="center"
            >
                {experience.period.split(' - ')[0]}
            </Text>

            {/* Role label */}
            <Text
                position={[0, -0.5, 0]}
                fontSize={0.1}
                color="#ffffff"
                anchorX="center"
                maxWidth={1.5}
                textAlign="center"
            >
                {experience.role}
            </Text>

            {/* Company label */}
            <Text
                position={[0, -0.7, 0]}
                fontSize={0.08}
                color={color}
                anchorX="center"
            >
                {experience.company}
            </Text>

            {/* Hover details panel */}
            {hovered && (
                <group position={[0, 1.5, 0.5]}>
                    <mesh>
                        <planeGeometry args={[3, 2]} />
                        <meshBasicMaterial color="#000000" transparent opacity={0.9} />
                    </mesh>
                    <mesh position={[0, 0, 0.01]}>
                        <planeGeometry args={[2.95, 1.95]} />
                        <meshBasicMaterial color="#001100" transparent opacity={0.5} />
                    </mesh>
                    <Text
                        position={[0, 0.7, 0.02]}
                        fontSize={0.12}
                        color={color}
                        anchorX="center"
                    >
                        {experience.company}
                    </Text>
                    <Text
                        position={[0, 0.45, 0.02]}
                        fontSize={0.08}
                        color="#ffffff"
                        anchorX="center"
                    >
                        {experience.role} • {experience.type}
                    </Text>
                    <Text
                        position={[0, 0.1, 0.02]}
                        fontSize={0.06}
                        color="#888888"
                        anchorX="center"
                        maxWidth={2.8}
                        textAlign="center"
                        lineHeight={1.4}
                    >
                        {experience.description.slice(0, 150)}...
                    </Text>
                    <Text
                        position={[0, -0.4, 0.02]}
                        fontSize={0.06}
                        color={color}
                        anchorX="center"
                    >
                        {experience.technologies.slice(0, 4).join(' • ')}
                    </Text>
                </group>
            )}
        </group>
    );
}

export default function ExperienceTimeline3D() {
    const groupRef = useRef<THREE.Group>(null);

    // Position nodes along a horizontal timeline
    const nodePositions: [number, number, number][] = experiences.map((_, i) => [
        (i - (experiences.length - 1) / 2) * 3,
        1,
        0,
    ]);

    return (
        <group ref={groupRef}>
            {/* Timeline base line */}
            <Line
                points={[
                    [-5, 0, 0],
                    [5, 0, 0],
                ]}
                color="#0aff00"
                lineWidth={2}
                opacity={0.5}
                transparent
            />

            {/* Timeline tick marks */}
            {[-4, -2, 0, 2, 4].map((x) => (
                <Line
                    key={x}
                    points={[
                        [x, -0.1, 0],
                        [x, 0.1, 0],
                    ]}
                    color="#0aff00"
                    lineWidth={1}
                    opacity={0.3}
                    transparent
                />
            ))}

            {/* Experience nodes */}
            {experiences.map((exp, i) => (
                <TimelineNode
                    key={exp.id}
                    experience={exp}
                    position={nodePositions[i]}
                    index={i}
                />
            ))}

            {/* Timeline labels */}
            <Text
                position={[-5, -0.3, 0]}
                fontSize={0.1}
                color="#0aff00"
                anchorX="center"
            >
                2024
            </Text>
            <Text
                position={[5, -0.3, 0]}
                fontSize={0.1}
                color="#0aff00"
                anchorX="center"
            >
                Present
            </Text>
        </group>
    );
}

// 2D fallback
export function ExperienceTimeline2D() {
    const [activeExp, setActiveExp] = useState<string | null>(null);

    return (
        <div style={{
            position: 'relative',
            padding: '2rem 0',
        }}>
            {/* Timeline line */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, var(--matrix-green), transparent)',
                transform: 'translateX(-50%)',
            }} />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
            }}>
                {experiences.map((exp, i) => (
                    <div
                        key={exp.id}
                        style={{
                            display: 'flex',
                            justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                            paddingLeft: i % 2 === 0 ? '0' : '52%',
                            paddingRight: i % 2 === 0 ? '52%' : '0',
                            position: 'relative',
                        }}
                    >
                        {/* Timeline node */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: exp.color,
                            boxShadow: `0 0 20px ${exp.color}`,
                            border: '3px solid var(--bg-primary)',
                            zIndex: 1,
                        }} />

                        {/* Experience card */}
                        <div
                            className="cyber-card"
                            style={{
                                borderColor: exp.color,
                                cursor: 'pointer',
                                maxWidth: '400px',
                            }}
                            onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '0.5rem',
                            }}>
                                <h3 style={{
                                    color: exp.color,
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1rem',
                                }}>
                                    {exp.company}
                                </h3>
                                <span style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.75rem',
                                    fontFamily: 'var(--font-mono)',
                                }}>
                                    {exp.period}
                                </span>
                            </div>

                            <p style={{
                                color: '#ffffff',
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem',
                            }}>
                                {exp.role}
                            </p>

                            <span style={{
                                display: 'inline-block',
                                padding: '0.2rem 0.5rem',
                                background: `${exp.color}20`,
                                border: `1px solid ${exp.color}`,
                                borderRadius: '4px',
                                fontSize: '0.7rem',
                                color: exp.color,
                                textTransform: 'uppercase',
                            }}>
                                {exp.type}
                            </span>

                            {activeExp === exp.id && (
                                <div style={{
                                    marginTop: '1rem',
                                    paddingTop: '1rem',
                                    borderTop: `1px solid ${exp.color}30`,
                                    animation: 'fadeIn 0.3s ease',
                                }}>
                                    <p style={{
                                        color: 'var(--text-primary)',
                                        fontSize: '0.85rem',
                                        marginBottom: '1rem',
                                        lineHeight: '1.6',
                                    }}>
                                        {exp.description}
                                    </p>

                                    <h4 style={{
                                        color: exp.color,
                                        fontSize: '0.8rem',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                    }}>
                                        Key Responsibilities
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        marginBottom: '1rem',
                                    }}>
                                        {exp.responsibilities.slice(0, 3).map((resp, j) => (
                                            <li key={j} style={{
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.8rem',
                                                marginBottom: '0.25rem',
                                                paddingLeft: '1rem',
                                                position: 'relative',
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: exp.color,
                                                }}>▸</span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="skill-tag"
                                                style={{ borderColor: exp.color }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
