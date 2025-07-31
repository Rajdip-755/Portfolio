import './Navbar.css';

export default function Navbar() {
  const links = ['Hero', 'About', 'Skills', 'Projects', 'Blog', 'Contact'];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Rajdip Roy</div>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
