import { useEffect } from 'react';

const colors = [
  'rgba(0, 212, 255, 0.8)',      // Cyan
  'rgba(255, 0, 255, 0.8)',      // Magenta
  'rgba(157, 78, 221, 0.8)',     // Violet
  'rgba(0, 212, 255, 0.6)',      // Light Cyan
  'rgba(255, 0, 255, 0.6)',      // Light Magenta
];

export const InteractiveClickEffect = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const burst = document.createElement('div');
      burst.className = 'color-burst';
      
      const size = Math.random() * 40 + 30; // 30-70px
      burst.style.width = size + 'px';
      burst.style.height = size + 'px';
      burst.style.left = e.clientX - size / 2 + 'px';
      burst.style.top = e.clientY - size / 2 + 'px';
      burst.style.background = colors[Math.floor(Math.random() * colors.length)];
      burst.style.boxShadow = `0 0 ${size * 0.5}px ${colors[Math.floor(Math.random() * colors.length)]}`;
      
      document.body.appendChild(burst);
      
      // Play subtle sound effect (optional - using Web Audio API)
      playClickSound();
      
      setTimeout(() => {
        burst.remove();
      }, 1200);
    };

    const playClickSound = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const now = audioContext.currentTime;
        
        // Create a short beep/tone
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        // Random frequency for variation
        osc.frequency.value = 400 + Math.random() * 400;
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        
        osc.start(now);
        osc.stop(now + 0.1);
      } catch (e) {
        // Audio context might not be available
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default InteractiveClickEffect;
