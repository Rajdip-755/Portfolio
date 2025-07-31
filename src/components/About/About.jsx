import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Rajdip Roy, a backend-focused web developer with a love for building fast, scalable systems using Node.js, Drupal, and MongoDB.
          </p>
          <p>
            Beyond code, I’m a passionate traveler. I write blogs about offbeat destinations, solo trips, and local experiences across India.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/about.jpeg" alt="Rajdip Roy" />
        </div>
      </div>
    </section>
  );
}
