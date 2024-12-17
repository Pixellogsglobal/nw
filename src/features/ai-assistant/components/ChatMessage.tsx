import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[80%] p-4 rounded-2xl ${
        message.role === 'user'
          ? 'bg-brand-red-500 text-white'
          : 'bg-gray-100 text-gray-800'
      }`}>
        <p>{message.content}</p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;