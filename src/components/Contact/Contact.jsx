import './Contact.css';
import { contactInfo } from './contact-data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-grid">
          {/* Left Column: Form */}
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

          {/* Right Column: Info */}
          <div className="contact-info">
            <h3 className="contact-heading">Let’s Connect</h3>
            <div className="info-group">
              <p><strong>Location:</strong><br />{contactInfo.address}</p>
              <p><strong>Email:</strong><br /><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
              <p><strong>Phone:</strong><br />{contactInfo.phone}</p>
            </div>

            <div className="contact-socials">
              <h4>Find me on:</h4>
              <div className="social-links">
                {contactInfo.socials.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noreferrer">
                    <span className="social-icon">{iconMap[social.icon]}</span> {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
