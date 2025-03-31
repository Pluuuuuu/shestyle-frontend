import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../CSS/products.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/id/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
        } else {
          setError(data.message || "Product not found");
          navigate("/not-found", { replace: true });
        }
      } catch (err) {
        setError(err.message);
        navigate("/error", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div>
      <Header />
    <div className="product-detail-container">
      <Link to="/product" className="back-link">
        &larr; Back to Products
      </Link>

      <div className="product-detail-card">
        <div className="product-images">
          {product.images && product.images.length > 0 ? (
            <>
              <div className="main-image">
                <img
                  src={`http://localhost:5000${product.images[0]}`}
                  alt={product.name}
                />
              </div>
              <div className="thumbnail-grid">
                {product.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000${image}`}
                    alt={`${product.name} ${index + 2}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="no-image">No images available</div>
          )}
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>

          {product.Category && (
            <div className="category">
              <span>Category: </span>
              <span>{product.Category.name}</span>
            </div>
          )}

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      
    </div> <Footer /></div>
  );
};

export default ProductDetail;
