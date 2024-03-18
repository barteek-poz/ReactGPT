import { useContext, useState } from "react";
import SEND_ICON from "../assets/send.svg";
import { ChatContext } from "../context/ChatContext";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const ctx = useContext(ChatContext);

  const titleHandler = () => {
    if (ctx.currentChat.length === 0) {
      return inputValue;
    } else {return ctx.currentChat[0].title}
  };

  const responseHandler = async (e) => {
    e.preventDefault();
    if (inputValue.length !== 0) {
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputValue }],
            temperature: 0.7,
            max_tokens: 100,
          }),
        });
        const data = await res.json();
        ctx.setCurrentChat([
          ...ctx.currentChat,
          {
            title: titleHandler(),
            question: inputValue,
            answer: data.choices[0].message.content,
          },
        ]);
        ctx.setChatHistory([
          ...ctx.chatHistory,
          {
            title: titleHandler(),
            question: inputValue,
            answer: data.choices[0].message.content,
          },
        ]);
      } catch (err) {
        alert(err);
      }
      setInputValue("");
    }
  };
 
  return (
    <form
      onSubmit={responseHandler}
      className="INPUT_DIV flex mx-auto mb-4 justify-between min-w-80 w-1/3 max-h-40  border border-mainBlue rounded-[20px] px-4">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Send a message..."
        className="INPUT max-h-40 p-2 resize-none flex-1 outline-none overflow-y-hidden"
      />
      <button type="submit" className="INPUT_BTN cursor-pointer">
        <img src={SEND_ICON} alt="send-icon" />
      </button>
    </form>
  );
};

export default Input;
