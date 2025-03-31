import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/Contact.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7sntkdn",
        "template_gnf4nea",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "2NlOBHL5-fWnkOFkU" //EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        },
        (error) => {
          console.error("Failed...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };
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
          {/* <form className="contact-form">
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
          </form> */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
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
