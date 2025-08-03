import './Hero.css';
import { scrollToSection } from '../../utils/scrollToSection';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I’m Rajdip Roy</h1>
        <p>
          Backend Web Developer with a passion for scalable systems, AI-powered solutions, and storytelling through code and travel.
        </p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('projects')}>My Technical Experience</button>
          <button onClick={() => scrollToSection('blog')}>Let's visit some places</button>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
        title="Scroll down"
      >
        ↓
      </div>
    </section>
  );
}
