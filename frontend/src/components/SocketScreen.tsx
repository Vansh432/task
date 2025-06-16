import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function SocketScreen() {
  useEffect(() => {
    const socket = io('http://localhost:7000', {
      auth: {
        token: localStorage.getItem('token')
      }
    });

    socket.on('connect', () => {
      console.log('Connected to socket:', socket.id);
    });

    socket.on('binary-event', (data: ArrayBuffer) => {
      console.log('Received binary:', new Uint8Array(data));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div><h2>Socket Connected (check console)</h2></div>;
}
