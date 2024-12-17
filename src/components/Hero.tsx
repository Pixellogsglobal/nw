import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[20%] w-[25vw] h-[25vw] rounded-full 
          bg-brand-red-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 right-[10%] w-[30vw] h-[30vw] rounded-full 
          bg-brand-red-500/10 blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-brand-red-500 uppercase tracking-wider font-medium">
                    Global Excellence
                  </span>
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-7xl lg:text-[120px] font-bold leading-[0.9] tracking-tight"
                >
                  Pixellogs
                  <span className="block text-brand-red-500">Global</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-400 max-w-xl"
              >
                Transform your journey with personalized guidance and expert mentorship.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8"
            >
              <ScrollLink to="booking" spy={true} smooth={true} offset={-100} duration={500}>
                <motion.button
                  whileHover={{ gap: '1.5rem' }}
                  className="group flex items-center gap-4 text-xl font-medium"
                >
                  <span className="relative">
                    Get Started
                    <span className="absolute left-0 bottom-0 w-full h-px bg-brand-red-500 
                      origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                  <ArrowRight className="w-6 h-6 text-brand-red-500 transition-transform 
                    group-hover:translate-x-2" />
                </motion.button>
              </ScrollLink>

              <div className="h-12 w-px bg-gray-800" />

              <div className="space-y-1">
                <p className="text-4xl font-bold text-brand-red-500">1000+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Students Guided</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-square"
          >
            {/* Abstract Shapes */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-[80%] h-[80%] border border-brand-red-500/20 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* Center Image */}
            <div className="absolute inset-[15%] rounded-full overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1740&q=80"
                alt="Student studying"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
              <div className="absolute inset-0 bg-brand-red-500/10 mix-blend-overlay" />
            </div>

            {/* Floating Elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-brand-red-500"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;