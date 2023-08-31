import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
  cursor: "pointer"
};

function AddFriendButton() {
  function handleOpenAddFriendDialog() {}

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
    </>
  )
}

export default AddFriendButton