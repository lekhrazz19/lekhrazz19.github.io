import React from 'react';
import type { ContentNode } from '../../data/cosmosData';

interface ContentOverlayProps {
    node: ContentNode | null;
    onClose: () => void;
}

const ContentOverlay: React.FC<ContentOverlayProps> = ({ node, onClose }) => {
    if (!node) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            backdropFilter: 'blur(5px)',
            transition: 'opacity 0.3s ease'
        }}>
            <div style={{
                width: '80%',
                maxWidth: '800px',
                background: 'rgba(10, 20, 40, 0.9)',
                border: `2px solid ${node.color}`,
                boxShadow: `0 0 30px ${node.color}40`,
                padding: '40px',
                borderRadius: '20px',
                color: 'white',
                position: 'relative',
                animation: 'slideUp 0.5s ease-out'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '25px',
                        background: 'transparent',
                        border: 'none',
                        color: node.color,
                        fontSize: '2rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>

                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: '10px',
                    color: node.color,
                    fontFamily: 'Orbitron, sans-serif', // Assuming a futuristic font or fallback
                    textTransform: 'uppercase',
                    letterSpacing: '5px'
                }}>
                    {node.label}
                </h2>

                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '30px',
                    color: '#888',
                    fontFamily: 'monospace'
                }}>
                    ELEMENT: {node.element}
                </h3>

                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    marginBottom: '40px',
                    maxWidth: '600px'
                }}>
                    {node.description}
                </p>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {node.electrons.map((tech, i) => (
                        <span key={i} style={{
                            padding: '8px 20px',
                            background: `${node.color}20`,
                            border: `1px solid ${node.color}`,
                            borderRadius: '30px',
                            fontSize: '1rem',
                            fontFamily: 'monospace',
                            boxShadow: `0 0 10px ${node.color}20`
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>

                <style>{`
                    @keyframes slideUp {
                        from { transform: translateY(50px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default ContentOverlay;
