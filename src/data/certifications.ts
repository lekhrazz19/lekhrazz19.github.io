// Certifications data for Lekhraj Singh's portfolio

export interface Certification {
    id: string;
    name: string;
    shortName: string;
    issuer: string;
    issuerLogo?: string;
    date: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
    description: string;
    skills: string[];
    color: string;
    glowColor: string;
}

export const certifications: Certification[] = [
    {
        id: 'iso27001',
        name: 'ISO 27001 Lead Auditor',
        shortName: 'ISO 27001',
        issuer: 'ISO/IEC',
        date: '2024',
        description: 'Certified in Information Security Management Systems (ISMS) auditing. Capable of leading audits to assess organizational security controls and compliance.',
        skills: [
            'Security Auditing',
            'Risk Assessment',
            'Compliance Management',
            'Security Controls',
            'ISMS Implementation'
        ],
        color: '#00d4ff',
        glowColor: 'rgba(0, 212, 255, 0.5)'
    },
    {
        id: 'ibm-ethical-hacker',
        name: 'IBM Cybersecurity Analyst',
        shortName: 'IBM Cyber',
        issuer: 'IBM',
        date: '2024',
        description: 'Professional certification in ethical hacking methodologies, penetration testing techniques, and cybersecurity analysis.',
        skills: [
            'Ethical Hacking',
            'Penetration Testing',
            'Vulnerability Assessment',
            'Security Analysis',
            'Threat Intelligence'
        ],
        color: '#0aff00',
        glowColor: 'rgba(10, 255, 0, 0.5)'
    },
    {
        id: 'cisco',
        name: 'Cisco Networking Fundamentals',
        shortName: 'Cisco',
        issuer: 'Cisco',
        date: '2024',
        description: 'Certification in network fundamentals, TCP/IP protocols, and network security principles.',
        skills: [
            'Network Security',
            'TCP/IP',
            'Routing & Switching',
            'Network Protocols',
            'Firewall Configuration'
        ],
        color: '#1ba0d8',
        glowColor: 'rgba(27, 160, 216, 0.5)'
    },
    {
        id: 'comptia-sec',
        name: 'CompTIA Security+',
        shortName: 'Sec+',
        issuer: 'CompTIA',
        date: '2024',
        description: 'Foundational cybersecurity certification covering network security, compliance, threats, and vulnerabilities.',
        skills: [
            'Network Security',
            'Cryptography',
            'Identity Management',
            'Risk Management',
            'Security Operations'
        ],
        color: '#ff6b6b',
        glowColor: 'rgba(255, 107, 107, 0.5)'
    }
];

export const getCertificationById = (id: string): Certification | undefined => {
    return certifications.find(cert => cert.id === id);
};

export default certifications;
