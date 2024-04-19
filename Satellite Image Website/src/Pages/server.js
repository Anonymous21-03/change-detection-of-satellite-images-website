const express = require('express');
const { User } = require('./db');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Register route
app.post('/api/register', async (req, res) => {
  const { email, password, username, firstName, lastName } = req.body;
  try {
    // Create a new user document
    const newUser = new User({
      email,
      password,
      username,
      firstName,
      lastName,
    });
    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(400).json({ error: error.message });
  }
});

// Handle all other routes by serving the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});