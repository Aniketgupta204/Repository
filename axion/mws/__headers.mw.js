const express = require('express');
const headersMiddleware = require('./mws/__headers.mw');

const app = express();

// Use the headers middleware
app.use(headersMiddleware({}));

app.get('/some-route', (req, res) => {
    // Access the headers passed from the middleware
    const headers = req.headers; // This will contain the original headers
    res.send(`Request Headers: ${JSON.stringify(headers)}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});