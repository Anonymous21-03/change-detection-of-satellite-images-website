const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Satellite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Define the path to the folder containing the subfolders
    const folderPath = 'C:\\Users\\rahul\\OneDrive\\Desktop\\Jaypee Assignments\\Sem 6\\Minor\\change detection\\Website\\Monitoring-of-satellite-images\\Satellite Image Website\\src\\Data';

    // Define the schema for the image metadata
    const imageSchema = new mongoose.Schema({
      year: Number,
      region: String,
      imageData: Buffer, // Store the image data as a Buffer
    });

    // Create the model
    const ImageModel = mongoose.model('change_detection_image', imageSchema);

    // Loop through the subfolders
    fs.readdirSync(folderPath).forEach((subfolder) => {
      const subfolderPath = path.join(folderPath, subfolder);
      if (fs.lstatSync(subfolderPath).isDirectory()) {
        // Loop through the files in the subfolder
        fs.readdirSync(subfolderPath).forEach((file) => {
          if (file && (file.endsWith('.jpg') || file.endsWith('.jpeg'))) {
            const filePath = path.join(subfolderPath, file);

            // Extract the name and year from the filename
            const fileNameParts = file.split('_');
            if (fileNameParts.length >= 2) {
              const name = fileNameParts.slice(0, -1).join('_');
              const yearPart = fileNameParts[fileNameParts.length - 1].split('.')[0];
              const year = isNaN(yearPart) ? 0 : parseInt(yearPart);

              // Read the image file
              const imageData = fs.readFileSync(filePath);

              // Create a new document in change_detection_image
              const imageMetadata = new ImageModel({
                year: year,
                region: name,
                imageData: imageData, // Store the image data directly
              });

              // Save the image metadata
              imageMetadata.save()
                .then(() => {
                  console.log(`Image metadata for ${file} saved successfully`);
                })
                .catch((err) => {
                  console.error(`Error saving image metadata for ${file}: ${err}`);
                });
            } else {
              console.warn(`Skipping file ${file} due to incorrect filename format`);
            }
          }
        });
      }
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });