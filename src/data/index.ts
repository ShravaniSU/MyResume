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
  "company": "Accenture",
  "role": "Custom Software Engineering Analyst",
  "period": "Dec 2022 - Present",
  "location": "Gurugram, Haryana, India",
  "description": [
    "Designed and implemented 100+ scalable REST APIs across multiple enterprise modules and applications, delivering business-critical backend solutions with consistent on-time project delivery.",
    "Collaborated with development, QA, and infrastructure teams to resolve production issues, support application releases, and deliver business-critical features with a 90% success rate across engagements.",
    "Accelerated production issue resolution by integrating GitHub Copilot into debugging workflows, improving troubleshooting efficiency for complex backend incidents across distributed systems."
  ]
},
{
  "company": "Accenture",
  "role": "Application Development Associate",
  "period": "Nov 2020 - Dec 2022",
  "location": "Bengaluru, Karnataka, India",
  "description": [
    "Drove incident resolution for 15+ critical production systems, resolving most incidents within the same business day and minimizing operational downtime.",
    "Partnered with development, QA, and infrastructure teams to streamline release processes and support successful deployment of application enhancements.",
    "Supported 4+ enterprise applications through production monitoring, troubleshooting, incident resolution, and continuous improvement initiatives."
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
    title: "MLOps",
    skills: [
      { name: "ML Flow" },
      { name: "Kube Flow" },
      { name: "AWS Sagemaker" },
      { name: "Argo CD" },
      { name: "KServe" },
      { name: "DVC" }
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
  name: "Customer Churn Prediction System",
  repoName: "Churn-Predictor-Model",
  description: "Built and deployed an end-to-end MLOps pipeline for customer churn prediction using a machine learning classifier, featuring automated model training, dataset and model versioning with DVC, scalable model serving with KServe on Kubernetes, and CI/CD automation using GitHub Actions.",
  tech: ["Python", "FastAPI", "DVC", "Amazon S3", "Kubernetes (Kind)", "KServe", "GitHub Actions"],
  liveUrl: "https://churnprediction.shravaniurankar.in/",
  },
  {
    name: "Employee Attrition Prediction System",
    repoName: "EmployeeAttrition",
    description: "Built and deployed an MLOps project that predicts employee attrition using a Random Forest classifier and Gradient Boosting classifier while demonstrating the complete machine learning lifecycle",
    tech: ["Docker", "Terraform", "ML Flow", "Github Actions", "Caddy"],
    liveUrl: "https://employeeattrition.shravaniurankar.in/",
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
  name: "Iris Classification Pipeline",
  repoName: "IrisClassificationPipeline",
  description: "Built an end-to-end machine learning workflow using Kubeflow Pipelines (KFP) to automate data loading, model training, and evaluation of a Random Forest classifier on the Iris dataset, demonstrating containerized ML orchestration on Kubernetes.",
  tech: ["Python", "Kubeflow Pipelines", "scikit-learn", "Docker", "Kubernetes"],
  },
  {
  name: "Intent Classification API",
  repoName: "IntentClassifier",
  description: "Built and deployed a machine learning REST API for intent classification using Scikit-learn and Flask, demonstrating an end-to-end ML workflow including text preprocessing, model training, model serialization, containerization, and automated deployment.",
  tech: ["Python", "Flask", "Scikit-learn", "Docker", "Kubernetes"],
  },
  {
    name: "TaskFlow",
    repoName: "TaskFlow",
    description: "Built and deployed a production-grade full-stack task management platform with automated CI/CD workflows, containerized services, reverse proxy architecture, and Infrastructure as Code practices.",
    tech: ["Docker", "PostgreSQL", "Nginx", "Terraform", "Ansible", "CI/CD"],
    liveUrl: "http://taskflow.shravaniurankar.in/",
    isFeatured: true,
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
