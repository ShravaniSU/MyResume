import type { Profile, Experience, Education, Certification, SkillCategory, Project } from '../types';

export const profileData: Profile = {
  name: "Shravani Shirish Urankar",
  title: "DevOps Engineer",
  location: "Bengaluru, Karnataka, India",
  email: "shravanisurankar@gmail.com",
  linkedin: "https://www.linkedin.com/in/shravaniurankar",
  github: "https://github.com/ShravaniSU",
  summary: "Results-driven DevOps Engineer with over 5 years of experience in custom software engineering and application development. Proven expertise in Linux administration, AWS cloud services (EC2, S3), and building automated infrastructure solutions. Passionate about streamlining development workflows through CI/CD pipelines, containerization, and robust monitoring systems."
};

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Custom Software Engineering Analyst",
    period: "Dec 2022 - Present",
    location: "Gurugram, Haryana, India",
    description: [
      "Leading DevOps initiatives and infrastructure automation.",
      "Optimizing cloud resource utilization on AWS.",
      "Developing and maintaining CI/CD pipelines for various projects."
    ]
  },
  {
    company: "Accenture",
    role: "Application Development Associate",
    period: "Nov 2020 - Dec 2022",
    location: "Bangalore Urban, Karnataka, India",
    description: [
      "Assisted in full-stack application development using modern frameworks.",
      "Managed deployment environments and troubleshooting production issues.",
      "Collaborated with cross-functional teams to deliver high-quality software."
    ]
  },
  {
    company: "Noesys Software Pvt. Ltd.",
    role: "Intern",
    period: "Jan 2020 - Mar 2020",
    location: "Bengaluru, India"
  },
  {
    company: "ByteStorm Techno Solutions Pvt. Ltd.",
    role: "Intern",
    period: "July 2018 - August 2018",
    location: "Bengaluru, India"
  }
];

export const education: Education[] = [
  {
    institution: "Dayananda Sagar College of Engineering, BANGALORE",
    degree: "BE - Information Technology",
    period: "2016 - 2020"
  },
  {
    institution: "Sir MV PU College",
    degree: "11th and 12th, PCMB",
    period: "2014 - 2016"
  },
  {
    institution: "Bapuji Higher Primary English Medium School",
    degree: "10th Grade",
    period: "2013 - 2014"
  }
];

export const certifications: Certification[] = [
  { name: "Microsoft Certified: Azure Fundamentals" },
  { name: "Crash Course: Linux For Absolute Beginners" },
  { name: "Crash Course: AWS Basics" },
  { name: "Docker Training Course for the Absolute Beginner" },
  { name: "React Bootcamp" },
  { name: "Java (Basic)" },
  { name: "SQL (Basics)" }
];

export const skills: SkillCategory[] = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (EC2, S3)" },
      { name: "Azure" },
      { name: "Linux" },
      { name: "Nginx" }
    ]
  },
  {
    title: "DevOps & Automation",
    skills: [
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "Netdata" },
      { name: "Systemd" },
      { name: "Bash Scripting" }
    ]
  },
  {
    title: "Development",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Python" }
    ]
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Git" },
      { name: "SQL" },
      { name: "Java" },
      { name: "OpenAI API" }
    ]
  }
];

export const projects: Project[] = [
  {
    name: "AI-Powered Notes App",
    repoName: "NotesApp",
    description: "A production-ready Notion-like notes app with AI features for summarization and key-point extraction.",
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI"]
  },
  {
    name: "Travel Journal (CI/CD)",
    repoName: "TravelJournal",
    description: "Personal travel journal with automated CI/CD pipeline using GitHub Actions for seamless deployment.",
    tech: ["React", "Vite", "GitHub Actions", "CI/CD"]
  },
  {
    name: "Nginx Log Analyser",
    repoName: "NginxLogAnalyser",
    description: "Bash script for analyzing Nginx access logs to identify traffic patterns and issues.",
    tech: ["Bash", "Awk", "Linux"]
  },
  {
    name: "Log Archive Tool",
    repoName: "LogArchiveTool",
    description: "CLI tool to compress and archive logs with timestamped filenames and scheduling support.",
    tech: ["Bash", "Linux"]
  },
  {
    name: "Server Performance Stats",
    repoName: "ServerPerformanceStats",
    description: "Monitoring script to track CPU, memory, and disk usage on Linux servers.",
    tech: ["Bash", "Shell"]
  },
  {
    name: "Netdata Dashboard Setup",
    repoName: "SimpleMonitoringUsingNetData",
    description: "Automated workflow for Netdata monitoring agent installation and alert configuration.",
    tech: ["Bash", "Netdata", "Automation"]
  },
  {
    name: "Dummy Systemd Service",
    repoName: "DummySystemmdService",
    description: "Automation script for creating and managing custom systemd services.",
    tech: ["Bash", "Systemd"]
  }
];
