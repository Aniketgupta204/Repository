const userSchema = require('./managers/entities/user/user.schema');

// Example user data to validate
const userData = {
    username: "testuser",
    // other fields can be added here
};

// Validation logic
const validationRules = userSchema.createUser ;

const errors = [];

// Check required fields
validationRules.forEach(rule => {
    if (rule.required && !userData[rule.model]) {
        errors.push(`${rule.model} is required.`);
    }
});

// Output validation results
if (errors.length > 0) {
    console.log("Validation Errors:", errors);
} else {
    console.log("User  data is valid.");
}