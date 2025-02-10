import multer from 'multer';

// Configure multer to use memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Disable body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Handler function for the upload
const uploadHandler = (req, res) => {
  upload.array('files', 10)(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading files' });
    }

    // Check if files were uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    console.log('Files received:', req.files);

    // Process files here (e.g., save to a database or cloud storage)

    res.json({ message: 'Files uploaded successfully', files: req.files });
  });
};

export default uploadHandler;