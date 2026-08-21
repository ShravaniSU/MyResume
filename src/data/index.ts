import type { Profile, Experience, Education, CertificationGroup, SkillCategory, Project } from '../types';

export const profileData: Profile = {
  name: "Shravani Shirish Urankar",
  title: "DevOps Engineer",
  location: "Bengaluru, Karnataka, India",
  email: "s.shirish.urankar@gmail.com",
  linkedin: "https://www.linkedin.com/in/shravaniurankar",
  github: "https://github.com/ShravaniSU",
  summary: "Backend and DevOps Engineer with 5 years of experience delivering enterprise applications, scalable REST APIs, production support, and automated deployment workflows. Experienced in designing 100+ REST APIs, troubleshooting critical production systems, and collaborating across development, QA, and infrastructure teams to deliver reliable business-critical solutions."
};

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Custom Software Engineering Analyst",
    period: "Dec 2022 - Present",
    location: "Gurugram, Haryana, India",
    description: [
      "Designed and implemented <strong class=\"text-accent-lavender font-extrabold\">100+ REST APIs</strong> across multiple modules, delivering reliable and scalable backend solutions.",
      "Collaborated with cross-functional teams to resolve production issues and support application releases with high success rate.",
      "Accelerated troubleshooting efficiency for complex incidents across distributed systems by integrating GitHub Copilot."
    ]
  },
  {
    company: "Accenture",
    role: "Application Development Associate",
    period: "Nov 2020 - Dec 2022",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Drove incident resolution for <strong class=\"text-accent-lavender font-extrabold\">15+ critical production systems</strong>, minimizing operational downtime.",
      "Partnered with development and QA teams to support successful deployments of application enhancements.",
      "Supported <strong class=\"text-accent-lavender font-extrabold\">4+ enterprise applications</strong> through monitoring, troubleshooting, and continuous improvement."
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
    institution: "Dayananda Sagar College of Engineering, BENGALURU",
    degree: "BE - Information Technology",
    period: "2016 - 2020"
  },
  {
    institution: "Sir MV PU College, DAVANAGERE",
    degree: "11th and 12th, PCMB",
    period: "2014 - 2016"
  },
  {
    institution: "Bapuji Higher Primary English Medium School, DAVANAGERE",
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
    provider: "COURSERA CERTIFICATIONS",
    certs: [
      { name: "Machine Learning in Production", link: "https://www.coursera.org/account/accomplishments/verify/YXTYSKOFAN0Q" }
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
  },
  {
    provider: "UDEMY CERTIFICATIONS",
    certs: [
      { name: "MLOps Zero to Hero", link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bad5ba1d-8cac-4860-9a6e-92bc2846cc71.pdf" }
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "AWS ECS" },
      { name: "AWS CloudWatch" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Linux" }
    ]
  },
  {
    title: "MLOps & ML Infrastructure",
    skills: [
      { name: "MLflow" },
      { name: "DVC" },
      { name: "DagsHub" },
      { name: "KServe" },
      { name: "Model Registry" },
      { name: "Experiment Tracking" },
      { name: "CI/CD Automation" }
    ]
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python" },
      { name: "C#" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: ".NET" },
      { name: "React" },
      { name: "Node.js" }
    ]
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Terraform" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Linux" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" }
    ]
  },
  {
    title: "AI Development Tools",
    skills: [
      { name: "GitHub Copilot" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "OpenAI Codex" },
      { name: "Grok" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "employee-attrition-prediction",
    title: "Employee Attrition Prediction",
    category: "MLOps",
    badge: "featured",
    description: "Built and deployed an end-to-end MLOps platform for employee attrition prediction using a 1,470-record HR dataset. Integrates MLflow and DagsHub for experiment tracking and model registry, automated quality gates requiring F1 ≥ 0.4, and GitHub Actions CI/CD to build and deploy to AWS EC2.",
    tags: ["Docker", "Terraform", "MLflow", "DagsHub", "FastAPI", "GitHub Actions", "AWS EC2"],
    repoUrl: "https://github.com/ShravaniSU/EmployeeAttrition",
    liveUrl: "https://employeeattrition.shravaniurankar.in/",
    order: 1
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "MLOps",
    badge: "featured",
    description: "Developed an end-to-end MLOps pipeline for customer churn prediction, automating the workflow from dataset generation and model training to model artifact publishing. Built GitHub Actions automation to retrain, publish to Amazon S3, and update Kubernetes manifests.",
    tags: ["Python", "FastAPI", "DVC", "Amazon S3", "Kubernetes", "KServe", "GitHub Actions"],
    repoUrl: "https://github.com/ShravaniSU/Churn-Predictor-Model",
    liveUrl: "https://churnprediction.shravaniurankar.in/",
    order: 2
  },
  {
    id: "sysmon",
    title: "SysMon",
    category: "DevOps / Observability",
    badge: "featured",
    description: "Developed a production-grade infrastructure observability platform delivering real-time CPU, RAM, disk I/O, and network metrics through WebSockets. Architected MongoDB/Redis storage in a 5-service Docker Compose layout, provisioned with Terraform, and deployed via GitHub Actions.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "Docker", "Terraform", "GitHub Actions"],
    repoUrl: "https://github.com/ShravaniSU/SysMon",
    liveUrl: "http://sysmon.shravaniurankar.in/",
    order: 3
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    category: "DevOps / Full Stack",
    description: "Built and deployed a production-oriented full-stack task management platform with automated CI/CD workflows, containerized services, reverse proxy architecture, and Infrastructure as Code practices.",
    tags: ["Docker", "PostgreSQL", "Nginx", "Terraform", "Ansible", "CI/CD"],
    repoUrl: "https://github.com/ShravaniSU/TaskFlow",
    liveUrl: "http://taskflow.shravaniurankar.in/",
    order: 4
  },
  {
    id: "iris-classification",
    title: "Iris Classification Pipeline",
    category: "MLOps",
    description: "Built an end-to-end machine learning workflow using Kubeflow Pipelines to automate data loading, model training, and evaluation of a Random Forest classifier on Kubernetes.",
    tags: ["Python", "Kubeflow Pipelines", "scikit-learn", "Docker", "Kubernetes"],
    repoUrl: "https://github.com/ShravaniSU/IrisClassificationPipeline",
    order: 5
  },
  {
    id: "intent-classification",
    title: "Intent Classification API",
    category: "ML / Backend",
    description: "Built and deployed a machine learning REST API for intent classification using Scikit-learn and Flask, including model training, serialization, containerization, and automated deployment.",
    tags: ["Python", "Flask", "Scikit-learn", "Docker", "Kubernetes"],
    repoUrl: "https://github.com/ShravaniSU/IntentClassifier",
    order: 6
  },
  {
    id: "secure-aws-bastion",
    title: "Secure AWS Bastion Host Architecture",
    category: "Cloud Infrastructure",
    description: "Designed and deployed a secure AWS network architecture with isolated private subnets, hardened SSH access controls, and Bastion Host-based administrative access.",
    tags: ["AWS", "VPC", "EC2", "Security Groups", "SSH", "Networking"],
    repoUrl: "https://github.com/ShravaniSU/BastionHost",
    order: 7
  },
  {
    id: "terraform-aws-infra",
    title: "Terraform AWS Infrastructure",
    category: "Infrastructure as Code",
    description: "Automated AWS infrastructure provisioning using Terraform with reproducible Infrastructure as Code workflows and secure remote server access.",
    tags: ["Terraform", "AWS", "EC2", "IAM", "Ubuntu", "SSH"],
    repoUrl: "https://github.com/ShravaniSU/terraform-aws-infra",
    order: 8
  },
  {
    id: "travel-journal",
    title: "Travel Journal",
    category: "CI/CD",
    description: "Built a React/Vite application with an automated GitHub Actions CI/CD workflow for seamless deployment.",
    tags: ["React", "Vite", "GitHub Actions", "CI/CD"],
    repoUrl: "https://github.com/ShravaniSU/TravelJournal",
    liveUrl: "https://travel.shravaniurankar.in/",
    order: 9
  },
  {
    id: "pomodoro-timer",
    title: "Pomodoro Timer",
    category: "Frontend / Productivity",
    description: "Built and deployed a modern productivity-focused Pomodoro Timer application with animated session workflows, configurable focus cycles, browser notifications, persistent user settings, and responsive UI design.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "localStorage"],
    repoUrl: "https://github.com/ShravaniSU/PomodoroTimer",
    liveUrl: "https://pomodoro-timer-pink-one.vercel.app/",
    order: 10
  },
  {
    id: "nginx-log-analyser",
    title: "Nginx Log Analyser",
    category: "Automation / Scripting",
    description: "Bash script for analyzing Nginx access logs to identify traffic patterns and issues.",
    tags: ["Bash", "Awk", "Linux"],
    repoUrl: "https://github.com/ShravaniSU/NginxLogAnalyser",
    order: 11
  },
  {
    id: "log-archive-tool",
    title: "Log Archive Tool",
    category: "Automation / Scripting",
    description: "CLI tool to compress and archive logs with timestamped filenames and scheduling support.",
    tags: ["Bash", "Linux"],
    repoUrl: "https://github.com/ShravaniSU/LogArchiveTool",
    order: 12
  },
  {
    id: "server-performance-stats",
    title: "Server Performance Stats",
    category: "Automation / Scripting",
    description: "Monitoring script to track CPU, memory, and disk usage on Linux servers.",
    tags: ["Bash", "Shell"],
    repoUrl: "https://github.com/ShravaniSU/ServerPerformanceStats",
    order: 13
  },
  {
    id: "netdata-dashboard-setup",
    title: "Netdata Dashboard Setup",
    category: "Observability / Automation",
    description: "Automated workflow for Netdata monitoring agent installation and alert configuration.",
    tags: ["Bash", "Netdata", "Automation"],
    repoUrl: "https://github.com/ShravaniSU/SimpleMonitoringUsingNetData",
    order: 14
  },
  {
    id: "dummy-systemd-service",
    title: "Dummy Systemd Service",
    category: "Automation / Scripting",
    description: "Automation script for creating and managing custom systemd services.",
    tags: ["Bash", "Systemd"],
    repoUrl: "https://github.com/ShravaniSU/DummySystemmdService",
    order: 15
  }
];

export { blogs, getCategoryCounts } from './blogs';

