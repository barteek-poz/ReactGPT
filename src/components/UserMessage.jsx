import USER_ICON from "../assets/user.svg";
const UserMessage = () => {
  return (
    <div className="MESSAGE_BOX flex items-start justify-end gap-1 mr-4 ml-2 my-4">
      
      <div className="MESSAGE_BG bg-mainBlue max-w-3/4  p-3 rounded-[20px]">
        <p className="MESSAGE_TEXT text-white font-light">
          What should I eat in Oslo?
        </p>
      </div>
      <img src={USER_ICON} alt="user-icon" className="USER_ICON w-7 h-7" />
    </div>
  );
};

export default UserMessage;
