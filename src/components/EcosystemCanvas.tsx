import React, { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sky, Stars, Cloud } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, TiltShift } from '@react-three/postprocessing';
import WisdomTree from './Nature/WisdomTree';
import PlantSystem from './Nature/PlantSystem';
import MyceliumNetwork from './Nature/MyceliumNetwork';
import AnimalGuides from './Nature/AnimalGuides';
import WeatherSystem from '../systems/WeatherSystem';
import OrganicCursor from './Nature/OrganicCursor';
import ContentOverlay from './Overlay/ContentOverlay';
import { cosmosData } from '../data/cosmosData';
import type { ContentNode } from '../data/cosmosData';
import { useNatureAudio } from '../systems/useNatureAudio';

const EcosystemCanvas: React.FC = () => {
    const [season] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('spring');
    const raining = true;
    const [selectedNode, setSelectedNode] = useState<ContentNode | null>(null);
    const { initAudio, playClickSound } = useNatureAudio();

    // Auto-init audio on first interaction if possible, or just provide a button
    // For now we assume user interaction triggers it or we add a button.

    const handleNodeSelect = useCallback((id: string) => {
        initAudio(); // Ensure audio is active
        playClickSound();
        const node = cosmosData.find(n => n.id === id);
        if (node) setSelectedNode(node);
    }, [playClickSound]);

    const handleTreeClick = useCallback(() => {
        playClickSound();
        // Maybe open "About" node or special node
        const node = cosmosData.find(n => n.label === "Skills" || n.label === "Education");
        if (node) setSelectedNode(node);
        else console.log("Tree clicked");
    }, [playClickSound]);

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#050505', cursor: 'none' }}>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={60} />
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2 - 0.1} // Don't go below ground
                    minDistance={5}
                    maxDistance={50}
                    enabled={!selectedNode}
                    autoRotate={!selectedNode}
                    autoRotateSpeed={0.5}
                />

                {/* Lighting: Natural Day/Night Setup */}
                <ambientLight intensity={0.4} color={season === 'autumn' ? '#ffaa00' : '#ffffff'} />
                <directionalLight
                    position={[10, 20, 10]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <hemisphereLight args={["#87CEEB", "#2D5016", 0.5]} />

                {/* Environment */}
                <Sky sunPosition={[100, 20, 100]} turbidity={0.5} rayleigh={0.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Cloud opacity={0.5} speed={0.4} segments={20} position={[0, 10, -10]} />

                {/* Weather */}
                <WeatherSystem active={raining} />

                {/* Interaction - Organic Cursor */}
                <OrganicCursor />

                <Suspense fallback={null}>
                    {/* The Biome - Wisdom Tree (Hero) */}
                    <WisdomTree onClick={handleTreeClick} />

                    {/* The Permaculture Garden - Plants (Projects) */}
                    <PlantSystem onClick={handleNodeSelect} />

                    {/* The Mycelial Network - Skills */}
                    <MyceliumNetwork onClick={handleNodeSelect} />

                    {/* The Animal Guides - Experience */}
                    <AnimalGuides />

                    {/* Ground Plane */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                        <planeGeometry args={[100, 100]} />
                        <meshStandardMaterial color="#1a2e12" roughness={0.9} />
                    </mesh>
                </Suspense>

                {/* Post Processing for "Dreamy/Organic" look */}
                <EffectComposer enableNormalPass={false}>
                    <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.9} height={300} intensity={1.2} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    <TiltShift blur={0.2} />
                </EffectComposer>
            </Canvas>

            {/* Content Overlay */}
            <ContentOverlay node={selectedNode} onClose={() => setSelectedNode(null)} />

            {/* UI Overlay */}
            <div style={{ position: 'absolute', top: 20, left: 20, color: '#00FF9D', pointerEvents: 'none', fontFamily: 'Lora, serif' }}>
                <h1 style={{ fontFamily: 'Abril Fatface, cursive', fontSize: '3rem', margin: 0 }}>The Symbiotic Garden</h1>
                <p style={{ margin: 0, opacity: 0.8 }}>Ecosystem Initialized: {season.toUpperCase()}</p>
                <div style={{ marginTop: '10px', fontSize: '0.8rem', opacity: 0.6 }}>
                    Weather: {raining ? 'RAIN' : 'CLEAR'}
                </div>
            </div>
        </div>
    );
};

export default EcosystemCanvas;
