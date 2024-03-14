import { useState } from "react";
import ChatMessage from "./ChatMessage";
import Input from "./Input";
import UserMessage from "./UserMessage";

const ChatWindow = () => {
  const [message, setMessage] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);

  console.log(messageHistory);
  return (
    <div>
      {messageHistory.length > 0 &&
        messageHistory.map((message, index) => {
          return (
            <div key={index}>
              <UserMessage question={message.question} />
              <ChatMessage answer={message.answer} />
            </div>
          );
        })}

      <Input
        setMessage={setMessage}
        messageHistory={messageHistory}
        setMessageHistory={setMessageHistory}
      />
    </div>
  );
};

export default ChatWindow;
