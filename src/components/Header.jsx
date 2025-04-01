import React from "react";
import "./Header.css"; // Import du fichier CSS
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png"; 
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Style Logo" />
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <Link to="/">Home</Link>         {/* Link to Home page */}
        <Link to="/products">Products</Link>  {/* Link to Products page */}
        <Link to="/about">About</Link>        {/* Link to About page */}
        <Link to="/checkout">Checkout</Link>  {/* Link to Checkout page */}
        <Link to="/contact">Contact</Link>    {/* Link to Contact page */}
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
