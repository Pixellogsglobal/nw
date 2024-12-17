import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, ArrowRight } from 'lucide-react';

const ServiceGrid: React.FC = () => {
  const services = [
    { 
      icon: BookOpen, 
      title: "Academic Planning", 
      desc: "Personalized study plans tailored to your goals" 
    },
    { 
      icon: Users, 
      title: "Career Guidance", 
      desc: "Expert counseling for your future path" 
    },
    { 
      icon: Calendar, 
      title: "Consultations", 
      desc: "One-on-one sessions with industry experts" 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
              backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 p-8"
          >
            <div className="flex flex-col h-full">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-xl bg-brand-red-500/10 text-brand-red-500 w-fit mb-6"
              >
                <Icon className="w-8 h-8" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.desc}</p>

              <motion.button
                whileHover={{ gap: '1.5rem' }}
                className="flex items-center gap-4 text-brand-red-500 mt-auto"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute left-0 bottom-0 w-full h-px bg-brand-red-500 
                    origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceGrid;