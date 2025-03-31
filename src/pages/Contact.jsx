import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-intro">
          Have a question or need assistance? Feel free to reach out to us!
        </p>

        {/* Conteneur Flex pour les 2 sections */}
        <div className="contact-content">
          {/* Informations de Contact - Gauche */}
          <div className="contact-info">
            <div className="info-item">
              <span>📧</span>
              <p>Email: support@fashionstyle.com</p>
            </div>
            <div className="info-item">
              <span>📞</span>
              <p>Phone: +961 70 567 890</p>
            </div>
            <div className="info-item">
              <span>📍</span>
              <p>Address: 123 Fashion Avenue, Jbeil </p>
            </div>
          </div>

          {/* Formulaire de Contact - Droite */}
          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." required></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
