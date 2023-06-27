const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: server, path: "/ws" });

wss.on('connection', (socket) => {
  console.log('Client connected');
  
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
  
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Listening on port 8080');
});
