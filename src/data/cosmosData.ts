export interface ContentNode {
    id: string;
    label: string;
    subLabel: string;
    type: 'education' | 'experience' | 'project' | 'skill';
    element: string; // Chemical element metaphor
    description: string;
    electrons: string[]; // Orbiting items
    color: string;
    position: [number, number, number];
}

export const cosmosData: ContentNode[] = [
    {
        id: 'edu-main',
        label: 'EDUCATION',
        subLabel: 'Carbon Base',
        type: 'education',
        element: 'Carbon',
        description: 'Foundational structures of knowledge.',
        electrons: ['Computer Networks', 'Cybersecurity', 'Theory', 'Research'],
        color: '#4488ff', // Blue
        position: [0, 5, -20]
    },
    {
        id: 'exp-main',
        label: 'EXPERIENCE',
        subLabel: 'Silicon Conductor',
        type: 'experience',
        element: 'Silicon',
        description: 'Conductive pathways of professional practice.',
        electrons: ['Bugcrowd', 'HackerHub8', 'Defense', 'Ops'],
        color: '#ff4444', // Red
        position: [15, -2, -25]
    },
    {
        id: 'proj-main',
        label: 'PROJECTS',
        subLabel: 'Germanium Transformer',
        type: 'project',
        element: 'Germanium',
        description: 'Transformative applications of energy.',
        electrons: ['Quantum Dots', 'Innovation', 'Code', 'Tools'],
        color: '#44ff88', // Green
        position: [-15, -5, -30]
    },
    {
        id: 'skill-main',
        label: 'SKILLS',
        subLabel: 'Graphene Lattice',
        type: 'skill',
        element: 'Graphene',
        description: 'Two-dimensional hexagonal lattice of pure ability.',
        electrons: ['Hexagonal Lattice', 'Electron Mobility', 'Strength', 'Speed'],
        color: '#aa44ff', // Purple
        position: [0, -10, -15]
    }
];
