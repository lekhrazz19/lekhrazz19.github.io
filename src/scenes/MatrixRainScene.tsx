import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { matrixKeywords } from '../data/skills';

interface MatrixRainProps {
    count?: number;
}

// Character set for Matrix rain
const CHARACTERS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

export default function MatrixRainScene({ count = 100 }: MatrixRainProps) {
    const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Create stream data
    const streams = useMemo(() => {
        return Array.from({ length: count }, () => ({
            x: (Math.random() - 0.5) * 40,
            z: (Math.random() - 0.5) * 20 - 10,
            speed: 2 + Math.random() * 4,
            y: Math.random() * 30 - 15,
            length: 5 + Math.floor(Math.random() * 15),
            startDelay: Math.random() * 5,
            opacity: 0.3 + Math.random() * 0.7,
            isKeyword: Math.random() < 0.1,
            keyword: matrixKeywords[Math.floor(Math.random() * matrixKeywords.length)],
        }));
    }, [count]);

    // Create shader material for glowing effect
    const material = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color: { value: new THREE.Color('#0aff00') },
            },
            vertexShader: `
        varying vec2 vUv;
        varying float vOpacity;
        
        attribute float opacity;
        
        void main() {
          vUv = uv;
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec2 vUv;
        varying float vOpacity;
        
        void main() {
          float glow = 1.0 - length(vUv - 0.5) * 2.0;
          glow = pow(max(glow, 0.0), 2.0);
          
          vec3 finalColor = color * (0.5 + 0.5 * sin(time * 2.0));
          gl_FragColor = vec4(finalColor, glow * vOpacity * 0.8);
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
    }, []);

    useFrame((state) => {
        if (!instancedMeshRef.current) return;

        const time = state.clock.elapsedTime;
        material.uniforms.time.value = time;

        streams.forEach((stream, i) => {
            if (time < stream.startDelay) {
                dummy.position.set(0, 1000, 0); // Hide initially
            } else {
                const elapsed = time - stream.startDelay;
                const y = stream.y - (elapsed * stream.speed) % 30;

                dummy.position.set(stream.x, y, stream.z);
                dummy.scale.setScalar(0.1 + Math.random() * 0.05);
            }

            dummy.updateMatrix();
            instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
        });

        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh
            ref={instancedMeshRef}
            args={[undefined, undefined, count]}
            material={material}
        >
            <planeGeometry args={[0.3, 0.3]} />
        </instancedMesh>
    );
}

// 2D Canvas version for better performance as background
export function MatrixRainCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Character columns
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);

        // Drop position for each column
        const drops: number[] = Array(columns).fill(1);
        const speeds: number[] = Array(columns).fill(0).map(() => 0.5 + Math.random() * 0.5);

        // Mix of characters and keywords
        const getChar = () => {
            if (Math.random() < 0.05) {
                const keyword = matrixKeywords[Math.floor(Math.random() * matrixKeywords.length)];
                return keyword.charAt(Math.floor(Math.random() * keyword.length));
            }
            return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
        };

        const draw = () => {
            // Fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Green text
            ctx.fillStyle = '#0aff00';
            ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = getChar();
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Random brightness
                const brightness = Math.random();
                if (brightness > 0.9) {
                    ctx.fillStyle = '#ffffff';
                } else if (brightness > 0.7) {
                    ctx.fillStyle = '#00ff00';
                } else {
                    ctx.fillStyle = `rgba(10, 255, 0, ${0.3 + brightness * 0.7})`;
                }

                ctx.fillText(char, x, y);

                // Reset drop randomly when it reaches bottom
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i] += speeds[i];
            }
        };

        const interval = setInterval(draw, 35);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.4,
            }}
        />
    );
}
