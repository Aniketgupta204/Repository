const { createClient } = require('./path/to/redis-client');

// Create a Redis client
const redisClient = createClient({ 
  prefix: 'myapp', 
  url: 'redis://localhost:6379' 
});

// You can now use redisClient to perform other Redis operations