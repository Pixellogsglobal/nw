import React from 'react';
import { motion } from 'framer-motion';

interface GoogleFormEmbedProps {
  formUrl: string;
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({ formUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl"
    >
      <iframe
        src={formUrl}
        className="w-full min-h-[800px] border-0"
        title="Booking Form"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading...
      </iframe>
    </motion.div>
  );
};

export default GoogleFormEmbed;