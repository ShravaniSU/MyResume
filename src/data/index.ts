import type { Profile, Experience, Education, CertificationGroup, SkillCategory, Project } from '../types';

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
  "company": "Accenture",
  "role": "Custom Software Engineering Analyst",
  "period": "Dec 2022 - Present",
  "location": "Gurugram, Haryana, India",
  "description": [
    "Developed and enhanced backend APIs across multiple modules, delivering business-critical features and ensuring timely project delivery.",
    "Built solutions for document management, file attachments, and PDF generation using GCP services, helping improve user productivity and reduce manual effort.",
    "Implemented database and schema changes, resolved production issues, and delivered high-priority change requests while maintaining application stability.",
    "Worked closely with stakeholders, product owners, and distributed engineering teams to translate business requirements into reliable technical solutions and consistently deliver releases on schedule."
  ]
},
{
  "company": "Accenture",
  "role": "Application Development Associate",
  "period": "Nov 2020 - Dec 2022",
  "location": "Bangalore Urban, Karnataka, India",
  "description": [
    "Ensured smooth application delivery by managing deployments, supporting release activities, and maintaining production environments for business-critical systems.",
    "Resolved production incidents through effective troubleshooting and root-cause analysis, contributing to improved system reliability and customer satisfaction.",
    "Supported continuous improvement initiatives by collaborating with cross-functional teams to implement fixes, enhancements, and operational best practices.",
    "Contributed to system quality improvements through functional validation and testing activities while supporting application development initiatives."
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

export const certificationGroups: CertificationGroup[] = [
  {
    provider: "MICROSOFT CERTIFICATIONS",
    certs: [
      { name: "Microsoft Certified: Azure Fundamentals", link: "https://www.credly.com/badges/3c629c85-0b03-4604-82ec-a9d895c0bc09?source=linked_in_profile" },
      { name: "Microsoft Certified: Azure Data Fundamentals", link: "https://www.credly.com/badges/d99f7fc8-291e-4423-8c0d-3bed302c3d1a/public_url" },
      { name: "Microsoft Certified Power Platform Fundamentals", link: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/" }
    ]
  },
  {
    provider: "KOKEKLOUD CERTIFICATIONS",
    certs: [
      { name: "KodeKloud Engineer - Docker (Level 1)", link: "https://engineer.kodekloud.com/certificate-verification/555c6b2e-5046-4b67-80cd-18e38e50553e" },
      { name: "Crash Course: Docker For Absolute Beginners", link: "https://learn.kodekloud.com/user/certificate/7f32ecfe-0d52-4bb6-ae70-edcc9dccf415" },
      { name: "Amazon Elastic Container Service (AWS ECS)", link: "https://learn.kodekloud.com/user/certificate/6f1a6522-b264-4b71-9d10-d474fe5d9591" },
      { name: "Crash Course: Kubernetes For Absolute Beginners", link: "https://learn.kodekloud.com/user/certificate/bdedb83b-ea89-4b82-94d0-2e3493f379e7" },
      { name: "Crash Course: Linux For Absolute Beginners", link: "https://learn.kodekloud.com/user/certificate/929ee365-c6fe-4270-ac5b-3f5092147513" },
      { name: "Docker Training Course for the Absolute Beginner", link: "https://learn.kodekloud.com/user/certificate/9d000ec0-1098-409a-b73f-1567e06651d3" },
      { name: "Crash Course: AWS Basics", link: "https://learn.kodekloud.com/user/certificate/630a98b7-c2d1-4620-8d71-5d4624cfedd1" },
      { name: "KodeKloud Engineer - Git (Level 1)", link: "https://engineer.kodekloud.com/certificate-verification/a92e6a6d-93ec-4113-b6e5-0474f8dd4e64" },
      { name: "YouTube Labs - Kubernetes Crash Course", link: "https://learn.kodekloud.com/user/certificate/918ea7c2-1628-419c-ba5a-dc2433b718f9"}
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Tools & DevOps/Cloud Infrastructure",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Linux" },
      { name: "Amazon EC2" },
      { name: "Amazon S3" },
      { name: "Terraform" }
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "Java" },
      { name: "C#" },
      { name: "Python" },
      { name: "JavaScript" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: ".NET (Dotnet)" },
      { name: "React" },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" }
    ]
  }
];

export const projects: Project[] = [
  {
    name: "TaskFlow",
    repoName: "TaskFlow",
    description: "Built and deployed a production-grade full-stack task management platform with automated CI/CD workflows, containerized services, reverse proxy architecture, and Infrastructure as Code practices.",
    tech: ["Docker", "PostgreSQL", "Nginx", "Terraform", "Ansible", "CI/CD"],
    liveUrl: "http://taskflow.shravaniurankar.in/",
    isFeatured: true,
    features: [
      "Complete Task Lifecycle: Full CRUD operational support designed with strict input payload sanitation via Zod.",
      "Isolated Multi-Container Ecosystem: Isolated networks keeping the PostgreSQL layer decoupled from outside web exposure.",
      "Nginx Reverse Proxy: Unified traffic routing directing client request boundaries across specific container boundaries seamlessly.",
      "Infrastructure as Code (IaC): Single-command reproducible hardware definitions utilizing HashiCorp Terraform alongside declarative Ansible scripts.",
      "Automated CI/CD Blueprint: Production pipeline running integration compilation checks prior to rolling container deployments."
    ]
  },
  {
  name: "System Monitoring Dashboard [SysMon]",
  repoName: "SysMon",
  description: "Built and deployed a real-time infrastructure observability platform with live system metrics, WebSocket-based monitoring, historical analytics and automated service health management.",
  tech: [
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Redis",
    "Docker",
    "Nginx",
    "Github Actions"
  ],
  liveUrl: "http://sysmon.shravaniurankar.in/",
  },
  {
  name: "Pomodoro Timer",
  repoName: "PomodoroTimer",
  description: "Built and deployed a modern productivity-focused Pomodoro Timer application with animated session workflows, configurable focus cycles, browser notifications, persistent user settings, and responsive UI design.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "localStorage"
  ],
  liveUrl: "https://pomodoro-timer-pink-one.vercel.app/",
  },
  {
    name: "Secure AWS Bastion Host Architecture",
    repoName: "BastionHost",
    description: "Designed and deployed a secure AWS network architecture with isolated private subnets, hardened SSH access controls, and Bastion Host based administrative access.",
    tech: ["AWS", "VPC", "EC2", "Security Groups", "SSH", "Networking"]
  },
  {
    name: "Travel Journal (CI/CD)",
    repoName: "TravelJournal",
    description: "Personal travel journal with automated CI/CD pipeline using GitHub Actions for seamless deployment.",
    tech: ["React", "Vite", "GitHub Actions", "CI/CD"],
    liveUrl: "https://travel.shravaniurankar.in/"
  },
  {
    name: "Terraform AWS Infrastructure Project",
    repoName: "terraform-aws-infra",
    description: "Automated cloud infrastructure provisioning on AWS using Terraform with reproducible Infrastructure as Code workflows and secure remote server access.",
    tech: ["Terraform", "AWS", "EC2", "IAM", "Ubuntu", "SSH"]
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
