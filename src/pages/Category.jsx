import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Categories.css";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Dresses", bgClass: "bg-dresses", path: "/category/dresses" },
    { id: 2, name: "Tops", bgClass: "bg-tops", path: "/category/tops" },
    { id: 3, name: "Bottoms", bgClass: "bg-bottoms", path: "/category/bottoms" },
    { id: 4, name: "Footwear", bgClass: "bg-footwear", path: "/category/footwear" },
    { id: 5, name: "Accessories", bgClass: "bg-accessories", path: "/category/accessories" },
    { id: 6, name: "Activewear", bgClass: "bg-activewear", path: "/category/activewear" },
  ];

  return (
    <div className="categories-container">
      <h2 className="categories-heading">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-box ${category.bgClass}`}
            onClick={() => navigate(category.path)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;



// import { useState, useEffect } from "react";
// import axios from "axios";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/categories");
//         setCategories(response.data);
//       } catch (err) {
//         setError("Failed to load categories.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Shop by Category</h2>

//       {loading && <p className="text-center text-gray-500">Loading categories...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && !error && (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.map((category) => (
//             <div key={category.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//               <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;
