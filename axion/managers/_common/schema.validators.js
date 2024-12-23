const validators = require('./managers/_common/schema.validators');

// Example username to validate
const username = "us"; // This is too short

if (!validators.username(username)) {
    console.log("Invalid username. It must be at least 3 characters long.");
} else {
    console.log("Valid username.");
}