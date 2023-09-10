import React from 'react';
import { styled } from "@mui/system";
import FriendsListItem from './FriendsListItem';
import {connect} from "react-redux";

const MainContainer = styled('div')({
  flexGrow: 1,
  width: "100%"
})

function FriendsList({friends}) {
  return (
    <MainContainer>
      {friends?.map((item) => (
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