import React from 'react';
import { motion } from 'framer-motion';
import { UserDetails } from '../types';
import { validateUserDetails } from '../utils/validation';

interface UserDetailsFormProps {
  userDetails: UserDetails;
  onChange: (details: UserDetails) => void;
  onSubmit: () => void;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({
  userDetails,
  onChange,
  onSubmit
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = validateUserDetails(userDetails);
    
    if (result.success) {
      onSubmit();
    } else {
      // Show validation errors
      const errors = result.error.flatten().fieldErrors;
      Object.entries(errors).forEach(([field, messages]) => {
        if (messages?.length) {
          alert(`${field}: ${messages[0]}`);
        }
      });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={userDetails.name}
            onChange={(e) => onChange({ ...userDetails, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white placeholder-gray-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={userDetails.email}
            onChange={(e) => onChange({ ...userDetails, email: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white placeholder-gray-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={userDetails.phone}
            onChange={(e) => onChange({ ...userDetails, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white placeholder-gray-500"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Education Level *
          </label>
          <select
            value={userDetails.educationLevel}
            onChange={(e) => onChange({ ...userDetails, educationLevel: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white appearance-none"
          >
            <option value="">Select education level</option>
            <option value="high-school">High School</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Target University
          </label>
          <input
            type="text"
            value={userDetails.targetUniversity}
            onChange={(e) => onChange({ ...userDetails, targetUniversity: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white placeholder-gray-500"
            placeholder="Enter target university"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Desired Course
          </label>
          <input
            type="text"
            value={userDetails.desiredCourse}
            onChange={(e) => onChange({ ...userDetails, desiredCourse: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white placeholder-gray-500"
            placeholder="Enter desired course"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Additional Notes
        </label>
        <textarea
          value={userDetails.additionalNotes}
          onChange={(e) => onChange({ ...userDetails, additionalNotes: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
            text-white placeholder-gray-500 resize-none"
          placeholder="Any specific questions or requirements?"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-4 bg-brand-red-500 text-white rounded-xl font-bold
          hover:bg-brand-red-600 transition-colors"
      >
        Continue to Schedule
      </motion.button>

      <p className="text-sm text-gray-400 text-center">
        Fields marked with * are required
      </p>
    </motion.form>
  );
};

export default UserDetailsForm;