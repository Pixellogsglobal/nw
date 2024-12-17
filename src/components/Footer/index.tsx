import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Instagram, Twitter, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PixelLogs Global</h3>
            <p className="text-gray-400 mb-4">
              Expert guidance for your educational journey abroad.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://instagram.com/pixellogsglobal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/pixellogsglobal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/447769889797"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@pixellogsglobal.com</p>
              <p>WhatsApp: +44 7769889797</p>
              <p>Location: Coventry, United Kingdom</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenTerms}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10
                  text-gray-400 hover:text-white transition-colors w-full"
              >
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenPrivacy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10
                  text-gray-400 hover:text-white transition-colors w-full"
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PixelLogs Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;