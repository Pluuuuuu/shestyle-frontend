import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Category";
import CategoryPage from "./components/CategoryPage";

import "./App.css";
const App = () => {
  return (
    <Router>
      <nav>
        <Link
          style={{
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
          to="/login"
        >
          Login
        </Link>
        | <Link to="/register">Register</Link>
         | <Link to="/category">Category</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
