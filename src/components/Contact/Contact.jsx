import './Contact.css';
import { contactInfo } from './contact-data';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe,
  FaTwitter, FaFacebook, FaInstagram, FaArrowUp
} from 'react-icons/fa';

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  website: <FaGlobe />,
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  phone: <FaPhone />,
  email: <FaEnvelope />,
};

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-grid">

          {/* === Left Column: Google Form === */}
          <div className="contact-form contact-form-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScV4nRk1phh5bQ4Lytygr9FMcWx5cR4QwfDvuTI64LNXUk9wQ/viewform?embedded=true"
              title="Contact Form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>

          {/* === Right Column: Contact Info === */}
          <div className="contact-info">
            <h3 className="contact-heading">Let’s Connect</h3>
            <div className="info-group">
              {/* Google Map */}
              <div className="map-embed" style={{ marginTop: '1.5rem' }}>
                <iframe
                  title="My Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.660372995515!2d88.36066187633018!3d22.666448029521998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c561907c27f%3A0x77fdd74d0f07d191!2s68%2C%20MM%20Feeder%20Rd%2C%20Ariadaha%2C%20Dakshineswar%2C%20Kolkata%2C%20West%20Bengal%20700057!5e0!3m2!1sen!2sin!4v1754202955827!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-item">
                  <span className="social-icon">{iconMap['email']}</span>
                  <a href={`mailto:${contactInfo.email}`}><strong>{contactInfo.email}</strong></a>
                </div>
                <div className="contact-item">
                  <span className="social-icon">{iconMap['phone']}</span>
                  <a href={`tel:${contactInfo.phone}`}><strong>{contactInfo.phone}</strong></a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <h4>Find me on:</h4>
              <div className="social-links">
                {contactInfo.socials.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noreferrer">
                    <span className="social-icon">{iconMap[social.icon]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === Scroll To Top Button === */}
        <div className="scroll-top-cta" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      </div>
    </section>
  );
}
