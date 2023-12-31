import io from "socket.io-client";
import store from "../store/store";
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from "../store/actions/friendsActions";

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
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  })

  socket.on("friends-list", (data) => {
    console.log("friends-list fired");
    const {friends} = data;
    console.log(friends);
    store.dispatch(setFriends(friends));
  })

  socket.on("online-users", (data) => {
    // console.log("Online users update arrived");

    const {onlineUsers} = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  })

}

export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
}