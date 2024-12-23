const MongoLoader = require('./loaders/MongoLoader');

// Specify the schema extension you want to load
const schemaExtension = 'mongoModel.js'; // Example extension

const mongoLoader = new MongoLoader({ schemaExtension });
const models = mongoLoader.load();

// Now you can use the loaded models
console.log(models);