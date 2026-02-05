import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const OrganicCursor: React.FC = () => {
    const { viewport, mouse } = useThree();
    const ref = useRef<THREE.Group>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        if (ref.current && lightRef.current) {
            // Map mouse (0..1) to viewport coordinates
            const x = (mouse.x * viewport.width) / 2;
            const y = (mouse.y * viewport.height) / 2;

            // Smooth follow
            ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x, 0.1);
            ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y, 0.1);
            ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, 0, 0.1); // Keep near screen plane

            // Pulse effect
            const pulse = Math.sin(state.clock.elapsedTime * 4) * 0.2 + 1;
            ref.current.scale.set(pulse, pulse, pulse);
            lightRef.current.intensity = pulse * 1.5;
        }
    });

    return (
        <group ref={ref}>
            <Sphere args={[0.1, 16, 16]}>
                <meshBasicMaterial color="#00FF9D" transparent opacity={0.5} />
            </Sphere>
            <pointLight ref={lightRef} color="#00FF9D" distance={5} decay={2} />
        </group>
    );
};

export default OrganicCursor;
