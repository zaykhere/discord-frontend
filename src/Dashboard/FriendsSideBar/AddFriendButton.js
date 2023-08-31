import React, {useState} from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
  cursor: "pointer"
};

function AddFriendButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleOpenAddFriendDialog() {
    setIsDialogOpen(true);
  }

  function handleCloseAddFriendDialog() {
    setIsDialogOpen(false);
  }

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  )
}

export default AddFriendButton