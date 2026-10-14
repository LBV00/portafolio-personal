import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-nav" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">Mi<span className="brand-accent">Portfolio.</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portfolioNav" aria-controls="portfolioNav" aria-expanded="false" aria-label="Abrir menú de navegación">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#proyectos">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#noticias">Noticias</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
