import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Calendar, Target, Award } from 'lucide-react';

const AcademicPlanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  // Static data for demonstration
  const stats = [
    { icon: Book, label: 'Courses', value: '12' },
    { icon: Target, label: 'Goals', value: '8/10' },
    { icon: Calendar, label: 'Study Hours', value: '120h' },
    { icon: Award, label: 'Progress', value: '75%' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Academic
            <span className="text-brand-red-500"> Planning</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Plan your academic journey and track your progress
          </p>
        </motion.div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-brand-red-500/10">
                    <Icon className="w-6 h-6 text-brand-red-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-center text-gray-400">
            Select a feature to get started with your academic planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicPlanner;