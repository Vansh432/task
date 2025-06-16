import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'redis';

const redisClient = Redis.createClient({
  legacyMode: true,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

await redisClient.connect().catch(console.error);

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 10,
  duration: 60,
});

export const rateLimitMiddleware = (req, res, next) => {
  rateLimiter.consume(req.ip)
    .then(() => next())
    .catch(() => res.status(429).json({ error: 'Too Many Requests' }));
};
