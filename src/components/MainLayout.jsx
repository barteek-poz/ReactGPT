import { useState } from "react";
import Menu from "./Menu";
import TopBar from "./TopBar";
import ChatWindow from "./ChatWindow";
import { ChatContext } from "../context/ChatContext";
import { useMobile } from "../hooks/useMobile";

export const MainLayout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
const widowWidth = useMobile()

  return (
    <ChatContext.Provider
      value={{ chatHistory, setChatHistory, currentChat, setCurrentChat }}>
      <div className="LAYOUT flex flex-col lg:flex-row  justify-between h-lvh">
        {widowWidth.screenWidth < 1024 ? menuActive && (
          <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
        ) : <Menu menuActive={menuActive} setMenuActive={setMenuActive} />}
        <div className="flex flex-col flex-1 justify-between ">
          <TopBar menuActive={menuActive} setMenuActive={setMenuActive} />

          <div className="LAYOUT CHILDREN">
            <ChatWindow />
          </div>
        </div>
      </div>
    </ChatContext.Provider>
  );
};
