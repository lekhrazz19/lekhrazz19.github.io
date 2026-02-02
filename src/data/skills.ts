// Skills data for Lekhraj Singh's portfolio

export interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    proficiency: number; // 0-100
    icon?: string;
}

export interface SkillCategory {
    id: string;
    name: string;
    description: string;
    color: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'web-security',
        name: 'Application Security',
        description: 'Web application penetration testing and vulnerability assessment',
        color: '#0aff00',
        skills: [
            { name: 'OWASP Top 10', level: 'advanced', proficiency: 85 },
            { name: 'SQL Injection', level: 'advanced', proficiency: 90 },
            { name: 'Cross-Site Scripting (XSS)', level: 'advanced', proficiency: 88 },
            { name: 'CSRF', level: 'intermediate', proficiency: 75 },
            { name: 'Authentication Testing', level: 'advanced', proficiency: 82 },
            { name: 'Session Management', level: 'intermediate', proficiency: 78 },
            { name: 'API Security', level: 'intermediate', proficiency: 70 },
        ]
    },
    {
        id: 'pentesting',
        name: 'Penetration Testing',
        description: 'Comprehensive security assessment methodologies',
        color: '#00ffff',
        skills: [
            { name: 'Network Penetration Testing', level: 'intermediate', proficiency: 75 },
            { name: 'Web Application Testing', level: 'advanced', proficiency: 85 },
            { name: 'Vulnerability Assessment', level: 'advanced', proficiency: 80 },
            { name: 'Exploitation', level: 'intermediate', proficiency: 72 },
            { name: 'Post-Exploitation', level: 'intermediate', proficiency: 68 },
            { name: 'Report Writing', level: 'advanced', proficiency: 82 },
        ]
    },
    {
        id: 'tools',
        name: 'Security Tools',
        description: 'Proficiency in industry-standard security tools',
        color: '#8a2be2',
        skills: [
            { name: 'Burp Suite', level: 'advanced', proficiency: 88 },
            { name: 'Metasploit', level: 'intermediate', proficiency: 75 },
            { name: 'Nmap', level: 'advanced', proficiency: 85 },
            { name: 'Wireshark', level: 'intermediate', proficiency: 72 },
            { name: 'SQLMap', level: 'advanced', proficiency: 80 },
            { name: 'OWASP ZAP', level: 'intermediate', proficiency: 70 },
            { name: 'Hydra', level: 'intermediate', proficiency: 68 },
            { name: 'John the Ripper', level: 'intermediate', proficiency: 65 },
        ]
    },
    {
        id: 'programming',
        name: 'Programming',
        description: 'Scripting and development for security automation',
        color: '#ff9f43',
        skills: [
            { name: 'Python', level: 'advanced', proficiency: 85 },
            { name: 'Bash/Shell Scripting', level: 'intermediate', proficiency: 75 },
            { name: 'JavaScript', level: 'intermediate', proficiency: 70 },
            { name: 'C/C++', level: 'intermediate', proficiency: 65 },
            { name: 'SQL', level: 'advanced', proficiency: 80 },
        ]
    },
    {
        id: 'os-networking',
        name: 'OS & Networking',
        description: 'Operating systems and network fundamentals',
        color: '#3498db',
        skills: [
            { name: 'Kali Linux', level: 'advanced', proficiency: 88 },
            { name: 'Linux Administration', level: 'intermediate', proficiency: 75 },
            { name: 'Windows Security', level: 'intermediate', proficiency: 70 },
            { name: 'TCP/IP', level: 'intermediate', proficiency: 72 },
            { name: 'Network Protocols', level: 'intermediate', proficiency: 70 },
        ]
    }
];

// Matrix rain keywords - security terms
export const matrixKeywords: string[] = [
    'OWASP', 'CVE', 'XSS', 'SQLi', 'CSRF', 'RCE', 'LFI', 'RFI',
    'IDOR', 'SSRF', 'XXE', 'SSTI', 'CORS', 'JWT', 'OAuth',
    'Nmap', 'Burp', 'Metasploit', 'Hydra', 'SQLMap', 'Wireshark',
    'Kali', 'Exploit', 'Payload', 'Shell', 'Root', 'Admin',
    'Bypass', 'Inject', 'Intercept', 'Decrypt', 'Hash', 'Salt',
    'Token', 'Session', 'Cookie', 'Header', 'Packet', 'Port',
    'Scan', 'Recon', 'Enum', 'Pivot', 'Exfil', 'C2', 'RAT',
    'APT', 'Zero-Day', 'PoC', 'CTF', 'Pwned', 'Red Team',
    'Pentest', 'Vuln', 'Patch', 'Firewall', 'IDS', 'WAF'
];

// OWASP Top 10 for visualization
export const owaspTop10 = [
    { id: 'A01', name: 'Broken Access Control', severity: 'critical', color: '#ff4444' },
    { id: 'A02', name: 'Cryptographic Failures', severity: 'high', color: '#ff6b6b' },
    { id: 'A03', name: 'Injection', severity: 'critical', color: '#ff4444' },
    { id: 'A04', name: 'Insecure Design', severity: 'high', color: '#ff6b6b' },
    { id: 'A05', name: 'Security Misconfiguration', severity: 'medium', color: '#ffa502' },
    { id: 'A06', name: 'Vulnerable Components', severity: 'medium', color: '#ffa502' },
    { id: 'A07', name: 'Auth Failures', severity: 'high', color: '#ff6b6b' },
    { id: 'A08', name: 'Data Integrity Failures', severity: 'medium', color: '#ffa502' },
    { id: 'A09', name: 'Logging Failures', severity: 'low', color: '#70a1ff' },
    { id: 'A10', name: 'SSRF', severity: 'high', color: '#ff6b6b' },
];

export const getAllSkills = (): Skill[] => {
    return skillCategories.flatMap(cat => cat.skills);
};

export const getSkillsByCategory = (categoryId: string): Skill[] => {
    const category = skillCategories.find(cat => cat.id === categoryId);
    return category ? category.skills : [];
};

export default skillCategories;
