import { useState } from "react";
import SEND_ICON from "../assets/send.svg";

export const Input = ({ messageHistory, setMessageHistory, setMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const responseHandler = async (e) => {
    e.preventDefault()
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
    setMessage(data.choices[0].message.content);
    setMessageHistory([
      ...messageHistory,
      {
        question: inputValue,
        answer: data.choices[0].message.content,
      },
    ]);
    setInputValue('')
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
