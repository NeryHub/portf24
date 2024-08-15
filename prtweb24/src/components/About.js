// src/components/About.js

import React from 'react';
import './About.css'; // Importar o arquivo CSS para estilização

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>
            Olá, eu sou [Seu Nome], um [Sua Profissão] com paixão por [Áreas de Interesse]. 
            Com [Número de Anos] anos de experiência, trabalhei em projetos que vão desde [Tipo de Projeto] 
            até [Outro Tipo de Projeto]. Meu objetivo é [Seu Objetivo Profissional].
          </p>
          <h3>Habilidades</h3>
          <ul className="skills-list">
            <li>Desenvolvimento Frontend</li>
            <li>Desenvolvimento Backend</li>
            <li>Design de UX/UI</li>
            <li>Outras Habilidades</li>
          </ul>
          <h3>Experiência</h3>
          <p>
            Trabalhei na [Nome da Empresa] como [Cargo], onde [Breve Descrição das Responsabilidades e Realizações].
          </p>
        </div>
        <div className="about-image">
          <img src="/path/to/your/profile.jpg" alt="Foto de Perfil" />
        </div>
      </div>
    </section>
  );
};

export default About;
