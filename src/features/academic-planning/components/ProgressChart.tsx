import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, Award } from 'lucide-react';

interface ProgressChartProps {
  progress: number;
}

const mockData = [
  { month: 'Jan', studyHours: 45, progress: 75 },
  { month: 'Feb', studyHours: 52, progress: 82 },
  { month: 'Mar', studyHours: 48, progress: 88 }
];

const ProgressChart: React.FC<ProgressChartProps> = ({ progress }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: TrendingUp, label: 'Overall Progress', value: `${progress}%` },
          { icon: Target, label: 'Goals Completed', value: '8/10' },
          { icon: Award, label: 'Study Streak', value: '12 days' }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-red-500/10">
                  <Icon className="w-6 h-6 text-brand-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Progress Overview</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.5rem'
                }}
              />
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
      </div>
    </div>
  );
};

export default ProgressChart;