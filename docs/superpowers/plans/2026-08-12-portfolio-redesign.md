# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the "Cyberneural Cosmos" portfolio as a lightweight, ssitaraman.com-inspired single-page site with an interactive ASCII-rain hero canvas, plain-CSS styling, and no animation/3D libraries.

**Architecture:** React 19 + Vite + TypeScript SPA. All content lives in one data file; 8 section components + 3 small components (Header, AsciiDivider, asciiRain); one hand-written CSS file. IntersectionObserver for scroll reveal. Existing `main.tsx`, `vite.config.ts`, eslint config, tsconfigs, and the `npm run dev/build/lint/deploy` scripts are kept.

**Tech Stack:** React 19, Vite 7, TypeScript 5.9, plain CSS, Canvas 2D API. Fonts: Instrument Serif + JetBrains Mono (Google Fonts).

## Global Constraints

- **Do NOT deploy.** User explicitly wants to test locally first. No `npm run deploy`, no `git push`, no Vercel interaction.
- Palette: bg `#0a0a0f`; indigo `#6366f1`, pink `#ec4899`, cyan `#06b6d4`, violet `#8b5cf6`, rose `#f43f5e`, amber `#ffaa00`. No green accent.
- Fonts: `Instrument Serif` (display), `JetBrains Mono` (UI/mono).
- Zero animation libraries, zero 3D, zero router, no Tailwind. Canvas + CSS + IntersectionObserver only.
- Content reuses existing copy (experience, projects, certifications, skills, contact links, bio).
- Every component file exports one default component (react-refresh lint rule).
- Working directory for all commands: `/home/kenshii/CODING/lekhrazz19.github.io`

---

### Task 1: Content data file

**Files:**
- Create: `src/data/content.ts`

**Interfaces:**
- Produces: named exports `profile`, `navLinks`, `heroBadges`, `aboutQuickFacts`, `experiences`, `projects`, `certifications`, `socials`, `skillCategories` — all plain data, no imports.

- [ ] **Step 1: Write `src/data/content.ts`**

```ts
export const profile = {
  name: 'Lekhraj Singh',
  firstName: 'Lekhraj',
  lastName: 'Singh',
  handle: 'lekhrazz19',
  role: 'AI Automation & Security Researcher',
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
  { label: 'Bugcrowd Researcher', href: 'https://bugcrowd.com/' },
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
    period: 'Oct 2025 – Present',
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
  { name: 'ISO 27001 Foundation', issuer: 'Information Security', color: '#4285F4', icon: '🔐', link: 'https://www.skillfront.com/Badges/07913698924389' },
  { name: 'Cybersecurity Fundamentals', issuer: 'IBM', color: '#054ADA', icon: '💻', link: null },
  { name: 'Ethical Hacker', issuer: 'Cisco', color: '#049FD9', icon: '🎯', link: 'https://www.credly.com/badges/b38976c5-d363-4986-847f-c357bcdb8ad2/linked_in_profile' },
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
```

- [ ] **Step 2: Verify it type-checks**

Run: `npx tsc --noEmit src/data/content.ts`
Expected: exit 0 (it is self-contained data; the project already compiles clean).

- [ ] **Step 3: Commit**

```bash
git add src/data/content.ts
git commit -m "feat: add centralized content data"
```

---

### Task 2: Global stylesheet

**Files:**
- Create (overwrite): `src/index.css`

**Interfaces:**
- Consumes: the class names referenced by components in Tasks 3-4 (`container`, `header`, `logo`, `nav-links`, `hero*`, `badge`, `scroll-indicator`, `section`, `section-title`, `prompt`, `fade-in`, `ascii-divider`, `about-*`, `fact`, `work-*`, `tag`, `company`, `role`, `project-*`, `period`, `tech*`, `view-link`, `cert-*`, `arrow`, `skills-*`, `coming-soon`, `pill`, `dot`, `contact-*`, `site-footer`).

- [ ] **Step 1: Write `src/index.css`**

```css
:root {
  --bg: #0a0a0f;
  --border: rgba(139, 92, 246, 0.16);
  --fg: #e8e8f2;
  --fg-dim: #9b9bb0;
  --fg-tertiary: #64647c;
  --indigo: #6366f1;
  --pink: #ec4899;
  --cyan: #06b6d4;
  --violet: #8b5cf6;
  --rose: #f43f5e;
  --amber: #ffaa00;
  --serif: 'Instrument Serif', Georgia, 'Times New Roman', serif;
  --mono: 'JetBrains Mono', 'Courier New', monospace;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: 72px; }

body {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--mono);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }

.container { max-width: 980px; margin: 0 auto; padding: 0 24px; }

/* Header */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 20px 0;
  background: linear-gradient(to bottom, rgba(10, 10, 15, 0.9), transparent);
}
.header-inner { display: flex; justify-content: space-between; align-items: center; }
.logo { font-family: var(--serif); font-size: 22px; }
.logo-sep { color: var(--fg-tertiary); margin: 0 4px; }
.logo-alias { color: var(--violet); }
.nav-links { display: flex; gap: 20px; font-size: 13px; color: var(--fg-dim); }
.nav-links a:hover { color: var(--indigo); }

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.hero canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  cursor: none;
}
.hero-content { position: relative; z-index: 1; padding-top: 80px; }
.hero-greeting { font-size: 15px; color: var(--fg-dim); margin-bottom: 12px; }
.hero-name {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(56px, 10vw, 108px);
  line-height: 0.95;
  letter-spacing: -0.02em;
}
.hero-name .accent { color: var(--violet); }
.hero-role { margin-top: 18px; font-size: 18px; color: var(--indigo); }
.hero-tagline { margin-top: 10px; font-family: var(--serif); font-style: italic; font-size: 20px; color: var(--fg-dim); }
.hero-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
.badge {
  font-size: 12px;
  color: var(--fg-dim);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 12px;
  transition: all 0.2s ease;
}
.badge:hover { color: var(--pink); border-color: var(--pink); }
.hero-score { margin-top: 24px; font-size: 13px; color: var(--fg-tertiary); }
.hero-score .score-hot { color: var(--pink); }
.scroll-indicator { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); z-index: 1; }
.scroll-line {
  display: block;
  width: 1px;
  height: 40px;
  background: var(--indigo);
  animation: scroll 1.6s ease-in-out infinite;
}
@keyframes scroll {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* Sections */
.section { padding: 88px 0; }
.section-title {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 40px;
}
.section-title .prompt { color: var(--violet); margin-right: 8px; }

.fade-in { opacity: 0; transform: translateY(16px); transition: opacity 0.7s ease, transform 0.7s ease; }
.fade-in.visible { opacity: 1; transform: none; }

/* ASCII divider */
.ascii-divider {
  text-align: center;
  font-size: 14px;
  color: var(--indigo);
  user-select: none;
}

/* About */
.about-content { display: grid; grid-template-columns: 280px 1fr; gap: 48px; align-items: start; }
.about-photo { position: sticky; top: 96px; }
.about-photo img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--border);
}
.about-text p { margin-bottom: 16px; color: var(--fg-dim); font-size: 15px; }
.about-text strong { color: var(--fg); }
.about-statement { font-family: var(--serif); font-size: 22px; font-style: italic; color: var(--fg); }
.about-facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}
.fact h4 {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--violet);
  margin-bottom: 6px;
}
.fact p { font-size: 14px; color: var(--fg); }

/* Experience */
.work-list { display: flex; flex-direction: column; gap: 40px; }
.work-item { border-left: 1px solid var(--border); padding-left: 24px; transition: border-color 0.2s ease; }
.work-item:hover { border-left-color: var(--indigo); }
.tag {
  display: inline-block;
  font-size: 11px;
  color: var(--fg-tertiary);
  border: 1px solid var(--border);
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 10px;
}
.company { font-family: var(--serif); font-size: 26px; font-weight: 400; }
.role { display: block; margin-top: 4px; font-size: 14px; color: var(--indigo); }
.work-item ul { list-style: none; margin-top: 12px; }
.work-item li { color: var(--fg-dim); font-size: 14px; padding-left: 14px; position: relative; margin-bottom: 6px; }
.work-item li::before { content: '-'; position: absolute; left: 0; color: var(--violet); }

/* Projects */
.project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.project-card {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.25s ease, transform 0.25s ease;
}
.project-card:hover { border-color: var(--indigo); transform: translateY(-4px); }
.project-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
.project-head h3 { font-family: var(--serif); font-size: 22px; font-weight: 400; }
.period { font-size: 11px; color: var(--fg-tertiary); white-space: nowrap; }
.project-card p { font-size: 14px; color: var(--fg-dim); flex: 1; }
.tech { display: flex; flex-wrap: wrap; gap: 8px; }
.tech-tag { font-size: 11px; color: var(--fg-dim); border: 1px solid var(--border); padding: 3px 9px; border-radius: 999px; }
.view-link { font-size: 13px; color: var(--indigo); width: fit-content; }
.view-link:hover { color: var(--pink); }

/* Certifications */
.cert-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.cert-item {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.25s ease, transform 0.25s ease;
}
.cert-item:hover { border-color: var(--indigo); transform: translateY(-3px); }
.cert-badge { font-size: 28px; }
.cert-info h3 { font-size: 15px; }
.cert-info p { font-size: 12px; color: var(--fg-tertiary); margin-top: 2px; }
.arrow { margin-left: auto; color: var(--fg-tertiary); }
.cert-item:hover .arrow { color: var(--pink); }

/* Skills */
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.skill-card { border: 1px solid var(--border); border-radius: 12px; padding: 22px; }
.skill-card h3 { font-size: 13px; color: var(--indigo); margin-bottom: 14px; }
.skill-card ul { list-style: none; }
.skill-card li { font-size: 13px; color: var(--fg-dim); padding-left: 14px; position: relative; margin-bottom: 7px; }
.skill-card li::before { content: '•'; position: absolute; left: 0; color: var(--violet); }

/* Articles (coming soon) */
.coming-soon { text-align: center; border: 1px dashed var(--border); border-radius: 12px; padding: 64px 24px; }
.coming-soon h3 { font-family: var(--serif); font-size: 26px; font-weight: 400; margin-bottom: 10px; }
.coming-soon p { color: var(--fg-dim); font-size: 14px; margin-bottom: 22px; }
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--indigo);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 14px;
}
.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--indigo); animation: blink 1.4s ease-in-out infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }

/* Contact */
.contact-section { padding: 120px 0 40px; }
.contact-heading { font-family: var(--serif); font-size: clamp(40px, 7vw, 72px); font-weight: 400; margin-bottom: 12px; }
.email-link { font-size: 18px; color: var(--indigo); }
.email-link:hover { color: var(--pink); }
.social-links { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 28px; font-size: 14px; color: var(--fg-dim); }
.social-links a:hover { color: var(--violet); }
.site-footer {
  margin-top: 100px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--fg-tertiary);
  font-size: 12px;
}
.footer-note span { color: var(--violet); }

/* Responsive */
@media (max-width: 768px) {
  .about-content { grid-template-columns: 1fr; }
  .about-photo { position: static; max-width: 280px; }
  .project-grid, .cert-grid, .skills-grid { grid-template-columns: 1fr; }
  .nav-links { gap: 12px; font-size: 12px; }
  .section { padding: 64px 0; }
}
```

- [ ] **Step 2: Verify CSS parses**

Run: `npx vite build` — this will still succeed because the old components still exist and deps are installed; confirm no CSS errors in output.
Expected: build succeeds, no `[plugin:vite:css]` errors.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: replace stylesheet with plain-CSS design system"
```

---

### Task 3: Core components (Header, AsciiDivider, asciiRain)

**Files:**
- Create (overwrite): `src/components/Header.tsx`
- Create: `src/components/AsciiDivider.tsx`
- Create: `src/components/asciiRain.tsx`

**Interfaces:**
- Consumes: `navLinks`, `profile` from `../data/content`.
- Produces: default-exported components:
  - `<Header />`
  - `<AsciiDivider />` (renders `div.ascii-divider`)
  - `<AsciiRain onScore?: (n: number) => void />` (renders `canvas.hero-canvas`)

- [ ] **Step 1: Write `src/components/Header.tsx`**

```tsx
import { navLinks, profile } from '../data/content';

const Header = () => (
  <header className="header">
    <div className="container header-inner">
      <a className="logo" href="#top">
        {profile.firstName}
        <span className="logo-sep">/</span>
        <span className="logo-alias">.404</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
```

- [ ] **Step 2: Write `src/components/AsciiDivider.tsx`**

```tsx
import { useEffect, useRef } from 'react';

const CHARS = '─━┄┈·.·┈┄━─';
const SEGMENTS = 30;

const AsciiDivider = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const chars = new Array(SEGMENTS).fill('·');
    const id = setInterval(() => {
      frame++;
      for (let i = 0; i < SEGMENTS; i++) {
        const idx = Math.floor(((Math.sin(i / 3 + frame / 8) + 1) / 2) * (CHARS.length - 1));
        chars[i] = CHARS[idx];
      }
      el.textContent = chars.join('');
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="ascii-divider" ref={ref} aria-hidden="true">
      {'·'.repeat(SEGMENTS)}
    </div>
  );
};

export default AsciiDivider;
```

- [ ] **Step 3: Write `src/components/asciiRain.tsx`**

```tsx
import { useEffect, useRef } from 'react';

const GLYPHS = '░▒▓█▓▒░#@%&*=+:;!.,/|\\-_~^';
const POOL = ['0x4141', '$((RCE))', '>>><<<', '#!/bin/bash', '%%!!::', '|||///'];
const COMMANDS = ['>_', './', '$$', '#!', '>>', '0x', '&&', ';;'];
const RAIN_COLORS = ['#6366f1', '#8b5cf6', '#ec4899'];
const ENEMY_TYPES = [
  { ch: '◈', color: '#ec4899', hp: 1, speed: 0.9, size: 26 },
  { ch: '⬢', color: '#f43f5e', hp: 3, speed: 0.5, size: 34 },
  { ch: '◇', color: '#06b6d4', hp: 1, speed: 1.2, size: 22 },
  { ch: '◌', color: '#8b5cf6', hp: 2, speed: 0.7, size: 28 },
];

interface Drop { x: number; y: number; v: number; ch: string; color: string }
interface Enemy { x: number; y: number; kind: number; hp: number; seed: number }

const AsciiRain = ({ onScore }: { onScore?: (n: number) => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mobile = () => window.innerWidth < 640;
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    let w = 0;
    let h = 0;
    let raf = 0;
    let last = performance.now();
    let lastSpawn = 0;
    const drops: Drop[] = [];
    const enemies: Enemy[] = [];
    const trail: { x: number; y: number }[] = [];
    const mouse = { x: -999, y: -999, down: false };

    function makeDrop(): Drop {
      return {
        x: rand(0, w),
        y: rand(-h, 0),
        v: rand(60, 160),
        ch: Math.random() < 0.85
          ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          : POOL[Math.floor(Math.random() * POOL.length)],
        color: RAIN_COLORS[Math.floor(Math.random() * RAIN_COLORS.length)],
      };
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops.length = 0;
      const count = Math.max(20, Math.floor((w * h) / 16000));
      for (let i = 0; i < count; i++) drops.push(makeDrop());
    }

    function spawn() {
      if (enemies.length > 30) return;
      const kind = Math.floor(Math.random() * ENEMY_TYPES.length);
      const fromTop = Math.random() < 0.5;
      enemies.push({
        x: rand(-40, w + 40),
        y: fromTop ? -40 : h + 40,
        kind,
        hp: ENEMY_TYPES[kind].hp,
        seed: Math.random() * 1000,
      });
    }

    const font = (px: number) => `${px}px "JetBrains Mono", monospace`;

    function step(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, w, h);

      ctx.font = font(16);
      ctx.globalAlpha = 0.45;
      for (const d of drops) {
        d.y += d.v * dt;
        if (d.y > h + 20) Object.assign(d, makeDrop());
        ctx.fillStyle = d.color;
        ctx.fillText(d.ch, d.x, d.y);
      }
      ctx.globalAlpha = 1;

      if (now - lastSpawn > (mobile() ? 1400 : 900)) {
        lastSpawn = now;
        spawn();
      }

      trail.push({ x: mouse.x, y: mouse.y });
      if (trail.length > 12) trail.shift();
      if (trail.length > 1) {
        ctx.strokeStyle = '#6366f1';
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = 2;
        ctx.beginPath();
        trail.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      if (mouse.down) {
        ctx.font = `bold 14px "JetBrains Mono", monospace`;
        ctx.fillStyle = '#ffaa00';
        const off = 14 + Math.random() * 18;
        ctx.fillText(COMMANDS[Math.floor(Math.random() * COMMANDS.length)], mouse.x + off, mouse.y + off);
      }

      for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        const t = ENEMY_TYPES[e.kind];
        const dx = mouse.x - e.x;
        const dy = mouse.y - e.y;
        const dist = Math.hypot(dx, dy) || 1;
        const sp = t.speed * 45 * dt;
        e.x += (dx / dist) * sp + Math.sin(now / 500 + e.seed) * 0.4;
        e.y += (dy / dist) * sp + Math.cos(now / 700 + e.seed) * 0.4;

        if (mouse.down && dist < t.size / 2 + 10) {
          e.hp--;
          if (e.hp <= 0) {
            scoreRef.current += 10 + e.kind * 10;
            onScore?.(scoreRef.current);
            enemies.splice(i, 1);
          }
        }

        ctx.fillStyle = t.color;
        ctx.font = font(t.size);
        ctx.fillText(t.ch, e.x, e.y);
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onDown() {
      mouse.down = true;
    }
    function onUp() {
      mouse.down = false;
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (t) {
        mouse.x = t.clientX;
        mouse.y = t.clientY;
      }
    }
    function onTouchStart() {
      mouse.down = true;
    }
    function onTouchEnd() {
      mouse.down = false;
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', resize);

    resize();
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', resize);
    };
  }, [onScore]);

  return <canvas ref={canvasRef} aria-hidden="true" />;
};

export default AsciiRain;
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.tsx src/components/AsciiDivider.tsx src/components/asciiRain.tsx
git commit -m "feat: add header, ascii divider, and hero rain canvas"
```

---

### Task 4: Section components

**Files:**
- Create (overwrite): `src/sections/Hero.tsx`, `src/sections/About.tsx`, `src/sections/Experience.tsx`, `src/sections/Projects.tsx`, `src/sections/Certifications.tsx`, `src/sections/Skills.tsx`, `src/sections/Contact.tsx`
- Create: `src/sections/Articles.tsx`

**Interfaces:**
- Consumes: `content.ts` exports and `AsciiRain` component.
- Produces: default-exported section components rendered by `App.tsx` in Task 5. Section `id` anchors: `top`, `about`, `experience`, `projects`, `certifications`, `skills`, `articles`, `contact`.

- [ ] **Step 1: Write `src/sections/Hero.tsx`**

```tsx
import { useState } from 'react';
import AsciiRain from '../components/asciiRain';
import { heroBadges, profile } from '../data/content';

const Hero = () => {
  const [score, setScore] = useState(0);

  return (
    <section id="top" className="hero">
      <AsciiRain onScore={setScore} />
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">
          {profile.firstName} <span className="accent">{profile.lastName}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-badges">
          {heroBadges.map((badge) => (
            <a key={badge.label} className="badge" href={badge.href} target="_blank" rel="noreferrer">
              {badge.label} →
            </a>
          ))}
        </div>
        <p className="hero-score">
          PWN <span className={score > 0 ? 'score-hot' : ''}>{score}</span>
        </p>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Write `src/sections/About.tsx`**

```tsx
import { aboutQuickFacts } from '../data/content';

const About = () => (
  <section id="about" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> whoami
    </h2>
    <div className="about-content fade-in">
      <div className="about-photo">
        <img src="/profile.jpg" alt="Lekhraj Singh" loading="lazy" />
      </div>
      <div className="about-text">
        <p className="about-statement">
          "Automating workflows. Hardening environments. Engineering secure systems."
        </p>
        <p>
          Hi, I'm <strong>Lekhraj Singh</strong>, a B.Tech Computer Engineering
          student specializing in IoT, Cybersecurity, and Blockchain at Shri
          Shankaracharya Technical Campus.
        </p>
        <p>
          I bridge the gap between autonomous efficiency and security. My work
          focuses on designing AI-powered workflow automation solutions alongside
          performing penetration testing and detection engineering.
        </p>
        <p>
          With hands-on experience scripting custom reconnaissance tools,
          containerizing vulnerability labs, and writing detection rules mapped
          to MITRE ATT&CK, I focus on building defensive systems that resist
          modern attack vectors.
        </p>
        <div className="about-facts">
          {aboutQuickFacts.map((fact) => (
            <div key={fact.label} className="fact">
              <h4>{fact.label}</h4>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
```

- [ ] **Step 3: Write `src/sections/Experience.tsx`**

```tsx
import { experiences } from '../data/content';

const Experience = () => (
  <section id="experience" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> work --history
    </h2>
    <div className="work-list fade-in">
      {experiences.map((exp) => (
        <div key={exp.company} className="work-item">
          <span className="tag">{exp.period}</span>
          <h3 className="company">{exp.company}</h3>
          <span className="role">{exp.role}</span>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
```

- [ ] **Step 4: Write `src/sections/Projects.tsx`**

```tsx
import { projects } from '../data/content';

const Projects = () => (
  <section id="projects" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> projects --featured
    </h2>
    <div className="project-grid fade-in">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <div className="project-head">
            <h3>{project.title}</h3>
            <span className="period">{project.period}</span>
          </div>
          <p>{project.description}</p>
          <div className="tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <a className="view-link" href={project.github} target="_blank" rel="noreferrer">
            view →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
```

- [ ] **Step 5: Write `src/sections/Certifications.tsx`**

```tsx
import { certifications } from '../data/content';

const Certifications = () => (
  <section id="certifications" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> certifications --verify
    </h2>
    <div className="cert-grid fade-in">
      {certifications.map((cert) => {
        const inner = (
          <>
            <span className="cert-badge">{cert.icon}</span>
            <div className="cert-info">
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>
            {cert.link && <span className="arrow">→</span>}
          </>
        );
        return cert.link ? (
          <a key={cert.name} className="cert-item" href={cert.link} target="_blank" rel="noreferrer">
            {inner}
          </a>
        ) : (
          <div key={cert.name} className="cert-item">
            {inner}
          </div>
        );
      })}
    </div>
  </section>
);

export default Certifications;
```

- [ ] **Step 6: Write `src/sections/Skills.tsx`**

```tsx
import { skillCategories } from '../data/content';

const Skills = () => (
  <section id="skills" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> skills --list
    </h2>
    <div className="skills-grid fade-in">
      {skillCategories.map((category) => (
        <div key={category.title} className="skill-card">
          <h3>▶ {category.title}</h3>
          <ul>
            {category.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
```

- [ ] **Step 7: Write `src/sections/Articles.tsx`**

```tsx
const Articles = () => (
  <section id="articles" className="container section">
    <h2 className="section-title fade-in">
      <span className="prompt">$</span> articles --read
    </h2>
    <div className="coming-soon fade-in">
      <h3>Coming Soon</h3>
      <p>Security research, technical breakdowns, and field notes are on the way.</p>
      <span className="pill">
        <span className="dot" />
        stay_tuned.sh
      </span>
    </div>
  </section>
);

export default Articles;
```

- [ ] **Step 8: Write `src/sections/Contact.tsx`**

```tsx
import { profile, socials } from '../data/content';

const Contact = () => (
  <section id="contact" className="contact-section section">
    <div className="container">
      <h2 className="contact-heading fade-in">Let's talk.</h2>
      <a className="email-link fade-in" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="social-links fade-in">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
        <p className="footer-note">
          Protected by <span>127.0.0.1</span> and a hope.
        </p>
      </footer>
    </div>
  </section>
);

export default Contact;
```

- [ ] **Step 9: Commit**

```bash
git add src/sections/
git commit -m "feat: add all section components"
```

---

### Task 5: Compose app and update index.html

**Files:**
- Create (overwrite): `src/App.tsx`
- Create (overwrite): `index.html`

**Interfaces:**
- Consumes: all section components + `AsciiDivider` from Tasks 3-4.

- [ ] **Step 1: Write `src/App.tsx`**

```tsx
import { useEffect } from 'react';
import Header from './components/Header';
import AsciiDivider from './components/AsciiDivider';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Skills from './sections/Skills';
import Articles from './sections/Articles';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AsciiDivider />
        <About />
        <AsciiDivider />
        <Experience />
        <AsciiDivider />
        <Projects />
        <AsciiDivider />
        <Certifications />
        <AsciiDivider />
        <Skills />
        <AsciiDivider />
        <Articles />
        <AsciiDivider />
        <Contact />
      </main>
    </>
  );
}

export default App;
```

- [ ] **Step 2: Write `index.html`**

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lekhraj Singh — AI Automation & Security Researcher</title>
  <meta name="description" content="Lekhraj Singh (lekhrazz19) — AI Automation & Security Researcher. Bugcrowd researcher, penetration testing, detection engineering, and B.Tech Computer Engineering." />
  <meta name="theme-color" content="#0a0a0f" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ctext y='14' font-size='13' fill='%236366f1'%3E◈%3C/text%3E%3C/svg%3E" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

- [ ] **Step 3: Verify the whole app builds**

Run: `npm run build`
Expected: `tsc -b` passes and Vite emits `dist/`. (Old components still present and still compile — they are simply unused now.)

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx index.html
git commit -m "feat: compose new app shell"
```

---

### Task 6: Remove obsolete code, configs, and dependencies

**Files:**
- Delete: `src/App.css`, `src/assets/react.svg` (and `src/assets/`), `src/data/cosmosData.ts`, `src/sections/ScrollDrawing.tsx`, `src/types/scrollmagic.d.ts`, `public/vite.svg`
- Delete directories: `src/components/Cosmos/`, `src/components/Nature/`, `src/components/Overlay/`, `src/systems/`
- Delete: `src/components/EcosystemCanvas.tsx`, `src/components/GlassCard.tsx`, `src/components/HackerText.tsx`, `src/components/InteractiveClickEffect.tsx`, `src/components/InteractiveTerminal.tsx`, `src/components/StatusTicker.tsx`, `src/components/TechStackMarquee.tsx`, `src/components/ThreeJSBackground.tsx`
- Delete: `tailwind.config.js`, `postcss.config.cjs`, `postcss.config.js`
- Modify: `package.json` (remove heavy dependencies)

**Interfaces:**
- Consumes: nothing from deleted files (verified — no new file imports them).
- Produces: a project whose only source files are the ones from Tasks 1-5 plus `src/main.tsx`.

- [ ] **Step 1: Delete obsolete source files and directories**

```bash
rm -rf src/App.css src/assets src/data/cosmosData.ts src/sections/ScrollDrawing.tsx \
  src/types/scrollmagic.d.ts public/vite.svg \
  src/components/Cosmos src/components/Nature src/components/Overlay src/systems \
  src/components/EcosystemCanvas.tsx src/components/GlassCard.tsx src/components/HackerText.tsx \
  src/components/InteractiveClickEffect.tsx src/components/InteractiveTerminal.tsx \
  src/components/StatusTicker.tsx src/components/TechStackMarquee.tsx src/components/ThreeJSBackground.tsx
```

- [ ] **Step 2: Delete Tailwind/PostCSS configs**

```bash
rm -f tailwind.config.js postcss.config.cjs postcss.config.js
```

- [ ] **Step 3: Rewrite `package.json`**

```json
{
  "name": "lekhrazz19.github.io",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "gh-pages": "^6.3.0",
    "globals": "^16.5.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^7.2.4"
  }
}
```

- [ ] **Step 4: Reinstall dependencies**

Run: `npm install`
Expected: installs only react/react-dom + the listed devDeps; removes three/gsap/framer-motion/etc.

- [ ] **Step 5: Verify nothing references removed packages**

Run: `rg -i "three|gsap|scrollmagic|framer-motion|tailwind|aos|maath|postprocessing" src package.json index.html`
Expected: no matches.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor: remove 3D/animation stack and heavy dependencies"
```

---

### Task 7: Build, lint, and fix

**Files:** none (fixes only if needed).

- [ ] **Step 1: Build**

Run: `npm run build`
Expected: `tsc -b` passes, Vite emits `dist/`. If TypeScript errors appear (e.g. unused imports, strict issues in the canvas), fix them in the offending file, then re-run.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors. If the react-refresh rule flags a file (non-component export), fix the export shape, then re-run.

- [ ] **Step 3: Manual visual check**

Run: `npm run dev` and open the printed local URL (or run `npm run preview`).
Check each item:
- Hero: rain falls, enemies chase cursor, hold-click kills them, `PWN` counter increments and turns pink, cursor is hidden over the canvas, scroll indicator animates.
- All 8 sections render with correct content; ASCII dividers animate; fade-ins trigger on scroll.
- Resize window to <640px: fewer rain drops, layout collapses to single column.
- The About photo (`/profile.jpg`) loads.
- Nav links jump to the right sections.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: build and lint cleanup"
```

**STOP here — do not deploy, do not push. Wait for the user to review and explicitly authorize going live.**
