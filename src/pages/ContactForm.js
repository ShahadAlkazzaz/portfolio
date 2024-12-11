import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Namn är obligatoriskt.";
    if (!formData.email.trim()) {
      formErrors.email = "E-post är obligatorisk.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "E-postadressen är inte giltig.";
    }
    if (!formData.message.trim()) formErrors.message = "Meddelande är obligatoriskt.";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setSuccessMessage("Tack för ditt meddelande! Jag återkommer så snart som möjligt.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setIsSubmitted(true);
    }
  };

  return (
    <div className="contact-form-container">
      {!isSubmitted ? (
        <>
          <h2>Kontakta mig</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Skriv ditt namn"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Skriv din e-postadress"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Skriv ditt meddelande"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            <button type="submit">Skicka</button>
          </form>
        </>
      ) : (
        <p className="confirmation-message">{successMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;
