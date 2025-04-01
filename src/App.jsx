import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Category";
import CategoryPage from "./components/CategoryPage";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders"; // Import the Orders page

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
        | <Link to="/register">Register</Link>|{" "}
        <Link to="/UserProfile">UserProfile</Link>|{" "}
        <Link to="/category">Category</Link>
        <Link to="/orders">Orders</Link> {/* Added Orders link */}
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} /> 
      </Routes>
    </Router>
  );
};

export default App;
