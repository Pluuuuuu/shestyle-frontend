import React from "react";
import Header from "../Components/Header"; 
import Footer from "../Components/Footer"; 
import "../CSS/Home.css"
import fashion1 from "../assets/fashion1.png";
import fashion2 from "../assets/fashion2.png";
import fashion3 from "../assets/fashion3.png";
import fashion4 from "../assets/fashion4.png";
import homeImage from "../assets/homeImage.png"; // Image de la première section

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <Header />

      {/* 1ère Section - Texte + Image */}
      <div className="home-intro">
        <div className="intro-text">
          <h2><strong>SHE STYLE</strong> is a form of self-expression and empowerment.</h2>
          <p>It enhances confidence and celebrates individuality.</p>
          <button className="btn">Discover more</button>
          <button className="btn">Shop Now</button>
        </div>
        <div className="intro-image">
          <img src={homeImage} alt="Fashion Style" />
        </div>
      </div>

      {/* 2ème Section - Promotions & Livraison */}
      
      <div className="home-promotions">
        <div className="promo-box">
          <h3>45% Off on the New Collection!</h3>
        </div>
        <div className="promo-box">
          <h3>FREE DELIVERY & EASY RETURNS</h3>
        </div>
      </div>
      <div>
        <button className="btn">Shop Now</button>
      </div>

      {/* 3ème Section - Filtres de recherche */}
      <div className="home-filters">
        <select><option>Body Fit</option></select>
        <select><option>Color</option></select>
        <select><option>Style</option></select>
        <select><option>Size</option></select>
        <select><option>Brand</option></select>
        <select><option>Category</option></select>
        <select><option>Product type</option></select>
        <select><option>Price Range</option></select>
      </div>

      {/* 4ème Section - New Arrivals */}
      <h2 className="home-title">New Arrivals</h2>

      {/* 5ème Section - Images des nouveautés */}
      <div className="home-arrivals">
        <img src={fashion1} alt="Fashion 1" />
        <img src={fashion2} alt="Fashion 2" />
        <img src={fashion3} alt="Fashion 3" />
        <img src={fashion4} alt="Fashion 4" />
      </div>

      {/* Bouton Load More */}
      <div className="load-more">
        <button className="btn">Load More</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
