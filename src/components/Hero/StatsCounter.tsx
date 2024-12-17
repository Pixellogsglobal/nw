import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Students'
  },
  {
    icon: GraduationCap,
    value: '95%',
    label: 'Success Rate'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries'
  }
];

const StatsCounter: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-red-500/10 
                flex items-center justify-center"
            >
              <Icon className="w-6 h-6 text-brand-red-500" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCounter;