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
            background: 'rgba(5, 15, 5, 0.6)', // Dark green tint
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            backdropFilter: 'blur(8px)',
            transition: 'opacity 0.3s ease'
        }}>
            <div style={{
                width: '80%',
                maxWidth: '800px',
                background: 'rgba(20, 40, 20, 0.9)', // Forest green
                border: `2px solid ${node.color || '#5A7D3E'}`,
                boxShadow: `0 0 30px ${node.color || '#5A7D3E'}40`,
                padding: '40px',
                borderRadius: '30px 0 30px 0', // Leaf shape
                color: '#e0f2f1',
                position: 'relative',
                animation: 'unfurl 0.6s ease-out'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '25px',
                        background: 'transparent',
                        border: 'none',
                        color: node.color || '#a5d6a7',
                        fontSize: '2rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>

                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: '10px',
                    color: node.color || '#4db6ac',
                    fontFamily: 'Abril Fatface, cursive',
                    textTransform: 'capitalize',
                    letterSpacing: '2px'
                }}>
                    {node.label}
                </h2>

                <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '30px',
                    color: '#80cbc4',
                    fontFamily: 'Lora, serif',
                    fontStyle: 'italic'
                }}>
                    Species: {node.species}
                </h3>

                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    fontFamily: 'Lora, serif'
                }}>
                    {node.description}
                </p>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {node.symbionts.map((trait, i) => (
                        <span key={i} style={{
                            padding: '8px 20px',
                            background: `rgba(255, 255, 255, 0.1)`,
                            border: `1px solid ${node.color || '#4db6ac'}`,
                            borderRadius: '20px',
                            fontSize: '1rem',
                            fontFamily: 'monospace',
                            color: '#b2dfdb'
                        }}>
                            {trait}
                        </span>
                    ))}
                </div>

                <style>{`
                    @keyframes unfurl {
                        from { transform: scale(0.8) rotate(-5deg); opacity: 0; }
                        to { transform: scale(1) rotate(0); opacity: 1; }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default ContentOverlay;
