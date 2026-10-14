import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import NewsCard from './NewsCard.jsx';

export default function News({ articles }) {
  return <section id="noticias" className="section-space"><div className="container"><SectionTitle eyebrow="ACTUALIDAD Y APRENDIZAJE" title="Noticias" description="Notas breves sobre desarrollo web y buenas prácticas." /><div className="row g-4">{articles.map((article) => <div className="col-md-6" key={article.id}><NewsCard article={article} /></div>)}</div></div></section>;
}
