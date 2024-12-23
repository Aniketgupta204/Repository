const express = require('express');
const queryMiddleware = require('./mws/__query.mw');

const app = express();

// Use the query middleware
app.use(queryMiddleware({}));

// Define a route that uses query parameters
app.get('/search', (req, res) => {
    // Access the query parameters passed from the middleware
    const queryParams = req.query; // This will contain the query parameters
    res.send(`Search Query: ${JSON.stringify(queryParams)}`);
});
