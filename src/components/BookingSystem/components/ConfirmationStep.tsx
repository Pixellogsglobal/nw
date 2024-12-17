import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { UserDetails } from '../types';

interface ConfirmationStepProps {
  userDetails: UserDetails;
  onReset: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ userDetails, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-red-500/10 
            flex items-center justify-center"
        >
          <Check className="w-8 h-8 text-brand-red-500" />
        </motion.div>
        
        <h3 className="text-2xl font-bold mb-4">Booking Confirmed!</h3>
        <p className="text-gray-400 mb-6">
          We've sent a confirmation email to {userDetails.email} with all the details.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          className="px-8 py-3 bg-brand-red-500 text-white rounded-xl font-medium"
        >
          Book Another Session
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ConfirmationStep;