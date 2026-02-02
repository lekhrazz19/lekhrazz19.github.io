import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import NetworkTopologyScene from '../scenes/NetworkTopologyScene';
import { homelabProject } from '../data/projects';

function LoadingFallback() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '400px',
            color: 'var(--matrix-green)',
            fontFamily: 'var(--font-mono)',
        }}>
            <span className="loading-pulse">Loading 3D visualization...</span>
        </div>
    );
}

export default function ProjectsLab() {

    return (
        <section className="section" id="projects" style={{
            background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="section-title glow-text">
                    <span style={{ color: 'var(--matrix-green)' }}>&lt;</span>
                    Projects Lab
                    <span style={{ color: 'var(--matrix-green)' }}>/&gt;</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem',
                    marginTop: '2rem',
                }}>
                    {/* 3D Network Visualization */}
                    <div className="cyber-card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ height: '400px', position: 'relative' }}>
                            <Suspense fallback={<LoadingFallback />}>
                                <Canvas>
                                    <PerspectiveCamera makeDefault position={[0, 2, 8]} />
                                    <OrbitControls
                                        enableZoom={true}
                                        enablePan={false}
                                        minDistance={5}
                                        maxDistance={15}
                                        autoRotate
                                        autoRotateSpeed={0.5}
                                    />
                                    <ambientLight intensity={0.3} />
                                    <pointLight position={[10, 10, 10]} intensity={1} color="#0aff00" />
                                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
                                    <NetworkTopologyScene />
                                </Canvas>
                            </Suspense>
                            <div style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '1rem',
                                background: 'rgba(0,0,0,0.8)',
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--matrix-green-dim)',
                            }}>
                                <span style={{
                                    color: 'var(--matrix-green)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.75rem',
                                }}>
                                    🔄 Drag to rotate | Scroll to zoom
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="cyber-card">
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--matrix-green)',
                            fontSize: '1.5rem',
                            marginBottom: '0.5rem',
                        }}>
                            {homelabProject.title}
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            marginBottom: '1rem',
                        }}>
                            {homelabProject.duration}
                        </p>
                        <p style={{
                            color: 'var(--text-primary)',
                            fontSize: '0.95rem',
                            lineHeight: '1.7',
                            marginBottom: '1.5rem',
                        }}>
                            {homelabProject.description}
                        </p>

                        {/* Tools Section */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{
                                color: 'var(--cyan)',
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                marginBottom: '0.75rem',
                            }}>
                                Tools & Technologies
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {homelabProject.tools.slice(0, 6).map((tool) => (
                                    <span
                                        key={tool}
                                        className="skill-tag"
                                        style={{ borderColor: 'var(--cyan)' }}
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Attack Vectors Section */}
                        <div>
                            <h4 style={{
                                color: 'var(--vuln-red)',
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                marginBottom: '0.75rem',
                            }}>
                                Attack Vectors Tested
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {homelabProject.attacks.slice(0, 6).map((attack) => (
                                    <span
                                        key={attack}
                                        className="skill-tag"
                                        style={{ borderColor: 'var(--vuln-red)' }}
                                    >
                                        {attack}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div style={{
                            marginTop: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}>
                            <span style={{
                                display: 'inline-block',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: 'var(--matrix-green)',
                                boxShadow: '0 0 10px var(--matrix-green)',
                                animation: 'pulse 2s infinite',
                            }} />
                            <span style={{
                                color: 'var(--matrix-green)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                            }}>
                                ACTIVE PROJECT
                            </span>
                        </div>
                    </div>
                </div>

                {/* Network Nodes Legend */}
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                }}>
                    {[
                        { type: 'attacker', color: '#ff4444', label: 'Attacker Machine' },
                        { type: 'target', color: '#ff9f43', label: 'Vulnerable Target' },
                        { type: 'server', color: '#00ffff', label: 'Server' },
                        { type: 'tool', color: '#0aff00', label: 'Security Tool' },
                    ].map((item) => (
                        <div key={item.type} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}>
                            <span style={{
                                display: 'inline-block',
                                width: '16px',
                                height: '16px',
                                background: item.color,
                                borderRadius: '4px',
                                boxShadow: `0 0 10px ${item.color}`,
                            }} />
                            <span style={{
                                color: 'var(--text-secondary)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                            }}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </section>
    );
}
