import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:5000');

  socket.on('connect', () => {
    console.log("Successfully connected with socket server");

    console.log(socket.id);
  })
}