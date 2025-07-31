import './Skills.css';
import { skills } from './skills-data';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 data-aos="fade-up">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const level = Math.min(Math.max(skill.level || 0, 0), 5);
            const filledStars = level;
            const emptyStars = 5 - filledStars;

            return (
              <div
                key={index}
                className="skill-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                title={`${skill.name} - ${level} / 5`}
              >
                <Icon className="skill-icon" />
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="star-rating">
                    {[...Array(filledStars)].map((_, i) => (
                      <FaStar key={`filled-${index}-${i}`} className="star filled" />
                    ))}
                    {[...Array(emptyStars)].map((_, i) => (
                      <FaRegStar key={`empty-${index}-${i}`} className="star" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
