/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Dynamic accent colors (can be overridden by CSS variables)
                accent: {
                    primary: 'var(--accent-primary, #10b981)',
                    secondary: 'var(--accent-secondary, #06b6d4)',
                },
                // Dark theme colors
                dark: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
                glass: {
                    white: 'rgba(255, 255, 255, 0.05)',
                    border: 'rgba(255, 255, 255, 0.1)',
                }
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
                mono: ['Inconsolata', 'monospace'],
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'cursor-blink': 'cursor-blink 1s step-end infinite',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px var(--accent-primary)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 40px var(--accent-primary)' },
                },
                'cursor-blink': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
            boxShadow: {
                'glow': '0 0 40px rgba(16, 185, 129, 0.15)',
                'glow-lg': '0 0 60px rgba(16, 185, 129, 0.25)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.37)',
            },
        },
    },
    plugins: [],
}
