// Three.js Scene - Inspired by threejs.org design
let scene, camera, renderer, particles, lines;

function initThreeJS() {
    const canvas = document.getElementById('canvas');
    
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Camera setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);
    
    // Create particle system with lines
    createParticleCloud();
    
    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x0099ff, 0.5);
    pointLight.position.set(100, 100, 100);
    scene.add(pointLight);
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Start animation loop
    animate();
}

function createParticleCloud() {
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Position
        positions[idx] = (Math.random() - 0.5) * 400;
        positions[idx + 1] = (Math.random() - 0.5) * 400;
        positions[idx + 2] = (Math.random() - 0.5) * 400;
        
        // Velocity with circular motion
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.3;
        velocities[idx] = Math.cos(angle) * radius;
        velocities[idx + 1] = Math.sin(angle) * radius;
        velocities[idx + 2] = (Math.random() - 0.5) * 0.1;
        
        // Color - Monochrome with highlights
        const colorVariation = Math.random();
        colors[idx] = 0.8 + colorVariation * 0.2;      // R
        colors[idx + 1] = 0.8 + colorVariation * 0.2;  // G
        colors[idx + 2] = 0.8 + colorVariation * 0.2;  // B
        
        // Size variation
        sizes[i] = Math.random() * 2 + 0.5;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.userData.velocities = velocities;
    geometry.userData.sizes = sizes;
    
    const material = new THREE.PointsMaterial({
        size: 2,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.7,
        vertexColors: true
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    // Create connecting lines
    createConnectingLines(positions, particleCount);
}

function createConnectingLines(positions, count) {
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    
    // Connect nearby particles
    for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            // Only connect if close enough
            if (distance < 100) {
                linePositions.push(
                    positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                    positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                );
            }
        }
    }
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0099ff,
        transparent: true,
        opacity: 0.1,
        linewidth: 1
    });
    
    lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
}

function updateParticles() {
    if (!particles) return;
    
    const positions = particles.geometry.attributes.position.array;
    const velocities = particles.geometry.userData.velocities;
    
    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        // Boundary wrapping
        const boundaries = 150;
        if (positions[i] > boundaries) positions[i] = -boundaries;
        if (positions[i] < -boundaries) positions[i] = boundaries;
        if (positions[i + 1] > boundaries) positions[i + 1] = -boundaries;
        if (positions[i + 1] < -boundaries) positions[i + 1] = boundaries;
        if (positions[i + 2] > boundaries) positions[i + 2] = -boundaries;
        if (positions[i + 2] < -boundaries) positions[i + 2] = boundaries;
    }
    
    particles.geometry.attributes.position.needsUpdate = true;
}

function animate() {
    requestAnimationFrame(animate);
    
    updateParticles();
    
    if (particles) {
        particles.rotation.x += 0.00005;
        particles.rotation.y += 0.00008;
    }
    
    if (lines) {
        lines.rotation.x += 0.00003;
        lines.rotation.y += 0.00005;
    }
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeJS);
} else {
    initThreeJS();
}
