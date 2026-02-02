// Experience data for Lekhraj Singh's portfolio

export interface Experience {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    startDate: Date;
    endDate?: Date;
    type: 'full-time' | 'part-time' | 'volunteer' | 'freelance' | 'research';
    description: string;
    responsibilities: string[];
    findings?: string[];
    achievements?: string[];
    technologies: string[];
    color: string;
}

export const experiences: Experience[] = [
    {
        id: 'bugcrowd',
        role: 'Security Researcher',
        company: 'Bugcrowd',
        companyUrl: 'https://bugcrowd.com',
        period: 'Jun 2025 - Present',
        startDate: new Date('2025-06-01'),
        type: 'research',
        description: 'Active bug bounty researcher on Bugcrowd platform, identifying and responsibly disclosing vulnerabilities in web applications and systems.',
        responsibilities: [
            'Hunt for security vulnerabilities in various bug bounty programs',
            'Perform comprehensive web application penetration testing',
            'Document and report findings following responsible disclosure',
            'Analyze attack surfaces and identify potential security risks',
            'Stay updated with latest CVEs and exploitation techniques'
        ],
        findings: [
            'Cross-Site Scripting (XSS)',
            'Security Misconfigurations',
            'Input Validation Flaws',
            'Authentication Weaknesses',
            'Information Disclosure'
        ],
        technologies: [
            'Burp Suite',
            'OWASP ZAP',
            'Browser DevTools',
            'Custom Python Scripts',
            'SQLMap'
        ],
        color: '#ff5722'
    },
    {
        id: 'hackerhub8',
        role: 'Cybersecurity Volunteer',
        company: 'HackerHub8',
        period: 'Oct 2025 - Present',
        startDate: new Date('2025-10-01'),
        type: 'volunteer',
        description: 'Contributing to cybersecurity awareness and education initiatives while collaborating with ethical hackers worldwide.',
        responsibilities: [
            'Participate in collaborative security research projects',
            'Share knowledge through workshops and documentation',
            'Mentor beginners in ethical hacking fundamentals',
            'Contribute to open-source security tools',
            'Engage in CTF competitions and challenges'
        ],
        achievements: [
            'Active community contributor',
            'Knowledge sharing through technical write-ups',
            'Collaborative vulnerability research'
        ],
        technologies: [
            'Kali Linux',
            'Metasploit',
            'Wireshark',
            'Python',
            'Network Analysis Tools'
        ],
        color: '#9c27b0'
    }
];

export const getActiveExperiences = () => {
    return experiences.filter(exp => !exp.endDate);
};

export const getExperienceById = (id: string) => {
    return experiences.find(exp => exp.id === id);
};

export default experiences;
