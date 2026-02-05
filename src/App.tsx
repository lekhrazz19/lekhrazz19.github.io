import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './sections/Hero';

import Photos from './sections/Photos';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ThreeJSBackground from './components/ThreeJSBackground';
import InteractiveClickEffect from './components/InteractiveClickEffect';
import InteractiveTerminal from './components/InteractiveTerminal';

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
            start: 'top 90%',
            toggleActions: 'play none none none',
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
      <InteractiveTerminal />
      <Header />
      <main className="relative z-10">
        <Hero />

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
