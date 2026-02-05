import React, { useMemo } from 'react';
import { cosmosData } from '../../data/cosmosData';

// Procedural Flower Generator
const Flower = ({ position, color, scale = 1, onClick }: { position: [number, number, number], color: string, scale?: number, onClick?: () => void }) => {
    return (
        <group position={position} scale={[scale, scale, scale]} onClick={(e) => { e.stopPropagation(); onClick?.(); }}>
            {/* Stem */}
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 1, 6]} />
                <meshStandardMaterial color="#2d5a27" />
            </mesh>
            {/* Petals */}
            <mesh position={[0, 1, 0]}>
                <dodecahedronGeometry args={[0.3, 0]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
};

const PlantSystem: React.FC<{ onClick?: (id: string) => void }> = ({ onClick }) => {
    const plants = useMemo(() => {
        return cosmosData.map((project, i) => {
            // Spiral layout logic (Phyllotaxis)
            const angle = i * 137.5;
            const radius = 5 + Math.sqrt(i) * 3;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return {
                ...project,
                position: [x, 0, z] as [number, number, number],
                scale: 1 + Math.random() * 0.5
            };
        });
    }, []);

    return (
        <group>
            {plants.map((plant) => (
                <Flower
                    key={plant.id}
                    position={plant.position}
                    color={plant.color}
                    scale={plant.scale}
                    onClick={() => onClick?.(plant.id)}
                />
            ))}
        </group>
    );
};

export default PlantSystem;
