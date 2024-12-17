import React from 'react';
import { motion } from 'framer-motion';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  const steps = [
    'Select Service',
    'Choose Date',
    'Pick Time',
    'Your Details',
    'Confirmation'
  ];

  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto mb-16">
      {steps.map((label, index) => {
        const step = index + 1;
        return (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
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
              <span className="text-sm text-gray-400 mt-2 hidden md:block">
                {label}
              </span>
            </div>
            {step < totalSteps && (
              <div className="w-16 md:w-24 h-1 mx-2 md:mx-4">
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
        );
      })}
    </div>
  );
};

export default StepIndicator;