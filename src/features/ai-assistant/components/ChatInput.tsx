import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic, MicOff } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
  isListening: boolean;
  onToggleVoice: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isTyping,
  isListening,
  onToggleVoice
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };

  const pulseVariants = {
    listening: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <TextareaAutosize
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isListening ? 'Listening...' : 'Ask anything...'}
        className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 
          focus:ring-brand-red-500 focus:border-transparent resize-none max-h-32"
        maxRows={4}
        disabled={isListening}
      />
      
      <motion.button
        type="button"
        onClick={onToggleVoice}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isListening ? "listening" : ""}
        variants={pulseVariants}
        className={`p-3 rounded-xl ${
          isListening
            ? 'bg-brand-red-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        {isListening ? (
          <MicOff className="w-5 h-5" />
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={!input.trim() || isTyping || isListening}
        className={`p-3 rounded-xl flex-shrink-0 ${
          input.trim() && !isTyping && !isListening
            ? 'bg-brand-red-500 text-white'
            : 'bg-gray-100 text-gray-400'
        }`}
      >
        <Send className="w-5 h-5" />
      </motion.button>
    </form>
  );
};

export default ChatInput;