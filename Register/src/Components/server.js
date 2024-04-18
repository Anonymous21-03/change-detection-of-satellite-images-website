const express = require('express');
const { User } = require('./db');

const app = express();
app.use(express.json());

app.post('/api/register', async (req, res) => {
  try {
    const { email, password, username, firstName, lastName } = req.body;
    const user = new User({ email, password, username, firstName, lastName });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});