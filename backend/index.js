import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import { initSocket } from './socket/socket.js';
import { rateLimitMiddleware } from './middlewares/rateLimiter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(rateLimitMiddleware);

connectDB();
app.use("/api/auth", authRoutes);

const server = http.createServer(app);
initSocket(server);

server.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
