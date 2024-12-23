const ManagersLoader = require('./loaders/ManagersLoader');

// Assuming you have the necessary dependencies
const config = {}; // Your configuration object
const cortex = {}; // Your cortex object
const cache = {}; // Your cache object
const oyster = {}; // Your oyster object
const aeon = {}; // Your aeon object

const managersLoader = new ManagersLoader({ config, cortex, cache, oyster, aeon });
const managers = managersLoader.load();

// Now you can use the loaded managers
managers.userApi.someMethod();