import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  socket = io('http://localhost:5000', {
    auth: {
      token: jwtToken
    }
  });

  socket.on('connect', () => {
    console.log("Successfully connected with socket server");

    console.log(socket.id);
  })
}