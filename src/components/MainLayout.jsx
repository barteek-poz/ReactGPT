import { useState } from "react";
import Menu from "./Menu";
import TopBar from "./TopBar";
import ChatWindow from "./ChatWindow";
import { ChatContext } from "../context/ChatContext";

export const MainLayout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);

  return (
    <ChatContext.Provider
      value={{ chatHistory, setChatHistory, currentChat, setCurrentChat }}>
      <div className="LAYOUT flex flex-col justify-between h-lvh">
        {menuActive && (
          <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
        )}
        <TopBar menuActive={menuActive} setMenuActive={setMenuActive} />

        <div className="LAYOUT CHILDREN">
          <ChatWindow />
        </div>
      </div>
    </ChatContext.Provider>
  );
};
