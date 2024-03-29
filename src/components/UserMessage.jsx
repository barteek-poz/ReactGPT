import USER_ICON from "../assets/user.svg";
const UserMessage = ({question}) => {
  return (
    <div className="MESSAGE_BOX flex items-start justify-end 2xl:justify-center gap-1 mr-4 ml-2 my-4">
      
      <div className="MESSAGE_BG bg-mainBlue max-w-3/4  p-3 rounded-[20px] 2xl:order-2">
        <p className="MESSAGE_TEXT text-white font-light">
          {question}
        </p>
      </div>
      <img src={USER_ICON} alt="user-icon" className="USER_ICON w-7 h-7 2xl:order-1" />
    </div>
  );
};

export default UserMessage;
