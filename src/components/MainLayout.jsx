import { useState } from "react";
import Input from "./Input";
import Menu from "./Menu";
import TopBar from "./TopBar";

export const MainLayout = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="LAYOUT flex flex-col justify-between h-lvh">
      {menuActive && <Menu />}
      <TopBar />

      <div className="LAYOUT CHILDREN flex-1">chat</div>
      <Input />
    </div>
  );
};
