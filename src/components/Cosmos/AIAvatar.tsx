import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron, Octahedron, Text } from '@react-three/drei';
import * as THREE from 'three';

interface AIAvatarProps {
    type: 'burp' | 'kali' | 'metasploit' | 'owasp';
    position: [number, number, number];
    onClick?: () => void;
}

const AIAvatar: React.FC<AIAvatarProps> = ({ type, position, onClick }) => {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    // Config based on type
    const config = {
        burp: { color: '#ff6600', geometry: 'sphere', label: 'Burp Suite AI' },
        kali: { color: '#00ccff', geometry: 'icosahedron', label: 'Kali Spirit' },
        metasploit: { color: '#3333ff', geometry: 'octahedron', label: 'Metasploit Avatar' },
        owasp: { color: '#00ff00', geometry: 'sphere', label: 'OWASP Guardian' }
    };

    const { color, label, geometry } = config[type];

    useFrame((state) => {
        if (meshRef.current) {
            // Idle animation - bobbing and rotating
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;

            // Glitch effect on hover (rapid scale change)
            if (hovered) {
                const scale = 1 + Math.random() * 0.1;
                meshRef.current.scale.set(scale, scale, scale);
            } else {
                meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
            }
        }
    });

    return (
        <group
            ref={meshRef}
            position={position}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
            onClick={onClick}
        >
            {/* Core Geometry */}
            {geometry === 'sphere' && (
                <Sphere args={[1.5, 32, 32]}>
                    <meshStandardMaterial
                        color={color}
                        wireframe={true}
                        emissive={color}
                        emissiveIntensity={2}
                    />
                </Sphere>
            )}
            {geometry === 'icosahedron' && (
                <Icosahedron args={[1.5, 0]}>
                    <meshStandardMaterial
                        color={color}
                        wireframe={true}
                        emissive={color}
                        emissiveIntensity={2}
                    />
                </Icosahedron>
            )}
            {geometry === 'octahedron' && (
                <Octahedron args={[1.5, 0]}>
                    <meshStandardMaterial
                        color={color}
                        wireframe={true}
                        emissive={color}
                        emissiveIntensity={2}
                    />
                </Octahedron>
            )}

            {/* Inner Core (Solid) */}
            <Sphere args={[0.8, 16, 16]}>
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={5} />
            </Sphere>

            {/* Label */}
            <Text
                position={[0, 2.5, 0]}
                fontSize={0.4}
                color={color}
                anchorX="center"
                anchorY="middle"
            >
                {label}
            </Text>
        </group>
    );
};

export default AIAvatar;
