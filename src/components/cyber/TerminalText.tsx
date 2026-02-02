import { useState, useEffect, useCallback } from 'react';

interface TerminalTextProps {
    text: string;
    typingSpeed?: number;
    startDelay?: number;
    showCursor?: boolean;
    onComplete?: () => void;
    className?: string;
}

export default function TerminalText({
    text,
    typingSpeed = 50,
    startDelay = 0,
    showCursor = true,
    onComplete,
    className = '',
}: TerminalTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setHasStarted(true);
            setIsTyping(true);
        }, startDelay);

        return () => clearTimeout(startTimer);
    }, [startDelay]);

    useEffect(() => {
        if (!hasStarted || !isTyping) return;

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(timer);
        } else {
            setIsTyping(false);
            onComplete?.();
        }
    }, [currentIndex, text, typingSpeed, hasStarted, isTyping, onComplete]);

    return (
        <span className={`terminal-text ${className}`}>
            {displayedText}
            {showCursor && <span className="terminal-cursor" />}
        </span>
    );
}

interface TerminalLineProps {
    prompt?: string;
    command?: string;
    output?: string;
    isSuccess?: boolean;
    isError?: boolean;
    isWarning?: boolean;
    delay?: number;
    typingSpeed?: number;
    showTypingEffect?: boolean;
}

export function TerminalLine({
    prompt = '~$',
    command,
    output,
    isSuccess,
    isError,
    isWarning,
    delay = 0,
    typingSpeed = 30,
    showTypingEffect = true,
}: TerminalLineProps) {
    const [showOutput, setShowOutput] = useState(!showTypingEffect);
    const [isVisible, setIsVisible] = useState(!showTypingEffect);

    useEffect(() => {
        if (showTypingEffect) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [delay, showTypingEffect]);

    const handleCommandComplete = useCallback(() => {
        setTimeout(() => setShowOutput(true), 100);
    }, []);

    if (!isVisible) return null;

    const outputClass = isSuccess
        ? 'terminal-success'
        : isError
            ? 'terminal-error'
            : isWarning
                ? 'terminal-warning'
                : 'terminal-output';

    return (
        <div className="terminal-line">
            {command && (
                <div style={{ marginBottom: '0.25rem' }}>
                    <span className="terminal-prompt">{prompt} </span>
                    {showTypingEffect ? (
                        <TerminalText
                            text={command}
                            typingSpeed={typingSpeed}
                            showCursor={!showOutput}
                            onComplete={handleCommandComplete}
                        />
                    ) : (
                        <span className="terminal-command">{command}</span>
                    )}
                </div>
            )}
            {output && showOutput && (
                <div className={outputClass} style={{ paddingLeft: '1rem' }}>
                    {output}
                </div>
            )}
        </div>
    );
}

interface BootSequenceProps {
    lines: Array<{
        text: string;
        status: 'success' | 'error' | 'warning' | 'loading';
        delay?: number;
    }>;
    onComplete?: () => void;
}

export function BootSequence({ lines, onComplete }: BootSequenceProps) {
    const [visibleLines, setVisibleLines] = useState<number[]>([]);
    const [completedLines, setCompletedLines] = useState<number[]>([]);

    useEffect(() => {
        let currentDelay = 0;

        lines.forEach((line, index) => {
            const lineDelay = line.delay || 300;

            // Show line
            setTimeout(() => {
                setVisibleLines(prev => [...prev, index]);
            }, currentDelay);

            // Complete line (change from loading to final status)
            setTimeout(() => {
                setCompletedLines(prev => [...prev, index]);

                if (index === lines.length - 1) {
                    onComplete?.();
                }
            }, currentDelay + 200);

            currentDelay += lineDelay;
        });
    }, [lines, onComplete]);

    const getStatusIcon = (status: string, isComplete: boolean) => {
        if (!isComplete) return '⠸';
        switch (status) {
            case 'success': return '✓';
            case 'error': return '✗';
            case 'warning': return '⚠';
            default: return '•';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success': return 'var(--matrix-green)';
            case 'error': return 'var(--vuln-red)';
            case 'warning': return 'var(--warning-orange)';
            default: return 'var(--text-primary)';
        }
    };

    return (
        <div className="boot-sequence">
            {lines.map((line, index) => (
                visibleLines.includes(index) && (
                    <div
                        key={index}
                        className="boot-line"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            fontFamily: 'var(--font-terminal)',
                            animation: 'fadeIn 0.3s ease',
                        }}
                    >
                        <span
                            style={{
                                color: getStatusColor(line.status),
                                minWidth: '1.5rem',
                                textAlign: 'center',
                            }}
                        >
                            [{getStatusIcon(line.status, completedLines.includes(index))}]
                        </span>
                        <span style={{ color: 'var(--text-primary)' }}>{line.text}</span>
                    </div>
                )
            ))}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
        </div>
    );
}
