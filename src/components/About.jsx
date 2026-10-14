import React from 'react';
import SectionTitle from './SectionTitle.jsx';

export default function About({ skills }) {
  return (
    <section id="sobre-mi" className="section-space">
      <div className="container">
        <SectionTitle eyebrow="UN POCO SOBRE MÍ" title="Construyendo soluciones digitales" description="Me interesa aprender, experimentar y convertir ideas en experiencias web útiles." />
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7"><article className="surface-card h-100"><h3>Sobre mí</h3><p> Soy estudiante de informática y desarrollo de software. Estoy aprendiendo a crear aplicaciones web con tecnologías frontend, buenas prácticas y pruebas que permitan mantener un código fiable.</p><p>Este portafolio reúne proyectos académicos, tecnologías que estoy practicando y noticias relacionadas con el desarrollo web. Mi objetivo es seguir mejorando y colaborar en proyectos reales.</p></article></div>
          <div className="col-lg-5"><article className="surface-card h-100"><h3>Tecnologías</h3><p className="muted-text">Herramientas que utilizo o estoy aprendiendo.</p><div className="skill-list">{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div></article></div>
        </div>
      </div>
    </section>
  );
}
