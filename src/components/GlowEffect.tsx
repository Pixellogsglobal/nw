import React from 'react';
import { motion } from 'framer-motion';

interface GlowEffectProps {
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
  color = '#DC2626',
  size = 300,
  blur = 100,
  opacity = 0.2
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [opacity, opacity * 1.5, opacity],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default GlowEffect;