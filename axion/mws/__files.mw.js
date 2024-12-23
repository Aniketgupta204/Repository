const express = require('express');
const fileMiddleware = require('./mws/__files.mw');

const app = express();

// Assuming you have a file manager that handles uploads
const managers = {
    fm: {
        upload: async (req, res) => {
            // Implement your file upload logic here
            // For example, using multer or another file upload library
            // This is a placeholder for demonstration
            req.files = [{ filename: 'example.txt' }]; // Mock uploaded file
        }
    }
};

// Use the file upload middleware
app.use(fileMiddleware({ managers }));

app.post('/upload', (req, res) => {
    // Access the uploaded files from req.files
    const uploadedFiles = req.files;
    res.send(`Uploaded Files: ${JSON.stringify(uploadedFiles)}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});