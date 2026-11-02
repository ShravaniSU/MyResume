import type { Profile, Experience, Education, CertificationGroup, SkillCategory, Project } from '../types';

export const profileData: Profile = {
  name: "Shravani Shirish Urankar",
  title: "MLOps Engineer",
  location: "Bengaluru, Karnataka, India",
  email: "s.shirish.urankar@gmail.com",
  linkedin: "https://www.linkedin.com/in/shravaniurankar",
  github: "https://github.com/ShravaniSU",
  summary: "MLOps and DevOps Engineer with 5 years of experience in enterprise software engineering, production support, and CI/CD automation. Hands-on experience implementing end-to-end ML workflows using Azure Machine Learning, MLflow, and AWS, including model training, experiment tracking, model registration, deployment, and monitoring."
};

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Custom Software Engineering Analyst",
    period: "Dec 2022 - Present",
    location: "Gurugram, Haryana, India",
    description: [
      "Developed and maintained REST APIs for enterprise applications, implementing backend functionality and collaborating with development and infrastructure teams to support application releases and deployments.",
      "Worked with cross-functional teams to analyze requirements, troubleshoot production and application issues, and deliver solutions aligned with business needs.",
      "Used GitHub Copilot to assist with code analysis, debugging, and root-cause investigation of complex backend issues."
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
      { name: "Azure Machine Learning" },
      { name: "MLflow" },
      { name: "DVC" },
      { name: "DagsHub" },
      { name: "KServe" },
      { name: "Model Registry" },
      { name: "Experiment Tracking" },
      { name: "Model Deployment" },
      { name: "Model Evaluation" },
      { name: "Data Drift Monitoring" },
      { name: "Azure ML Jobs" },
      { name: "Managed Online Endpoints" },
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
  
[
  {
    id: "intelligent-loan-approval",
    title: "Intelligent Loan Approval System",
    category: "MLOps",
    badge: "featured",
    description: "Developed an end-to-end loan approval prediction workflow using Python and scikit-learn. Used Azure ML data assets and jobs for dataset management, model training, and evaluation; integrated MLflow for experiment tracking and Azure ML Model Registry for model versioning. Deployed the registered model to a managed online endpoint for real-time inference and configured Azure monitoring with data drift alerts.",
    tags: [
      "Python",
      "Scikit-learn",
      "Azure Machine Learning",
      "MLflow",
      "Model Registry",
      "Managed Online Endpoints",
      "Data Drift Monitoring"
    ],
    repoUrl: "https://github.com/ShravaniSU/LoanApprovalSystem",
    liveUrl: "https://loan-approval-system-coral.vercel.app/",
    order: 1
  },
  {
    id: "employee-attrition-prediction",
    title: "Employee Attrition Prediction",
    category: "MLOps",
    badge: "featured",
    description: "Built an end-to-end employee attrition prediction pipeline using a 1,470-record HR dataset. Integrated MLflow and DagsHub for experiment tracking and model management, implemented an F1-score quality gate (≥ 0.4), and automated data validation, model training, Docker image builds, and AWS EC2 deployment using GitHub Actions CI/CD.",
    tags: [
      "Python",
      "Docker",
      "MLflow",
      "DagsHub",
      "FastAPI",
      "GitHub Actions",
      "AWS EC2"
    ],
    repoUrl: "https://github.com/ShravaniSU/EmployeeAttrition",
    liveUrl: "https://employeeattrition.shravaniurankar.in/",
    order: 2
  },
  {
    id: "azure-ai-foundry-agent",
    title: "Azure AI Foundry Agent Integration",
    category: "AI Engineering",
    badge: "",
    description: "Developed a Python application to integrate Azure AI Foundry Agents using the Azure AI Projects SDK and OpenAI-compatible Responses API. Implemented secure authentication with DefaultAzureCredential, agent version referencing, and conversation ID management to maintain context across multiple interactions.",
    tags: [
      "Python",
      "Azure AI Foundry",
      "Azure AI Projects SDK",
      "Azure Identity",
      "DefaultAzureCredential",
      "OpenAI Responses API",
      "AI Agents"
    ],
    repoUrl: "https://github.com/ShravaniSU/AzureFirstAgent",
    order: 3
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
    order: 4
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
    order: 5
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    category: "DevOps / Full Stack",
    description: "Built and deployed a production-oriented full-stack task management platform with automated CI/CD workflows, containerized services, reverse proxy architecture, and Infrastructure as Code practices.",
    tags: ["Docker", "PostgreSQL", "Nginx", "Terraform", "Ansible", "CI/CD"],
    repoUrl: "https://github.com/ShravaniSU/TaskFlow",
    liveUrl: "http://taskflow.shravaniurankar.in/",
    order: 6
  },
  {
    id: "iris-classification",
    title: "Iris Classification Pipeline",
    category: "MLOps",
    description: "Built an end-to-end machine learning workflow using Kubeflow Pipelines to automate data loading, model training, and evaluation of a Random Forest classifier on Kubernetes.",
    tags: ["Python", "Kubeflow Pipelines", "scikit-learn", "Docker", "Kubernetes"],
    repoUrl: "https://github.com/ShravaniSU/IrisClassificationPipeline",
    order: 7
  }
];

export { blogs, getCategoryCounts } from './blogs';

