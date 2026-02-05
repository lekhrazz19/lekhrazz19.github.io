import { useEffect, useState, useRef } from 'react';

interface HackerTextProps {
    text: string;
    className?: string;
    speed?: number;
}

const HackerText = ({ text, className = "", speed = 30 }: HackerTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const intervalRef = useRef<number | null>(null);

    const animate = () => {
        let iterations = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        // Preserve spaces
                        if (char === " ") return " ";
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iterations += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        animate();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text]);

    return (
        <span
            className={`${className} font-mono cursor-default hover:text-accent transition-colors`}
            onMouseEnter={animate}
        >
            {displayText}
        </span>
    );
};

export default HackerText;
