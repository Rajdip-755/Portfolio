import { useState } from 'react';
import './Navbar.css';
import { scrollToSection } from '../../utils/scrollToSection';

export default function Navbar() {
  const links = ['About', 'Skills', 'Projects', 'Blog', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>Rajdip Roy</div>

        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a onClick={() => handleLinkClick(link.toLowerCase())}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
