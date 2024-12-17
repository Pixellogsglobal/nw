import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Calculator, Beaker, Brain, Search, ArrowRight } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  stats: {
    students: number;
    rating: number;
    lessons: number;
  };
  topics: Array<{
    id: string;
    title: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  }>;
}

const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    icon: Calculator,
    description: 'Master mathematical concepts through interactive lessons and real-world applications',
    stats: {
      students: 1234,
      rating: 4.8,
      lessons: 48
    },
    topics: [
      { id: 'algebra', title: 'Advanced Algebra', difficulty: 'Advanced' },
      { id: 'calculus', title: 'Calculus', difficulty: 'Advanced' },
      { id: 'statistics', title: 'Statistics', difficulty: 'Intermediate' }
    ]
  },
  {
    id: 'science',
    name: 'Physics',
    icon: Beaker,
    description: 'Explore the fundamental laws of the universe through hands-on experiments',
    stats: {
      students: 892,
      rating: 4.9,
      lessons: 36
    },
    topics: [
      { id: 'mechanics', title: 'Classical Mechanics', difficulty: 'Intermediate' },
      { id: 'quantum', title: 'Quantum Physics', difficulty: 'Advanced' },
      { id: 'thermo', title: 'Thermodynamics', difficulty: 'Intermediate' }
    ]
  }
];

const SubjectHelp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Explore Our
            <span className="text-brand-red-500"> Subjects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dive into our comprehensive curriculum designed to help you excel in your studies
          </p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-red-500/20 rounded-full blur-[80px]" />
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-brand-red-500/10 rounded-full blur-[60px]" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-16 px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl 
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
        {filteredSubjects.map((subject) => {
          const Icon = subject.icon;
          const isSelected = selectedSubject === subject.id;

          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedSubject(subject.id)}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
                backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-brand-red-500/10 text-brand-red-500">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{subject.name}</h3>
                        <p className="text-gray-400">{subject.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: 'Students', value: subject.stats.students.toLocaleString() },
                      { label: 'Rating', value: subject.stats.rating.toFixed(1) },
                      { label: 'Lessons', value: subject.stats.lessons }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 rounded-xl bg-white/5">
                        <p className="text-2xl font-bold mb-1">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Topics */}
                  <div className="space-y-3">
                    {subject.topics.map((topic) => (
                      <div
                        key={topic.id}
                        className="flex items-center justify-between p-4 rounded-xl 
                          bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <span className="font-medium">{topic.title}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          topic.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          topic.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {topic.difficulty}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ gap: '1.5rem' }}
                    className="group flex items-center gap-4 mt-8 text-brand-red-500"
                  >
                    <span className="relative">
                      Explore Subject
                      <span className="absolute left-0 bottom-0 w-full h-px bg-brand-red-500 
                        origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectHelp;