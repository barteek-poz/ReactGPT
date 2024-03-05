import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const response = async () => {
    const data = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: inputValue }],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });
    const res = await data.json();

    setMessage(res.choices[0].message.content);
    setMessageHistory([
      ...messageHistory,
      {
        question: inputValue,
        answer: res.choices[0].message.content,
      },
    ]);
  };
  console.log(messageHistory);
  return (
    <>
      <div>
        {messageHistory.map((msg, index) => {
          return (
            <div key={index}>
              <p className="bg-green-500">{msg.question}</p>
              <p className="bg-pink-300">{msg.answer}</p>
            </div>
          );
        })}
      </div>
      
      <input
        className="INPUT border border-black block w-1/2"
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="BUTTON border border-black p-2 px-4"
        onClick={response}>
        send
      </button>
    </>
  );
}

export default App;
