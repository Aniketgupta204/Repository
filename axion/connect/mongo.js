const connectToMongo = require('./connect/mongo');

// Replace with your actual MongoDB URI
const mongoURI = 'mongodb://localhost:27017/myapp';

connectToMongo({ uri: mongoURI });

// Your application logic here