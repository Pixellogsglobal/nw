import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AuthButton from './AuthButtons';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: (provider: 'google' | 'github' | 'microsoft') => void;
  isLoading?: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuth, isLoading }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md overflow-hidden rounded-2xl bg-[#0A0A0B]/95 backdrop-blur-xl
                border border-white/10 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Sign In</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <AuthButton
                    provider="google"
                    onClick={() => onAuth('google')}
                    isLoading={isLoading}
                  />
                  <AuthButton
                    provider="github"
                    onClick={() => onAuth('github')}
                    isLoading={isLoading}
                  />
                  <AuthButton
                    provider="microsoft"
                    onClick={() => onAuth('microsoft')}
                    isLoading={isLoading}
                  />
                </div>

                <p className="mt-6 text-sm text-center text-gray-400">
                  By continuing, you agree to our{' '}
                  <button className="text-brand-red-500 hover:underline">Terms of Service</button>
                  {' '}and{' '}
                  <button className="text-brand-red-500 hover:underline">Privacy Policy</button>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;