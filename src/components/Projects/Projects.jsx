import './Projects.css';

const projects = [
  {
    name: 'Travel Blog Platform',
    description: 'A full-stack web app for publishing and sharing travel blogs.',
    work: 'Built backend API using Node.js and MongoDB, integrated JWT authentication, and designed frontend in React.',
    image: 'https://source.unsplash.com/400x300/?travel,blog'
  },
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio site showcasing skills and blogs.',
    work: 'Designed the layout using React, implemented responsive sections, and added dynamic blog support.',
    image: 'https://source.unsplash.com/400x300/?developer,portfolio'
  },
  {
    name: 'Content Sync System',
    description: 'CMS → Node → React pipeline for syncing visit content in real time.',
    work: 'Designed JSON sync logic, created state-based polling system, and optimized disk storage.',
    image: 'https://source.unsplash.com/400x300/?api,server'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.name} />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="desc">{project.description}</p>
                <p className="work"><strong>What I worked on:</strong> {project.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
