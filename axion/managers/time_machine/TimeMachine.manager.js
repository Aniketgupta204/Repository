const TimeMachine = require('./managers/time_machine/TimeMachine.manager');

// Assuming you have the necessary dependencies
const cortex = {}; // Your cortex instance
const oyster = {
    call: async (method, params) => {
        // Implement your oyster call logic here
        return {}; // Return mock data for demonstration
    }
};
const aeon = {
    call: async (params) => {
        // Implement your aeon scheduling logic here
    }
};

const timeMachine = new TimeMachine({ cortex, oyster, aeon });

// Example of removing initial score by time
timeMachine.removeInitialScoreByTime({
    createdPost: { _id: 'post123', topic: 'topic1' },
    darbId: 'darb:1',
    iterations: 5,
    interval: 1000, // 1 second
    decrease: 10
});

// Example of daily decreasing post score
timeMachine.dailyDecreasePostScore({
    darbId: 'darb:1',
    createdPost: { _id: 'post123', topic: 'topic1' },
    interval: 86400000, // 1 day in milliseconds
    iterations: 30 // 30 days
});

// Example of mixing topics
timeMachine.mixTopics({ darbId: 'darb:1' });