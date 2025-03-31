import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Category";
import CategoryPage from "./components/CategoryPage";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./pages/Checkout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
