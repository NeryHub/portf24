import React, { useState } from 'react';
import './Navbar.css'; // Importar o arquivo CSS para estilização

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Meu Portfólio</div>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        ☰
      </button>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
