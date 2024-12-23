const VirtualStack = require('./virtual_stack/VirtualStack.manager');
const Bolt = require('./virtual_stack/Bolt.manager');

// Example middleware functions
const mwsRepo = {
    middleware1: ({ req, res, next }) => {
        console.log("Middleware 1 executed");
        next();
    },
    middleware2: ({ req, res, next }) => {
        console.log("Middleware 2 executed");
        next();
    },
    middleware3: ({ req, res, next }) => {
        console.log("Middleware 3 executed");
        next();
    }
};

// Predefined middleware to run before the main stack
const preStack = ['middleware1'];

// Create an instance of VirtualStack
const virtualStack = new VirtualStack({ mwsRepo, preStack });

// Create a bolt with a specific stack
const bolt = virtualStack.createBolt({
    stack: ['middleware2', 'middleware3'],
    req: {}, // Your request object
    res: { end: () => console.log("Response ended") }, // Your response object
    onDone: ({ req, res }) => {
        console.log("All middleware executed");
        res.end();
    },
    onError: (error) => {
        console.error("Error occurred:", error);
    }
});

// Start executing the stack
bolt.run();