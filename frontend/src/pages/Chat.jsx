import React, { useState, useRef } from "react";
import {
  SendHorizonal,
  Plus,
  Mic,
  Lightbulb,
  MessageSquare,
  Rocket,
  Brain,
  Code,
  BookOpen,
  Paperclip,
} from "lucide-react";

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = { text: message, sender: "user" };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const systemPrompt = "You are GroChat GPT, a helpful chatbot.";
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: [{ text: message }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
      };

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      const botResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setChatHistory((prev) => [
        ...prev,
        { text: botResponse || "No response found.", sender: "bot" },
      ]);
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        { text: "Error: Try again later.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  // ✅ Updated handleFileChange function
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Set the input message to include the file name
    setMessage(`Attached file: ${file.name}`);

    // You could also add a temporary "sending file" message to the chat history
    // if you want immediate user feedback, but it's not necessary for this request.
    // setChatHistory((prev) => [
    //   ...prev,
    //   { text: `📎 Attached: ${file.name}`, sender: "user" },
    // ]);
  };

  const primaryGradient = "bg-gradient-to-r from-[#2563EB] to-[#10B981]";

  return (
    <div className="flex-1 flex flex-col p-4 md:p-8 overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-4">
        {chatHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
                Welcome to LogicAI GPT!
              </span>
            </h2>
            <p className="text-gray-500 mb-8">Ask me anything to get started.</p>

            {/* AI Action Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <Lightbulb size={24} className="mb-2 text-[#2563EB]" />
                <span className="text-sm text-gray-700">Brainstorm ideas</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <MessageSquare size={24} className="mb-2 text-[#2563EB]" />
                <span className="text-sm text-gray-700">Draft an email</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <Rocket size={24} className="mb-2 text-[#2563EB]" />
                <span className="text-sm text-gray-700">Write a blog post</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <BookOpen size={24} className="mb-2 text-[#2563EB]" />
                <span className="text-sm text-gray-700">Summarize a document</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <Brain size={24} className="mb-2 text-[#2563EB]" />
                <span className="text-sm text-gray-700">Explain a concept</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <Code size={24} className="mb-2 text-[#2563EB]" />
                <span className="text-sm text-gray-700">Debug code</span>
              </div>
            </div>
          </div>
        ) : (
          chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out whitespace-pre-line ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-900 rounded-br-none"
                    : "bg-green-100 text-green-900 rounded-bl-none"
                }`}
              >
                {msg.text.split("\n").map((para, i) => (
                  <p key={i} className="mb-2 last:mb-0">
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex justify-start">
            <div className="animate-pulse bg-gradient-to-br from-[#2563EB] to-[#10B981] text-white p-4 rounded-xl shadow-lg rounded-bl-none">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="w-full max-w-3xl mx-auto mt-6">
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 shadow-md">
          {/* Attach button */}
          <button
            className="p-2 rounded-full focus:outline-none mr-2"
            onClick={handleAttachClick}
          >
            <Paperclip size={20} className="text-gray-500" />
          </button>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Input field */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-gray-900 py-2 px-3 focus:outline-none w-full"
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className={`p-2 rounded-full transition-colors duration-200 ${primaryGradient}`}
          >
            <SendHorizonal size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;