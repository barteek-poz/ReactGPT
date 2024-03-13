import { useState } from "react";
import Input from "./Input";
import Menu from "./Menu";
import TopBar from "./TopBar";
import ChatWindow from "./ChatWindow";

export const MainLayout = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="LAYOUT flex flex-col justify-between h-lvh">
      {menuActive && (
        <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      )}
      <TopBar menuActive={menuActive} setMenuActive={setMenuActive} />

      <div className="LAYOUT CHILDREN flex-1">
        <ChatWindow />
      </div>
    </div>
  );
};
