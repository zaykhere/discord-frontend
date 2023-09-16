import React, {useEffect} from 'react';
import {styled} from "@mui/system";
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';

const Wrapper = styled('div')({
  flexGrow: 1,
})

function MessengerContent({chosenChatDetails}) {
  useEffect(() => {
    //TODO: Fetch chat history for a specific userId
  }, [chosenChatDetails])
  

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  )
}

export default MessengerContent