```typescript
import { Course, Goal, Resource } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    description: 'Complex mathematical concepts and problem-solving techniques',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-05-30'),
    status: 'in-progress',
    progress: 65,
    prerequisites: ['Basic Calculus'],
    materials: ['Textbook', 'Practice Problems']
  },
  {
    id: '2',
    title: 'Physics Fundamentals',
    description: 'Core physics principles and practical applications',
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-06-30'),
    status: 'upcoming',
    progress: 0,
    prerequisites: ['Basic Mathematics'],
    materials: ['Lab Manual', 'Video Lectures']
  }
];

export const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Complete Calculus Module',
    description: 'Master differential and integral calculus concepts',
    deadline: new Date('2024-04-15'),
    completed: false,
    category: 'academic',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Research Project',
    description: 'Complete physics research project and presentation',
    deadline: new Date('2024-05-30'),
    completed: false,
    category: 'academic',
    priority: 'medium'
  }
];

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Calculus Video Series',
    type: 'video',
    url: 'https://example.com/calculus',
    category: 'Mathematics',
    tags: ['calculus', 'tutorial'],
    addedAt: new Date('2024-03-01')
  },
  {
    id: '2',
    title: 'Physics Lab Guide',
    type: 'document',
    url: 'https://example.com/physics-guide',
    category: 'Physics',
    tags: ['lab', 'guide'],
    addedAt: new Date('2024-03-05')
  }
];
```