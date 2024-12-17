import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, FileText } from 'lucide-react';

interface CookieConsentProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenTerms, onOpenPrivacy, onAccept }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-[100] p-4"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-3 rounded-xl bg-brand-red-500/10">
                <Cookie className="w-8 h-8 text-brand-red-500" />
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-white">Cookie Consent</h3>
                <p className="text-gray-300">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept", you consent to our use of cookies. Read our{' '}
                  <button
                    onClick={onOpenPrivacy}
                    className="text-brand-red-500 hover:text-brand-red-400 font-medium inline-flex items-center gap-1"
                  >
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </button>
                  {' '}and{' '}
                  <button
                    onClick={onOpenTerms}
                    className="text-brand-red-500 hover:text-brand-red-400 font-medium inline-flex items-center gap-1"
                  >
                    <FileText className="w-4 h-4" />
                    Terms & Conditions
                  </button>
                  {' '}to learn more.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onAccept}
                className="w-full md:w-auto px-8 py-3 bg-brand-red-500 text-white rounded-xl font-bold
                  hover:bg-brand-red-600 transition-colors whitespace-nowrap"
              >
                Accept All
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;