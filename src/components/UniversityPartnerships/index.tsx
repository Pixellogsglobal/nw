import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import UniversityCard from './UniversityCard';
import UniversityModal from './UniversityModal';

const universities = [
  {
    name: 'University of Oxford',
    location: 'Oxford, UK',
    description: 'A world-leading center of learning, teaching and research, and the oldest university in the English-speaking world.',
    ranking: 1,
    type: 'Public',
    region: 'UK',
    studentCount: '24,000+',
    acceptanceRate: '17%',
    programs: ['Medicine', 'Law', 'Engineering', 'Business'],
    website: 'https://www.ox.ac.uk',
    applicationDeadline: 'October 15, 2024',
    tuitionRange: '£26,770 - £39,010 per year',
    requirements: [
      'Outstanding academic achievement (A*AA at A-Level or equivalent)',
      'English language proficiency (IELTS 7.0+)',
      'Subject-specific requirements',
      'Admissions test scores',
      'Interview performance'
    ],
    facilities: [
      'World-class libraries',
      'Cutting-edge research facilities',
      'Historic colleges',
      'Sports centers',
      'Student unions',
      'Career services'
    ],
    admissionProcess: [
      'Submit UCAS application by October 15',
      'Take required admissions tests',
      'Submit written work if required',
      'Attend interview if shortlisted',
      'Receive decision by January'
    ]
  },
  {
    name: 'University of Cambridge',
    location: 'Cambridge, UK',
    description: 'A collegiate public research university with a rich history of academic excellence and groundbreaking discoveries.',
    ranking: 2,
    type: 'Public',
    region: 'UK',
    studentCount: '21,000+',
    acceptanceRate: '21%',
    programs: ['Science', 'Engineering', 'Mathematics', 'Arts'],
    website: 'https://www.cam.ac.uk',
    applicationDeadline: 'October 15, 2024',
    tuitionRange: '£22,227 - £58,038 per year',
    requirements: [
      'Excellent academic record (A*A*A at A-Level or equivalent)',
      'IELTS score of 7.0 or higher',
      'Strong personal statement',
      'College selection',
      'Admissions assessment performance'
    ],
    facilities: [
      'Research laboratories',
      'Extensive library system',
      'College accommodation',
      'Sports facilities',
      'Student societies',
      'Career guidance center'
    ],
    admissionProcess: [
      'Choose a course and college',
      'Submit UCAS application',
      'Complete additional questionnaires',
      'Attend interviews',
      'Receive decision'
    ]
  },
  {
    name: 'Imperial College London',
    location: 'London, UK',
    description: 'A world-leading science-based institution known for innovation in engineering, science, medicine, and business.',
    ranking: 3,
    type: 'Public',
    region: 'UK',
    studentCount: '19,000+',
    acceptanceRate: '14.3%',
    programs: ['Engineering', 'Medicine', 'Science', 'Business'],
    website: 'https://www.imperial.ac.uk',
    applicationDeadline: 'January 15, 2024',
    tuitionRange: '£32,000 - £45,000 per year',
    requirements: [
      'Exceptional academic achievements',
      'Strong mathematics background',
      'English language proficiency',
      'Subject-specific requirements',
      'Personal statement'
    ],
    facilities: [
      'State-of-the-art laboratories',
      'Innovation spaces',
      'Modern libraries',
      'Sports facilities',
      'Student support services'
    ],
    admissionProcess: [
      'Submit UCAS application',
      'Provide academic transcripts',
      'Complete department-specific tests',
      'Interview process',
      'Receive offer decision'
    ]
  }
];

const UniversityPartnerships: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedUniversity, setSelectedUniversity] = useState<typeof universities[0] | null>(null);

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

  const handleLearnMore = (name: string) => {
    const university = universities.find(u => u.name === name);
    if (university) {
      setSelectedUniversity(university);
    }
  };

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
          {filteredUniversities.map((university) => (
            <UniversityCard
              key={university.name}
              university={university}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>

      {selectedUniversity && (
        <UniversityModal
          isOpen={!!selectedUniversity}
          onClose={() => setSelectedUniversity(null)}
          university={selectedUniversity}
        />
      )}
    </div>
  );
};

export default UniversityPartnerships;