import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

interface SocialButtonsProps {
  instagramUrl: string;
  whatsappNumber: string;
  twitterUrl: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ 
  instagramUrl, 
  whatsappNumber,
  twitterUrl 
}) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  const handleTwitterClick = () => {
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleInstagramClick}
        className="p-4 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg hover:shadow-xl"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleTwitterClick}
        className="p-4 rounded-full bg-[#1DA1F2] text-white shadow-lg hover:shadow-xl"
        aria-label="Follow us on Twitter"
      >
        <Twitter className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default SocialButtons;