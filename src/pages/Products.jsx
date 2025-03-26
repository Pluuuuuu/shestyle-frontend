import React from "react";
import { Link } from "react-router-dom";  // Importation de Link
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.png";
import Product6 from "../assets/Product6.png";
import Product7 from "../assets/Product7.png";
import Product8 from "../assets/Product8.png";
import "../CSS/Products.css";

const products = [
  { id: 1, name: "Product 1", category: "Category", image: Product1, description: "Description of Product 1" },
  { id: 2, name: "Product 2", category: "Category", image: Product2, description: "Description of Product 2" },
  { id: 3, name: "Product 3", category: "Category", image: Product3, description: "Description of Product 3" },
  { id: 4, name: "Product 4", category: "Category", image: Product4, description: "Description of Product 4" },
  { id: 5, name: "Product 5", category: "Category", image: Product5, description: "Description of Product 5" },
  { id: 6, name: "Product 6", category: "Category", image: Product6, description: "Description of Product 6" },
  { id: 7, name: "Product 7", category: "Category", image: Product7, description: "Description of Product 7" },
  { id: 8, name: "Product 8", category: "Category", image: Product8, description: "Description of Product 8" },
];

const Products = () => {
  return (
    <>
      <Header />
      <main className="products-page">
        <div className="products-header">
          <h2>Products</h2>
          <button className="sort-button">Default Sorting</button>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-link">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
              </Link>
              <button className="add-to-cart">Add to cart</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;