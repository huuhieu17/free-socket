const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: server, path: "/ws" });

app.get('/', (req, res) => {
  res.send('Event : "updateTime" - send message per 2second ');
})

wss.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
  
  socket.on('close', () => {
    console.log('Client disconnected');
  });

  setInterval(() => {
  socket.send(Date.now())
}, 2000);
});





server.listen(port, () => {
  console.log('Listening on port 8080');
});
