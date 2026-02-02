import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Palette } from 'lucide-react'

// Components
import Navigation from './components/ui/Navigation'
import CustomCursor from './components/ui/CustomCursor'
import SceneLoader from './components/three/SceneLoader'

// Sections
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

// Hooks
import useStickyScroll from './hooks/useStickyScroll'

// Styles
import './index.css'

// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="particles">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 20}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  )
}

// Theme Switcher Button
function ThemeSwitcher() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const themes = [
    {
      name: 'Emerald',
      colors: {
        '--accent-primary': '#10b981',
        '--accent-secondary': '#06b6d4',
        '--accent-gradient': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        '--shadow-glow': '0 0 40px rgba(16, 185, 129, 0.15)'
      }
    },
    {
      name: 'Cyberpunk',
      colors: {
        '--accent-primary': '#f472b6',
        '--accent-secondary': '#60a5fa',
        '--accent-gradient': 'linear-gradient(135deg, #f472b6 0%, #60a5fa 100%)',
        '--shadow-glow': '0 0 40px rgba(244, 114, 182, 0.15)'
      }
    },
    {
      name: 'Midnight',
      colors: {
        '--accent-primary': '#8b5cf6',
        '--accent-secondary': '#6366f1',
        '--accent-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        '--shadow-glow': '0 0 40px rgba(139, 92, 246, 0.15)'
      }
    },
    {
      name: 'Sunset',
      colors: {
        '--accent-primary': '#f59e0b',
        '--accent-secondary': '#ef4444',
        '--accent-gradient': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        '--shadow-glow': '0 0 40px rgba(245, 158, 11, 0.15)'
      }
    },
    {
      name: 'Neon',
      colors: {
        '--accent-primary': '#a3e635',
        '--accent-secondary': '#22d3ee',
        '--accent-gradient': 'linear-gradient(135deg, #a3e635 0%, #22d3ee 100%)',
        '--shadow-glow': '0 0 40px rgba(163, 230, 53, 0.15)'
      }
    }
  ]

  const changeTheme = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length
    setCurrentThemeIndex(nextIndex)

    const theme = themes[nextIndex]
    const root = document.documentElement

    Object.entries(theme.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }

  return (
    <motion.button
      onClick={changeTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="theme-button"
      style={{ background: themes[currentThemeIndex].colors['--accent-gradient'] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch Theme (Current: ${themes[currentThemeIndex].name})`}
      title={`Current Theme: ${themes[currentThemeIndex].name}`}
    >
      <Palette className={`w-5 h-5 text-white transition-transform duration-500 ${isHovered ? 'rotate-180' : ''}`} />
    </motion.button>
  )
}

// Loading Screen
function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-dark-950 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-4"
        >
          <div className="w-full h-full border-2 border-emerald-500/30 border-t-emerald-500 rounded-full" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-sm font-mono"
        >
          Loading 3D scene...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollProgress } = useStickyScroll()

  useEffect(() => {
    // Simulate initial load time for assets
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen scrollbar-thin">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Background Elements */}
      <div className="bg-noise" />
      <div className="bg-gradient-dark" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* 3D Scene (Fixed position, behind content) */}
      <SceneLoader scrollProgress={scrollProgress} />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Lekhraj Singh. Built with React, Three.js & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}
