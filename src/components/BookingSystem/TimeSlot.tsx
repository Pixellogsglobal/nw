import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimeSlotProps {
  time: string;
  isSelected: boolean;
  onSelect: (time: string) => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, isSelected, onSelect }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(time)}
      className={`p-4 rounded-xl text-center transition-all duration-300 ${
        isSelected
          ? 'bg-brand-red-500 text-white'
          : 'bg-white/5 hover:bg-white/10 text-white'
      } border border-white/10 backdrop-blur-sm flex items-center justify-center gap-2`}
    >
      <Clock className="w-4 h-4" />
      <span>{time}</span>
    </motion.button>
  );
};

export default TimeSlot;