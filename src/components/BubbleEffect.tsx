import React from 'react';
import { motion } from 'framer-motion';

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface BubbleEffectProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
}

const BubbleEffect: React.FC<BubbleEffectProps> = ({
  count = 15,
  color = '#DC2626',
  minSize = 40,
  maxSize = 120
}) => {
  const generateBubbles = (): Bubble[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * (maxSize - minSize) + minSize,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 2
    }));
  };

  const bubbles = generateBubbles();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, ${color}10, ${color}05)`,
            border: `1px solid ${color}10`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default BubbleEffect;