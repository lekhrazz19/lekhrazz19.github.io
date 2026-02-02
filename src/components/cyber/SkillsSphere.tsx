import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { skillCategories, getAllSkills } from '../../data/skills';

interface SkillNodeProps {
    position: [number, number, number];
    skill: string;
    proficiency: number;
    color: string;
    index: number;
}

function SkillNode({ position, skill, proficiency, color, index }: SkillNodeProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    const size = 0.1 + (proficiency / 100) * 0.15;

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.elapsedTime + index * 0.5;
            meshRef.current.position.x = position[0] + Math.sin(t * 0.3) * 0.1;
            meshRef.current.position.y = position[1] + Math.cos(t * 0.4) * 0.1;
            meshRef.current.rotation.y = t * 0.5;
        }
    });

    return (
        <group>
            <mesh
                ref={meshRef}
                position={position}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
            >
                <icosahedronGeometry args={[size, 1]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={hovered ? 1 : 0.3}
                    metalness={0.8}
                    roughness={0.2}
                    wireframe={!hovered}
                />
            </mesh>

            {hovered && (
                <Text
                    position={[position[0], position[1] + size + 0.3, position[2]]}
                    fontSize={0.12}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="bottom"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    {`${skill} (${proficiency}%)`}
                </Text>
            )}
        </group>
    );
}

export default function SkillsSphere() {
    const groupRef = useRef<THREE.Group>(null);
    const allSkills = useMemo(() => getAllSkills(), []);

    // Position skills on a sphere
    const skillPositions = useMemo(() => {
        const positions: Array<{
            position: [number, number, number];
            skill: string;
            proficiency: number;
            color: string;
        }> = [];

        const radius = 2.5;
        const total = allSkills.length;

        allSkills.forEach((skill, i) => {
            // Find category color
            const category = skillCategories.find(cat =>
                cat.skills.some(s => s.name === skill.name)
            );
            const color = category?.color || '#0aff00';

            // Fibonacci sphere distribution
            const phi = Math.acos(1 - 2 * (i + 0.5) / total);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;

            positions.push({
                position: [
                    radius * Math.sin(phi) * Math.cos(theta),
                    radius * Math.sin(phi) * Math.sin(theta),
                    radius * Math.cos(phi),
                ],
                skill: skill.name,
                proficiency: skill.proficiency,
                color,
            });
        });

        return positions;
    }, [allSkills]);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central core */}
            <Sphere args={[0.5, 32, 32]}>
                <meshStandardMaterial
                    color="#0aff00"
                    emissive="#0aff00"
                    emissiveIntensity={0.5}
                    metalness={1}
                    roughness={0}
                    wireframe
                />
            </Sphere>

            {/* Skill nodes */}
            {skillPositions.map((item, i) => (
                <SkillNode
                    key={item.skill}
                    position={item.position}
                    skill={item.skill}
                    proficiency={item.proficiency}
                    color={item.color}
                    index={i}
                />
            ))}

            {/* Orbiting rings */}
            <OrbitRing radius={2.8} color="#0aff00" />
            <OrbitRing radius={3.0} color="#00ffff" rotationSpeed={-0.3} />
            <OrbitRing radius={3.2} color="#8a2be2" rotationSpeed={0.2} tilt={Math.PI / 4} />
        </group>
    );
}

interface OrbitRingProps {
    radius: number;
    color: string;
    rotationSpeed?: number;
    tilt?: number;
}

function OrbitRing({ radius, color, rotationSpeed = 0.5, tilt = 0 }: OrbitRingProps) {
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed;
        }
    });

    return (
        <mesh ref={ringRef} rotation={[Math.PI / 2, tilt, 0]}>
            <torusGeometry args={[radius, 0.01, 8, 64]} />
            <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
    );
}

// 2D fallback for mobile
export function SkillsGrid() {
    return (
        <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            padding: '2rem 0',
        }}>
            {skillCategories.map((category) => (
                <div
                    key={category.id}
                    className="cyber-card"
                    style={{
                        borderColor: category.color,
                    }}
                >
                    <h3 style={{
                        color: category.color,
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                    }}>
                        {category.name}
                    </h3>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        marginBottom: '1rem',
                    }}>
                        {category.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="skill-tag"
                                style={{
                                    borderColor: category.color,
                                    position: 'relative',
                                }}
                            >
                                <span>{skill.name}</span>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    height: '2px',
                                    width: `${skill.proficiency}%`,
                                    background: category.color,
                                    transition: 'width 0.5s ease',
                                }} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
