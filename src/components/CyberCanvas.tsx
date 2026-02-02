import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sphere } from '@react-three/drei';
import { CyberPhysicsProvider } from '../systems/CyberPhysics';
import { EffectComposer, Bloom, Glitch, Noise, Vignette } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import * as THREE from 'three';
import StarField from './Cosmos/StarField';
import Molecule from './Cosmos/Molecule';
import AIAvatar from './Cosmos/AIAvatar';
import { cosmosData } from '../data/cosmosData';
import type { ContentNode } from '../data/cosmosData';
import ContentOverlay from './Overlay/ContentOverlay';

import { useCyberAudio } from '../systems/useCyberAudio';

const Singularity: React.FC<{ onBigBang: () => void }> = ({ onBigBang }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [expanded, setExpanded] = useState(false);

    useFrame((state) => {
        if (meshRef.current && !expanded) {
            meshRef.current.rotation.y += 0.02;
            meshRef.current.rotation.x += 0.01;
            // Pulsate
            const scale = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.1;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    const handleClick = () => {
        setExpanded(true);
        // Animate expansion logic here or trigger callback
        onBigBang();
    };

    return (
        <Sphere ref={meshRef} args={[1, 32, 32]} onClick={handleClick} position={[0, 0, 0]}>
            <meshStandardMaterial
                color="#000000"
                emissive="#ff0044"
                emissiveIntensity={expanded ? 50 : 2}
                roughness={0}
            />
        </Sphere>
    );
};

const CyberCanvas: React.FC = () => {
    const [universeCreated, setUniverseCreated] = useState(false);
    const [selectedNode, setSelectedNode] = useState<ContentNode | null>(null);
    const { initAudio, playClickSound, toggleAudio } = useCyberAudio();
    const [audioInitialized, setAudioInitialized] = useState(false);

    const handleSingularityClick = () => {
        if (!audioInitialized) {
            initAudio();
            setAudioInitialized(true);
        }
        playClickSound();
        setUniverseCreated(true);
    };

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#000' }}>
            <Canvas>
                <CyberPhysicsProvider>
                    <PerspectiveCamera makeDefault position={[0, 0, 15]} />
                    <OrbitControls
                        enablePan={false}
                        enableZoom={true}
                        maxDistance={universeCreated ? 200 : 20}
                        minDistance={2}
                        enabled={!selectedNode} // Disable controls when overlay is open
                        autoRotate={!selectedNode && universeCreated}
                        autoRotateSpeed={0.5}
                    />

                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <Suspense fallback={null}>
                        {!universeCreated ? (
                            <Singularity onBigBang={handleSingularityClick} />
                        ) : (
                            <>
                                <StarField />

                                {/* AI Guardians */}
                                <AIAvatar type="burp" position={[10, 10, -10]} onClick={playClickSound} />
                                <AIAvatar type="kali" position={[-10, 8, -5]} onClick={playClickSound} />
                                <AIAvatar type="metasploit" position={[0, -10, -15]} onClick={playClickSound} />

                                {/* Molecules for Content */}
                                {cosmosData.map((node) => (
                                    <Molecule
                                        key={node.id}
                                        position={node.position}
                                        label={node.label}
                                        subLabel={node.subLabel}
                                        color={node.color}
                                        electrons={node.electrons}
                                        onClick={() => {
                                            playClickSound();
                                            setSelectedNode(node);
                                        }}
                                    // Pass hover sound via a wrapper or prop if Molecule supports it.
                                    // For now, let's assume Molecule needs modification to support onHover sound
                                    // OR we just assume click is enough for MVP.
                                    // Actually Molecule has onPointerOver where we can inject it?
                                    // No, Molecule takes onPointerOver internally.
                                    // Let's stick to click for now to avoid modifying Molecule props excessively, or update Molecule.
                                    />
                                ))}
                            </>
                        )}
                    </Suspense>

                    <EffectComposer>
                        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                        <Glitch
                            delay={new THREE.Vector2(1.5, 3.5)}
                            duration={new THREE.Vector2(0.6, 1.0)}
                            strength={new THREE.Vector2(0.3, 1.0)}
                            mode={GlitchMode.SPORADIC}
                            active
                            ratio={0.85}
                        />
                        <Noise opacity={0.02} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>
                </CyberPhysicsProvider>
            </Canvas>

            {/* Content Overlay */}
            <ContentOverlay node={selectedNode} onClose={() => { playClickSound(); setSelectedNode(null); }} />

            {/* HTML Overlay for UI */}
            <div style={{ position: 'absolute', top: 20, left: 20, color: 'white', pointerEvents: 'none', fontFamily: 'monospace', zIndex: 1, opacity: selectedNode ? 0 : 1, transition: 'opacity 0.5s' }}>
                <h1>CYBERNEURAL COSMOS</h1>
                <p>System Status: {universeCreated ? "UNIVERSE EXPANDED" : "SINGULARITY DETECTED - CLICK TO INITIATE BIG BANG"}</p>
            </div>

            {/* Audio Toggle */}
            <button
                onClick={toggleAudio}
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    background: 'transparent',
                    border: '1px solid #44ff88',
                    color: '#44ff88',
                    padding: '10px 20px',
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                AUDIO: {audioInitialized ? 'ON' : 'INIT'}
            </button>
        </div>
    );
};

export default CyberCanvas;
