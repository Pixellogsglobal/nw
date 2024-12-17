import { ConsultationType } from './types';

export const consultationTypes: ConsultationType[] = [
  {
    id: 'initial',
    title: 'Initial Consultation',
    description: 'Comprehensive evaluation of your academic goals and personalized guidance',
    duration: '45 min',
    price: 'Free',
    calendlyUrl: 'https://calendly.com/pixellogs/initial',
    icon: 'academic',
    features: [
      'Academic profile evaluation',
      'University recommendations',
      'Course selection guidance',
      'Application strategy planning',
      'Scholarship opportunities'
    ]
  },
  {
    id: 'application',
    title: 'Application Review',
    description: 'Detailed review and optimization of your university applications',
    duration: '60 min',
    price: '$99',
    calendlyUrl: 'https://calendly.com/pixellogs/application',
    icon: 'application',
    features: [
      'Personal statement review',
      'Application form check',
      'Document verification',
      'Portfolio assessment',
      'Interview preparation'
    ]
  },
  {
    id: 'career',
    title: 'Career Planning',
    description: 'Strategic career guidance and industry insights',
    duration: '45 min',
    price: '$79',
    calendlyUrl: 'https://calendly.com/pixellogs/career',
    icon: 'career',
    features: [
      'Career path exploration',
      'Industry insights',
      'Skills assessment',
      'Internship guidance',
      'Network building tips'
    ]
  }
];