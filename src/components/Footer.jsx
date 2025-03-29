import React from "react";
import "./Footer.css"; 
import logo from "../assets/logo.png"; // Import du logo
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Icônes des réseaux sociaux
import visaLogo from "../assets/visalogo.png"; // Import du logo Visa
import mastercardLogo from "../assets/mastercard.png"; // Import du logo Mastercard

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section Logo et Valeurs */}
      <div className="footer-section">
        <img src={logo} alt="Style Logo" className="footer-logo" />
        <h4>OUR VALUES</h4>
        <p>Everyday Elegance</p>
        <p>Confidence in Every Outfit</p>
      </div>

      {/* Section Méthodes de paiement */}
      <div className="footer-section">
        <h4>Payment Methods</h4>
        <div className="payment-icons">
          <img src={visaLogo} alt="Visa" />
          <img src={mastercardLogo} alt="Mastercard" />
        </div>
      </div>

      {/* Section Réseaux Sociaux */}
      <div className="footer-section">
        <h4>Social Media</h4>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>

      {/* Section Newsletter */}
      <div className="footer-section">
        <h4>Newsletter</h4>
        <div className="newsletter">
          <input type="email" placeholder="Email" />
          <button className="newsletter-btn">
            <FaEnvelope className="newsletter-icon" />
          </button>
        </div>
        <p><strong>Join our community and get exclusive offers!</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
