import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card h-100">
      <img src={project.image} className="card-img-top project-image" alt={`Imagen representativa del proyecto ${project.title}`} loading="lazy" />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <div className="tech-tags mb-4">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
        <a className="btn btn-outline-primary mt-auto align-self-start" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || 'Ver proyecto'} ↗</a>
      </div>
    </article>
  );
}
