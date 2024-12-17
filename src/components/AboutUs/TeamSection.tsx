import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

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

const TeamSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-7xl font-bold text-white">
          Meet Our
          <span className="text-brand-red-500"> Team</span>
        </h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mt-6"
        >
          Our dedicated team of educators and professionals brings together decades of experience
          in education, technology, and student success.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red-500/10 to-transparent rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
            
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-brand-red-500 font-medium mb-4">{member.role}</p>
                
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 
                  transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {member.bio}
                </p>

                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 
                  transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;