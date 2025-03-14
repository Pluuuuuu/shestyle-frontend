import React, { useState } from "react";
import "../CSS/Login.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
//validation client-side
        if (!formData.email || !formData.password) {
          alert("All fields are required!");
          return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          alert("Please enter a valid email address!");
          return;
        }
// send data to back
      try {
        const response = await axios.post(
          "http://localhost:5000/api/login",
          formData
        ); 
          console.log("Login successful:", response.data);
           alert("Login successful!"); //we can not to add this 
        // Redirect or handle successful login (e.g., store token in localStorage)
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Login failed. Please check your credentials.");
      }
    };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
      <div className="image-section">
        <img
          src="src\assets\Loginpic.jpg" // Add image URL
          alt="Login"
          className="login-image"
        />
      </div>
    </div>
  );
};

export default Login;
