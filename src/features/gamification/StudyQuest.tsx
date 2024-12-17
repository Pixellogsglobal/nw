import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Award, TrendingUp, Book, Brain, Sparkles, ArrowRight } from 'lucide-react';

interface Quest {
  id: number;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  type: 'daily' | 'weekly' | 'achievement';
  deadline?: string;
}

const quests: Quest[] = [
  {
    id: 1,
    title: 'Complete Practice Test',
    description: 'Take a full practice test in your subject area',
    points: 100,
    completed: false,
    type: 'daily',
    deadline: '2024-03-15'
  },
  {
    id: 2,
    title: 'Study Streak',
    description: 'Maintain a 5-day study streak',
    points: 50,
    completed: false,
    type: 'weekly'
  },
  {
    id: 3,
    title: 'Master of Mathematics',
    description: 'Complete all advanced math modules',
    points: 200,
    completed: false,
    type: 'achievement'
  }
];

const StudyQuest: React.FC = () => {
  const [points, setPoints] = useState(350);
  const [level, setLevel] = useState(5);
  const [selectedType, setSelectedType] = useState<'daily' | 'weekly' | 'achievement'>('daily');

  const completeQuest = (questId: number) => {
    const quest = quests.find(q => q.id === questId);
    if (quest && !quest.completed) {
      setPoints(prev => {
        const newPoints = prev + quest.points;
        if (newPoints >= level * 100) {
          setLevel(prev => prev + 1);
        }
        return newPoints;
      });
    }
  };

  const filteredQuests = quests.filter(quest => quest.type === selectedType);

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
            Study
            <span className="text-brand-red-500"> Quests</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete challenges, earn rewards, and track your progress
          </p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-red-500/20 rounded-full blur-[80px]" />
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-brand-red-500/10 rounded-full blur-[60px]" />
        </div>
      </div>

      {/* Progress Overview */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Trophy, label: 'Level', value: level, suffix: '' },
            { icon: Star, label: 'Total Points', value: points, suffix: 'pts' },
            { icon: Target, label: 'Next Level', value: `${points}/${level * 100}`, suffix: 'pts' },
            { icon: Award, label: 'Achievements', value: '8', suffix: 'earned' }
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
                  <p className="text-2xl font-bold">
                    {stat.value}
                    <span className="text-sm text-gray-400 ml-1">{stat.suffix}</span>
                  </p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quest Types */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-4">
          {[
            { type: 'daily', label: 'Daily Quests', icon: Book },
            { type: 'weekly', label: 'Weekly Challenges', icon: Brain },
            { type: 'achievement', label: 'Achievements', icon: Trophy }
          ].map((item) => (
            <motion.button
              key={item.type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedType(item.type as typeof selectedType)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium 
                transition-colors ${
                selectedType === item.type
                  ? 'bg-brand-red-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quests Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-6">
          {filteredQuests.map((quest) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
                backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-brand-red-500/10 text-brand-red-500">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{quest.title}</h3>
                      <p className="text-gray-400 mb-4">{quest.description}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-brand-red-500">
                          <Star className="w-4 h-4" />
                          <span className="font-medium">{quest.points} points</span>
                        </div>
                        {quest.deadline && (
                          <div className="text-sm text-gray-400">
                            Due: {new Date(quest.deadline).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => completeQuest(quest.id)}
                    disabled={quest.completed}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors
                      flex items-center gap-2 ${
                      quest.completed
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-brand-red-500 text-white hover:bg-brand-red-600'
                    }`}
                  >
                    {quest.completed ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Completed
                      </>
                    ) : (
                      <>
                        Start Quest
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: quest.completed ? '100%' : '0%' }}
                    className="h-full bg-brand-red-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyQuest;