import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p className="section-subtitle">
          Have a project in mind? Get in touch with us and let's discuss how we can help.
        </p>
      </div>

      <div className="contact-container">
        {submitted && (
          <div className="form-success">
            Thank you! Your message has been sent. We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us about your project..."
            />
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>

        <div className="contact-alternative">
          <p>Or reach us directly:</p>
          <p>
            <a href="mailto:contact@marsxtechnology.com">
              contact@marsxtechnology.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
