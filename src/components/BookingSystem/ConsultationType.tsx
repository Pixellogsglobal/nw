import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { ConsultationType } from './types';

interface ConsultationTypeCardProps {
  type: ConsultationType;
  isSelected: boolean;
  onSelect: (id: string) => void;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const ConsultationTypeCard: React.FC<ConsultationTypeCardProps> = ({
  type,
  isSelected,
  onSelect,
  isHovered,
  onHover
}) => {
  const Icon = type.icon;

  return (
    <motion.div
      onHoverStart={() => onHover(type.id)}
      onHoverEnd={() => onHover(null)}
      onClick={() => onSelect(type.id)}
      whileHover={{ y: -5 }}
      className={`group cursor-pointer ${
        isSelected ? 'ring-2 ring-brand-red-500' : ''
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
        backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6">
            <motion.div
              className="p-4 rounded-xl bg-brand-red-500/10 text-brand-red-500"
              animate={isHovered ? {
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              } : {}}
            >
              <Icon className="w-8 h-8" />
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
              <p className="text-gray-400 mb-4">{type.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{type.duration}</span>
                </div>
                <div className="text-brand-red-500 font-bold">
                  {type.price}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ x: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.5 }}
            className="text-brand-red-500"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultationTypeCard;