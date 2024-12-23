const StackBolt = require('./managers/virtual_stack/Bolt.manager');

// Assuming you have the necessary dependencies
const mwsRepo = {
    myMiddleware: ({ req, res, results, next, end }) => {
        // Middleware logic here
        console.log("Middleware executed");
        next({ result: "some result" }); // Call next with data
    }
};

const stack = ['myMiddleware']; // Stack of middleware functions

const req = {}; // Your request object
const res = {
    end: () => console.log("Response ended")
}; // Your response object

const onDone = ({ req, res, results }) => {
    console.log("All middleware executed", results);
};

const onError = (error) => {
    console.error("Error occurred:", error);
};

// Create an instance of StackBolt
const stackBolt = new StackBolt({ mwsRepo, stack, req, res, onDone, onError });

// Start executing the stack
stackBolt.run();