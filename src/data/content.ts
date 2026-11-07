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
    company: 'Bugcrowd',
    role: 'Security Researcher',
    period: 'Jun 2025 – Present',
    points: [
      'Conducted manual web application penetration testing across 4 bug bounty programs using Burp Suite and web security tools.',
      'Identified and submitted 3 valid security vulnerabilities with remediation recommendations under responsible disclosure.',
    ],
  },
  {
    company: 'Bharat AI Vyapari',
    role: 'AI Automation Intern',
    period: 'Apr 2026 – Jun 2026',
    points: [
      'Designed and implemented AI-powered workflow automations across 10+ business processes, reducing manual effort by 60–70%.',
      'Developed prompt engineering strategies and evaluated AI tools across 5 use cases to improve automation quality and reliability.',
      'Tested automation workflows, identified bottlenecks, and optimized solutions for scalable business operations.',
    ],
  },
  {
    company: 'Cryptonic Area',
    role: 'Cyber Security Intern (Remote)',
    period: 'Feb 2026 – Mar 2026',
    points: [
      'Developed SOC-style security tooling and automated reconnaissance workflows using Python and offensive security techniques.',
      'Performed OWASP Top 10 vulnerability assessments against DVWA and OWASP Juice Shop, documenting 2–3 findings with remediation recommendations.',
    ],
  },
];

export const projects = [
  {
    title: 'N8N CVE Reports',
    period: '2026',
    description: 'Built a fully functional automated vulnerability intelligence pipeline retrieving CVEs from the NVD API and categorizing them by CVSS severity. Integrated OpenRouter LLMs for vulnerability impact analysis and mitigation recommendations, with automated daily Markdown report generation and GitHub archival.',
    technologies: ['n8n', 'NVD API', 'OpenRouter LLMs', 'GitHub'],
    github: 'https://github.com/lekhrazz19/N8N-CVE-REPORTS',
  },
  {
    title: 'Vulnerability Research & Reporting System (VRRS)',
    period: '2026',
    description: 'Built Docker-based vulnerability labs using DVWA and OWASP Juice Shop; developed Python scanners, fuzzers, and CVSS-oriented vulnerability reporting templates.',
    technologies: ['Docker', 'Python', 'DVWA', 'OWASP Juice Shop', 'CVSS'],
    github: 'https://github.com/lekhrazz19/Vulnerability-Research-Reporting-System',
  },
  {
    title: 'SOC-in-a-Box — Security Monitoring Lab',
    period: '2026',
    description: 'Simulated enterprise SOC pipelines for log ingestion, threat detection, and incident response; authored Sigma rules, Splunk SPL queries, and Elastic detections mapped to MITRE ATT&CK.',
    technologies: ['Splunk', 'Elastic', 'Sigma', 'MITRE ATT&CK'],
    github: 'https://github.com/lekhrazz19/Security-Monitoring-Incident-Response-Project',
  },
  {
    title: 'Cybersecurity Homelab — Attack & Defense Lab',
    period: '2024',
    description: 'Built a Kali Linux vs Ubuntu Server lab using Docker, DVWA, and OWASP Juice Shop; performed penetration testing using Burp Suite, Nmap, and Metasploit.',
    technologies: ['Kali Linux', 'Docker', 'Burp Suite', 'Nmap', 'Metasploit'],
    github: 'https://github.com/lekhrazz19/Homelab',
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
  { title: 'AI Automation', skills: ['Workflow Automation', 'Prompt Engineering', 'AI Agents', 'Business Process Automation'] },
  { title: 'Cybersecurity', skills: ['OWASP Top 10', 'Vulnerability Assessment', 'Web Penetration Testing', 'Reconnaissance', 'CVSS Scoring', 'Responsible Disclosure'] },
  { title: 'Security Operations', skills: ['Splunk', 'Elastic Stack', 'Sigma Rules', 'MITRE ATT&CK', 'Incident Response', 'Threat Detection'] },
  { title: 'Security Tools', skills: ['Burp Suite', 'Nmap', 'Metasploit', 'OWASP ZAP', 'Gobuster', 'Nikto'] },
  { title: 'Platforms & Technologies', skills: ['Docker', 'Kali Linux', 'Ubuntu Server', 'DVWA', 'OWASP Juice Shop', 'NVD API', 'OpenRouter'] },
  { title: 'Programming', skills: ['Python', 'Flask', 'C', 'C++', 'HTML', 'CSS'] },
];
