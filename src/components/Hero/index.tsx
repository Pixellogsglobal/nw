import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import HeroImage from './HeroImage';
import StatsCounter from './StatsCounter';
import ServiceGrid from './ServiceGrid';
import RobotAnimation from './RobotAnimation';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[20%] w-[25vw] h-[25vw] rounded-full 
          bg-brand-red-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 right-[10%] w-[30vw] h-[30vw] rounded-full 
          bg-brand-red-500/10 blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Column - Text */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-brand-red-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Trusted by 1000+ Students
                </span>
              </div>

              <h1 className="text-7xl lg:text-[100px] font-bold leading-[0.9] tracking-tight">
                Your Path to
                <span className="block text-brand-red-500">Excellence</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-xl">
                Expert guidance for international education, personalized consulting, 
                and comprehensive support for your academic journey.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-brand-red-500 text-white rounded-xl font-bold
                  flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/5 text-white rounded-xl font-bold
                  flex items-center justify-center gap-2 group hover:bg-white/10"
              >
                Book Consultation
              </motion.button>
            </div>

            <StatsCounter />
          </div>

          {/* Right Column - Image with Robot */}
          <div className="relative">
            <HeroImage />
            <RobotAnimation />
          </div>
        </div>

        {/* Services Grid */}
        <ServiceGrid />
      </div>
    </div>
  );
};

export default Hero;