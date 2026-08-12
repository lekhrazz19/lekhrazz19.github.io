export const profile = {
  name: 'Lekhraj Singh',
  firstName: 'Lekhraj',
  lastName: 'Singh',
  handle: 'lekhrazz19',
  role: 'AI Automation & Cybersecurity Enthusiast',
  tagline: 'Protecting your data from becoming Public Property.',
  email: 'singhlekhraj497@gmail.com',
};

export const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'certs', href: '#certifications' },
  { label: 'contact', href: '#contact' },
];

export const heroBadges = [
  { label: 'ISO 27001 Foundation', href: 'https://www.skillfront.com/Badges/07913698924389' },
  { label: 'Certified Ethical Hacker', href: 'https://www.credly.com/badges/b38976c5-d363-4986-847f-c357bcdb8ad2/linked_in_profile' },
];

export const aboutQuickFacts = [
  { label: 'Current Focus', value: 'AI Automation & AppSec' },
  { label: 'Education', value: 'B.Tech Computer Engineering' },
  { label: 'Primary Toolkit', value: 'Python, Docker, Splunk, Elastic' },
  { label: 'Specialization', value: 'IoT, Cyber & Blockchain' },
];

export const experiences = [
  {
    company: 'Bharat AI Vyapari',
    role: 'AI Automation Intern',
    period: 'Apr 2026 – Jun 2026',
    points: [
      'Designed AI-powered workflow automation solutions for business process optimization across multiple operational use cases.',
      'Developed prompt engineering strategies and evaluated AI tools to improve automation quality and workflow efficiency.',
      'Conducted automation system testing, identified workflow bottlenecks, and contributed to scalable AI-driven business automation initiatives.',
    ],
  },
  {
    company: 'Cryptonic Area',
    role: 'Cyber Security Intern',
    period: 'Feb 2026 – Mar 2026',
    points: [
      'Developed SOC-style security tooling and automated reconnaissance workflows using Python and offensive security techniques.',
      'Performed vulnerability assessments against intentionally vulnerable applications aligned with OWASP Top 10 methodologies.',
    ],
  },
  {
    company: 'Bugcrowd',
    role: 'Security Researcher',
    period: 'Jun 2025 – Present',
    points: [
      'Conducted manual web application penetration testing across bug bounty programs.',
      'Reported security vulnerabilities with remediation recommendations following responsible disclosure practices.',
    ],
  },
  {
    company: 'HackerHub8 Company LLP',
    role: 'Cybersecurity Volunteer',
    period: 'Oct 2025 – Jun 2026',
    points: [
      'Supported vulnerability analysis, security awareness initiatives, and cybersecurity community activities.',
    ],
  },
];

export const projects = [
  {
    title: 'Vulnerability Research & Reporting System (VRRS)',
    period: '2026',
    description: 'End-to-end framework to formalize the vulnerability research lifecycle. Custom Python automation tools and Docker-containerized labs to ethically discover and report vulnerabilities using CVSS-aligned documentation.',
    technologies: ['Python', 'Docker', 'CVSS', 'Custom Tooling'],
    github: 'https://github.com/lekhrazz19/Vulnerability-Research-Reporting-System',
  },
  {
    title: 'SOC-in-a-Box — Security Monitoring Lab',
    period: '2026',
    description: 'Practical Security Operations Center simulation combining log collection, detection engineering, and incident response playbooks mapped to MITRE ATT&CK.',
    technologies: ['Elastic', 'Splunk SPL', 'Sigma', 'Python'],
    github: 'https://github.com/lekhrazz19/Security-Monitoring-Incident-Response-Project',
  },
  {
    title: 'SecureTodo — Secure Flask Application',
    period: '2026',
    description: 'Secure Python/Flask web application built to defend against the OWASP Top 10. Secure auth, PBKDF2 hashing, SQLi and XSS protections, hardened security headers.',
    technologies: ['Python', 'Flask', 'SQLite', 'AppSec'],
    github: 'https://github.com/lekhrazz19/Secure-ToDo-App',
  },
  {
    title: 'Cybersecurity Homelab — Attack & Defense Lab',
    period: '2024',
    description: 'Self-hosted virtualized penetration testing environment simulating real-world attack scenarios. Sandbox for vulnerable apps and safe malware analysis.',
    technologies: ['Docker', 'Kali Linux', 'DVWA', 'Burp Suite', 'Nmap', 'Metasploit'],
    github: 'https://github.com/lekhrazz19/homelab',
  },
];

export const certifications = [
  { name: 'ISO 27001 Foundation', issuer: 'Information Security', link: 'https://www.skillfront.com/Badges/07913698924389' },
  { name: 'Cybersecurity Fundamentals', issuer: 'IBM', link: null },
  { name: 'Ethical Hacker', issuer: 'Cisco', link: 'https://www.credly.com/badges/b38976c5-d363-4986-847f-c357bcdb8ad2/linked_in_profile' },
];

export const socials = [
  { label: 'linkedin', href: 'https://linkedin.com/in/lekhrazz19' },
  { label: 'github', href: 'https://github.com/lekhrazz19' },
  { label: 'x / twitter', href: 'https://x.com/lekhii404' },
  { label: 'discord', href: 'https://discord.com/users/_kenshi_19' },
  { label: 'email', href: 'mailto:singhlekhraj497@gmail.com' },
];

export const skillCategories = [
  { title: 'AI Automation', skills: ['Workflow Automation', 'Prompt Engineering', 'Business Process Automation', 'AI Agents', 'AI Tool Research'] },
  { title: 'Cybersecurity', skills: ['OWASP Top 10', 'Vulnerability Assessment', 'Web Penetration Testing', 'Threat Detection'] },
  { title: 'Security Operations', skills: ['SIEM', 'Splunk', 'Elastic Stack', 'Sigma Rules', 'MITRE ATT&CK', 'Incident Response'] },
  { title: 'Security Tools', skills: ['Burp Suite', 'Nmap', 'Metasploit', 'OWASP ZAP', 'Gobuster', 'Nikto'] },
  { title: 'Platforms', skills: ['Docker', 'Kali Linux', 'Ubuntu Server', 'DVWA', 'OWASP Juice Shop'] },
  { title: 'Programming', skills: ['Python', 'Flask', 'C', 'C++', 'HTML', 'CSS'] },
];
