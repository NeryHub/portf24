  import React, { useState } from 'react';
  import './Navbar.css'; // Importar o arquivo CSS para estilização

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <nav className="navbar">
        <div className="logo">Nery</div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          ☰
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#about">About Me</a></li>
          <li><a href="#hobbys">Hobbys</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#dev-skills">Dev Skills</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    );
  };

  export default Navbar;
