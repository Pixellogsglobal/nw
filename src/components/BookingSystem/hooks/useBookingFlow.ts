import { useState } from 'react';
import { UserDetails } from '../types';

export const useBookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    email: '',
    phone: '',
    educationLevel: '',
    targetUniversity: '',
    desiredCourse: '',
    additionalNotes: ''
  });

  const resetFlow = () => {
    setCurrentStep(1);
    setSelectedType(null);
    setUserDetails({
      name: '',
      email: '',
      phone: '',
      educationLevel: '',
      targetUniversity: '',
      desiredCourse: '',
      additionalNotes: ''
    });
  };

  const handleConsultationSelect = (id: string) => {
    setSelectedType(id);
    setCurrentStep(2);
  };

  const handleUserDetailsSubmit = () => {
    setCurrentStep(3);
  };

  const handleEventScheduled = () => {
    setCurrentStep(4);
  };

  return {
    currentStep,
    selectedType,
    userDetails,
    setUserDetails,
    handleConsultationSelect,
    handleUserDetailsSubmit,
    handleEventScheduled,
    resetFlow
  };
};