import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeJSBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 2000;
      posArray[i + 1] = (Math.random() - 0.5) * 2000;
      posArray[i + 2] = (Math.random() - 0.5) * 2000;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 7,
      color: 0x00d4ff,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create floating icosahedrons
    const geometries = [
      new THREE.IcosahedronGeometry(2, 4),
      new THREE.OctahedronGeometry(2),
      new THREE.TetrahedronGeometry(2),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({
        color: 0x00d4ff,
        emissive: 0x00d4ff,
        emissiveIntensity: 0.3,
        wireframe: true,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xff00ff,
        emissive: 0xff00ff,
        emissiveIntensity: 0.3,
        wireframe: true,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x9d4edd,
        emissive: 0x9d4edd,
        emissiveIntensity: 0.3,
        wireframe: true,
      }),
    ];

    const meshes: { mesh: THREE.Mesh; speed: THREE.Vector3; velocity: THREE.Vector3 }[] = [];

    for (let i = 0; i < 5; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

      scene.add(mesh);
      meshes.push({
        mesh,
        speed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        velocity: new THREE.Vector3(0, 0, 0),
      });
    }

    // Add lighting
    const light = new THREE.PointLight(0x00d4ff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const light2 = new THREE.PointLight(0xff00ff, 0.8, 100);
    light2.position.set(-10, -10, 10);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      if (particles) {
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0001;
      }

      // Animate meshes
      meshes.forEach((item) => {
        item.mesh.rotation.x += item.speed.x;
        item.mesh.rotation.y += item.speed.y;
        item.mesh.rotation.z += item.speed.z;

        // Gentle floating motion
        item.mesh.position.y += Math.sin(Date.now() * 0.0005 + item.mesh.uuid.charCodeAt(0)) * 0.001;
        item.mesh.position.x += Math.cos(Date.now() * 0.0003 + item.mesh.uuid.charCodeAt(1)) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-canvas" />;
};

export default ThreeJSBackground;
