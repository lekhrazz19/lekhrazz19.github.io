import Header from './components/Header';
import Hero from './sections/Hero';
import Photos from './sections/Photos';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="antialiased text-slate-300">
      <Header />
      <main>
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
