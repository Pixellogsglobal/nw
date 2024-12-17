import React from 'react';
import { motion } from 'framer-motion';
import { consultationTypes } from './data';
import ConsultationList from './components/ConsultationList';
import UserDetailsForm from './components/UserDetailsForm';
import CalendlyEmbed from './components/CalendlyEmbed';
import ConfirmationStep from './components/ConfirmationStep';
import StepIndicator from '../ui/StepIndicator';
import { useBookingFlow } from './hooks/useBookingFlow';

const BookingSystem: React.FC = () => {
  const {
    currentStep,
    selectedType,
    userDetails,
    setUserDetails,
    handleConsultationSelect,
    handleUserDetailsSubmit,
    handleEventScheduled,
    resetFlow
  } = useBookingFlow();

  const selectedConsultation = consultationTypes.find(type => type.id === selectedType);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Book Your
            <span className="text-brand-red-500"> Session</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Schedule a consultation with our expert advisors
          </p>
        </motion.div>

        <StepIndicator
          steps={[
            { id: 1, title: 'Choose Consultation', description: 'Select your consultation type' },
            { id: 2, title: 'Your Details', description: 'Fill in your information' },
            { id: 3, title: 'Schedule', description: 'Pick a date and time' },
            { id: 4, title: 'Confirmation', description: 'Review your booking' }
          ]}
          currentStep={currentStep}
          onChange={() => {}}
        />

        <div className="mt-12">
          {currentStep === 1 && (
            <ConsultationList
              consultations={consultationTypes}
              selectedType={selectedType}
              onSelect={handleConsultationSelect}
            />
          )}

          {currentStep === 2 && (
            <UserDetailsForm
              userDetails={userDetails}
              onChange={setUserDetails}
              onSubmit={handleUserDetailsSubmit}
            />
          )}

          {currentStep === 3 && selectedConsultation && (
            <CalendlyEmbed
              url={selectedConsultation.calendlyUrl}
              prefill={{
                name: userDetails.name,
                email: userDetails.email,
                customAnswers: {
                  'Education Level': userDetails.educationLevel || '',
                  'Target University': userDetails.targetUniversity || '',
                  'Desired Course': userDetails.desiredCourse || '',
                  'Additional Notes': userDetails.additionalNotes || ''
                }
              }}
              onEventScheduled={handleEventScheduled}
            />
          )}

          {currentStep === 4 && (
            <ConfirmationStep
              userDetails={userDetails}
              onReset={resetFlow}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;