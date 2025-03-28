import React from "react";
import "./Header.css"; // Import du fichier CSS
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png"; 
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Style Logo" />
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Checkout</a>
        <a href="#">Contact</a>
      </nav>

      {/* Barre de recherche */}
      <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <FaSearch className="search-icon" />
      </div>

      {/* Icônes panier et profil */}
      <div className="icons">
      <FaShoppingCart className="icon" />  {/* Icône du panier */}
      <FaUser className="icon" />          {/* Icône du profil */}
      </div>

    </header>
  );
};

export default Header;
