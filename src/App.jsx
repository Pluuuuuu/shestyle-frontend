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
import Product from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import "./App.css";

const App = () => {
  return (
    <Router>
     {/* <nav>
        |
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
        | <Link to="/register">Register</Link>|
        <Link to="/UserProfile">UserProfile</Link>|
        <Link to="/category">Category</Link>|<Link to="/about">About</Link>|
        <Link to="/contactus">Contact</Link>|<Link to="/product">Product</Link>|
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
