import { useState } from "react";

const ELIZA_AGENT_URL =
  process.env.NEXT_PUBLIC_ELIZA_AGENT_URL || "http://localhost:3001";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm your Donation Assistant. Ask me about causes, how this works, or donation impact.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    const aiReply = await getAIResponse(input);
    setMessages([...newMessages, { sender: "bot", text: aiReply }]);

    setInput("");
  };

  const getAIResponse = async (prompt) => {
    try {
      const res = await fetch(`${ELIZA_AGENT_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      return data.reply || "I'm not sure how to answer that.";
    } catch (err) {
      console.error(err);
      return "ElizaOS is currently unavailable.";
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
          placeholder="Ask me anything about donations..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
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
