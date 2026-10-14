import React from 'react';

export default function NewsCard({ article }) {
  const formattedDate = new Date(`${article.date}T12:00:00`).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  return <article className="news-card h-100"><p className="news-date"><time dateTime={article.date}>{formattedDate}</time></p><h3>{article.title}</h3>
  <p>{article.content}</p></article>;
}
