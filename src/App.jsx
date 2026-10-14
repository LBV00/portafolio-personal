import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import News from './components/News.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import projectsData from './data/projects.json';
import newsData from './data/news.json';

const profile = {
  name: 'Luca Buitano',
  role: 'Estudiante de informática · Desarrollador web en formación',
  biography: 'Me gusta la tecnología, aprender herramientas nuevas y crear soluciones digitales útiles. Este espacio recoge mi evolución como desarrollador.'
};
const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Git', 'GitHub', 'JSON', 'Jasmine', 'Karma'];

export default function App() {
  const [projects, setProjects] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Los datos están separados en JSON para facilitar su mantenimiento y reutilización.
    setProjects(projectsData);
    setArticles(newsData);
  }, []);

  return <><Navbar /><main><Hero {...profile} /><About skills={skills} /><Projects projects={projects} /><News articles={articles} /><Contact /></main><Footer name={profile.name} /></>;
}
