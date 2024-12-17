```typescript
import { useState, useEffect } from 'react';
import { Course, Goal, Resource } from '../types';
import { mockCourses, mockGoals, mockResources } from '../data/mockData';

export const useAcademicPlan = () => {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [goals, setGoals] = useState<Goal[]>(mockGoals);
  const [resources, setResources] = useState<Resource[]>(mockResources);
  const [progress, setProgress] = useState(65);

  const addCourse = async (course: Omit<Course, 'id'>) => {
    const newCourse: Course = {
      ...course,
      id: Date.now().toString(),
      progress: 0,
      status: 'upcoming'
    };
    setCourses(prev => [...prev, newCourse]);
  };

  const updateGoal = async (id: string, updates: Partial<Goal>) => {
    setGoals(prev => prev.map(goal => 
      goal.id === id ? { ...goal, ...updates } : goal
    ));
  };

  const addResource = async (resource: Omit<Resource, 'id' | 'addedAt'>) => {
    const newResource: Resource = {
      ...resource,
      id: Date.now().toString(),
      addedAt: new Date()
    };
    setResources(prev => [...prev, newResource]);
  };

  // Calculate overall progress
  useEffect(() => {
    const completedGoals = goals.filter(g => g.completed).length;
    const totalGoals = goals.length;
    const courseProgress = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length;
    
    const overallProgress = Math.round((completedGoals / totalGoals * 0.4 + courseProgress * 0.6) * 100);
    setProgress(overallProgress);
  }, [courses, goals]);

  return {
    courses,
    goals,
    resources,
    progress,
    addCourse,
    updateGoal,
    addResource
  };
};
```