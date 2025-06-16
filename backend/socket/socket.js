import { Server } from 'socket.io';
import crypto from '../utils/crypto.js';

export const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: "*" },
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth?.token;
    if (token) return next(); // Add real token validation here
    return next(new Error("Unauthorized"));
  });

  io.on('connection', (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on('binary-data', (encrypted) => {
      const decrypted = crypto.decrypt(encrypted);
      console.log("Decrypted message:", decrypted);
    });

    socket.on('disconnect', () => {
      console.log("Disconnected:", socket.id);
    });
  });
};
