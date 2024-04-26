// fetch_img_server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Satellite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for the image metadata
const imageSchema = new mongoose.Schema({
  year: Number,
  region: { type: String, lowercase: true },
  imageData: Buffer, // Store the image data as a Buffer
});

// Create the model
const ImageModel = mongoose.model('change_detection_image', imageSchema);

// API endpoint to fetch image data
app.get('/api/images', async (req, res) => {
  const { year, region } = req.query;

  try {
    console.log(`Fetching image data for year ${year} and region ${region}`);
    const imageData = await ImageModel.findOne({ year, region: region.toLowerCase() });

    if (imageData) {
      console.log('Image data found:', imageData);
      res.json({ imageData: imageData.imageData.toString('base64') });
    } else {
      console.log('Image data not found');
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    console.error('Error fetching image data:', error);
    res.status(500).json({ error: 'Error fetching image data' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});