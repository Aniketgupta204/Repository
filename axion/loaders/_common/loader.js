const loadFiles = require('./loaders/_common/loader');

// Load all JavaScript files in the 'controllers' directory
const controllers = loadFiles('./controllers/*.js');

// Now you can use the loaded controllers
controllers.forEach(controller => {
    // Assuming each controller exports a function
    controller();
});