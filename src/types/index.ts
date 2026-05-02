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
  issuer?: string;
  year?: string;
}

export interface Project {
  name: string;
  repoName: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string; // We'll use this for mapping icons
}
