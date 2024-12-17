import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, DollarSign, GraduationCap, Users, Building2 } from 'lucide-react';

interface UniversityModalProps {
  isOpen: boolean;
  onClose: () => void;
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
    requirements?: string[];
    facilities?: string[];
    admissionProcess?: string[];
  };
}

const UniversityModal: React.FC<UniversityModalProps> = ({ isOpen, onClose, university }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#0A0A0B]/95 backdrop-blur-xl
                border border-white/10 shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 
                bg-[#0A0A0B]/95 backdrop-blur-xl z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white">{university.name}</h2>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="p-6 space-y-8">
                  {/* Overview */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                    <p className="text-gray-300 leading-relaxed">{university.description}</p>
                  </section>

                  {/* Key Stats */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">Key Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { icon: GraduationCap, label: 'World Ranking', value: `#${university.ranking}` },
                        { icon: Users, label: 'Student Body', value: university.studentCount },
                        { icon: Building2, label: 'Institution Type', value: university.type },
                        { icon: Calendar, label: 'Acceptance Rate', value: university.acceptanceRate }
                      ].map((stat, index) => (
                        <div key={index} className="p-4 rounded-xl bg-white/5">
                          <stat.icon className="w-5 h-5 text-brand-red-500 mb-2" />
                          <div className="font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Programs */}
                  <section>
                    <h3 className="text-xl font-bold text-white mb-4">Available Programs</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {university.programs.map((program, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 
                            transition-colors text-center"
                        >
                          {program}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Requirements */}
                  {university.requirements && (
                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">Entry Requirements</h3>
                      <ul className="space-y-3">
                        {university.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="p-1 rounded-full bg-brand-red-500/10 mt-1">
                              <div className="w-2 h-2 rounded-full bg-brand-red-500" />
                            </div>
                            <p className="text-gray-300">{req}</p>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Facilities */}
                  {university.facilities && (
                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">Campus Facilities</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {university.facilities.map((facility, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-xl bg-white/5 text-gray-300"
                          >
                            {facility}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Admission Process */}
                  {university.admissionProcess && (
                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">Admission Process</h3>
                      <div className="space-y-4">
                        {university.admissionProcess.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
                          >
                            <div className="w-8 h-8 rounded-full bg-brand-red-500/10 flex items-center 
                              justify-center text-brand-red-500 font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-gray-300">{step}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Important Dates & Fees */}
                  <section className="grid md:grid-cols-2 gap-6">
                    {university.applicationDeadline && (
                      <div className="p-4 rounded-xl bg-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-brand-red-500" />
                          <h4 className="font-bold text-white">Application Deadline</h4>
                        </div>
                        <p className="text-gray-300">{university.applicationDeadline}</p>
                      </div>
                    )}
                    {university.tuitionRange && (
                      <div className="p-4 rounded-xl bg-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-brand-red-500" />
                          <h4 className="font-bold text-white">Tuition Range</h4>
                        </div>
                        <p className="text-gray-300">{university.tuitionRange}</p>
                      </div>
                    )}
                  </section>

                  {/* CTA */}
                  {university.website && (
                    <div className="flex justify-center mt-8">
                      <motion.a
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-brand-red-500 text-white rounded-xl font-bold
                          flex items-center gap-2"
                      >
                        Visit University Website
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UniversityModal;