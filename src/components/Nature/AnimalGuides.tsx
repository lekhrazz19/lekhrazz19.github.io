import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cone, Box } from '@react-three/drei';
import * as THREE from 'three';

// Fox (Cunning, Hunter) - Represents Bugcrowd
const Fox = ({ position }: { position: [number, number, number] }) => {
    const ref = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
            ref.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={ref} position={position}>
            {/* Body */}
            <Box args={[1, 0.5, 1.5]}>
                <meshStandardMaterial color="#d35400" />
            </Box>
            {/* Head */}
            <Cone args={[0.4, 0.8, 4]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 1]}>
                <meshStandardMaterial color="#e67e22" />
            </Cone>
            {/* Tail */}
            <Box args={[0.3, 0.3, 1]} position={[0, 0.2, -1.2]}>
                <meshStandardMaterial color="#d35400" />
            </Box>
        </group>
    );
};

// Owl (Wise, Observant) - Represents HackerHub8
const Owl = ({ position }: { position: [number, number, number] }) => {
    const ref = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.5;
        }
    });

    return (
        <group ref={ref} position={position}>
            {/* Body */}
            <Sphere args={[0.6, 16, 16]} scale={[1, 1.2, 1]}>
                <meshStandardMaterial color="#34495e" />
            </Sphere>
            {/* Eyes */}
            <Sphere args={[0.15]} position={[0.2, 0.3, 0.5]}>
                <meshStandardMaterial color="#f1c40f" emissive="#f1c40f" />
            </Sphere>
            <Sphere args={[0.15]} position={[-0.2, 0.3, 0.5]}>
                <meshStandardMaterial color="#f1c40f" emissive="#f1c40f" />
            </Sphere>
        </group>
    );
};

const AnimalGuides: React.FC = () => {
    return (
        <group>
            {/* Experience 1: Bugcrowd */}
            <Fox position={[12, 1, 5]} />

            {/* Experience 2: HackerHub8 */}
            <Owl position={[-8, 6, 2]} />
        </group>
    );
};

export default AnimalGuides;
