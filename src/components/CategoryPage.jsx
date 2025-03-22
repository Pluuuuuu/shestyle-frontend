import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CSS/CategoryPages.css"; 

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from URL params
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Static data for testing
  const staticData = {
    dresses: [
      { id: 1, name: "Floral Dress", price: 29.99, image: "/images/floral-dress.jpg" },
      { id: 2, name: "Maxi Dress", price: 39.99, image: "/images/maxi-dress.jpg" },
    ],
    tops: [
      { id: 3, name: "T-shirt", price: 19.99, image: "/images/tshirt.jpg" },
      { id: 4, name: "Blouse", price: 24.99, image: "/images/blouse.jpg" },
    ],
    bottoms: [
      { id: 5, name: "Jeans", price: 34.99, image: "/images/jeans.jpg" },
      { id: 6, name: "Skirt", price: 22.99, image: "/images/skirt.jpg" },
    ],
    footwear: [
      { id: 7, name: "Sneakers", price: 49.99, image: "/images/sneakers.jpg" },
      { id: 8, name: "Boots", price: 59.99, image: "/images/boots.jpg" },
    ],
    accessories: [
      { id: 9, name: "Sunglasses", price: 14.99, image: "/images/sunglasses.jpg" },
      { id: 10, name: "Handbag", price: 79.99, image: "/images/handbag.jpg" },
    ],
    activewear: [
      { id: 11, name: "Yoga Pants", price: 29.99, image: "/images/yoga-pants.jpg" },
      { id: 12, name: "Sports Bra", price: 19.99, image: "/images/sports-bra.jpg" },
    ],
  };

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);

      // Simulate a delay for loading
      setTimeout(() => {
        const categoryProducts = staticData[categoryName.toLowerCase()];
        if (categoryProducts) {
          setProducts(categoryProducts);
          setLoading(false);
        } else {
          setError("Category not found.");
          setLoading(false);
        }
      }, 1000); // Simulated delay
    };

    fetchProducts();
  }, [categoryName]); // Runs every time the category changes

  return (
    <div className="category-page-container">
      <h2 className="category-page-heading">{categoryName} Products</h2>

      {loading && <p className="loading-text">Loading products...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>No products found in this category.</p>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../CSS/CategoryPage.css"; // Assume you have a CSS file for styling

// const CategoryPage = () => {
//   const { categoryName } = useParams(); // Get category name from URL params
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         // Replace with your API URL to fetch products by category
//         const response = await axios.get(`http://localhost:5000/api/products/category/${categoryName}`); need to change the url(make it by id?name?)
//         setProducts(response.data);
//       } catch (err) {
//         setError("Failed to load products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [categoryName]); // Runs every time the category changes

//   return (
//     <div className="category-page-container">
//       <h2 className="category-page-heading">{categoryName} Products</h2>

//       {loading && <p className="loading-text">Loading products...</p>}
//       {error && <p className="error-text">{error}</p>}

//       {!loading && !error && products.length === 0 && (
//         <p>No products found in this category.</p>
//       )}

//       <div className="products-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3 className="product-name">{product.name}</h3>
//             <p className="product-price">${product.price}</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
