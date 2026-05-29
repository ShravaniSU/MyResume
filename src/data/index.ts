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

export const certificationGroups: CertificationGroup[] = [
  {
    provider: "Microsoft",
    certs: [
      { name: "Microsoft Certified: Azure Fundamentals", link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" },
      { name: "Microsoft Certified: Azure Data Fundamentals", link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/" },
      { name: "Microsoft Certified Power Platform Fundamentals", link: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/" }
    ]
  },
  {
    provider: "KodeKloud",
    certs: [
      { name: "KodeKloud Engineer - Docker (Level 1)", link: "https://kodekloud.com/" },
      { name: "Crash Course: Docker For Absolute Beginners", link: "https://kodekloud.com/" },
      { name: "Amazon Elastic Container Service (AWS ECS)", link: "https://kodekloud.com/" },
      { name: "Crash Course: Kubernetes For Absolute Beginners", link: "https://kodekloud.com/" },
      { name: "Crash Course: Linux For Absolute Beginners", link: "https://kodekloud.com/" },
      { name: "Docker Training Course for the Absolute Beginner", link: "https://kodekloud.com/" },
      { name: "Crash Course: AWS Basics", link: "https://kodekloud.com/" },
      { name: "KodeKloud Engineer - Git (Level 1)", link: "https://kodekloud.com/" }
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
      { name: "Amazon S3" }
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
    link: "https://github.com/ShravaniSU/TaskFlow",
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
    name: "Secure AWS Bastion Host Architecture",
    repoName: "aws-bastion-host",
    description: "Designed and deployed a secure AWS network architecture with isolated private subnets, hardened SSH access controls, and Bastion Host based administrative access.",
    tech: ["AWS", "VPC", "EC2", "Security Groups", "SSH", "Networking"]
  },
  {
    name: "Terraform AWS Infrastructure Project",
    repoName: "terraform-aws-infra",
    description: "Automated cloud infrastructure provisioning on AWS using Terraform with reproducible Infrastructure as Code workflows and secure remote server access.",
    tech: ["Terraform", "AWS", "EC2", "IAM", "Ubuntu", "SSH"]
  },
  {
    name: "Cyberpunk Static Website Deployment with Ansible",
    repoName: "ansible-static-site-deployment",
    description: "Automated Linux server provisioning and static website deployment using Ansible with reusable role-based infrastructure and Nginx configuration on AWS.",
    tech: ["Ansible", "AWS EC2", "Ubuntu", "Nginx", "React", "TypeScript"],
    link: "https://github.com/ShravaniSU/Cyberpunk"
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
