import {  useState } from "react";
import ChatMessage from "./ChatMessage";
import Input from "./Input";
import UserMessage from "./UserMessage";

const ChatWindow = () => {
  const [message, setMessage] = useState(null);
  const [messageHistory, setMessageHistory] = useState();

  
  console.log(message);
  return (
    <div>
      <UserMessage />
      <ChatMessage />
      <Input
      />
    </div>
  );
};

export default ChatWindow;
