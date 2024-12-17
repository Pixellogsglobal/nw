import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Globe } from 'lucide-react';

const MissionSection = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg border border-white/10 p-12 mb-32">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(220,38,38,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(220,38,38,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(220,38,38,0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-brand-red-500/50" />
          <span className="text-brand-red-500 uppercase tracking-wider font-medium px-4 py-2 rounded-full border border-brand-red-500/20 backdrop-blur-sm">
            Your Dream, Our Mission
          </span>
          <div className="h-px w-12 bg-brand-red-500/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl lg:text-[100px] font-bold text-center mb-12 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Transform Your
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-red-500 to-brand-red-400">
            Future Today
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              {
                icon: Sparkles,
                text: "At Pixellogs Global, we believe studying abroad isn't just about getting an education—it's about rewriting your destiny. 🌏✈️"
              },
              {
                icon: Rocket,
                text: "🎓 Our goal? To empower you to dream big and achieve bigger. With firsthand experience navigating challenges and seizing opportunities abroad."
              },
              {
                icon: Globe,
                text: "💡 This isn't just about applications and visas; it's about building a future without limits."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4 group"
              >
                <div className="p-4 rounded-xl bg-brand-red-500/10 text-brand-red-500 h-fit">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl text-white/90 leading-relaxed group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1740&q=80"
                alt="Students studying"
                className="rounded-2xl shadow-2xl shadow-brand-red-500/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red-500/10 rounded-full blur-3xl" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-brand-red-500">
            Pixellogs Global – Let's build your legacy, together. 🌍
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionSection;