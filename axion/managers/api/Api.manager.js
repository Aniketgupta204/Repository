const ApiHandler = require('./managers/api/Api.manager');

// Assuming you have the necessary dependencies
const config = {}; // Your configuration object
const cortex = {}; // Your Cortex instance
const cache = {}; // Your cache object
const managers = {}; // Your managers object
const mwsRepo = {}; // Your middleware repository
const prop = 'exposedMethods'; // The property key to scan for exposed methods

const apiHandler = new ApiHandler({ config, cortex, cache, managers, mwsRepo, prop });

// Now you can use the apiHandler instance to handle API requests