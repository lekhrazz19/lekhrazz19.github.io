import React, { createContext, useContext, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Define the physics state interface
interface CyberPhysicsState {
    gravity: number;
    timeScale: number;
    entropy: number;
}

const CyberPhysicsContext = createContext<CyberPhysicsState | null>(null);

export const useCyberPhysics = () => {
    const context = useContext(CyberPhysicsContext);
    if (!context) {
        throw new Error('useCyberPhysics must be used within a CyberPhysicsProvider');
    }
    return context;
};

export const CyberPhysicsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // We can use refs to store mutable physics state that doesn't trigger re-renders
    const physicsState = useRef<CyberPhysicsState>({
        gravity: 0, // Zero gravity by default in the cosmos
        timeScale: 1.0,
        entropy: 0.1,
    });

    useFrame(() => {
        // Global physics updates can go here
        // For now, we just pass the time
        // const time = state.clock.getElapsedTime();
    });

    return (
        <CyberPhysicsContext.Provider value={physicsState.current} >
            {children}
        </CyberPhysicsContext.Provider>
    );
};
