const express = require('express');
const paramsMiddleware = require('./mws/__params.mw');

const app = express();

// Use the params middleware
app.use(paramsMiddleware({}));

// Define a route with parameters
app.get('/user/:userId/post/:postId', (req, res) => {
    // Access the parameters passed from the middleware
    const params = req.params; // This will contain the route parameters
    res.send(`User  ID: ${params.userId}, Post ID: ${params.postId}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});