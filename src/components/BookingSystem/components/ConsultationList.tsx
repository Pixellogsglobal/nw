import React from 'react';
import { motion } from 'framer-motion';
import ConsultationCard from './ConsultationCard';
import { ConsultationType } from '../types';

interface ConsultationListProps {
  consultations: ConsultationType[];
  selectedType: string | null;
  onSelect: (id: string) => void;
}

const ConsultationList: React.FC<ConsultationListProps> = ({
  consultations,
  selectedType,
  onSelect
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {consultations.map((consultation) => (
        <ConsultationCard
          key={consultation.id}
          consultation={consultation}
          isSelected={selectedType === consultation.id}
          onSelect={() => onSelect(consultation.id)}
        />
      ))}
    </motion.div>
  );
};

export default ConsultationList;