
import { useRef, useCallback, useEffect } from 'react';

export const useNatureAudio = () => {
    const audioContext = useRef<AudioContext | null>(null);
    const masterGain = useRef<GainNode | null>(null);
    const windGain = useRef<GainNode | null>(null);

    const initAudio = useCallback(() => {
        if (audioContext.current) return;

        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContext.current = new AudioContextClass();

        masterGain.current = audioContext.current.createGain();
        masterGain.current.connect(audioContext.current.destination);
        masterGain.current.gain.setValueAtTime(0.5, audioContext.current.currentTime); // Master volume

        // --- Wind Ambience (Pink Noise approximation) ---
        // Creating noise buffer
        const bufferSize = audioContext.current.sampleRate * 2; // 2 seconds
        const buffer = audioContext.current.createBuffer(1, bufferSize, audioContext.current.sampleRate);
        const data = buffer.getChannelData(0);

        let lastOut = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + (0.02 * white)) / 1.02; // Simple pinking filter
            lastOut = data[i];
            data[i] *= 3.5;
        }

        const noise = audioContext.current.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const noiseFilter = audioContext.current.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.value = 400;

        windGain.current = audioContext.current.createGain();
        windGain.current.gain.value = 0.1; // Soft wind

        noise.connect(noiseFilter);
        noiseFilter.connect(windGain.current);
        windGain.current.connect(masterGain.current);
        noise.start();

        // --- Chime/Bird Sounds (Procedural) ---
        // (Handled by playClickSound)
    }, []);

    const playClickSound = useCallback(() => {
        if (!audioContext.current || !masterGain.current) return;

        const ctx = audioContext.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Pentatonic C major: C, D, E, G, A
        const notes = [523.25, 587.33, 659.25, 783.99, 880.00];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];

        osc.frequency.setValueAtTime(randomNote * (1 + (Math.random() - 0.5) * 0.05), ctx.currentTime);
        osc.type = 'sine'; // Pure tone like a bell/flute

        // Envelope (Bell-like)
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);

        osc.connect(gain);
        gain.connect(masterGain.current);

        osc.start();
        osc.stop(ctx.currentTime + 2);
    }, []);

    const toggleAudio = useCallback(() => {
        if (audioContext.current && audioContext.current.state === 'suspended') {
            audioContext.current.resume();
        } else if (audioContext.current && audioContext.current.state === 'running') {
            audioContext.current.suspend();
        } else {
            initAudio();
        }
    }, [initAudio]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (audioContext.current) {
                audioContext.current.close();
            }
        };
    }, []);

    return { initAudio, playClickSound, toggleAudio };
};
