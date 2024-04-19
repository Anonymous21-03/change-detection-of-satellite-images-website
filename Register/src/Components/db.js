const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Satellite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = mongoose.model('User', userSchema, 'Login_Detail');

module.exports = { User };