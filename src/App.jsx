import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="form-section">
              <nav>
                <Link to="/login">Login</Link> |
                <Link to="/register">Register</Link>
              </nav>
              <Login />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="form-section">
              <nav>
                <Link to="/login">Login</Link> |
                <Link to="/register">Register</Link>
              </nav>
              <Register />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
