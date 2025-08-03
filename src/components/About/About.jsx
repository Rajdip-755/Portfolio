import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Backend Developer | Drupal, Node.js, MongoDB | Passionate about building scalable systems and solving real-world problems with clean code and smart tools.
            <br />
            I blend backend logic with AI-assisted workflows to simplify development, and share my journey through photography and travel blogs.
            <br />
            Let's <a href="#contact">connect </a>, collaborate, or talk code & culture.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/about.jpeg" alt="Rajdip Roy" />
        </div>
      </div>
    </section>
  );
}
