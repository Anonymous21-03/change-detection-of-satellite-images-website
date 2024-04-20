import React, { useState } from 'react';
import axios from 'axios';
import './styles/Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server with the registration data
      const response = await axios.post('/api/register', {
        email,
        password,
        username,
        firstName,
        lastName,
      });
      console.log(response.data.message); // Log the response message
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <div className="background-container"></div>
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
                <Link to='/Login'>Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;