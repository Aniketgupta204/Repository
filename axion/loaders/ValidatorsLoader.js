const ValidatorsLoader = require('./loaders/ValidatorsLoader');

// Assuming you have the necessary models and custom validators
const models = {}; // Your models
const customValidators = {}; // Your custom validators

const validatorsLoader = new ValidatorsLoader({ models, customValidators });
const validators = validatorsLoader.load();

// Now you can use the loaded validators
const schemeName = 'exampleScheme';
const validator = validators[schemeName]['exampleValidator'];
const data = {}; // Your data to validate
validator(data).then(result => {
    console.log(result);
});