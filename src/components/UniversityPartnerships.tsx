import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Users, Building2, ArrowRight, Star, Globe } from 'lucide-react';

interface University {
  name: string;
  location: string;
  description: string;
  ranking: number;
  type: 'Public' | 'Private';
  region: string;
  studentCount: string;
  acceptanceRate: string;
  programs: string[];
}

const universities: University[] = [
  {
    name: 'University of Oxford',
    location: 'Oxford, UK',
    description: 'A world-leading center of learning, teaching and research.',
    ranking: 1,
    type: 'Public',
    region: 'UK',
    studentCount: '24,000+',
    acceptanceRate: '17%',
    programs: ['Medicine', 'Law', 'Engineering', 'Business']
  },
  {
    name: 'Harvard University',
    location: 'Cambridge, USA',
    description: 'Devoted to excellence in teaching, learning, and research.',
    ranking: 2,
    type: 'Private',
    region: 'USA',
    studentCount: '23,000+',
    acceptanceRate: '5%',
    programs: ['Business', 'Law', 'Medicine', 'Computer Science']
  },
  {
    name: 'Stanford University',
    location: 'Stanford, USA',
    description: 'Dedicated to finding solutions to big challenges.',
    ranking: 3,
    type: 'Private',
    region: 'USA',
    studentCount: '17,000+',
    acceptanceRate: '4%',
    programs: ['Engineering', 'Business', 'Computer Science', 'Medicine']
  },
  {
    name: 'University of Cambridge',
    location: 'Cambridge, UK',
    description: 'A collegiate public research university.',
    ranking: 4,
    type: 'Public',
    region: 'UK',
    studentCount: '21,000+',
    acceptanceRate: '21%',
    programs: ['Science', 'Engineering', 'Mathematics', 'Arts']
  }
];

const UniversityPartnerships: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = 
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.programs.some(program => 
        program.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesRegion = selectedRegion === 'All' || university.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            Partner
            <span className="text-brand-red-500"> Universities</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Explore our network of prestigious educational institutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search universities, locations, or programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
                text-white placeholder-gray-400"
            />
          </div>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
              text-white appearance-none cursor-pointer min-w-[150px]"
          >
            <option value="All">All Regions</option>
            <option value="UK">United Kingdom</option>
            <option value="USA">United States</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredUniversities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
                backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{university.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-brand-red-500 font-bold">#{university.ranking}</div>
                  <div className="text-sm text-gray-400">World Ranking</div>
                </div>
              </div>

              <p className="text-gray-400 mb-6">{university.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl bg-white/5">
                  <Users className="w-5 h-5 mx-auto mb-2 text-brand-red-500" />
                  <div className="font-bold text-white">{university.studentCount}</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5">
                  <Star className="w-5 h-5 mx-auto mb-2 text-brand-red-500" />
                  <div className="font-bold text-white">{university.acceptanceRate}</div>
                  <div className="text-xs text-gray-400">Acceptance</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5">
                  <Building2 className="w-5 h-5 mx-auto mb-2 text-brand-red-500" />
                  <div className="font-bold text-white">{university.type}</div>
                  <div className="text-xs text-gray-400">Type</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {university.programs.map((program, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-400
                      hover:bg-brand-red-500/10 hover:text-brand-red-500 transition-colors"
                  >
                    {program}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ gap: '1.5rem' }}
                className="flex items-center gap-4 text-brand-red-500"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute left-0 bottom-0 w-full h-px bg-brand-red-500 
                    origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityPartnerships;