import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles } from 'lucide-react';
import { Message } from './types';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

const AITutor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: 'welcome',
    role: 'ai',
    content: 'Hello! I\'m your AI tutor. How can I help you today?',
    timestamp: Date.now()
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Simulate AI response (replace with actual API call)
      setTimeout(() => {
        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          role: 'ai',
          content: 'I understand your question. Let me help you with that...',
          timestamp: Date.now()
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setIsTyping(false);
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand-red-500 text-white shadow-lg
          hover:shadow-xl transition-shadow duration-300"
      >
        <Bot className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-8rem)]
              bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-brand-red-500/10 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-brand-red-500/10 rounded-lg">
                    <Bot className="w-5 h-5 text-brand-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900">AI Study Assistant</h3>
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

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-gray-500"
                >
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                  <p className="text-sm">AI is thinking...</p>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <ChatInput
                onSendMessage={handleSendMessage}
                isTyping={isTyping}
                isListening={isListening}
                onToggleVoice={toggleVoice}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AITutor;