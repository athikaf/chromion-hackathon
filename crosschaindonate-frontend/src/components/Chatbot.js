import { useState } from "react";
import Eliza from "elizaos";

const eliza = new Eliza({ apiKey: process.env.NEXT_PUBLIC_ELIZA_API_KEY });

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Ask me about donation causes or how this works.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const aiReply = await getAIResponse(input);
    setMessages((prev) => [...prev, { sender: "bot", text: aiReply }]);

    setInput("");
  };

  const getAIResponse = async (prompt) => {
    try {
      const response = await eliza.chat({ prompt });
      return response.reply || "I don't have an answer for that.";
    } catch (err) {
      console.error(err);
      return "Oops, AI agent is currently unavailable.";
    }
  };

  return (
    <div className="p-4 border mt-4 rounded-xl bg-white">
      <h2 className="font-bold mb-2">AI Donation Assistant</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2 bg-gray-50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-1 ${
              m.sender === "bot" ? "text-blue-600" : "text-black"
            }`}
          >
            <strong>{m.sender === "bot" ? "AI:" : "You:"}</strong> {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          value={input}
          placeholder="Ask a question..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
