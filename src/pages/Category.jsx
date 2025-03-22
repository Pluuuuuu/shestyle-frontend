// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../CSS/Categories.css";

// const Categories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { id: 1, name: "Dresses", bgClass: "bg-dresses", path: "/category/dresses" },
//     { id: 2, name: "Tops", bgClass: "bg-tops", path: "/category/tops" },
//     { id: 3, name: "Bottoms", bgClass: "bg-bottoms", path: "/category/bottoms" },
//     { id: 4, name: "Footwear", bgClass: "bg-footwear", path: "/category/footwear" },
//     { id: 5, name: "Accessories", bgClass: "bg-accessories", path: "/category/accessories" },
//     { id: 6, name: "Activewear", bgClass: "bg-activewear", path: "/category/activewear" },
//   ];

//   return (
//     <div className="categories-container">
//       <h2 className="categories-heading">Shop by Category</h2>
//       <div className="categories-grid">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className={`category-box ${category.bgClass}`}
//             onClick={() => navigate(category.path)}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data);
      } catch (err) {
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      <h2 className="categories-heading">Shop by Category</h2>
      {loading && <p className="loading-message">Loading categories...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-box"
              style={{
                backgroundImage: `url(${category.background_image})`,
                backgroundSize: "cover", 
                backgroundPosition: "center",
                repeat: "no-repeat"
              }}
              onClick={() =>
                navigate(`/category/${category.name.toLowerCase()}`)
              }
            >
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
