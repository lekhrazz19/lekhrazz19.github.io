import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

interface MoleculeProps {
    position: [number, number, number];
    label: string;
    subLabel?: string;
    color?: string;
    atomSize?: number;
    electrons?: string[]; // List of skills/tech
    onClick?: () => void;
}

const Electron: React.FC<{ radius: number; speed: number; color: string; label?: string }> = ({ radius, speed, color }) => {
    const ref = useRef<THREE.Mesh>(null);
    const angle = useRef(Math.random() * Math.PI * 2);

    useFrame((_, delta) => {
        if (ref.current) {
            angle.current += speed * delta;
            ref.current.position.x = Math.cos(angle.current) * radius;
            ref.current.position.z = Math.sin(angle.current) * radius;
        }
    });

    return (
        <group rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <Sphere ref={ref} args={[0.2, 16, 16]}>
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </Sphere>
            {/* Orbit path */}
            <Line
                points={new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0).getPoints(50)}
                color={color}
                opacity={0.2}
                transparent
                lineWidth={1}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

const Molecule: React.FC<MoleculeProps> = ({
    position,
    label,
    subLabel,
    color = '#00ffff',
    atomSize = 1,
    electrons = [],
    onClick
}) => {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            // Floating animation
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;

            // Look at camera (billboard effect for text if needed, but we'll keep 3D for now)
            // groupRef.current.lookAt(state.camera.position); 
            // Actually, keep group static, maybe rotate text?
        }
    });

    return (
        <group
            ref={groupRef}
            position={position}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
            onClick={onClick}
        >
            {/* Nucleus */}
            <Sphere args={[atomSize, 32, 32]}>
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.8}
                    emissive={color}
                    emissiveIntensity={hovered ? 2 : 0.5}
                />
            </Sphere>

            {/* Label */}
            <Text
                position={[0, atomSize + 1.5, 0]}
                fontSize={0.5}
                color="white"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#000000"
            >
                {label}
            </Text>
            {subLabel && (
                <Text
                    position={[0, atomSize + 0.8, 0]}
                    fontSize={0.3}
                    color="#cccccc"
                    anchorX="center"
                    anchorY="middle"
                >
                    {subLabel}
                </Text>
            )}

            {/* Electrons (Orbiting Skills) */}
            {electrons.map((electron, i) => (
                <Electron
                    key={i}
                    radius={atomSize + 1.5 + (i * 0.5)}
                    speed={1 + (Math.random() * 0.5)}
                    color={color} // Or vary colors
                    label={electron}
                />
            ))}
        </group>
    );
};

export default Molecule;
