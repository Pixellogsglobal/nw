import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';

interface ContactButtonsProps {
  instagramUrl: string;
  whatsappNumber: string;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ instagramUrl, whatsappNumber }) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleInstagramClick}
        className="p-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg"
      >
        <Instagram className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="p-4 rounded-full bg-green-500 text-white shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default ContactButtons;