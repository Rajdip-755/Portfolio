// src/components/Experience/Experience.jsx
import './Experience.css';
import { experience } from './experience-data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectModal from './ProjectModal';
import { useState } from 'react';

export default function Experience() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="experience-carousel"
      >
        {experience.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="experience-card">
              <div className="experience-header">
                <img src={item.logo} alt={`${item.company} logo`} />
                <div className="experience-heading-text">
                  <h3>{item.company}</h3>
                  <p className="role">{item.role}</p>
                  <span className="timeline">{item.timeline}</span>
                </div>
              </div>

              <p className="desc">{item.description}</p>

              <div className="projects-grid">
                {item.projects.map((proj, i) => (
                  <div
                    className="project-card"
                    key={i}
                    onClick={() => setSelectedProject(proj)}
                  >
                    <img src={proj.cover} alt={proj.title} />
                    <h4>{proj.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
