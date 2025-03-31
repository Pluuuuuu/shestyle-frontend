import React from "react";
import "./Header.css"; // Import du fichier CSS
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png"; 
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Style Logo" />
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        |<Link to="/">Home</Link>|<Link to="/login">Login</Link>|
        <Link to="/register">Register</Link>|
        <div className="dropdown">
          <span>Shop</span>
          <div className="dropdown-content">
            <Link to="/category">Category</Link>
            <Link to="/product">Products</Link>
          </div>
        </div>
        |<Link to="/about">About</Link>|<Link to="/contactus">Contact</Link>|
      </nav>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Cart Icon with Checkout Link */}
      <div className="icons">
        <Link to="/checkout">
          <FaShoppingCart className="icon" title="Checkout" />
        </Link>
        {/* User Icon with Profile Link */}
        <Link to="/UserProfile">
          <FaUser className="icon" title="User Profile" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
