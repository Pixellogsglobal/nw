import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, FileText, Video, BookOpen, Edit2, Trash2 } from 'lucide-react';

const mockContent = [
  {
    id: 1,
    title: 'How to Choose the Right University',
    type: 'article',
    status: 'Published',
    author: 'John Doe',
    date: '2024-02-15'
  },
  {
    id: 2,
    title: 'College Interview Tips',
    type: 'video',
    status: 'Draft',
    author: 'Jane Smith',
    date: '2024-02-10'
  }
];

const ContentManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'article':
        return <FileText className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'webinar':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Management</h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-brand-red-500 text-white rounded-lg"
        >
          <Plus className="w-5 h-5" />
          Add Content
        </motion.button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red-500"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg"
        >
          <Filter className="w-5 h-5" />
          Filters
        </motion.button>
      </div>

      <div className="grid gap-6">
        {mockContent.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ y: -2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-red-500/10 rounded-lg">
                  {getIcon(item.type)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${item.status === 'Published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 hover:text-brand-red-500"
                >
                  <Edit2 className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContentManagement;