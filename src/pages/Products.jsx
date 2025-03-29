import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../CSS/Products.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

            <div key={product._id} className="product-card">
              <Link to={`/product/${product._id}`} className="product-link">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = "/path/to/default-image.png";
                  }}
                />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <p>${product.price}</p>

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

