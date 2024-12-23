const TokenManager = require('./managers/token/Token.manager');

// Assuming you have a configuration object with the necessary secrets
const config = {
    dotEnv: {
        LONG_TOKEN_SECRET: 'your_long_token_secret',
        SHORT_TOKEN_SECRET: 'your_short_token_secret',
    }
};

const tokenManager = new TokenManager({ config });

// Generate a long token
const longToken = tokenManager.genLongToken({ userId: '123', userKey: 'user_key' });
console.log("Long Token:", longToken);

// Verify the long token
const verifiedLongToken = tokenManager.verifyLongToken({ token: longToken });
console.log("Verified Long Token:", verifiedLongToken);

// Generate a short token
const shortToken = tokenManager.v1_createShortToken({
    __longToken: verifiedLongToken, // This should be the decoded long token
    __device: 'device_identifier'
});
console.log("Short Token:", shortToken);