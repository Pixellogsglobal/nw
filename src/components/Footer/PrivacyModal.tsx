import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#0A0A0B]/95 backdrop-blur-xl
                border border-white/10 shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 
                bg-[#0A0A0B]/95 backdrop-blur-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-red-500/10">
                    <Shield className="w-6 h-6 text-brand-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="p-6 text-gray-300 space-y-8">
                  <section>
                    <p className="leading-relaxed mb-8">
                      At Pixellogs Global, protecting your privacy is a priority. This Privacy Policy explains how we collect, use, and protect your information under the applicable laws of India and the United Kingdom.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">1. Data Collection</h3>
                    <p className="mb-4">We collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Personal Identification Information: Name, contact details, and academic history.</li>
                      <li>Technical Information: IP address, browser type, and cookies to improve user experience.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">2. Data Usage</h3>
                    <p className="mb-4">Your data is used for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Study abroad applications.</li>
                      <li>Communication about services.</li>
                      <li>Compliance with legal obligations.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">3. Data Sharing</h3>
                    <p className="mb-4">PixelLogs Global will not sell or rent your data. It will only be shared:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With universities for applications.</li>
                      <li>With regulatory bodies if required by law.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">4. Your Rights</h3>
                    <p className="mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and update your personal data.</li>
                      <li>Request the deletion of your information.</li>
                      <li>Withdraw consent for data usage.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">5. Legal Compliance</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>UK GDPR and Data Protection Act, 2018 ensure secure handling of your data.</li>
                      <li>IT Act, 2000 (India) protects sensitive personal data from misuse.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">6. Cookies</h3>
                    <p className="leading-relaxed">
                      Our website uses cookies for analytics and improved performance. You can disable cookies in browser settings.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">7. Retention and Security</h3>
                    <p className="leading-relaxed">
                      Data is retained only as long as necessary. We implement industry-standard measures to safeguard your data.
                    </p>
                  </section>

                  <div className="mt-8 p-4 rounded-xl bg-brand-red-500/10 border border-brand-red-500/20">
                    <p className="text-sm text-brand-red-500">
                      Last updated: March 2024
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;