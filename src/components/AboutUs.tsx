import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Brain, Sparkles, Code, Rocket, Heart, Globe } from 'lucide-react';
import ParticleEffect from './ParticleEffect';
import BubbleEffect from './BubbleEffect';
import GlowEffect from './GlowEffect';

const features = [
  {
    icon: Users,
    title: 'Student-Centric',
    description: 'We put students first, tailoring our approach to individual learning styles and needs. Our personalized attention ensures every student reaches their full potential.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Clear objectives and structured learning paths help students achieve their academic goals efficiently. We believe in measurable progress and tangible results.',
  },
  {
    icon: Brain,
    title: 'Innovative Learning',
    description: 'Embracing cutting-edge technology and modern teaching methods to create engaging, effective learning experiences that inspire and motivate.',
  },
  {
    icon: Heart,
    title: 'Passionate Teaching',
    description: 'Our educators bring enthusiasm and expertise to every session, fostering a love for learning that extends beyond the classroom.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Preparing students for success in an interconnected world through comprehensive, internationally-minded education.',
  },
  {
    icon: Code,
    title: 'Modern Methods',
    description: 'Integrating technology and traditional teaching methods to create a dynamic, effective learning environment.',
  }
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'Lead Educator',
    bio: 'With over 15 years of experience in education, Sarah leads our academic programs with passion and innovation.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Michael Ross',
    role: 'Academic Director',
    bio: 'A former university professor bringing expertise in curriculum development and student success strategies.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student Success Manager',
    bio: 'Dedicated to ensuring every student receives the support they need to excel in their academic journey.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80'
  }
];

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
        {/* Mission & Vision */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="overflow-hidden mb-2">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-brand-red-500 uppercase tracking-wider font-medium">
                  Your Dream, Our Mission
                </span>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-7xl lg:text-[100px] font-bold leading-[0.9] tracking-tight"
              >
                Our Mission &
                <span className="block text-brand-red-500">Vision</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 text-white"
            >
              <p className="text-xl leading-relaxed">
                At Pixellogs Global, we believe studying abroad isn't just about getting an education—it's about rewriting your destiny. 
                We're not just consultants; we're dreamers like you, mentors who've walked the same path and know what it takes to thrive on foreign soil. 🌏✈️
              </p>
              <p className="text-xl leading-relaxed">
                🎓 Our goal? To empower you to dream big and achieve bigger. With firsthand experience navigating challenges and seizing opportunities abroad, 
                we're here to make your journey smarter, smoother, and packed with potential.
              </p>
              <p className="text-xl leading-relaxed">
                💡 This isn't just about applications and visas; it's about building a future without limits. 
                We'll guide you with honesty, clarity, and the same passion we had when we chased our own dreams.
              </p>
              <p className="text-xl leading-relaxed">
                So, are you ready to transform your "what if" into "what's next"? 🚀
              </p>
              <p className="text-xl font-bold text-brand-red-500">
                Pixellogs Global – Let's build your legacy, together. 🌍
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="overflow-hidden mb-16">
            <motion.h3
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold text-center text-white"
            >
              Our Core
              <span className="text-brand-red-500"> Values</span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
                    backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 p-8 group"
                >
                  <div className="relative z-10">
                    <motion.div
                      className="p-4 rounded-xl bg-brand-red-500/10 text-brand-red-500 w-fit mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                    </motion.div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-brand-red-500 
                      transition-colors text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>

                  {/* Card Background Effects */}
                  <motion.div
                    className="absolute top-0 right-0 -mr-8 -mt-8"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-32 h-32 rounded-full bg-brand-red-500/5 blur-2xl" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="overflow-hidden mb-16">
            <motion.h3
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold text-center text-white"
            >
              Meet Our
              <span className="text-brand-red-500"> Team</span>
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16"
          >
            Our dedicated team of educators and professionals brings together decades of experience
            in education, technology, and student success.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
                  backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 group"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <h4 className="text-xl font-bold mb-1 text-white">{member.name}</h4>
                  <p className="text-brand-red-500 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 
                    transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {member.bio}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;