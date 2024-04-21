import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSuccess = async (data) => {
    console.log('Login successful:', data);
    handleLogin(data); // Call the handleLogin function from App.js
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        // User is authenticated, handle the successful login
        const data = await response.json();
        handleLoginSuccess(data);
      } else {
        // Handle the failed login
        const error = await response.json();
        console.error('Login failed:', error.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <div className="background-container"></div>
      <div className="login-page">
        <div className="login-container">
          <div className="illustration-container">
            <img src="/doodle.jpeg" alt="Login Illustration" />
          </div>
          <div className="login-content">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="single-line-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="single-line-input"
                />
              </div>
              <div className="form-group forgot-password">
                <button type="button" className="forgot-password-button">
                  Forgot Password?
                </button>
              </div>
              <div className="form-group">
                <button type="submit" className="login-button">
                  Sign in
                </button>
                <Link to="/register">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;