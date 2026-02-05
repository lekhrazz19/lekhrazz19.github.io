import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Rain: React.FC = () => {
    const rainCount = 1000;
    const geom = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(rainCount * 3);
        const velocities = new Float32Array(rainCount); // Fall speed

        for (let i = 0; i < rainCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50; // x
            positions[i * 3 + 1] = Math.random() * 40;     // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
            velocities[i] = 0.5 + Math.random() * 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1));
        return geometry;
    }, []);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame(() => {
        if (!pointsRef.current) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const velocities = pointsRef.current.geometry.attributes.velocity.array as Float32Array;

        for (let i = 0; i < rainCount; i++) {
            positions[i * 3 + 1] -= velocities[i];

            // Reset if below ground
            if (positions[i * 3 + 1] < 0) {
                positions[i * 3 + 1] = 40;
            }
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry" {...geom} />
            <pointsMaterial
                attach="material"
                color="#aaaaaa"
                size={0.1}
                transparent
                opacity={0.6}
            />
        </points>
    );
};

const WeatherSystem: React.FC<{ active: boolean }> = ({ active }) => {
    if (!active) return null;
    return (
        <group>
            <Rain />
            {/* Fog can be added to scene via primitive or hook, but handled better in parent EffectComposer? 
                Actually standard fog: <fog attach="fog" args={['#050505', 5, 50]} /> 
            */}
            <fog attach="fog" args={['#050505', 10, 60]} />
        </group>
    );
};

export default WeatherSystem;
