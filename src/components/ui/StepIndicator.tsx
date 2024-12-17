```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { BookingStep } from '../BookingSystem/types';

interface StepIndicatorProps {
  steps: BookingStep[];
  currentStep: number;
  onChange: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, onChange }) => {
  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto mb-16">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isCurrent = currentStep === step.id;
        
        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onChange(step.id)}
                disabled={currentStep < step.id}
                className="relative"
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                    ${isCompleted || isCurrent
                      ? 'bg-brand-red-500 text-white'
                      : 'bg-white/5 text-gray-400'
                    }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </motion.div>
                {isCurrent && (
                  <motion.div
                    layoutId="step-indicator"
                    className="absolute -inset-2 rounded-full border-2 border-brand-red-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
              
              <div className="mt-2 text-center">
                <p className="text-sm font-medium text-white">{step.title}</p>
                <p className="text-xs text-gray-400">{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="w-24 h-px mx-4">
                <motion.div
                  className="h-full rounded-full"
                  animate={{
                    backgroundColor: isCompleted
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
```