import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Calendar, Users, ArrowRight, ArrowLeft, CheckCircle, CreditCard } from 'lucide-react';
import ParticleEffect from './ParticleEffect';
import BubbleEffect from './BubbleEffect';
import GlowEffect from './GlowEffect';
import 'react-day-picker/dist/style.css';

const consultationTypes = [
  {
    id: 'academic',
    title: 'Academic Planning',
    description: 'Get expert guidance on course selection and academic goals',
    icon: Calendar,
    duration: '60 min'
  },
  {
    id: 'career',
    title: 'Career Guidance',
    description: 'Explore career paths and opportunities with industry experts',
    icon: Users,
    duration: '45 min'
  }
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM'
];

const BookingSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!selectedType;
      case 2:
        return !!selectedDate;
      case 3:
        return !!selectedTime;
      case 4:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canProceed()) {
      handleNext();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid gap-6"
          >
            {consultationTypes.map((type) => {
              const Icon = type.icon;
              const isHovered = hoveredType === type.id;

              return (
                <motion.div
                  key={type.id}
                  onHoverStart={() => setHoveredType(type.id)}
                  onHoverEnd={() => setHoveredType(null)}
                  onClick={() => setSelectedType(type.id)}
                  whileHover={{ y: -5 }}
                  className={`group cursor-pointer ${
                    selectedType === type.id ? 'ring-2 ring-brand-red-500' : ''
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
            })}
          </motion.div>
        );

      // Rest of the cases remain the same...
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={{ before: new Date() }}
              className="!bg-transparent text-white"
              classNames={{
                day_selected: "bg-brand-red-500 text-white",
                day: "text-white hover:bg-white/10",
                day_disabled: "text-gray-500",
                nav_button: "text-white hover:bg-white/10",
                caption: "text-white"
              }}
            />
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {timeSlots.map((time) => (
              <motion.button
                key={time}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTime(time)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  selectedTime === time
                    ? 'bg-brand-red-500 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-white'
                } border border-white/10 backdrop-blur-sm`}
              >
                {time}
              </motion.button>
            ))}
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                      focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
                      text-white placeholder-gray-400"
                  />
                </div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-red-500 text-white rounded-xl font-bold
                  flex items-center justify-center gap-2"
              >
                Complete Booking
                <CreditCard className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-20 h-20 mx-auto rounded-full bg-brand-red-500/10
                flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-brand-red-500" />
            </motion.div>
            <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
            <div className="space-y-2 text-gray-400">
              <p>Your session has been scheduled for:</p>
              <p className="text-white font-medium">
                {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
              </p>
              <p className="text-white font-medium">{selectedTime}</p>
            </div>
            <p className="text-sm text-gray-400">
              A confirmation email has been sent to {formData.email}
            </p>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <ParticleEffect count={30} />
      <BubbleEffect count={20} />
      
      <div className="absolute top-20 left-1/4">
        <GlowEffect color="#DC2626" size={400} blur={150} opacity={0.1} />
      </div>
      <div className="absolute bottom-40 right-1/4">
        <GlowEffect color="#DC2626" size={300} blur={120} opacity={0.08} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl font-bold mb-4">
              Book Your
              <span className="text-brand-red-500"> Session</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Schedule a personalized consultation with our expert educators
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-between max-w-2xl mx-auto mb-16">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center">
              <motion.div
                className="relative"
                animate={{
                  scale: currentStep === step ? 1.2 : 1
                }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                    ${currentStep >= step 
                      ? 'bg-brand-red-500 text-white' 
                      : 'bg-white/5 text-gray-400'}`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: currentStep >= step 
                      ? '0 0 20px rgba(220, 38, 38, 0.3)' 
                      : 'none'
                  }}
                >
                  {step}
                </motion.div>
                {currentStep === step && (
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-brand-red-500"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
              {step < 5 && (
                <div className="w-full h-1 mx-4">
                  <motion.div
                    className="h-full rounded-full"
                    animate={{
                      backgroundColor: currentStep > step 
                        ? '#DC2626' 
                        : 'rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            {renderStepContent()}
          </AnimatePresence>

          {currentStep > 1 && currentStep < 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 flex justify-between items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 
                  text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous Step
              </motion.button>

              {currentStep < 4 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl
                    ${!canProceed()
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-brand-red-500 hover:bg-brand-red-600'
                    } text-white transition-colors`}
                  disabled={!canProceed()}
                >
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;