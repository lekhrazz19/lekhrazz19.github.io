// Projects data for Lekhraj Singh's portfolio

export interface Project {
    id: string;
    title: string;
    duration: string;
    description: string;
    tools: string[];
    attacks: string[];
    nodes: NetworkNode[];
    status: 'active' | 'completed' | 'ongoing';
}

export interface NetworkNode {
    id: string;
    name: string;
    type: 'attacker' | 'target' | 'server' | 'tool';
    description: string;
    vulnerabilities?: string[];
}

export const projects: Project[] = [
    {
        id: 'homelab',
        title: 'Cybersecurity Homelab',
        duration: '2024 - Present',
        description: 'Built a comprehensive penetration testing lab environment for practicing real-world attack scenarios and security assessments. Set up multiple vulnerable applications and systems to simulate enterprise attack surfaces.',
        tools: [
            'Kali Linux',
            'Burp Suite Professional',
            'Metasploit Framework',
            'DVWA (Damn Vulnerable Web App)',
            'OWASP Juice Shop',
            'Nmap',
            'Wireshark',
            'SQLMap',
            'Hydra',
            'John the Ripper'
        ],
        attacks: [
            'SQL Injection',
            'Cross-Site Scripting (XSS)',
            'Authentication Bypass',
            'Insecure Direct Object Reference (IDOR)',
            'Command Injection',
            'CSRF Attacks',
            'Path Traversal',
            'Session Hijacking',
            'Privilege Escalation',
            'Password Cracking'
        ],
        nodes: [
            {
                id: 'kali',
                name: 'Kali Linux Attacker',
                type: 'attacker',
                description: 'Primary attack machine with full penetration testing toolkit',
            },
            {
                id: 'dvwa',
                name: 'DVWA Server',
                type: 'target',
                description: 'Damn Vulnerable Web Application for practicing web exploits',
                vulnerabilities: ['SQL Injection', 'XSS', 'Command Injection', 'File Upload', 'CSRF']
            },
            {
                id: 'juiceshop',
                name: 'OWASP Juice Shop',
                type: 'target',
                description: 'Modern vulnerable web application with 100+ challenges',
                vulnerabilities: ['Broken Access Control', 'Injection', 'Sensitive Data Exposure']
            },
            {
                id: 'ubuntu',
                name: 'Ubuntu Server',
                type: 'server',
                description: 'Linux server for privilege escalation and network pentesting',
                vulnerabilities: ['Misconfigured Services', 'Weak Permissions', 'Kernel Exploits']
            },
            {
                id: 'metasploit',
                name: 'Metasploit Framework',
                type: 'tool',
                description: 'Exploitation framework for vulnerability assessment',
            },
            {
                id: 'burp',
                name: 'Burp Suite',
                type: 'tool',
                description: 'Web application security testing platform',
            }
        ],
        status: 'ongoing'
    }
];

export const homelabProject = projects[0];

export default projects;
