import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">📬 Contact Me</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Drop me a message!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
