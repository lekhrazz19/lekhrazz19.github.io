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
