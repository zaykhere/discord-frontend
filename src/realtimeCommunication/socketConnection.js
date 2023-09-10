import io from "socket.io-client";
import store from "../store/store";
import { setPendingFriendsInvitations } from "../store/actions/friendsActions";

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

  socket.on("friends-invitations", (data) => {
    const {pendingInvitations} = data;
    console.log('friends invitations event');

    console.log(pendingInvitations);

    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  })

}