import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarField: React.FC = () => {
    const points = useRef<THREE.Points>(null);

    // Generate cosmic data
    const particleCount = 10000;
    const [positions, colors, sizes] = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const col = new Float32Array(particleCount * 3);
        const siz = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            // Galaxy spiral distribution
            const i3 = i * 3;
            const radius = Math.random() * 100 + 10;
            const spinAngle = radius * 0.2;
            const branchAngle = (i % 3) * ((2 * Math.PI) / 3);

            const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 20;
            const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 20;
            const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 20;

            pos[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            pos[i3 + 1] = randomY * (THREE.MathUtils.randFloat(0.5, 2)); // Vertical spread
            pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            // Colors based on temperature (hot blue to cool red)
            const color = new THREE.Color();
            // Core is brighter/hotter
            const distFromCenter = Math.sqrt(pos[i3] ** 2 + pos[i3 + 1] ** 2 + pos[i3 + 2] ** 2);
            if (distFromCenter < 30) {
                color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.8); // Blue/White core
            } else {
                color.setHSL(0.0 + Math.random() * 0.2, 0.8, 0.5); // Red/Orange outer
            }

            col[i3] = color.r;
            col[i3 + 1] = color.g;
            col[i3 + 2] = color.b;

            siz[i] = Math.random() * 0.5;
        }
        return [pos, col, siz];
    }, []);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    args={[sizes, 1]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.2}
                vertexColors
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                sizeAttenuation={true}
            />
        </points>
    );
};

export default StarField;
