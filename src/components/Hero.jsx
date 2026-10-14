import React from 'react';

export default function Hero({ name, role, biography }) {
  return (
    <header id="inicio" className="hero-section">
      <div className="container hero-content text-center">
        <img className="profile-photo" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=360&q=80" alt="Fotografía de perfil del estudiante" width="150" height="150" />
        <p className="eyebrow">PORTAFOLIO PERSONAL</p>
        <h1>Hola, soy <span className="gradient-text">{name}</span></h1>
        <p className="hero-role">{role}</p>
        <p className="hero-bio mx-auto">{biography}</p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a className="btn btn-primary-custom" href="#proyectos">Ver proyectos</a>
          <a className="btn btn-outline-light" href="#contacto">Contactar</a>
        </div>
        <div className="social-links mt-4" aria-label="Enlaces sociales">
          <a href="https://github.com/LBV00" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub ↗</a>
        </div>
      </div>
    </header>
  );
}
