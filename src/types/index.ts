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
  name: string;
  repoName: string;
  description: string;
  tech: string[];
  link?: string;      // GitHub repo URL override (defaults to github.com/ShravaniSU/{repoName})
  liveUrl?: string;   // Live website URL
  isFeatured?: boolean;
  features?: string[];
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string; // We'll use this for mapping icons
}
