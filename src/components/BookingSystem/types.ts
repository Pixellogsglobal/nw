```typescript
export interface ConsultationType {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  calendlyUrl: string;
  icon: 'academic' | 'career' | 'application' | 'followup';
  features: string[];
}

export interface BookingStep {
  id: number;
  title: string;
  description: string;
}

export interface UserDetails {
  name: string;
  email: string;
  phone?: string;
  educationLevel?: string;
  targetUniversity?: string;
  desiredCourse?: string;
  additionalNotes?: string;
}
```