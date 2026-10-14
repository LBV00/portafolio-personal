import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const projectFixture = {
  id: 99,
  title: 'Proyecto de prueba',
  description: 'Descripción de prueba del proyecto.',
  image: 'https://example.com/project.png',
  technologies: ['React', 'Bootstrap'],
  link: 'https://github.com/example/demo',
  linkLabel: 'Abrir demo'
};

describe('ProjectCard', () => {
  let container;
  let root;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });
  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it('renderiza el título, la descripción y las tecnologías recibidas por props', () => {
    act(() => root.render(<ProjectCard project={projectFixture} />));
    expect(container.querySelector('h3').textContent).toBe('Proyecto de prueba');
    expect(container.textContent).toContain('Descripción de prueba del proyecto.');
    expect(container.textContent).toContain('React');
    expect(container.textContent).toContain('Bootstrap');
  });

  it('incluye una imagen accesible y un enlace al proyecto', () => {
    act(() => root.render(<ProjectCard project={projectFixture} />));
    const image = container.querySelector('img');
    const link = container.querySelector('a');
    expect(image.getAttribute('alt')).toContain('Proyecto de prueba');
    expect(link.getAttribute('href')).toBe('https://github.com/example/demo');
    expect(link.textContent).toContain('Abrir demo');
  });

  it('usa un texto de enlace por defecto cuando no se proporciona linkLabel', () => {
    const { linkLabel, ...projectWithoutLabel } = projectFixture;
    act(() => root.render(<ProjectCard project={projectWithoutLabel} />));
    expect(container.querySelector('a').textContent).toContain('Ver proyecto');
  });
});
