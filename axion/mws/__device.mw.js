const express = require('express');
const deviceMiddleware = require('./mws/__device.mw');

const app = express();

// Use the device middleware
app.use(deviceMiddleware({}));

app.get('/some-route', (req, res) => {
    // Access the device information from the request object
    const deviceInfo = req.device; // Assuming you attach it to req in the middleware
    res.send(`Device Info: ${JSON.stringify(deviceInfo)}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});