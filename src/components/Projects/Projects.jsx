import './Projects.css';

const projects = [
  {
    name: 'IMGWEB',
    description: 'Group project where we made an Image Editing website that performs basic image editing functions.',
    work: '',
  },
  {
    name: 'QuikMail',
    description: 'My personal portfolio site showcasing skills and blogs.',
    work: '',
  },
  {
    name: 'Abstract API Email validator',
    description: 'Develop the email validation module and publish the same on drupal.org .',
    work: '',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="personal-projects-grid">
          {projects.map((project, index) => (
            <div className="project-flip-card" key={index}>
              <div className="project-inner">
                {/* Front */}
                <div className="project-front no-image">
                  <h3>{project.name}</h3>
                </div>

                {/* Back */}
                <div className="project-back">
                  <h4>{project.name}</h4>
                  <p className="desc">{project.description}</p>
                  <ul className="work-list">
                    {project.work
                      ?? project.work.split(',').map((item, i) => (
                        <li key={i}>{item.trim()}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
