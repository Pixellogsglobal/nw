```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../types';
import { format } from 'date-fns';
import { Book, Calendar, Clock, ArrowRight } from 'lucide-react';

interface CourseTimelineProps {
  courses: Course[];
  onAddCourse: (course: Omit<Course, 'id'>) => Promise<void>;
}

const CourseTimeline: React.FC<CourseTimelineProps> = ({ courses, onAddCourse }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Course Timeline</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-brand-red-500 text-white rounded-xl font-medium"
        >
          Add Course
        </motion.button>
      </div>

      <div className="space-y-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Line */}
            {index < courses.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-px bg-white/10" />
            )}

            <div className="flex gap-8">
              {/* Timeline Dot */}
              <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center
                ${course.status === 'completed'
                  ? 'bg-green-500/20 text-green-500'
                  : course.status === 'in-progress'
                    ? 'bg-brand-red-500/20 text-brand-red-500'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                <Book className="w-6 h-6" />
              </div>

              {/* Course Card */}
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                    <p className="text-gray-400">{course.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-brand-red-500" />
                    <span>{format(new Date(course.startDate), 'MMM d, yyyy')}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-brand-red-500 font-medium">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      className="h-full bg-brand-red-500"
                    />
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>
                        {format(new Date(course.startDate), 'MMM d')} - 
                        {format(new Date(course.endDate), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                      ${course.status === 'completed'
                        ? 'bg-green-500/20 text-green-500'
                        : course.status === 'in-progress'
                          ? 'bg-brand-red-500/20 text-brand-red-500'
                          : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {course.status.replace('-', ' ')}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-brand-red-500"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
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

export default CourseTimeline;
```