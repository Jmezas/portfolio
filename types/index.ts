// types/index.ts
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile';
  level: number; // 1-100
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  impact?: {
    metric: string;
    value: string;
  }[];
  duration?: string;
  team?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  linkedin?: string;
  github?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image?: string;
  content: string;
  rating: number; // 1-5
  date?: string;
  relationship?: string; // e.g., "Trabajamos juntos en el mismo equipo"
}
