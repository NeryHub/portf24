// src/components/Portfolio.js

import React from 'react';
import './Portfolio.css'; // Importar o arquivo CSS para estilização

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Meu Portfólio</h2>
      <div className="portfolio-item">
        <img src="/path/to/your/product-image.jpg" alt="Descrição do Produto" />
        <div className="portfolio-overlay">
          <h3>Nome do Projeto</h3>
          <p>Descrição breve do projeto. Inclua detalhes sobre o que foi feito, as tecnologias usadas, e o impacto do projeto.</p>
          <a href="/path/to/project" className="btn-view">Ver Projeto</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
