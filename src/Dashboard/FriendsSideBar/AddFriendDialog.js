import React, { useState, useEffect } from 'react'
import { validateMail } from "../../shared/utils/validators";
import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import {connect} from "react-redux";
import { getActions } from '../../store/actions/friendsActions';

function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => { }
}) {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    // send friend request to server
    sendFriendInvitation({
      email,
    })
  }

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  }

  useEffect(() => {
    setIsFormValid(validateMail(email));
  }, [email, setIsFormValid])


  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>
            Invite A Friend
          </Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email address of friend you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter email address"
          />

        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px"
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  };
}

export default connect(null, mapActionsToProps)(AddFriendDialog)