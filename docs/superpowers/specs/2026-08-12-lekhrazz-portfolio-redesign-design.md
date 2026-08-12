# Lekhrazz Portfolio Redesign — Design Spec

**Date:** 2026-08-12
**Inspired by:** https://ssitaraman.com (Sitaraman Subramanian's portfolio)
**Current site:** https://lekhii404.vercel.app

## Goal

Rebuild the "Cyberneural Cosmos" portfolio (currently a heavy React-Three-Fiber
production with 3D cosmos, nature systems, GSAP, ScrollMagic, framer-motion, AOS)
as a lightweight, ssitaraman-style single-page site. Keep the user's own content
and deploy setup. The "wow" is one interactive canvas + clean CSS, not a stack of
animation libraries.

## Decisions (user-approved)

- **Build approach:** Rebuild clean in-place in the existing repo
  `/home/kenshii/CODING/lekhrazz19.github.io`. Same deploy flow.
- **Aesthetic:** Hybrid — ssitaraman's minimal layout, ASCII-rain hero game in the
  user's chosen palette. Rich/tech colors only (no green-black "ordinary hacker").
- **3D element:** ASCII rain hero canvas minigame (not Three.js).
- **Sections:** Hero, About, Experience, Projects, Certifications, Skills,
  Articles (coming-soon), Contact.
- **Styling:** Plain hand-written CSS. No Tailwind, no animation libraries.

## Architecture

### Stack
- React 19 + Vite + TypeScript (kept)
- One plain CSS file (`src/index.css`), no Tailwind/postcss/autoprefixer
- Zero animation libraries (no gsap, framer-motion, scrollmagic, aos, three,
  @react-three/*)
- No router — single page, anchor navigation
- Deploy: Vercel (static Vite build) + `npm run deploy` for GitHub Pages — unchanged

### File layout
```
index.html                    # fonts (Instrument Serif + JetBrains Mono), meta, favicon
src/main.tsx                  # keep (unchanged)
src/App.tsx                   # composes sections + IntersectionObserver fade-in
src/index.css                 # all styles (~300 lines)
src/data/content.ts           # all text content in one place
src/components/asciiRain.tsx  # hero canvas game
src/components/AsciiDivider.tsx
src/sections/Hero.tsx
src/sections/About.tsx
src/sections/Experience.tsx
src/sections/Projects.tsx
src/sections/Certifications.tsx
src/sections/Skills.tsx
src/sections/Articles.tsx
src/sections/Contact.tsx
```

All other files under `src/` (Cosmos, Nature, Overlay, systems, unused components)
are deleted. `public/profile.jpg` and `public/resume.pdf` are kept.

### Dependencies after cleanup
- `dependencies`: react, react-dom
- `devDependencies` (unchanged): @vitejs/plugin-react, typescript,
  typescript-eslint, eslint, eslint-plugin-react-hooks,
  eslint-plugin-react-refresh, globals, @eslint/js, @types/react,
  @types/react-dom, @types/node, vite, gh-pages
- Remove from `dependencies`: three, @types/three, @react-three/fiber,
  @react-three/drei, @react-three/postprocessing, postprocessing, maath, gsap,
  scrollmagic, aos, framer-motion, react-router-dom
- Remove from `devDependencies`: tailwindcss, @tailwindcss/postcss, postcss,
  autoprefixer
- Delete config files: tailwind.config.js, postcss.config.cjs, postcss.config.js
- Keep: vite.config.ts (no base path — correct for username.github.io Pages),
  eslint.config.js, tsconfig files

## Visual Design

### Palette (rich/tech)
- Background: `#0a0a0f`
- Primary accent: indigo `#6366f1`
- Accents: pink `#ec4899`, cyan `#06b6d4`, violet `#8b5cf6`, rose `#f43f5e`
- Text: white / slate grays on dark
- ASCII rain cycles indigo → violet → pink

### Typography
- Display (name, section pull-quotes): **Instrument Serif** (Google Fonts)
- UI/accents/labels: **JetBrains Mono** (uppercase letter-spaced labels)

### Effects (CSS + one canvas only)
1. **ASCII rain hero canvas** — glyphs fall on a grid, enemy glyphs chase the
   cursor, hold-click fires terminal-command "bullets" (`>_ ./ $$ #! >> 0x`),
   kills add to a `PWN {n}` counter, cursor is a block `█`. Respects
   `prefers-reduced-motion`. Mobile-friendly (fewer particles below 640px).
2. **ASCII wave dividers** between sections — `─━┄┈·.·┈┄━─`, animated.
3. **Fade-in on scroll** via IntersectionObserver (threshold ~0.1).
4. `→` arrow motifs, mono uppercase section labels, serif statements.

## Page Structure & Content

### Nav
Logo `Lekhraj / singh` · links: `about · work · projects · skills · certs · contact`

### Hero
- `Hi, I'm` / **Lekhraj Singh** (serif)
- Role: `AI Automation & Security Researcher`
- Tagline: *"Protecting your data from becoming Public Property."*
- Badges: `Bugcrowd Researcher →` · `ISO 27001 Foundation →` · `Certified Ethical Hacker →`
- `PWN {n}` score readout + `scroll` indicator

### About
- Photo `/profile.jpg` + bio: B.Tech Computer Engineering (IoT, Cybersecurity,
  Blockchain) at Shri Shankaracharya Technical Campus; bridges AI workflow
  automation with penetration testing and detection engineering.
- Quick facts: Current Focus (AI Automation & AppSec), Education, Primary Toolkit
  (Python, Docker, Splunk, Elastic), Specialization (IoT, Cyber & Blockchain).

### Experience (`work --history`)
4 entries (company / role / period / bullets), from existing Experience.tsx:
Bharat AI Vyapari · Cryptonic Area · Bugcrowd · HackerHub8.

### Projects (`projects --featured`)
4 cards from existing Projects.tsx: VRRS, SOC-in-a-Box, SecureTodo,
Cybersecurity Homelab — description + tech tags + GitHub link.

### Certifications (`certifications --verify`)
3 badges from existing Certifications.tsx: ISO 27001 Foundation (SkillFront),
Cybersecurity Fundamentals (IBM), Ethical Hacker (Cisco Credly).

### Skills (`skills --list`)
6 categories from existing Skills.tsx → compact grid.

### Articles (`articles --read`)
Coming-soon block ("Security research, technical breakdowns, and field notes are
on the way." + `stay_tuned.sh`).

### Contact (`contact --reach`)
`Let's talk.` + channels: LinkedIn (linkedin.com/in/lekhrazz19), GitHub
(github.com/lekhrazz19), X (x.com/lekhii404), Discord (_kenshi_19), Email
(singhlekhraj497@gmail.com). Footer: `© {year} Lekhraj Singh. All Rights Reserved.`

## Hero Game Details

Ported from ssitaraman's `pretext-canvas`:
- Glyphs: `░▒▓█▓▒░#@%&*=+:;!.,/|\-_~^` plus pool strings (`0x4141`, `$((RCE))`,
  `>>><<<`, etc.)
- Enemies: `◈` pink (fast, hp1), `⬢` rose (hp3, slow), `◇` cyan (fastest, hp1),
  `◌` violet (hp2) — spawn off-screen, chase cursor, push apart
- Firing: hold mouse → terminal commands, blinking `█` cursor → `⟩` while firing
- Score: `10 + kind*10` per kill; pink when score > 0
- Particle trails, explosion particles + amber muzzle flash
- Canvas at `devicePixelRatio` capped at 2, touch support, cursor:none on canvas
- Reduced-motion: static/absent fallback

## Verification

- `npm run build` (tsc -b && vite build) passes
- `npm run lint` passes
- `npm run dev` manual visual check of every section + hero game
- No test framework added; the canvas is the only non-trivial logic and is
  verified by build + manual check.

## Non-goals

- No research/speaking section (user has none)
- No blog/back-end/forms
- No 3D/WebGL, no animation libraries, no router
