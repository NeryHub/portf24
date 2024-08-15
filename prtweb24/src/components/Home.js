// src/components/Home.js

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="hero">
      <video className="background-video" autoPlay loop muted>
        <source src="/multimedia/backgv.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="hero-content">
        <h1>Bem-vindo ao Meu Site</h1>
        <p>Explore meu portfólio e veja meus projetos.</p>
      </div>
    </section>
  );
};

export default Home;
