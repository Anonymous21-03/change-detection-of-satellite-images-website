const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

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
      filename: String,
      contentType: String,
    });

    // Create the model
    const ImageModel = mongoose.model('sat_images_db', imageSchema);

    // Get the GridFS bucket
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);

    // Loop through the subfolders
    fs.readdirSync(folderPath).forEach((subfolder) => {
      const subfolderPath = path.join(folderPath, subfolder);
      if (fs.lstatSync(subfolderPath).isDirectory()) {
        // Loop through the files in the subfolder
        fs.readdirSync(subfolderPath).forEach((file) => {
          if (file && file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const filePath = path.join(subfolderPath, file);

            // Extract the name and year from the filename
            const fileNameParts = file.split('_');
            if (fileNameParts.length >= 2) {
              const name = fileNameParts.slice(0, -1).join('_');
              const yearPart = fileNameParts[fileNameParts.length - 1].split('.')[0];
              const year = isNaN(yearPart) ? 0 : parseInt(yearPart);

              // Read the image file
              const imageData = fs.readFileSync(filePath);

              // Create a unique filename for the image
              const filename = `${crypto.randomBytes(16).toString('hex')}.jpg`;

              // Upload the image to GridFS
              const uploadStream = bucket.openUploadStream(filename, {
                contentType: 'image/jpeg',
                metadata: {
                  year: year,
                  region: name,
                  filename: file,
                },
              });

              uploadStream.on('error', (err) => {
                console.error(`Error uploading image ${file}: ${err}`);
              });

              uploadStream.on('finish', () => {
                console.log(`Image ${file} stored successfully`);

                // Create a new document in sat_images_db
                const imageMetadata = new ImageModel({
                  year: year,
                  region: name,
                  filename: file,
                  contentType: 'image/jpeg',
                });

                // Save the image metadata
                imageMetadata.save()
                  .then(() => {
                    console.log(`Image metadata for ${file} saved successfully`);
                  })
                  .catch((err) => {
                    console.error(`Error saving image metadata for ${file}: ${err}`);
                  });
              });

              uploadStream.end(imageData);
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