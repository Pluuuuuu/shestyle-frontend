import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../CSS/ProductDetails.css";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <>
      <Header />
      <main className="product-detail-page">
        <div className="product-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image-large"
            onError={(e) => {
              e.target.src = "/path/to/default-image.png";
            }}
          />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
