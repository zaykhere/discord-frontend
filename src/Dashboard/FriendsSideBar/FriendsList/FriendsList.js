import React from 'react';
import { styled } from "@mui/system";
import FriendsListItem from './FriendsListItem';
import {connect} from "react-redux";

const MainContainer = styled('div')({
  flexGrow: 1,
  width: "100%"
})

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  })

  return friends;
}

function FriendsList({friends, onlineUsers}) {
  console.log({onlineUsers});

  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers)?.map((item) => (
        <FriendsListItem
          username={item.username}
          id={item.id}
          key={item.id}
          isOnline={item.isOnline}
        />
      ))}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({friends}) => {
  return {
    ...friends
  }
}

export default connect(mapStoreStateToProps)(FriendsList)