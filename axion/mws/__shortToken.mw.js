const express = require('express');
const shortTokenMiddleware = require('./mws/__shortToken.mw');

const app = express();

// Mock managers for demonstration
const managers = {
    token: {
        verifyShortToken: ({ token }) => {
            // Implement your token verification logic here
            // For example, using jsonwebtoken to verify the token
            if (token === 'valid-short-token') {
                return { userId: '123', userKey: 'user_key' }; // Mock decoded token
            }
            return null; // Invalid token
        }
    },
    responseDispatcher: {
        dispatch: (res, { ok, code, errors }) => {
            res.status(code).json({ ok, errors });
        }
    }
};

// Use the short token middleware
app.use(shortTokenMiddleware({ managers }));

app.get('/protected-route', (req, res) => {
    // Access the decoded token from the request
    const decodedToken = req.decoded; // Assuming you attach it to req in the middleware
    res.send(`Access granted for user: ${JSON.stringify(decodedToken)}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});