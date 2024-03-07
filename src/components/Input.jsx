import SEND_ICON from "../assets/send.svg";
export const Input = () => {
  return (
    <div className="INPUT_DIV flex mx-auto mb-4 justify-between min-w-80 w-1/3 max-h-40  border border-mainBlue rounded-2xl px-4">
      <input type="text" placeholder="Send a message..." className="INPUT max-h-40 p-2 resize-none flex-1 outline-none overflow-y-hidden" />
      <button className="INPUT_BTN cursor-pointer">
        <img src={SEND_ICON} alt="send-icon" />
      </button>
    </div>
  );
};

export default Input;
