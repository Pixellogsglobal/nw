import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, TrendingUp, Target, Award } from 'lucide-react';

const mockData = [
  { date: '2024-01', studyHours: 45, progress: 75 },
  { date: '2024-02', studyHours: 52, progress: 82 },
  { date: '2024-03', studyHours: 48, progress: 88 }
];

const ProgressTracker: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Clock, label: 'Study Hours', value: '145h', change: '+12%' },
          { icon: TrendingUp, label: 'Progress', value: '88%', change: '+5%' },
          { icon: Target, label: 'Goals Met', value: '12/15', change: '80%' },
          { icon: Award, label: 'Achievements', value: '8', change: 'New' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-white shadow-lg border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="p-3 bg-brand-red-500/10 rounded-lg w-fit">
                  <stat.icon className="w-6 h-6 text-brand-red-500" />
                </div>
                <h3 className="mt-4 text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
              <span className="text-sm text-green-500">
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-xl bg-white shadow-lg border border-gray-100 mb-8"
      >
        <h3 className="text-xl font-bold mb-6">Study Progress</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="progress"
                stroke="#DC2626"
                fillOpacity={1}
                fill="url(#progressGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Study Time Distribution */}
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl bg-white shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-bold mb-6">Study Time Distribution</h3>
          <div className="space-y-4">
            {['Mathematics', 'Physics', 'Chemistry'].map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{subject}</span>
                  <span className="font-medium">{30 - index * 5}h</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${80 - index * 10}%` }}
                    className="h-full bg-brand-red-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Milestones */}
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl bg-white shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-bold mb-6">Recent Milestones</h3>
          <div className="space-y-4">
            {[
              'Completed Advanced Calculus Module',
              'Achieved 90% in Physics Test',
              'Finished Chemistry Project'
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
              >
                <div className="p-2 bg-brand-red-500/10 rounded-full">
                  <Award className="w-4 h-4 text-brand-red-500" />
                </div>
                <span className="font-medium">{milestone}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressTracker;