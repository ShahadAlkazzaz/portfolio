import React, { useState } from "react";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      {!formSubmitted && <h2>Kontakta mig</h2>}
      {formSubmitted ? (
        <p className="confirmation-message">
          Tack för ditt meddelande! Jag återkommer så snart som möjligt.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Skriv ditt namn"
            required
          />

          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Skriv din e-postadress"
            required
          />

          <label htmlFor="message">Meddelande:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Skriv ditt meddelande"
            rows="5"
            required
          ></textarea>

          <button type="submit">Skicka</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
