import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { ErrorState } from '../types';

interface ErrorMessageProps {
  error: ErrorState;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-500"
    >
      <AlertCircle className="w-5 h-5" />
      <p className="text-sm flex-1">{error.message}</p>
      {error.type === 'network' && onRetry && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onRetry}
          className="p-1 hover:bg-red-100 rounded-full"
        >
          <RefreshCw className="w-4 h-4" />
        </motion.button>
      )}
    </motion.div>
  );
};