import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/products.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 1,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products?page=${pagination.page}&limit=${pagination.limit}`
        );
        const data = await response.json();

        if (data.success) {
          setProducts(data.data);
          setPagination({
            ...pagination,
            totalItems: data.pagination.totalItems,
            totalPages: data.pagination.totalPages,
          });
        } else {
          setError(data.message || "Failed to fetch products");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [pagination.page, pagination.limit]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      setPagination({ ...pagination, page: newPage });
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <Header />
    <div className="product-list-container">
      <h1 className="product-list-title">Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.images && product.images.length > 0 && (
              <img
                src={
                  product.images && product.images.length > 0
                    ? `http://localhost:5000${product.images[0]}`
                    : "/placeholder-image.jpg"
                }
                alt={product.name}
                className="product-image"
              />
            )}
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
              <Link to={`/products/${product.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={pagination.page === 1}
          className="pagination-btn"
        >
          Previous
        </button>

        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`pagination-btn ${
                pagination.page === pageNum ? "active" : ""
              }`}
            >
              {pageNum}
            </button>
          )
        )}

        <button
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={pagination.page === pagination.totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
