import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import { MessageCircle, Send, X, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I'm your AI assistant. How can I help you today?',
      type: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      type: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message! I'm here to help with any questions about our consulting services.',
        type: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand-red-500 text-white shadow-lg
          hover:shadow-xl transition-shadow duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-8rem)]
              rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl" />

            {/* Header */}
            <div className="relative p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-brand-red-500/10 rounded-lg">
                    <Bot className="w-5 h-5 text-brand-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900">AI Assistant</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="relative h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${
                    message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-brand-red-500/10' 
                      : 'bg-gray-100'
                  }`}>
                    {message.type === 'user' 
                      ? <User className="w-4 h-4 text-brand-red-500" />
                      : <Bot className="w-4 h-4 text-gray-600" />
                    }
                  </div>
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className={`relative max-w-[80%] p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-brand-red-500 text-white'
                        : 'bg-white border border-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="absolute bottom-1 right-2 text-xs opacity-50">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-gray-500"
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">AI is typing...</span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form 
              onSubmit={handleSubmit}
              className="relative p-4 border-t border-gray-200"
            >
              <div className="relative flex items-end gap-2">
                <TextareaAutosize
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  maxRows={4}
                  className="flex-1 p-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 
                    focus:ring-brand-red-500 focus:border-transparent resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!input.trim()}
                  className={`p-3 rounded-xl ${
                    input.trim()
                      ? 'bg-brand-red-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;