import React from 'react';
export default function Footer({ name }) 
{ return <footer className="site-footer"><div className="container d-flex flex-column flex-md-row justify-content-between gap-2"><span>© 
    {new Date().getFullYear()} {name}. Portafolio personal.</span><a href="#inicio">Volver arriba ↑</a></div></footer>; }
