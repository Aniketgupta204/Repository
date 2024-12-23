const SharkFin = require('./managers/shark_fin/SharkFin.manager');

// Assuming you have the necessary dependencies
const config = {};
const layers = {}; // Define your layers
const actions = { read: 1, write: 2 }; // Define your actions with ranks
const cache = {};
const managers = {
    contentToken: {}, // Your content token manager
};
const utils = {}; // Your utility functions
const oyster = {
    call: async (method, params) => {
        // Implement your oyster call logic here
        return {}; // Return mock data for demonstration
    }
};

const sharkFin = new SharkFin({ config, layers, actions, cache, managers, utils, oyster });

// Example of checking if a user is granted access
(async () => {
    const isGranted = await sharkFin.isGranted({
        layer: 'some.layer',
        variant: 'default',
        userId: 'user123',
        nodeId: 'node456',
        action: 'read',
        isOwner: false,
    });
    console.log("Access Granted:", isGranted);
})();