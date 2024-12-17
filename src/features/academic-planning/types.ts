```typescript
export interface Course {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'in-progress' | 'completed';
  progress: number;
  prerequisites?: string[];
  materials?: string[];
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  completed: boolean;
  category: 'academic' | 'career' | 'skills';
  priority: 'low' | 'medium' | 'high';
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'video' | 'link';
  url: string;
  category: string;
  tags: string[];
  addedAt: Date;
}

export interface ProgressData {
  date: string;
  studyHours: number;
  tasksCompleted: number;
  assessmentScores: number;
}
```