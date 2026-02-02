import { useRef, useCallback } from 'react';

export const useCyberAudio = () => {
    const audioContext = useRef<AudioContext | null>(null);
    const droneOscillator = useRef<OscillatorNode | null>(null);
    const droneGain = useRef<GainNode | null>(null);
    const isMuted = useRef(true);

    const initAudio = useCallback(() => {
        if (audioContext.current) return;

        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContext.current = new AudioContextClass();

        // Master Gain
        const masterGain = audioContext.current.createGain();
        masterGain.gain.value = 0.3; // Low volume
        masterGain.connect(audioContext.current.destination);

        // Ambient Drone (Low frequency saw)
        droneOscillator.current = audioContext.current.createOscillator();
        droneOscillator.current.type = 'sawtooth';
        droneOscillator.current.frequency.value = 50; // Low hum

        // Drone Filter (Lowpass) to make it deep and not harsh
        const filter = audioContext.current.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 120;

        droneGain.current = audioContext.current.createGain();
        droneGain.current.gain.value = 0.5;

        droneOscillator.current.connect(filter);
        filter.connect(droneGain.current);
        droneGain.current.connect(masterGain);

        droneOscillator.current.start();
        isMuted.current = false;
    }, []);

    const playHoverSound = useCallback(() => {
        if (!audioContext.current || isMuted.current) return;

        const osc = audioContext.current.createOscillator();
        const gain = audioContext.current.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, audioContext.current.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, audioContext.current.currentTime + 0.1);

        gain.gain.setValueAtTime(0.1, audioContext.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.current.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(audioContext.current.destination);

        osc.start();
        osc.stop(audioContext.current.currentTime + 0.1);
    }, []);

    const playClickSound = useCallback(() => {
        if (!audioContext.current || isMuted.current) return;

        const osc = audioContext.current.createOscillator();
        const gain = audioContext.current.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(200, audioContext.current.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioContext.current.currentTime + 0.2);

        gain.gain.setValueAtTime(0.1, audioContext.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.current.currentTime + 0.2);

        osc.connect(gain);
        gain.connect(audioContext.current.destination);

        osc.start();
        osc.stop(audioContext.current.currentTime + 0.2);
    }, []);

    const toggleAudio = useCallback(() => {
        if (!audioContext.current) {
            initAudio();
            return;
        }

        if (audioContext.current.state === 'suspended') {
            audioContext.current.resume();
            isMuted.current = false;
        } else {
            if (isMuted.current) {
                audioContext.current.resume();
                if (droneGain.current) droneGain.current.gain.linearRampToValueAtTime(0.5, audioContext.current.currentTime + 1);
                isMuted.current = false;
            } else {
                if (droneGain.current) droneGain.current.gain.linearRampToValueAtTime(0, audioContext.current.currentTime + 0.5);
                setTimeout(() => audioContext.current?.suspend(), 500);
                isMuted.current = true;
            }
        }
    }, [initAudio]);

    return { initAudio, playHoverSound, playClickSound, toggleAudio };
};
