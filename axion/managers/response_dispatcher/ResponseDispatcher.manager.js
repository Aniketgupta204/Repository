const ResponseDispatcher = require('./managers/response_dispatcher/ResponseDispatcher.manager');

const responseDispatcher = new ResponseDispatcher();

// Example Express route handler
app.get('/example', (req, res) => {
    // Simulate a successful operation
    const data = { exampleKey: 'exampleValue' };
    responseDispatcher.dispatch(res, { ok: true, data });
});

// Example of handling an error
app.get('/error', (req, res) => {
    const errors = ['An error occurred'];
    responseDispatcher.dispatch(res, { ok: false, errors, message: 'Failed to retrieve data' });
});