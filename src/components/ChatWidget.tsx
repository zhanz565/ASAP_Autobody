"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Pre-load the initial greeting using OpenAI's format (role & content)
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I am the ASAP Virtual Assistant. Are you looking to book an estimate or check on an existing repair? \n\n你好！我是ASAP虚拟助手。您是想预约估价还是查询现有维修进度？"
    }
  ]);

  // Auto-scroll to the bottom when a new message appears
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText("");
    setIsTyping(true);

    // 1. Add User Message to UI instantly
    const newMessages = [...messages, { id: Date.now(), role: "user", content: userText }];
    setMessages(newMessages);

    try {
      // 2. Send the conversation history to your Next.js backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // We map the messages to ensure we only send role and content to OpenAI
        body: JSON.stringify({ 
          messages: newMessages.map(m => ({ role: m.role, content: m.content })) 
        }),
      });

      const data = await response.json();

      // 3. Add the AI's real reply to the UI
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        role: "assistant", 
        content: data.reply || "Sorry, I am having a little trouble thinking right now!" 
      }]);

    } catch (error) {
      console.error("Chat Error:", error);
      // Fallback message if the API fails or you forget to add your OpenAI key
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        role: "assistant", 
        content: "I'm having trouble connecting to the server right now. Please call us directly at 289-237-8359!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* The Floating Red Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-8 left-8 z-[100] bg-[#E62020] hover:bg-[#cc1c1c] text-white p-4 rounded-full shadow-[0_0_20px_rgba(230,32,32,0.4)] flex items-center justify-center transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </motion.button>

      {/* The Chat Interface Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-8 z-[105] w-[350px] bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl rounded-sm overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-[#050505] border-b border-[#1a1a1a] p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#E62020] rounded-full animate-pulse shadow-[0_0_8px_#E62020]"></div>
                <div className="flex flex-col">
                  <span className="text-white font-black italic text-sm tracking-wider uppercase">ASAP AI Assistant</span>
                  <span className="text-[#888] text-[9px] uppercase tracking-widest">Online • 中文/English</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#888] hover:text-[#E62020] transition-colors p-1">
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-[350px] flex flex-col space-y-4 overflow-y-auto bg-[#0a0a0a] scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
              
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`p-3 rounded-sm text-sm max-w-[85%] font-light whitespace-pre-wrap ${
                    msg.role === "user" 
                      ? "bg-[#E62020] text-white self-end rounded-br-none" 
                      : "bg-[#1a1a1a] border border-[#333] text-[#ccc] self-start rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              ))}

              {/* Real Typing Indicator (Shows while waiting for API) */}
              {isTyping && (
                <div className="bg-[#1a1a1a] border border-[#333] text-[#888] p-3 rounded-sm text-xs self-start rounded-bl-none flex space-x-1 items-center">
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4 }} className="w-1.5 h-1.5 bg-[#888] rounded-full"></motion.div>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#888] rounded-full"></motion.div>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#888] rounded-full"></motion.div>
                </div>
              )}
              
              {/* Invisible div to snap scroll to bottom */}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="p-4 bg-[#050505] border-t border-[#1a1a1a]">
              <div className="flex items-center bg-[#111] border border-[#333] focus-within:border-[#E62020] rounded-sm px-3 py-2 transition-colors">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..." 
                  className="bg-transparent text-white text-sm w-full focus:outline-none"
                />
                <button 
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="text-[#E62020] disabled:text-[#444] font-bold text-sm ml-2 uppercase tracking-wide transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}