const loadFiles = require('./loaders/_common/fileLoader');

// Load all JavaScript files in the 'controllers' directory
const controllers = loadFiles('./controllers/*.js');

// Now you can access your controllers by their filenames
console.log(controllers);