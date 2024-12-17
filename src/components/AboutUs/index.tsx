import React from 'react';
import ParticleEffect from '../ParticleEffect';
import BubbleEffect from '../BubbleEffect';
import GlowEffect from '../GlowEffect';
import MissionSection from './MissionSection';
import CoreValues from './CoreValues';
import TeamSection from './TeamSection';

const AboutUs: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <ParticleEffect count={30} />
      <BubbleEffect count={20} />
      
      <div className="absolute top-20 left-1/4">
        <GlowEffect color="#DC2626" size={400} blur={150} opacity={0.1} />
      </div>
      <div className="absolute bottom-40 right-1/4">
        <GlowEffect color="#DC2626" size={300} blur={120} opacity={0.08} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <MissionSection />
        <CoreValues />
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutUs;