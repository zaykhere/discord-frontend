import React, { useRef, useEffect } from 'react';
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from './MessagesHeader';
import DUMMY_MESSAGES from './data';
import Message from './Message';

const MainContainer = styled("div")({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

function Messages({ chosenChatDetails, messages }) {
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {DUMMY_MESSAGES.map((message, index) => {
        return <Message key={index} content={message.content} username={message.author.username} sameAuthor={message.sameAuthor} sameDay={message.sameDay} date={message.date} />
      })}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat
  }
}

export default connect(mapStoreStateToProps)(Messages);