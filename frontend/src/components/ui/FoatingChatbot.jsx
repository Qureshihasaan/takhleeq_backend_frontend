import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: 'bot' }
  ]);
  
  const scrollRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Thanks for reaching out! Our team will get back to you shortly.", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-marginLarge right-marginLarge z-50 z-zIndexModal font-fontFamilyBody">
      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col mb-marginMedium w-80 sm:w-96 h-[500px] bg-surfaceColor border border-borderColor rounded-borderRadiusMd shadow-boxShadowHigh overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="bg-secondaryColor p-paddingMedium border-b border-borderColor flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-successColor animate-pulse" />
              <h4 className="text-text-fontSizeSm font-fontWeightBold text-primaryColor tracking-letterSpacing uppercase">
                Takleeq AI
              </h4>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-textColorMuted hover:text-primaryColor transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-paddingMedium space-y-marginMedium scrollbar-thin"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-paddingSmall px-paddingMedium rounded-borderRadiusMd text-text-fontSizeSm ${
                    msg.sender === 'user' 
                      ? 'bg-primaryColor text-textColorInverse font-fontWeightMedium' 
                      : 'bg-borderColor text-textColorMain'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSend}
            className="p-paddingMedium border-t border-borderColor bg-secondaryColor flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-backgroundColor border border-borderColor rounded-borderRadiusSm px-paddingSmall text-textColorMain focus:outline-none focus:ring-1 focus:ring-primaryColor transition-all text-text-fontSizeSm"
            />
            <button 
              type="submit"
              className="bg-primaryColor text-textColorInverse p-paddingSmall rounded-borderRadiusSm hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primaryColor text-textColorInverse p-paddingMedium rounded-borderRadiusFull shadow-boxShadowMedium hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        >
          {isOpen ? <Minus size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </div>
  );
};

export default FloatingChatbot;