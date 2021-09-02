import React from "react";
import "../styles/chat.scss";
import Navigation from "../components/Navigation";
import Nav from "../components/chat/nav/Nav";
import ChatList from "../components/chat/chatList/ChatList";

function Listchat() {
  return (
    <div>
      <Navigation />
      <div className="__main">
          <Nav />
          <ChatList />
      </div>
    </div>
  );
}

export default Listchat;