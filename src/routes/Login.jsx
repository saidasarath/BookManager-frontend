import React, { useState } from 'react';
import axios from 'axios';
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/user/', {
        username: email,
        password: password
      });
      
      if (response.status === 200) {
        console.log("Login successful!");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("There was an error with the login request:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="background-image" />
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <span className="input-icon">
              <i className="fas fa-envelope" />
            </span>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <span className="input-icon">
              <i className="fas fa-lock" />
            </span>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-login">
            Login
          </button>
          <p className="forgot-password">
            Forgot password? <a href="#">Click here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
