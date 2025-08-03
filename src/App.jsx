import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

function App() {
  return (
    <div className="font-sans">
      <DarkModeToggle />
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
