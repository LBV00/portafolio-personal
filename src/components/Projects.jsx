import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ projects }) {
  return <section id="proyectos" className="section-space section-alt">
    <div className="container">
    <SectionTitle eyebrow="TRABAJO SELECCIONADO" title="Mis proyectos" description="Una selección de ejercicios y proyectos en los que he aplicado lo aprendido." />
    <div className="row g-4">{projects.map((project) => <div className="col-md-6 col-lg-4" key={project.id}><ProjectCard project={project} /></div>)}
    </div></div></section>;
}
