import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_btay94u';
    const templateID = 'template_mckarht';
    const apiKey = 'uEYOY9Xi4BNVPS_5V';

    emailjs.sendForm(serviceID, templateID, refForm.current, apiKey)
      .then(result => {
        console.log(result.text);
        alert("Mensaje enviado correctamente.");
        refForm.current.reset(); // Limpia el formulario después del envío
      })
      .catch(error => {
        console.error(error.text);
        alert("Error al enviar el mensaje. Intenta más tarde.");
      });
  }

  return (
    <div className="contact-container">
      <form ref={refForm} onSubmit={handleSubmit} className="contact-form">
        <div className="header-contact">
          <h2>Contact Us</h2>
          <p>Please fill this form</p>
        </div>

        <fieldset className="field-name">
          <label className="symbol-required-name">Name:</label>
          <input
            name="username"
            type="text"
            placeholder="Ej: Daniel"
            required
          />
        </fieldset>

        <fieldset className="field-email">
          <label className="symbol-required">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ej: danielleon@gmail.com"
            required
          />
        </fieldset>

        <fieldset className="field-message">
          <label className="symbol-required">Mensaje:</label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            maxLength="500"
            cols="30"
            rows="6"
            required
          />
        </fieldset>

        <button className="btn-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
