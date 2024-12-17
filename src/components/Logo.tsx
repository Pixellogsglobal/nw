import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <div className="w-12 h-12 relative">
      {/* Main curved shape */}
      <div
        className="absolute top-1/4 left-1/4 w-3/4 h-1/2"
        style={{
          background: '#800000',
          borderRadius: '50% 50% 0 50%',
          transform: 'rotate(-45deg)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)',
        }}
      />

      {/* Red curved shapes */}
      <div
        className="absolute bottom-1/4 left-1/4 w-2/3 h-1/4"
        style={{
          background: '#ff0000',
          borderRadius: '50%',
          transform: 'rotate(15deg)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5)',
        }}
      />

      <div
        className="absolute bottom-1/6 left-1/3 w-1/2 h-1/6"
        style={{
          background: '#ff0000',
          borderRadius: '50%',
          transform: 'rotate(20deg)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5)',
        }}
      />

      {/* Airplane */}
      <div
        className="absolute top-1/6 right-1/4 w-1/4 h-1/4"
        style={{
          background: '#ff0000',
          clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%, 50% 80%)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5)',
        }}
      />

      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20" />
    </div>
  );
};

export default Logo;