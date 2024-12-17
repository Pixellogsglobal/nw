import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, FileText, Video, BookOpen, ArrowRight, Search, Calendar } from 'lucide-react';

const resources = [
  {
    type: 'video',
    title: 'Advanced Calculus Masterclass',
    description: 'Deep dive into advanced calculus concepts with interactive examples',
    duration: '45 min',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    category: 'Mathematics',
    instructor: 'Dr. Sarah Chen'
  },
  {
    type: 'article',
    title: 'Physics Problem-Solving Guide',
    description: 'Step-by-step approaches to solving complex physics problems',
    readTime: '15 min',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=800&q=80',
    category: 'Physics',
    author: 'Prof. James Wilson'
  },
  {
    type: 'webinar',
    title: 'Chemistry Lab Techniques',
    description: 'Essential laboratory techniques for advanced chemistry experiments',
    date: '2024-03-15',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    category: 'Chemistry',
    instructor: 'Dr. Emily Rodriguez'
  }
];

const categories = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];

const ResourceCenter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Learning
            <span className="text-brand-red-500"> Resources</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our comprehensive collection of educational materials
          </p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-red-500/20 rounded-full blur-[80px]" />
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-brand-red-500/10 rounded-full blur-[60px]" />
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl 
                focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
                text-white placeholder-gray-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-red-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {filteredResources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="group"
          >
            {/* Card Container */}
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
              backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-500
                    group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
                
                {resource.type === 'video' && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-red-500/90 flex items-center 
                      justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </motion.button>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-red-500/90 
                    text-white backdrop-blur-sm">
                    {resource.category}
                  </span>
                </div>

                {/* Type Icon */}
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                    {resource.type === 'article' ? <FileText className="w-4 h-4 text-white" /> :
                     resource.type === 'video' ? <Video className="w-4 h-4 text-white" /> :
                     <Calendar className="w-4 h-4 text-white" />}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{resource.description}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    {resource.type === 'article' ? (
                      <span>{resource.readTime} read</span>
                    ) : resource.type === 'video' ? (
                      <span>{resource.duration}</span>
                    ) : (
                      <span>{new Date(resource.date).toLocaleDateString()}</span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ gap: '1rem' }}
                    className="flex items-center gap-2 text-brand-red-500 text-sm font-medium"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute left-0 bottom-0 w-full h-px bg-brand-red-500 
                        origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResourceCenter;