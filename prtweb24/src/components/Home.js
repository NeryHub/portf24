// src/components/Home.js

import React from 'react';
import './Home.css'; // Importar o arquivo CSS para estilização

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Olá, eu sou [Seu Nome]</h1>
        <p>Sou um desenvolvedor web apaixonado por criar soluções inovadoras e funcionais.</p>
        <a href="#portfolio" className="btn-main">Veja Meu Trabalho</a>
      </div>
      <div className="home-image">
        <img src="/path/to/your/image.jpg" alt="Imagem de Destaque" />
      </div>
    </section>
  );
};

export default Home;
