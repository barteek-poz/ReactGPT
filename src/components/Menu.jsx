import CLOSE_ICON from "../assets/close.svg";
import ADD_ICON from "../assets/add.svg";
import CHAT_ICON from "../assets/chat.svg";
import SAVE_ICON from "../assets/save.svg";

export const Menu = () => {
  return (
    <div className="MENU OVERLAY absolute w-lvw  bg-blur">
      <div className="MENU relative w-80 min-h-lvh bg-cream flex flex-col gap-10 p-4 text-mainBlue">
        <button className="MENU BTN self-end">
          <img
            src={CLOSE_ICON}
            alt="close-icon"
            className="CLOSE ICON w-6 h-6"
          />
        </button>
        <button className="ADD BTN flex items-center justify-center text-lg w-64 h-10 border border-mainBlue rounded-2xl mt-6">
          Add new chat
          <img src={ADD_ICON} alt="add-icon" className="w-5 ml-1" />
        </button>
        <div className="CONVERSATIONS BOX flex flex-col gap-8">
          <button className="CONVERSATION flex items-center gap-2">
            <img src={CHAT_ICON} alt="chat-icon" className="w-5" /> What to eat
            in Oslo?
          </button>
          <button className="CONVERSATION flex items-center gap-2">
            <img src={CHAT_ICON} alt="chat-icon" className="w-5" /> What to eat
            in Oslo?
          </button>
          <button className="CONVERSATION flex items-center gap-2">
            <img src={CHAT_ICON} alt="chat-icon" className="w-5" /> What to eat
            in Oslo?
          </button>
          <button className="CONVERSATION flex items-center gap-2">
            <img src={CHAT_ICON} alt="chat-icon" className="w-5" /> What to eat
            in Oslo?
          </button>
          <button className="CONVERSATION flex items-center gap-2">
            <img src={CHAT_ICON} alt="chat-icon" className="w-5" /> What to eat
            in Oslo?
          </button>
          <button className="CONVERSATION flex items-center gap-2">
            <img src={CHAT_ICON} alt="chat-icon" className="w-5" /> What to eat
            in Oslo?
          </button>
        </div>

        <button className="SAVED flex-1  flex items-end gap-2">
          <img src={SAVE_ICON} alt="chat-icon" className="w-7" /> Saved
        </button>
      </div>
    </div>
  );
};

export default Menu;
