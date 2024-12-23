const LiveDbManager = require('./managers/live_db/LiveDb.manager');

// Assuming you have a Cortex instance
const cortex = {
    sub: (event, callback) => {
        // Implement your subscription logic here
    },
    AsyncEmitToAllOf: ({type, call, args}) => {
        // Implement your publish logic here
    },
    nodeType: 'exampleNodeType'
};

const liveDb = new LiveDbManager({ cortex });

// Adding an item to the LiveDB
liveDb.db('configurations').add({ key: 'theme', value: 'dark', exp: 3600 });

// Retrieving an item from the LiveDB
const theme = liveDb.db('configurations').get({ key: 'theme' });
console.log("Current Theme:", theme);

// Deleting an item from the LiveDB
liveDb.db('configurations').delete({ key: 'theme' });