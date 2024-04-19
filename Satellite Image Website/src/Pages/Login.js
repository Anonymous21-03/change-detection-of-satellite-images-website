import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="illustration-container">
          <img src="/doodle.jpeg" alt="Login Illustration" />
        </div>
        <div className="login-content">
          <h2>Welcome Back!</h2>
          <form onSubmit={handleLogin}>
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
              <a href="#">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;