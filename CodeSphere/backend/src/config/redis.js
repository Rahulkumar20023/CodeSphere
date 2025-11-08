const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_KEY,
    socket: {
        host: '',
        port: 13258
    }
});

module.exports=redisClient;
