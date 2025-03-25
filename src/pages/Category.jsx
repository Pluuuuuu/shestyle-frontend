//   const categories = [
//     { id: 1, name: "Dresses", bgClass: "bg-dresses", path: "/category/dresses" },
//     { id: 2, name: "Tops", bgClass: "bg-tops", path: "/category/tops" },
//     { id: 3, name: "Bottoms", bgClass: "bg-bottoms", path: "/category/bottoms" },
//     { id: 4, name: "Footwear", bgClass: "bg-footwear", path: "/category/footwear" },
//     { id: 5, name: "Accessories", bgClass: "bg-accessories", path: "/category/accessories" },
//     { id: 6, name: "Activewear", bgClass: "bg-activewear", path: "/category/activewear" },
//   ];


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [newCategory, setNewCategory] = useState({
    name: "",
    background_image: "",
  });
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
      // Check if the token exists, otherwise set it for testing purposes
     if (!localStorage.getItem("token")) {
       localStorage.setItem(
         "token",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoiYWR1c2VyMTMyMEBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0Mjg2NzMxNSwiZXhwIjoxNzQyODcwOTE1fQ.sdWNhkY2rCzOQ4Q5XQ-PrOWrgp9Mb3Z-KuJVnahACL8"
       ); // Set the token manually for testing
     }

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

  const token = localStorage.getItem("token");
  console.log(token); // Verify the token is correctly stored

  const handleAddCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/categories/add",
        newCategory,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setCategories([...categories, response.data]);
      setNewCategory({ name: "", background_image: "" });
    } catch (err) {
      setError("Error adding category.");
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/delete/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCategories(categories.filter((category) => category.id !== id));
    } catch (err) {
      setError("Error deleting category.");
    }
  };

  const handleEditCategory = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/categories/update/${editingCategory.id}`,
        editingCategory,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id ? response.data : cat
        )
      );
      setEditingCategory(null);
    } catch (err) {
      setError("Error updating category.");
    }
  };

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

       <div className="admin-categories-container">
        <h2 className="categories-heading">Manage Categories</h2>
        <div className="add-category-form">
          <input
            type="text"
            placeholder="Category Name"
            value={newCategory.name}
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Background Image URL"
            value={newCategory.background_image}
            onChange={(e) =>
              setNewCategory({
                ...newCategory,
                background_image: e.target.value,
              })
            }
          />
          <button onClick={handleAddCategory}>Add Category</button>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-box"
              style={{
                backgroundImage: `url(${category.background_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>{category.name}</h3>
              {editingCategory && editingCategory.id === category.id ? (
                <>
                  <input
                    type="text"
                    value={editingCategory.name}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value={editingCategory.background_image}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        background_image: e.target.value,
                      })
                    }
                  />
                  <button onClick={handleEditCategory}>Save</button>
                </>
              ) : (
                <div className="category-actions">
                  <button onClick={() => setEditingCategory(category)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteCategory(category.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Categories;
