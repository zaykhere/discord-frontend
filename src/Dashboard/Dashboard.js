import { styled } from "@mui/system";
import React from "react";
import SideBar from "./Sidebar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})

const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  )
};

export default Dashboard;
