const MiddlewareLoader = require('./loaders/MiddlewaresLoader');

// Assuming you have the necessary injectable dependencies
const injectable = {
    utils: {}, // Your utility functions
    cache: {}, // Your cache object
    config: {}, // Your configuration object
    // Add other dependencies as needed
};

const middlewareLoader = new MiddlewareLoader(injectable);
const middlewares = middlewareLoader.load();

// Now you can use the loaded middlewares
middlewares.forEach(middleware => {
    // Assuming each middleware is a function that can be executed
    app.use(middleware); // Example usage with an Express app
});