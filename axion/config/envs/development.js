const config = require('./config/envs/development');

// Example usage
const express = require('express');
const app = express();

app.listen(config.server.port, config.server.host, () => {
    console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
});