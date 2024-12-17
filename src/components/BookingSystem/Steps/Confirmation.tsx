import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { CheckCircle } from 'lucide-react';

interface ConfirmationProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  email: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  selectedDate,
  selectedTime,
  email
}) => {
  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-20 h-20 mx-auto rounded-full bg-brand-red-500/10
          flex items-center justify-center"
      >
        <CheckCircle className="w-10 h-10 text-brand-red-500" />
      </motion.div>
      <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
      <div className="space-y-2 text-gray-400">
        <p>Your session has been scheduled for:</p>
        <p className="text-white font-medium">
          {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
        </p>
        <p className="text-white font-medium">{selectedTime}</p>
      </div>
      <p className="text-sm text-gray-400">
        A confirmation email has been sent to {email}
      </p>
    </div>
  );
};

export default Confirmation;