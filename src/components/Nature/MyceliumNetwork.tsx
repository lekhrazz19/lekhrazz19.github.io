import React, { useMemo } from 'react';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Skills Mapping (Using categories instead of raw list)
const SKILL_NODES = [
    { id: 'sec', label: 'Security', position: [-5, -1, 5], color: '#ff6b6b' },
    { id: 'dev', label: 'Development', position: [5, -1, 5], color: '#ffd166' },
    { id: 'ops', label: 'DevOps', position: [0, -1, -5], color: '#118ab2' },
    { id: 'ai', label: 'AI/ML', position: [0, -1, 0], color: '#06d6a0' },
];

const CONNECTIONS = [
    ['sec', 'dev'],
    ['sec', 'ops'],
    ['dev', 'ai'],
    ['ops', 'ai'],
    ['sec', 'ai']
];

const MyceliumNetwork: React.FC<{ onClick?: (id: string) => void }> = ({ onClick }) => {

    const lines = useMemo(() => {
        return CONNECTIONS.map(([id1, id2]) => {
            const node1 = SKILL_NODES.find(n => n.id === id1);
            const node2 = SKILL_NODES.find(n => n.id === id2);
            if (!node1 || !node2) return null;

            // Create a curve logic if needed, but simple line for now
            const points = [
                new THREE.Vector3(...node1.position as [number, number, number]),
                new THREE.Vector3(...node1.position).add(new THREE.Vector3(0, 0.5, 0)), // Control point up
                new THREE.Vector3(...node2.position).add(new THREE.Vector3(0, 0.5, 0)),
                new THREE.Vector3(...node2.position as [number, number, number])
            ];
            const curve = new THREE.CatmullRomCurve3(points);
            return { curve, color: node1.color }; // Gradient?
        }).filter(Boolean);
    }, []);

    return (
        <group position={[0, -1.9, 0]}> {/* Slightly above ground */}
            {/* Nodes */}
            {SKILL_NODES.map(node => (
                <group key={node.id} position={node.position as [number, number, number]} onClick={(e) => { e.stopPropagation(); onClick?.(node.id); }}>
                    <Sphere args={[0.2, 16, 16]}>
                        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={2} />
                    </Sphere>
                    {/* Label could be added here */}
                </group>
            ))}

            {/* Network Lines */}
            {lines.map((line, i) => (
                line && (
                    <mesh key={i}>
                        <tubeGeometry args={[line.curve, 20, 0.02, 8, false]} />
                        <meshStandardMaterial color="#00FF9D" transparent opacity={0.4} />
                    </mesh>
                )
            ))}
        </group>
    );
};

export default MyceliumNetwork;
