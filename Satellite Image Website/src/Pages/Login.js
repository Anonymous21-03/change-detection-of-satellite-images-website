import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles/Login.css';
import ErrorMessage from './ErrorMessage';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState('');

  // Use the state from the previous route (Register)
  React.useEffect(() => {
    if (location.state) {
      setUsername(location.state.username);
      setPassword(location.state.password);
    }
  }, [location.state]);

  const handleLoginSuccess = async (data) => {
    console.log('Login successful:', data);
    const user = { username: data.username };
    handleLogin(user);
    navigate('/');
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
        const data = await response.json();
        handleLoginSuccess(data);
      } else {
        const error = await response.json();
        setErrorMessage(error.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleCloseErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <div>
      <div className="background-container"></div>
      <div className="login-page">
        <div className="login-container">
          <div className="illustration-container">
            <img src="/login.jpeg" alt="Login Illustration" />
          </div>
          <div className="login-content">
            <h2>Welcome Back! Login to use the features</h2>
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
            <ErrorMessage
              message={errorMessage}
              onClose={handleCloseErrorMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;