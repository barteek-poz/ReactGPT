import CLOSE_ICON from "../assets/close.svg";
import ADD_ICON from "../assets/add.svg";
import CHAT_ICON from "../assets/chat.svg";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const Menu = ({ menuActive, setMenuActive }) => {
  const ctx = useContext(ChatContext);

  const chatTitles = Array.from(
    new Set(ctx.chatHistory.map((chat) => chat.title))
  );
  const newChatHandler = () => {
    ctx.setCurrentChat([]);
    setMenuActive(false);
  };

  const previousChatHandler = (title) => {
    const filteredMessages = ctx.chatHistory.filter((chat) => {
      return chat.title === title;
    });
    ctx.setCurrentChat(filteredMessages);
    setMenuActive(false);
  };

  return (
    
    <div className="MENU OVERLAY fixed lg:relative w-lvw bg-blur animate-slideIn lg:w-80">
      <div className="MENU w-80 min-h-lvh bg-cream flex flex-col items-start gap-10 p-4 text-mainBlue ">
        <button
          onClick={() => {
            setMenuActive(!menuActive);
          }}
          className="MENU BTN self-end lg:hidden">
          <img
            src={CLOSE_ICON}
            alt="close-icon"
            className="CLOSE ICON w-6 h-6"
          />
        </button>
        <button
          onClick={newChatHandler}
          className="ADD BTN mx-auto flex items-center justify-center text-lg w-64 h-10 border border-mainBlue rounded-[20px] mt-6 lg:mt-10">
          Add new chat
          <img src={ADD_ICON} alt="add-icon" className="w-5 ml-1" />
        </button>
        <div className="CONVERSATIONS BOX flex flex-col gap-8">

          {chatTitles?.map((title, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  previousChatHandler(title);
                }}
                className="CONVERSATION flex items-center gap-2">
                <img src={CHAT_ICON} alt="chat-icon" className="w-5" /> {title}
              </button>
            );
          })}
        </div>

       
      </div>
     </div>
  );
};

export default Menu;
