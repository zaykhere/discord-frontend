import React from 'react';
import { styled } from "@mui/system";
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
})

function PendingInvitationsList({pendingFriendsInvitations}) {
  return (
    <MainContainer>
      {pendingFriendsInvitations?.map((item) => (
        <PendingInvitationsListItem
          key={item._id}
          id={item._id}
          username={item.senderId.username}
          email={item.senderId.email}
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

export default connect(mapStoreStateToProps)(PendingInvitationsList)