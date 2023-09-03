import * as api from "../../api";
import {openAlertMessage} from "./alertActions";

export const friendActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATION: 'FRIENDS.SET_PENDING_FRIENDS_INVITATION',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS'
}

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) => {
      dispatch(sendFriendInvitation(data, closeDialogHandler));
    }
  };
}

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if(response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    }

    else {
      dispatch(openAlertMessage("Invitation has been sent"));
      closeDialogHandler();
    }

  }
}