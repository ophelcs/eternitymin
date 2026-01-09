
export enum Category {
  PRAYER_FASTING = 'Prayer & Fasting',
  TRAINING = 'Training',
  MESSAGES = 'Messages',
  LATEST = 'Latest'
}

export interface Teaching {
  id: string;
  title: string;
  category: Category;
  date: string;
  description: string;
  mediaUrl?: string;
  fileUrl?: string;
  tags: string[];
  thumbnail: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  overview: string;
  curriculum: string[];
  whoIsItFor: string;
  duration: string;
  applicationLink: string;
}

export interface Event {
  id: string;
  title: string;
  datetime: string;
  location: string;
  description: string;
  registerLink: string;
  isPast?: boolean;
}

export interface Cause {
  id: string;
  name: string;
  description: string;
  donateLink: string;
  impactHighlight?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  region: string;
  photo: string;
}

export type View = 'home' | 'teachings' | 'training' | 'events' | 'give' | 'admin' | 'more';
