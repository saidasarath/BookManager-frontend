import React, { useState } from 'react';
import "../styles/login.css"
import axios from 'axios';

function Register() {
  const [data, setData] = useState({
    name:"",
    email:"", 
    password:"",
    confirmPassword:""
  })

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      name: data.name,
      username: data.email,
      password: data.password
    }
    axios.post("http://localhost:8080/api/user", userObj)
    .then((res)=> res.data)
     
    
  };

  return (
    <div className="register-container">
      <div className="background-image" />
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={data.name}
              onChange={handleChange}
              placeholder="Name"
              name = "name"
              required
            />
            <span className="input-icon">
              <i className="fas fa-user" />
            </span>
          </div>
          <div className="input-group">
            <input
              type="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              name = "email"
              required
            />
            <span className="input-icon">
              <i className="fas fa-envelope" />
            </span>
          </div>
          <div className="input-group">
            <input
              type="password"
              name = "password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <span className="input-icon">
              <i className="fas fa-lock" />
            </span>
          </div>
          <div className="input-group">
            <input
              type="password"
              name = "confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
            <span className="input-icon">
              <i className="fas fa-lock" />
            </span>
          </div>
          <button type="submit" className="btn-register">
            Register
          </button>
          <p className="login-link">
            Already have an account? <a href="/login">Login now</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;