"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm the ASAP AI Assistant. I can help answer questions about our services, pricing, or help you book an estimate. What are you driving?",
      sender: "ai",
    },
  ]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Add user message
    const newUserMessage: Message = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // 2. Simulate AI Processing & Response (Perfect for the client pitch!)
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "I can definitely help with that. To give you the most accurate information, could you fill out our quick estimate form? Our master technicians will review it right away.",
          sender: "ai",
        },
      ]);
    }, 1500); // 1.5 second delay makes it feel real
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* The Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] md:w-[380px] h-[500px] bg-[#1a1918] border border-[#2a2826] rounded-sm shadow-2xl mb-4 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#121110] border-b border-[#2a2826] p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wide">ASAP AI Agent</h4>
                  <p className="text-[#666] text-[10px] tracking-widest uppercase">Online 24/7</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#666] hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#121110]/50 scrollbar-thin scrollbar-thumb-[#2a2826] scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 text-sm font-light leading-relaxed rounded-sm ${
                      msg.sender === "user" 
                        ? "bg-[#d98f2b] text-black rounded-tr-none" 
                        : "bg-[#2a2826] text-[#e5e5e5] rounded-tl-none border border-[#333]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#2a2826] border border-[#333] p-3 rounded-sm rounded-tl-none flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#666] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-1.5 h-1.5 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#1a1918] border-t border-[#2a2826]">
              <form onSubmit={handleSendMessage} className="flex relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors pr-12"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#d98f2b] disabled:text-[#444] p-2 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#d98f2b] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(217,143,43,0.3)] hover:shadow-[0_0_25px_rgba(217,143,43,0.5)] transition-shadow border-2 border-[#121110]"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinejoin="round"/>
          </svg>
        )}
      </motion.button>
      
    </div>
  );
}