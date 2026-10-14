import React from 'react';
export default function SectionTitle({ eyebrow, title, description }) {
  return <div className="section-heading text-center mb-5"><p className="eyebrow">{eyebrow}
  </p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}
  </div>;
}
