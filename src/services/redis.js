const Redis = require('ioredis');
const redisClient = new Redis(process.env.REDIS_URL);

module.exports = redisClient;
