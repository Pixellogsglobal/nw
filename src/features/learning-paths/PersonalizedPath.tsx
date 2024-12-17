import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Map, Target, Book, Award, ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  completed: boolean;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  progress: number;
  milestones: Milestone[];
}

const paths: LearningPath[] = [
  {
    id: 'math-advanced',
    title: 'Advanced Mathematics',
    description: 'Master complex mathematical concepts through interactive lessons',
    duration: '12 weeks',
    progress: 65,
    milestones: [
      { id: 'calc1', title: 'Differential Calculus', completed: true },
      { id: 'calc2', title: 'Integral Calculus', completed: true },
      { id: 'calc3', title: 'Multivariable Calculus', completed: false },
      { id: 'stats', title: 'Advanced Statistics', completed: false }
    ]
  },
  {
    id: 'physics-core',
    title: 'Core Physics',
    description: 'Build a strong foundation in fundamental physics principles',
    duration: '10 weeks',
    progress: 40,
    milestones: [
      { id: 'mech', title: 'Classical Mechanics', completed: true },
      { id: 'thermo', title: 'Thermodynamics', completed: false },
      { id: 'em', title: 'Electromagnetism', completed: false },
      { id: 'quantum', title: 'Quantum Physics', completed: false }
    ]
  }
];

const PersonalizedPath: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const controls = useAnimation();

  return (
    <div className="min-h-screen py-20">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-5xl font-bold mb-4">
            Your Learning
            <span className="text-brand-red-500"> Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Personalized paths designed for your success
          </p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-red-500/20 rounded-full blur-[80px]" />
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-brand-red-500/10 rounded-full blur-[60px]" />
        </div>
      </div>

      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
        {paths.map((path) => {
          const isSelected = selectedPath === path.id;

          return (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
                backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-brand-red-500/10 text-brand-red-500">
                        <Map className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{path.title}</h3>
                        <p className="text-gray-400">{path.description}</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-gray-400">
                      {path.duration}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-brand-red-500 font-medium">{path.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${path.progress}%` }}
                        className="h-full bg-brand-red-500"
                      />
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="space-y-3">
                    {path.milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className="flex items-center justify-between p-4 rounded-xl 
                          bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${
                            milestone.completed 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-white/10 text-gray-400'
                          }`}>
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{milestone.title}</span>
                        </div>
                        {!milestone.completed && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-brand-red-500 text-white text-sm"
                          >
                            Start
                          </motion.button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ gap: '1.5rem' }}
                    onClick={() => setSelectedPath(path.id)}
                    className="flex items-center gap-4 mt-8 text-brand-red-500"
                  >
                    <span className="relative">
                      Continue Learning
                      <span className="absolute left-0 bottom-0 w-full h-px bg-brand-red-500 
                        origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </motion.button>
                </div>

                {/* Floating Elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-brand-red-500 rounded-full"
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
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4 max-w-7xl mx-auto">
        {[
          { icon: Target, label: 'Learning Goals', value: '8/10 Completed' },
          { icon: Book, label: 'Study Hours', value: '120 Hours' },
          { icon: Award, label: 'Achievements', value: '12 Earned' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
              backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-brand-red-500/10 text-brand-red-500">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedPath;