export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  link?: string;
  issuer?: string;
  year?: string;
}

export interface CertificationGroup {
  provider: string;
  certs: Certification[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  badge?: 'featured';
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  order: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string; // We'll use this for mapping icons
}
