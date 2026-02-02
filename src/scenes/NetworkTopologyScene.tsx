import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { homelabProject } from '../data/projects';

interface NetworkNodeProps {
    position: [number, number, number];
    name: string;
    type: 'attacker' | 'target' | 'server' | 'tool';
    isActive?: boolean;
    onClick?: () => void;
}

function NetworkNode({ position, name, type, isActive, onClick }: NetworkNodeProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);

    const color = useMemo(() => {
        switch (type) {
            case 'attacker': return '#ff4444';
            case 'target': return '#ff9f43';
            case 'server': return '#00ffff';
            case 'tool': return '#0aff00';
            default: return '#ffffff';
        }
    }, [type]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
        }
        if (glowRef.current) {
            glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
        }
    });

    return (
        <group position={position} onClick={onClick}>
            {/* Glow sphere */}
            <Sphere ref={glowRef} args={[0.6, 16, 16]}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>

            {/* Main node */}
            <mesh ref={meshRef}>
                <octahedronGeometry args={[0.4, 0]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={isActive ? 0.8 : 0.3}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Node label */}
            <Text
                position={[0, -0.8, 0]}
                fontSize={0.15}
                color={color}
                anchorX="center"
                anchorY="top"
                font="/fonts/ShareTechMono-Regular.ttf"
            >
                {name}
            </Text>
        </group>
    );
}

interface DataPacketProps {
    start: [number, number, number];
    end: [number, number, number];
    color: string;
    speed?: number;
}

function DataPacket({ start, end, color, speed = 1 }: DataPacketProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const progress = useRef(Math.random());

    useFrame((_, delta) => {
        if (!meshRef.current) return;

        progress.current += delta * speed * 0.3;
        if (progress.current > 1) progress.current = 0;

        const t = progress.current;
        meshRef.current.position.set(
            start[0] + (end[0] - start[0]) * t,
            start[1] + (end[1] - start[1]) * t + Math.sin(t * Math.PI) * 0.3,
            start[2] + (end[2] - start[2]) * t
        );
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.9}
            />
        </mesh>
    );
}

export default function NetworkTopologyScene() {
    const groupRef = useRef<THREE.Group>(null);

    // Node positions
    const nodes = useMemo(() => [
        { ...homelabProject.nodes[0], position: [-3, 0, 0] as [number, number, number] }, // Kali
        { ...homelabProject.nodes[1], position: [0, 2, 2] as [number, number, number] },  // DVWA
        { ...homelabProject.nodes[2], position: [3, 1, 1] as [number, number, number] },  // Juice Shop
        { ...homelabProject.nodes[3], position: [0, -1, -2] as [number, number, number] }, // Ubuntu
        { ...homelabProject.nodes[4], position: [-2, 2, -1] as [number, number, number] }, // Metasploit
        { ...homelabProject.nodes[5], position: [2, -2, 0] as [number, number, number] },  // Burp
    ], []);

    // Connections between nodes
    const connections = useMemo(() => [
        { from: 0, to: 1, color: '#ff4444' }, // Kali -> DVWA
        { from: 0, to: 2, color: '#ff4444' }, // Kali -> Juice Shop
        { from: 0, to: 3, color: '#ff4444' }, // Kali -> Ubuntu
        { from: 0, to: 4, color: '#0aff00' }, // Kali -> Metasploit
        { from: 0, to: 5, color: '#0aff00' }, // Kali -> Burp
        { from: 4, to: 1, color: '#8a2be2' }, // Metasploit -> DVWA
        { from: 5, to: 2, color: '#8a2be2' }, // Burp -> Juice Shop
    ], []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Network nodes */}
            {nodes.map((node) => (
                <NetworkNode
                    key={node.id}
                    position={node.position}
                    name={node.name}
                    type={node.type}
                    isActive={true}
                />
            ))}

            {/* Connection lines */}
            {connections.map((conn, i) => (
                <group key={i}>
                    <Line
                        points={[nodes[conn.from].position, nodes[conn.to].position]}
                        color={conn.color}
                        lineWidth={1}
                        opacity={0.3}
                        transparent
                    />
                    {/* Data packets traveling along connections */}
                    <DataPacket
                        start={nodes[conn.from].position}
                        end={nodes[conn.to].position}
                        color={conn.color}
                        speed={0.5 + Math.random() * 0.5}
                    />
                </group>
            ))}

            {/* Ambient particles */}
            <AmbientParticles count={50} />
        </group>
    );
}

function AmbientParticles({ count }: { count: number }) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        return Array.from({ length: count }, () => ({
            position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 8],
            speed: 0.2 + Math.random() * 0.3,
            offset: Math.random() * Math.PI * 2,
        }));
    }, [count]);

    useFrame((state) => {
        if (!meshRef.current) return;

        particles.forEach((particle, index) => {
            const t = state.clock.elapsedTime * particle.speed + particle.offset;
            dummy.position.set(
                particle.position[0] + Math.sin(t) * 0.5,
                particle.position[1] + Math.cos(t * 0.7) * 0.3,
                particle.position[2] + Math.sin(t * 0.5) * 0.4
            );
            dummy.scale.setScalar(0.02 + Math.sin(t * 2) * 0.01);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(index, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[1, 6, 6]} />
            <meshBasicMaterial color="#0aff00" transparent opacity={0.6} />
        </instancedMesh>
    );
}
