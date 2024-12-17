import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building2, Star, ArrowRight, ExternalLink } from 'lucide-react';

interface UniversityCardProps {
  university: {
    name: string;
    location: string;
    description: string;
    ranking: number;
    type: 'Public' | 'Private';
    region: string;
    studentCount: string;
    acceptanceRate: string;
    programs: string[];
    website?: string;
    applicationDeadline?: string;
    tuitionRange?: string;
  };
  onLearnMore: (name: string) => void;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university, onLearnMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
        backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 p-8"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-white">{university.name}</h3>
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

      {/* Additional Info */}
      {(university.applicationDeadline || university.tuitionRange) && (
        <div className="mb-6 space-y-2 text-sm text-gray-400">
          {university.applicationDeadline && (
            <p>Application Deadline: {university.applicationDeadline}</p>
          )}
          {university.tuitionRange && (
            <p>Tuition Range: {university.tuitionRange}</p>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ gap: '1.5rem' }}
          onClick={() => onLearnMore(university.name)}
          className="flex items-center gap-4 text-brand-red-500"
        >
          <span className="relative">
            Learn More
            <span className="absolute left-0 bottom-0 w-full h-px bg-brand-red-500 
              origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
        </motion.button>

        {university.website && (
          <motion.a
            href={university.website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default UniversityCard;