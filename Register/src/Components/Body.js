import React, { useState } from 'react';
import axios from 'axios';
import './Body.css';

const Body = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', {
        email,
        password,
        username,
        firstName,
        lastName,
      });
      console.log('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="body-page">
      <div className="body-container">
        <div className="illustration-container">
          <img src="/doodle.jpeg" alt="Registration Illustration" />
        </div>
        <div className="body-content">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="single-line-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="single-line-input"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <button type="submit" className="body-button">
                Register
              </button>
              <a href="#">Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;