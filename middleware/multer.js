const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/uploads'); // Directory where files will be saved
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter for videos and PDFs
const fileFilter = (req, file, cb) => {
  const allowedTypes = /mp4|mkv|avi|pdf/; // Allowed file extensions
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only video and PDF files are allowed!')); // Reject the file
  }
};

// Multer upload instance
const upload = multer({
  storage: storage,
  limits: { fileSize: 200 * 1024 * 1024 }, // Max file size: 200 MB
  fileFilter: fileFilter,
});

module.exports = upload;