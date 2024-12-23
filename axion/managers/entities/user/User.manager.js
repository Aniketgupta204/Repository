const User = require('./managers/entities/user/User.manager');

// Assuming you have the necessary dependencies
const config = {}; // Your configuration object
const cortex = {}; // Your Cortex instance
const validators = {
    user: {
        create:User  async (user) => {
            // Implement your validation logic here
            // Return an error if validation fails, otherwise return null
            return null; // Assuming validation passes
        }
    }
};
const managers = {
    token: {
        genLongToken: ({ userId, userKey }) => {
            // Implement your token generation logic here
            return 'generated_long_token';
        }
    }
};

const userManager = new User({ config, cortex, validators, managers });

// Create a new user
userManager.createUser ({ username: 'testuser', email: 'test@example.com', password: 'securepassword' })
    .then(response => {
        console.log("User  Created:", response);
    })
    .catch(error => {
        console.error("Error creating user:", error);
    });