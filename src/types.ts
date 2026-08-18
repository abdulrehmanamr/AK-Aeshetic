export type TreatmentCategory = 'skin' | 'hair' | 'laser' | 'injectables' | 'rejuvenation' | 'body';

export interface Treatment {
  slug: string;
  name: string;
  category: TreatmentCategory;
  categoryName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration: string;
  downtime: string;
  sessionsRecommended?: string;
  recommendedSessions?: string;
  painLevel: 'None' | 'Minimal' | 'Mild' | 'Moderate' | string;
  benefits: string[];
  whoItsFor: string[];
  indications?: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  protocolSteps?: {
    step?: string;
    title: string;
    description: string;
  }[];
  whatToExpect: string[];
  recovery: string[];
  preCare?: string[];
  afterCare?: string[];
  resultsTimeline: string;
  faq?: {
    question: string;
    answer: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  featured?: boolean;
  signature?: boolean;
  priceStartingAt?: string;
}

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
  shortBio?: string;
  fullBio?: string[] | string;
  bio?: string;
  degrees?: string[];
  qualifications: string[];
  experienceYears: number;
  expertise: string[];
  treatmentsHandled: string[];
  availableDays: string[];
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  level: 'Fundamental' | 'Intermediate' | 'Advanced' | 'Masterclass';
  duration: string;
  format: 'Hands-on Clinical' | 'Blended Learning' | 'Masterclass Workshop';
  image: string;
  shortDescription: string;
  fullDescription?: string;
  overview: string;
  whoItsFor: string[];
  eligibility?: string[];
  whatYoullLearn: string[];
  learningOutcomes?: string[];
  curriculum: {
    module: string;
    title: string;
    topics?: string[];
    desc?: string;
  }[];
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  prerequisites: string[];
  certificationNote?: string;
  certification?: string;
  schedule: string;
  fee?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  source: 'Google Review' | 'Verified Patient';
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'appointments' | 'skin' | 'hair' | 'laser' | 'injectables' | 'aftercare';
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Skin' | 'Hair' | 'Aesthetics' | 'Aftercare' | 'Clinic';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  coverImage: string;
  content: {
    sectionHeading?: string;
    paragraphs: string[];
    keyTakeaway?: string;
  }[];
  tags: string[];
}

export interface PriceItem {
  id: string;
  treatmentName: string;
  category: TreatmentCategory;
  categoryName?: string;
  description: string;
  sessions: string;
  pricing: string;
  note?: string;
  popular?: boolean;
}

export interface ResultItem {
  id: string;
  title: string;
  category: TreatmentCategory;
  treatmentName: string;
  concernsAddressed: string;
  sessionsCount: string;
  timeline: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  doctorNotes?: string;
}

export interface LabTest {
  id: string;
  name: string;
  code: string;
  category: 'Dermatopathology' | 'Trichology' | 'Hormonal Profile' | 'Allergy & Sensitivity' | 'Micronutrient';
  description: string;
  turnaroundTime: string;
  sampleType: string;
  indications: string[];
  parameters?: string[];
  fastingRequired: boolean;
  clinicalImportance: string;
  indicativeFee?: string;
}

export interface BookingData {
  treatmentSlug: string;
  treatmentName: string;
  preferredDate: string;
  preferredTime: string;
  doctorSlug?: string;
  fullName: string;
  phone: string;
  email: string;
  notes?: string;
  isFirstVisit: boolean;
}
