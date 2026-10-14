import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: '' }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Escribe tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Introduce un correo válido.';
    if (form.message.trim().length < 10) nextErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('Revisa los campos marcados antes de enviar.');
      return;
    }
    setStatus('Formulario validado correctamente. En esta demo no se envían datos a un servidor.');
    setForm({ name: '', email: '', message: '' });
  }

  return <section id="contacto" className="section-space section-alt"><div className="container"><div className="row justify-content-center"><div className="col-lg-8"><div className="surface-card"><div className="text-center mb-4"><p className="eyebrow">HABLEMOS</p><h2>Contacto</h2><p className="muted-text">Puedes dejar un mensaje de prueba usando el formulario.</p></div><form onSubmit={handleSubmit} noValidate>
    <div className="mb-3"><label htmlFor="contact-name" className="form-label">Nombre</label><input id="contact-name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} name="name" value={form.name} onChange={handleChange} autoComplete="name" aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <div id="name-error" className="invalid-feedback">{errors.name}</div>}</div>
    <div className="mb-3"><label htmlFor="contact-email" className="form-label">Correo electrónico</label><input id="contact-email" type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} name="email" value={form.email} onChange={handleChange} autoComplete="email" aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <div id="email-error" className="invalid-feedback">{errors.email}</div>}</div>
    <div className="mb-3"><label htmlFor="contact-message" className="form-label">Mensaje</label><textarea id="contact-message" className={`form-control ${errors.message ? 'is-invalid' : ''}`} name="message" value={form.message} onChange={handleChange} rows="4" aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <div id="message-error" className="invalid-feedback">{errors.message}</div>}</div>
    <button type="submit" className="btn btn-primary-custom">Validar mensaje</button>{status && <p className="form-status mt-3" role="status" aria-live="polite">{status}</p>}
  </form></div></div></div></div></section>;
}
