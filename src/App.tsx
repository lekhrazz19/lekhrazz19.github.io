import { useEffect } from 'react';
import Header from './components/Header';
import AsciiDivider from './components/AsciiDivider';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Skills from './sections/Skills';
import Articles from './sections/Articles';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AsciiDivider />
        <About />
        <AsciiDivider />
        <Experience />
        <AsciiDivider />
        <Projects />
        <AsciiDivider />
        <Certifications />
        <AsciiDivider />
        <Skills />
        <AsciiDivider />
        <Articles />
        <AsciiDivider />
        <Contact />
      </main>
    </>
  );
}

export default App;
