const ResourceMeshLoader = require('./loaders/ResourceMeshLoader');

// Assuming you have the necessary injectable dependencies
const injectable = {
    utils: {}, // Your utility functions
    cache: {}, // Your cache object
    config: {}, // Your configuration object
    // Add other dependencies as needed
};

const resourceMeshLoader = new ResourceMeshLoader(injectable);
const resourceNodes = resourceMeshLoader.load();

// Now you can use the loaded resource nodes
console.log(resourceNodes);