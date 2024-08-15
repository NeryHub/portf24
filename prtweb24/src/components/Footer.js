// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Importar o arquivo CSS para estilização

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Sobre</h2>
          <p>Este é o meu portfólio, onde você pode conhecer mais sobre o meu trabalho e projetos.</p>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contato</h2>
          <p>Email: <a href="mailto:email@exemplo.com">email@exemplo.com</a></p>
          <p>Telefone: (12) 3456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
