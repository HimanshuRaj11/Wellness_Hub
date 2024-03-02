const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) // Add timestamp to make the filename unique
  }
});

const upload = multer({ storage: storage });

// POST endpoint for file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No files were uploaded.');
//   }
//   res.send('File uploaded successfully!');
// });


// Serve static files in the 'uploads' directory
app.use('/uploads', express.static('uploads'));

module.exports = upload;