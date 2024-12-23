const config = require('./config/index.config');

// Example usage
const express = require('express');
const app = express();

app.listen(config.USER_PORT, () => {
    console.log(`Server running at http://localhost:${config.USER_PORT}/`);
});