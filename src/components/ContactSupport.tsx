import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { 
  Bell, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  HelpCircle,
  FileText,
  ChevronDown 
} from 'lucide-react';

const faqs = [
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation through our booking system. Simply select your preferred consultation type, choose a date and time, and complete the booking process."
  },
  {
    question: "What are your consultation fees?",
    answer: "Our consultation fees vary based on the type and duration of the session. Please contact us for detailed pricing information."
  },
  {
    question: "Can I reschedule my appointment?",
    answer: "Yes, you can reschedule your appointment up to 24 hours before the scheduled time through your dashboard or by contacting our support team."
  }
];

const ContactSupport: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <Parallax translateY={[20, -20]}>
          <div className="absolute top-20 left-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-red-500/20 blur-[100px]" />
        </Parallax>
        <Parallax translateY={[-20, 20]}>
          <div className="absolute bottom-40 right-[15%] w-[45vw] h-[45vw] rounded-full bg-brand-red-400/20 blur-[120px]" />
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Parallax translateY={[-20, 20]} opacity={[0.5, 1]}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              Contact &
              <span className="text-brand-red-500"> Support</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white"
            >
              We're here to help you succeed
            </motion.p>
          </div>
        </Parallax>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <Parallax translateY={[20, -20]} opacity={[0.8, 1]}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-brand-red-500/10 to-white/20 backdrop-blur-xl" />
                <div className="relative p-8 space-y-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                  
                  {[
                    { icon: Mail, text: "contact@pixellogsglobal.com", label: "Email" },
                    { icon: Phone, text: "+44 7769889797", label: "Phone" },
                    { icon: MapPin, text: "Coventry, UK", label: "Address" },
                    { icon: Clock, text: "Mon-Fri: 9AM-6PM GMT", label: "Hours" }
                  ].map(({ icon: Icon, text, label }) => (
                    <motion.div
                      key={label}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 bg-brand-red-500/10 rounded-lg">
                        <Icon className="w-5 h-5 text-brand-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">{label}</p>
                        <p className="font-medium text-white">{text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Parallax>

          {/* Contact Form */}
          <Parallax translateY={[-20, 20]} opacity={[0.8, 1]}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-brand-red-500/10 to-white/20 backdrop-blur-xl" />
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { name: 'name', label: 'Name', type: 'text' },
                    { name: 'email', label: 'Email', type: 'email' },
                    { name: 'subject', label: 'Subject', type: 'text' }
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-white mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20
                          focus:ring-2 focus:ring-brand-red-500 focus:border-transparent text-gray-900
                          placeholder-gray-500"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20
                        focus:ring-2 focus:ring-brand-red-500 focus:border-transparent text-gray-900
                        placeholder-gray-500"
                      placeholder="Type your message here..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-brand-red-500 text-white rounded-xl font-bold
                      flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </Parallax>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <HelpCircle className="w-6 h-6 text-brand-red-500" />
              <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            </motion.div>
            <p className="text-white">Find quick answers to common questions</p>
          </div>

          <motion.div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-brand-red-500/10 to-white/20 backdrop-blur-xl" />
                <motion.div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-red-500" />
                      <span className="font-medium text-white">{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeQuestion === index ? 'auto' : 0,
                      opacity: activeQuestion === index ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;