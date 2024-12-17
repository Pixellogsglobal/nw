import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, Globe, Palette } from 'lucide-react';

const settingsSections = [
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    settings: [
      {
        id: 'email',
        label: 'Email Notifications',
        description: 'Receive email notifications for new bookings',
        type: 'toggle'
      },
      {
        id: 'push',
        label: 'Push Notifications',
        description: 'Receive push notifications for system updates',
        type: 'toggle'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    icon: Lock,
    settings: [
      {
        id: '2fa',
        label: 'Two-Factor Authentication',
        description: 'Add an extra layer of security to your account',
        type: 'toggle'
      }
    ]
  },
  {
    id: 'appearance',
    title: 'Appearance',
    icon: Palette,
    settings: [
      {
        id: 'theme',
        label: 'Theme',
        description: 'Choose between light and dark mode',
        type: 'select',
        options: ['Light', 'Dark', 'System']
      }
    ]
  },
  {
    id: 'language',
    title: 'Language & Region',
    icon: Globe,
    settings: [
      {
        id: 'language',
        label: 'Language',
        description: 'Select your preferred language',
        type: 'select',
        options: ['English', 'Spanish', 'French']
      }
    ]
  }
];

const SettingsPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="space-y-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-brand-red-500/10 rounded-lg">
                  <Icon className="w-5 h-5 text-brand-red-500" />
                </div>
                <h3 className="text-lg font-bold">{section.title}</h3>
              </div>

              <div className="space-y-6">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{setting.label}</h4>
                      <p className="text-sm text-gray-500 mt-1">{setting.description}</p>
                    </div>

                    {setting.type === 'toggle' ? (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                          transition-colors duration-200 ease-in-out focus:outline-none
                          bg-gray-200 hover:bg-gray-300"
                        role="switch"
                      >
                        <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full 
                          bg-white shadow ring-0 transition duration-200 ease-in-out" />
                      </motion.button>
                    ) : setting.type === 'select' ? (
                      <select
                        className="block w-40 rounded-lg border-gray-200 text-sm focus:border-brand-red-500 focus:ring-brand-red-500"
                      >
                        {setting.options?.map((option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPanel;