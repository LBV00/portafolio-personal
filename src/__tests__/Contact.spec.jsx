import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import Contact from '../components/Contact.jsx';

describe('Contact', () => {
  let container;
  let root;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => root.render(<Contact />));
  });
  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  function changeValue(selector, value) {
    const input = container.querySelector(selector);
    const setter = Object.getOwnPropertyDescriptor(
      selector === 'textarea' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype,
      'value'
    ).set;
    act(() => {
      setter.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  it('muestra errores de validación al enviar el formulario vacío', () => {
    act(() => container.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
    expect(container.textContent).toContain('Escribe tu nombre.');
    expect(container.textContent).toContain('Introduce un correo válido.');
    expect(container.textContent).toContain('El mensaje debe tener al menos 10 caracteres.');
  });

  it('muestra confirmación cuando los campos son válidos', () => {
    changeValue('#contact-name', 'Alex');
    changeValue('#contact-email', 'alex@example.com');
    changeValue('#contact-message', 'Este es un mensaje de prueba.');
    act(() => container.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
    expect(container.textContent).toContain('Formulario validado correctamente.');
    expect(container.querySelector('#contact-name').value).toBe('');
  });

  it('anuncia el estado del formulario con una región accesible', () => {
    expect(container.querySelector('[role="status"]').getAttribute('aria-live')).toBe('polite');
  });
});
