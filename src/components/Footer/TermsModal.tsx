{/* Previous imports remain the same */}
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
                    <FileText className="w-6 h-6 text-brand-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
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
                  {/* Introduction */}
                  <section>
                    <p className="leading-relaxed mb-8">
                      Welcome to PixelLogs Global! By accessing or using our website, services, or resources, you agree to comply with these Terms and Conditions. Please read them carefully to understand your rights and obligations.
                    </p>
                  </section>

                  {/* 1. No Consultation Charges */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">1. No Consultation Charges</h3>
                    <p className="leading-relaxed">
                      PixelLogs Global does not charge any fees for consultation services. Any fees incurred during the study abroad application process, such as university fees, visa fees, or third-party charges, are the sole responsibility of the client.
                    </p>
                  </section>

                  {/* 2. No Payment of University Fees */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">2. No Payment of University Fees</h3>
                    <p className="leading-relaxed">
                      PixelLogs Global does not collect, process, or pay university fees on behalf of clients. Clients must directly remit payments to the respective universities or institutions.
                    </p>
                  </section>

                  {/* 3. Not an Immigration Law Firm */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">3. Not an Immigration Law Firm</h3>
                    <p className="leading-relaxed mb-4">
                      PixelLogs Global is not an immigration law firm and does not provide legal advice on immigration matters. We offer general guidance based on publicly available information. For legal assistance, clients must consult certified immigration lawyers or authorized advisors in their jurisdiction.
                    </p>
                    <div className="bg-white/5 p-4 rounded-xl space-y-4">
                      <p className="font-medium text-white">Compliance Notice:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>India: As per the Advocates Act, 1961, legal advice or representation is restricted to licensed advocates. PixelLogs Global does not provide legal immigration services.</li>
                        <li>UK: As per the Immigration and Asylum Act, 1999 (Section 84), legal advice or representation on immigration matters can only be provided by authorized professionals.</li>
                      </ul>
                    </div>
                  </section>

                  {/* 4. Accuracy of Information */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">4. Accuracy of Information</h3>
                    <p className="leading-relaxed">
                      PixelLogs Global strives to provide accurate and up-to-date information regarding study abroad programs, universities, and visa processes. However, we do not guarantee the completeness, accuracy, or timeliness of the information provided. Clients are encouraged to verify details independently.
                    </p>
                  </section>

                  {/* 5. Responsibilities of the Client */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">5. Responsibilities of the Client</h3>
                    <p className="mb-4">Clients agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate, complete, and truthful information for applications and documentation.</li>
                      <li>Adhere to deadlines and instructions related to their study abroad process.</li>
                      <li>Manage their own financial obligations, including tuition fees, living expenses, and visa costs.</li>
                      <li>Comply with the laws and regulations of the country they are applying to study in.</li>
                    </ul>
                  </section>

                  {/* 6. Limited Liability */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">6. Limited Liability</h3>
                    <p className="mb-4">PixelLogs Global will not be held liable for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Application rejections by universities, visa authorities, or other institutions.</li>
                      <li>Financial losses, delays, or adverse outcomes resulting from third-party actions or unforeseen circumstances.</li>
                      <li>Decisions made by clients based on our guidance or recommendations.</li>
                    </ul>
                  </section>

                  {/* 7. Compliance with Laws */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">7. Compliance with Laws</h3>
                    <p className="leading-relaxed mb-4">
                      PixelLogs Global operates in accordance with the laws of India and the United Kingdom. Clients are expected to comply with the relevant laws of the country they are applying to study in.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-white mb-2">Applicable Laws in India:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Consumer Protection Act, 2019: Ensures fair trade practices and transparency in client dealings.</li>
                          <li>Advocates Act, 1961: PixelLogs Global does not engage in the unauthorized practice of law or provide legal immigration advice.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-white mb-2">Applicable Laws in the UK:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Consumer Rights Act, 2015: Promotes fair and transparent practices in providing services to consumers.</li>
                          <li>Immigration and Asylum Act, 1999 (Section 84): PixelLogs Global does not provide legal immigration advice or representation, which is restricted to licensed professionals.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* 8. Intellectual Property */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">8. Intellectual Property</h3>
                    <p className="leading-relaxed">
                      All content on the PixelLogs Global website, including text, graphics, logos, and design, is the intellectual property of PixelLogs Global. Unauthorized use, reproduction, or distribution of this content is prohibited.
                    </p>
                  </section>

                  {/* 9. Termination of Services */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">9. Termination of Services</h3>
                    <p className="mb-4">PixelLogs Global reserves the right to terminate or refuse services at its sole discretion in cases of:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fraudulent or deceptive client behavior.</li>
                      <li>Non-compliance with these Terms and Conditions.</li>
                      <li>Misuse of PixelLogs Global's resources or services.</li>
                    </ul>
                  </section>

                  {/* 10. Privacy and Data Protection */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">10. Privacy and Data Protection</h3>
                    <p className="leading-relaxed">
                      PixelLogs Global is committed to protecting client privacy and handles all personal data in accordance with the Data Protection Act, 2018 (UK GDPR) and the Information Technology Act, 2000 (India). For more details, refer to our Privacy Policy.
                    </p>
                  </section>

                  {/* 11. Governing Law and Jurisdiction */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">11. Governing Law and Jurisdiction</h3>
                    <p className="mb-4">These Terms and Conditions are governed by the laws of:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>India: Courts in India will have jurisdiction over disputes arising under Indian law.</li>
                      <li>United Kingdom: Courts in the UK will have jurisdiction over disputes arising under UK law.</li>
                    </ul>
                  </section>

                  {/* 12. Document Audit Process */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">12. Document Audit Process (DAP)</h3>
                    <p className="leading-relaxed mb-4">
                      PixelLogs Global offers a Document Audit Process (DAP) to review and ensure that all documents meet the requirements of universities and visa authorities.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>DAP is a quality assurance measure and does not guarantee application success.</li>
                      <li>Clients failing to meet document standards may have their DAP services terminated.</li>
                    </ul>
                  </section>

                  {/* 13. No Assurance of Visa Approval */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">13. No Assurance of Visa Approval</h3>
                    <p className="leading-relaxed mb-4">
                      PixelLogs Global does not guarantee 100% visa approval. Decisions are made solely by immigration authorities based on various factors.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>India: Complies with the Consumer Protection Act, 2019 to provide honest guidance without false guarantees.</li>
                      <li>UK: Adheres to the Consumer Rights Act, 2015, ensuring clear communication without assurances on external outcomes.</li>
                    </ul>
                  </section>

                  {/* 14. No Work Visa Assistance */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">14. No Work Visa Assistance</h3>
                    <p className="leading-relaxed mb-4">
                      PixelLogs Global does not provide support for work visas, employment sponsorships, or related documentation. Our services are limited to academic counselling, university applications, and guidance for student visa processes.
                    </p>
                    <div className="bg-white/5 p-4 rounded-xl space-y-4">
                      <p className="font-medium text-white mb-2">Legal Compliance by Country:</p>
                      {[
                        {
                          country: "United Kingdom",
                          rules: [
                            "Under the Immigration Rules and the Immigration Act 1971, providing unauthorized advice or assistance for work visas is prohibited.",
                            "PixelLogs Global does not provide services for UK work visas."
                          ]
                        },
                        {
                          country: "Canada",
                          rules: [
                            "As per IRPA and IRPR, only authorized representatives can assist with work permits.",
                            "PixelLogs Global does not engage in employment-based immigration services."
                          ]
                        },
                        {
                          country: "Australia",
                          rules: [
                            "Under the Migration Act 1958, only registered agents can assist with work visas.",
                            "PixelLogs Global does not offer work visa assistance."
                          ]
                        },
                        {
                          country: "New Zealand",
                          rules: [
                            "The Immigration Advisers Licensing Act 2007 restricts work visa assistance.",
                            "PixelLogs Global does not provide work visa support."
                          ]
                        },
                        {
                          country: "European Union",
                          rules: [
                            "Complies with EU Blue Card Directive and country-specific laws.",
                            "No work visa assistance within any EU member state."
                          ]
                        }
                      ].map((region) => (
                        <div key={region.country} className="mb-4">
                          <p className="font-medium text-white mb-2">{region.country}</p>
                          <ul className="list-disc pl-6 space-y-2">
                            {region.rules.map((rule, index) => (
                              <li key={index}>{rule}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 15. Compliance with Country Rules on Work Visa Advertising */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">15. Compliance with Country Rules on Work Visa Advertising</h3>
                    <p className="leading-relaxed mb-4">
                      PixelLogs Global ensures compliance with advertising regulations regarding work visa services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>United Kingdom: Under the Immigration Rules, promoting unauthorized work visa assistance is prohibited.</li>
                      <li>Canada: As per the IRPA, advertising work visa assistance without being an authorized representative is illegal.</li>
                      <li>Australia: The Migration Act 1958 prohibits unregistered entities from marketing work visa assistance.</li>
                      <li>New Zealand: The Immigration Advisers Licensing Act 2007 restricts promotion of work visa services.</li>
                      <li>European Union: The EU Blue Card Directive requires compliance with each member state's immigration rules.</li>
                    </ul>
                    <div className="mt-6 p-4 bg-brand-red-500/10 rounded-xl">
                      <p className="font-bold text-brand-red-500">
                        PixelLogs Global ensures that its communications are limited to study abroad services and do not reference or promote work visa assistance to remain fully compliant with immigration and advertising laws in all jurisdictions.
                      </p>
                    </div>
                  </section>

                  {/* Contact Information */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                    <p className="leading-relaxed">
                      Email: info@pixellogsglobal.com<br />
                      Address: Coventry, United Kingdom
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

export default TermsModal;