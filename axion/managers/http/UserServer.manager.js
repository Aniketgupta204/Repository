const UserServer = require('./managers/http/UserServer.manager');

// Assuming you have the necessary configuration and managers
const config = {
    dotEnv: {
        USER_PORT: 3000,
        SERVICE_NAME: 'User  Service',
    }
};

const managers = {
    userApi: {
        mw: (req, res, next) => {
            // Implement your middleware logic here
            res.send('User  API Middleware');
        }
    }
};

const userServer = new UserServer({ config, managers });
userServer.run();