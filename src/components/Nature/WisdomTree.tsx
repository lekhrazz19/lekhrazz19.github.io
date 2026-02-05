import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';

interface BranchProps {
    position: [number, number, number];
    rotation: [number, number, number];
    length: number;
    radius: number;
    depth: number;
}

const Branch: React.FC<BranchProps> = ({ position, rotation, length, radius, depth }) => {
    if (depth === 0) return null;

    const nextLength = length * 0.7;
    const nextRadius = radius * 0.7;
    const nextDepth = depth - 1;

    // Simple Fractal Logic: split into 2 branches
    return (
        <group position={position} rotation={rotation}>
            <mesh position={[0, length / 2, 0]}>
                <cylinderGeometry args={[nextRadius, radius, length, 8]} />
                <meshStandardMaterial color="#5A7D3E" roughness={0.8} />
            </mesh>

            {/* Recursion */}
            {nextDepth > 0 && (
                <>
                    <Branch
                        position={[0, length, 0]}
                        rotation={[0, 0, Math.PI / 4]}
                        length={nextLength}
                        radius={nextRadius}
                        depth={nextDepth}
                    />
                    <Branch
                        position={[0, length, 0]}
                        rotation={[0, 0, -Math.PI / 4]}
                        length={nextLength}
                        radius={nextRadius}
                        depth={nextDepth}
                    />
                    {/* Add Leaves at the end or occasionally */}
                    {nextDepth <= 2 && (
                        <group position={[0, length, 0]}>
                            <Sphere args={[0.3, 8, 8]}>
                                <meshStandardMaterial color="#00FF9D" emissive="#00FF9D" emissiveIntensity={0.5} />
                            </Sphere>
                        </group>
                    )}
                </>
            )}
        </group>
    );
};

const WisdomTree: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle swaying animation
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
        }
    });

    return (
        <group ref={groupRef} position={[0, -2, 0]} onClick={(e) => { e.stopPropagation(); onClick?.(); }}>
            {/* Root Branch */}
            <Branch
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                length={4}
                radius={0.5}
                depth={5}
            />
        </group>
    );
};

export default WisdomTree;
