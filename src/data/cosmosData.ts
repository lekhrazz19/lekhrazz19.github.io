export interface ContentNode {
    id: string;
    label: string;
    subLabel: string;
    type: 'education' | 'experience' | 'project' | 'skill';
    species: string; // Biological classification
    description: string;
    symbionts: string[]; // Connected entities (formerly electrons)
    color: string;
    position: [number, number, number];
}

export const cosmosData: ContentNode[] = [
    {
        id: 'edu-main',
        label: 'Wisdom Root',
        subLabel: 'Foundational Knowledge',
        type: 'education',
        species: 'Quercus Aeterna (Eternal Oak)',
        description: 'The deep-rooted knowledge base that sustains the ecosystem. Nourished by continuous learning and academic rigor.',
        symbionts: ['Computer Science', 'Cybersecurity Ops', 'Network Theory', 'Research Methodology'],
        color: '#4caf50', // Forest Green
        position: [0, 5, -20]
    },
    {
        id: 'exp-main',
        label: 'Path of the Fox',
        subLabel: 'Professional Journey',
        type: 'experience',
        species: 'Vulpes Technica',
        description: 'Adaptive strategies learned through survival in the wild digital frontier. Represents agility and practical security auditing.',
        symbionts: ['Bugcrowd Hunter', 'HackerHub8 Red Team', 'Defense Mechanisms', 'Incident Response'],
        color: '#ff9800', // Fox Orange
        position: [15, -2, -25]
    },
    {
        id: 'proj-main',
        label: 'Flora of Creation',
        subLabel: 'Project Ecosystem',
        type: 'project',
        species: 'Digitalis Purpurea',
        description: 'The blooming applications of creative energy. Each flower represents a solved problem or a built system.',
        symbionts: ['Quantum Encyrption', 'Generative AI', 'React Systems', '3D WebGL'],
        color: '#e91e63', // Floral Pink
        position: [-15, -5, -30]
    },
    {
        id: 'skill-main',
        label: 'Mycelial Web',
        subLabel: 'Interconnected Skills',
        type: 'skill',
        species: 'Network Fungi',
        description: 'The invisible underground network that connects all disparate technologies into a cohesive whole.',
        symbionts: ['Penetration Testing', 'Full Stack Dev', 'Cloud Arch', 'Machine Learning'],
        color: '#9c27b0', // Mycelium Purple
        position: [0, -10, -15]
    }
];
