import ROBOT_ICON from "../assets/robot.svg";
const ChatMessage = ({answer}) => {
  return (
    <div className="MESSAGE_BOX flex items-start justify-start gap-1 ml-4 mr-2 my-4">
      <img src={ROBOT_ICON} alt="user-icon" className="USER_ICON w-7 h-7" />
      <div className="MESSAGE_BG bg-cream max-w-3/4  p-3 rounded-[20px]">
        <p className="MESSAGE_TEXT text-mainBlue font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
