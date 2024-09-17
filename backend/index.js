const express = require("express");
const app = express();
const http = require("http");
const PORT = process.env.PORT || 5000;

const WebSocket = require("ws");

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection");

  ws.on("message", (message) => {
    console.log("Received:", message);
    ws.send("Hello from server!");
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const sequelize = require("./config/database");

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));
