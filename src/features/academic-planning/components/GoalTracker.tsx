import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Plus, Calendar, Flag, CheckCircle } from 'lucide-react';
import { Goal } from '../types';
import { format } from 'date-fns';

interface GoalTrackerProps {
  goals: Goal[];
  onUpdateGoal: (id: string, updates: Partial<Goal>) => Promise<void>;
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ goals, onUpdateGoal }) => {
  const [showAddGoal, setShowAddGoal] = useState(false);

  const handleToggleComplete = async (id: string, completed: boolean) => {
    await onUpdateGoal(id, { completed });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Goal Tracker</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddGoal(true)}
          className="px-6 py-3 bg-brand-red-500 text-white rounded-xl font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Goal
        </motion.button>
      </div>

      <div className="grid gap-6">
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  goal.priority === 'high' 
                    ? 'bg-red-500/10 text-red-500'
                    : goal.priority === 'medium'
                      ? 'bg-yellow-500/10 text-yellow-500'
                      : 'bg-green-500/10 text-green-500'
                }`}>
                  <Target className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2">{goal.title}</h4>
                  <p className="text-gray-400 mb-4">{goal.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Due {format(new Date(goal.deadline), 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Flag className="w-4 h-4" />
                      <span className="capitalize">{goal.priority} Priority</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleToggleComplete(goal.id, !goal.completed)}
                className={`p-2 rounded-full ${
                  goal.completed
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <CheckCircle className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GoalTracker;