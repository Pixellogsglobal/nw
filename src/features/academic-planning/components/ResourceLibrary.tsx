import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Video, Link as LinkIcon, Plus, Search } from 'lucide-react';
import { Resource } from '../types';
import { format } from 'date-fns';

interface ResourceLibraryProps {
  resources: Resource[];
  onAddResource: (resource: Omit<Resource, 'id' | 'addedAt'>) => Promise<void>;
}

const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ resources, onAddResource }) => {
  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'document':
        return <FileText className="w-6 h-6" />;
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'link':
        return <LinkIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Resource Library</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-brand-red-500 text-white rounded-xl font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Resource
        </motion.button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
            text-white placeholder-gray-400"
        />
      </div>

      <div className="grid gap-6">
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-red-500/10 text-brand-red-500">
                {getIcon(resource.type)}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{resource.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="capitalize">{resource.type}</span>
                      <span>•</span>
                      <span>{resource.category}</span>
                      <span>•</span>
                      <span>Added {format(new Date(resource.addedAt), 'MMM d, yyyy')}</span>
                    </div>
                  </div>

                  <motion.a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-brand-red-500/10 text-brand-red-500 rounded-lg text-sm font-medium"
                  >
                    Open Resource
                  </motion.a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;