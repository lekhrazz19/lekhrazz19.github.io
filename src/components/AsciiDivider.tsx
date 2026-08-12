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
