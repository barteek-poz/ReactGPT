import { useContext } from "react";
import ChatMessage from "./ChatMessage";
import Input from "./Input";
import UserMessage from "./UserMessage";
import { ChatContext } from "../context/ChatContext";

const ChatWindow = () => {
  const ctx = useContext(ChatContext);

  return (
    <div>
      {ctx.currentChat.length > 0 &&
        ctx.currentChat.map((message, index) => {
          return (
            <div key={index}>
              <UserMessage question={message.question} />
              <ChatMessage answer={message.answer} />
            </div>
          );
        })}

      <Input />
    </div>
  );
};

export default ChatWindow;
