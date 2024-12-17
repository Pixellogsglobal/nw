```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { ConsultationType } from '../types';

interface ConsultationCardProps {
  consultation: ConsultationType;
  isSelected: boolean;
  onSelect: () => void;
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({
  consultation,
  isSelected,
  onSelect
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onSelect}
      className={`relative overflow-hidden rounded-2xl cursor-pointer
        ${isSelected 
          ? 'bg-brand-red-500/10 border-brand-red-500' 
          : 'bg-white/5 border-white/10 hover:bg-white/10'
        } border backdrop-blur-sm transition-all duration-300 p-8`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="p-3 bg-brand-red-500/10 w-fit rounded-xl mb-4">
            <Clock className="w-6 h-6 text-brand-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">{consultation.title}</h3>
          <p className="text-gray-400 mb-4">{consultation.description}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{consultation.duration}</span>
            </div>
            <div className="text-brand-red-500 font-bold">
              {consultation.price}
            </div>
          </div>

          <div className="space-y-3">
            {consultation.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-brand-red-500" />
                <span className="text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-auto flex items-center gap-2 text-brand-red-500 font-medium"
          whileHover={{ x: 5 }}
        >
          Select
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          layoutId="selection-indicator"
          className="absolute inset-0 border-2 border-brand-red-500 rounded-2xl"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.div>
  );
};

export default ConsultationCard;
```