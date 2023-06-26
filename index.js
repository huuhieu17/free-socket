const WebSocket = require('ws');
var express = require("express");
const app = express();
const server = app.listen(8080, () => {
  console.log("Server started on port 8080");
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
