import React, { useState } from 'react';
import {styled} from '@mui/system';
import { connect } from 'react-redux';
import { sendDirectMessage } from '../../realtimeCommunication/socketConnection';

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const Input = styled("input")({
  background: '#2f3136',
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px"
});

function NewMessageInput({ chosenChatDetails }) {
  const [message, setMessage] = useState("");

  function handleMessageValueChange(e) {
    setMessage(e.target.value);
  }

  function handleKeyPressed(e) {
    if(e.key === "Enter") {
      handleSendMessage();
    }
  }

  const handleSendMessage = () => {
    console.log("Sending message to the server");
    if(message.length > 0) {
      sendDirectMessage({
        receiverId: chosenChatDetails.id,
        content: message
      })
    }
    setMessage("");
  }


  return (
    <MainContainer>
      <Input placeholder={`Write a message to ${chosenChatDetails?.name}`}
      value={message} onChange={handleMessageValueChange} onKeyDown={handleKeyPressed} />
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat
  };
}

export default connect(mapStoreStateToProps)(NewMessageInput);