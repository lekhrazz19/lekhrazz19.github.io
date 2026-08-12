import { useEffect, useState } from 'react';

const LINES = [
  { text: '$ ./resume.sh --fetch', delay: 500 },
  { text: '[>] locating resume.pdf ...', delay: 320 },
  { text: '[+] found: public/resume.pdf (2 files)', delay: 320 },
  { text: '[>] downloading ...', delay: 320 },
  { text: '[+] 100% — resume.pdf ready', delay: 420 },
  { text: '$ open resume.pdf', delay: 400 },
];

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= LINES.length) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(
      () => setShown((s) => s + 1),
      reduced ? 0 : LINES[shown].delay
    );
    return () => clearTimeout(t);
  }, [shown]);

  const ready = shown >= LINES.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="resume-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Open resume"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="terminal">
        <div className="terminal-bar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-title">resume.sh — bash — 80×24</span>
          <button className="terminal-close" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="terminal-body">
          {LINES.slice(0, shown).map((line, i) => (
            <p key={i}>{line.text}</p>
          ))}
          {!ready && <p className="terminal-cursor">█</p>}
          {ready && (
            <div className="terminal-actions">
              <a className="terminal-btn primary" href="/resume.pdf" download>
                ⬇ download resume
              </a>
              <a className="terminal-btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                ↗ open resume
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
