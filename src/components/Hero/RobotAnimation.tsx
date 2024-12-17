import React from 'react';
import { motion } from 'framer-motion';

const RobotAnimation: React.FC = () => {
  return (
    <motion.div 
      className="absolute right-0 bottom-0 w-[300px] h-[300px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Robot Head */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-brand-red-500 to-brand-red-600 rounded-2xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Eyes */}
        <div className="absolute top-6 left-0 right-0 flex justify-center gap-6">
          <motion.div
            className="w-6 h-6 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-6 h-6 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        {/* Antenna */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-8 bg-brand-red-400"
          animate={{
            rotateZ: [0, -15, 15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-red-300 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Robot Body */}
      <motion.div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-40 h-48 bg-gradient-to-b from-brand-red-600 to-brand-red-700 rounded-3xl"
        animate={{
          y: [0, 5, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        {/* Chest Light */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Arms */}
        <motion.div
          className="absolute -left-8 top-10 w-6 h-24 bg-brand-red-500 rounded-full origin-top"
          animate={{
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -right-8 top-10 w-6 h-24 bg-brand-red-500 rounded-full origin-top"
          animate={{
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>

      {/* Hover Effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-brand-red-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default RobotAnimation;