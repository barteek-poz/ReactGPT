export const response = async (inputValue) => {
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
      max_tokens: 1000,
    }),
  });
  const data = await res.json();
  const chatAnswer = data.choices[0].message
  return chatAnswer;
  // setMessage(res.choices[0].message.content);
  // setMessageHistory([
  //   ...messageHistory,
  //   {
  //     question: inputValue,
  //     answer: res.choices[0].message.content,
  //   },
  // ]);
};

export default response;
