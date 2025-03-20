import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
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
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
