import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './sections/Hero';
import ScrollDrawing from './sections/ScrollDrawing';
import Photos from './sections/Photos';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ThreeJSBackground from './components/ThreeJSBackground';
import InteractiveClickEffect from './components/InteractiveClickEffect';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('.gsap-stagger').forEach((group) => {
      const items = group.querySelectorAll('.gsap-stagger-item');
      if (!items.length) return;
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('.gsap-float').forEach((floatEl, index) => {
      gsap.to(floatEl, {
        y: -16,
        duration: 6 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <div className="antialiased text-white relative">
      <ThreeJSBackground />
      <InteractiveClickEffect />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ScrollDrawing />
        <Photos />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
