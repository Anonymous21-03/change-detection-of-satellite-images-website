// server.js
const express = require('express')
const { User } = require('./db')
const cors = require('cors')
const path = require('path')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Serve the index.html file from the public folder
app.use(express.static(path.join(__dirname, 'public')))

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'..','..', 'public', 'index.html'))
})

// Register route
app.post('/api/register', async (req, res) => {
  const { email, password, username, firstName, lastName } = req.body
  try {
    // Create a new user document
    const newUser = new User({
      email,
      password,
      username,
      firstName,
      lastName
    })

    // Save the new user to the database
    await newUser.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error('Registration failed:', error)
    res.status(400).json({ error: error.message })
  }
})

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  try {
    // Find the user in the database
    const user = await User.findOne({ username, password })
    if (user) {
      // User is authenticated
      res
        .status(200)
        .json({ message: 'Login successful', username: user.username })
    } else {
      // User is not authenticated
      res.status(401).json({ message: 'Invalid username or password' })
    }
  } catch (error) {
    console.error('An error occurred:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
