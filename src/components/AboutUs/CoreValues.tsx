import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Brain, Heart, Globe, Code } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Student-Centric',
    description: 'We put students first, tailoring our approach to individual learning styles and needs.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Clear objectives and structured learning paths help students achieve their academic goals efficiently.',
  },
  {
    icon: Brain,
    title: 'Innovative Learning',
    description: 'Embracing cutting-edge technology and modern teaching methods to create engaging experiences.',
  },
  {
    icon: Heart,
    title: 'Passionate Teaching',
    description: 'Our educators bring enthusiasm and expertise to every session, fostering a love for learning.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Preparing students for success in an interconnected world through comprehensive education.',
  },
  {
    icon: Code,
    title: 'Modern Methods',
    description: 'Integrating technology and traditional teaching methods for a dynamic learning environment.',
  }
];

const CoreValues = () => {
  return (
    <div className="mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-7xl font-bold text-center text-white">
          Our Core
          <span className="text-brand-red-500"> Values</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red-500/10 to-transparent rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8">
                <div className="relative z-10">
                  <motion.div
                    className="p-4 rounded-xl bg-brand-red-500/10 text-brand-red-500 w-fit mb-6 group-hover:bg-brand-red-500/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-brand-red-500 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border border-brand-red-500/0 group-hover:border-brand-red-500/20 transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;