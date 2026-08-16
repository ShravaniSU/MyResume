import type { BlogPost } from '../types';

export const blogs: BlogPost[] = [
  {
    id: "mlops-pipeline-mlflow-dvc",
    title: "Building an End-to-End MLOps Pipeline with MLflow and DVC",
    slug: "building-mlops-pipeline-mlflow-dvc",
    category: "MLOps",
    tags: ["MLflow", "DVC", "Linux", "FastAPI"],
    excerpt: "Learn how to build a reproducible machine learning pipeline from data versioning to experiment tracking. We combine DVC for data tracking and MLflow for registry and logging.",
    date: "2026-05-12",
    readTime: "8 min read",
    featured: true,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "In modern machine learning development, reproducibility is one of the most critical yet challenging requirements. Without structured version control for datasets and models, tracking which code generated which model artifact becomes nearly impossible. This is where Data Version Control (DVC) and MLflow come into play."
      },
      {
        type: "heading",
        level: 2,
        text: "Why DVC and MLflow?"
      },
      {
        type: "paragraph",
        text: "While Git is exceptional at versioning source code, it fails when handling large binary datasets. DVC solves this by storing small lightweight pointer files in Git while pushing the actual data to a remote storage (like Amazon S3 or DagsHub). Simultaneously, MLflow acts as an experiment tracker and model registry, documenting metrics, parameters, and models."
      },
      {
        type: "code",
        language: "bash",
        code: `# Initialize DVC in your project
dvc init

# Track your dataset
dvc add data/dataset.csv

# Commit pointer files to Git
git add data/dataset.csv.dvc .gitignore
git commit -m "Track dataset using DVC"`
      },
      {
        type: "heading",
        level: 3,
        text: "Logging Experiments with MLflow"
      },
      {
        type: "paragraph",
        text: "Integrating MLflow into your Python training script is straightforward. It allows you to log hyperparameters and evaluate metrics in real time."
      },
      {
        type: "code",
        language: "python",
        code: `import mlflow
import mlflow.sklearn

mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("Employee-Attrition")

with mlflow.start_run():
    # Log parameters
    mlflow.log_param("n_estimators", 100)
    mlflow.log_param("max_depth", 5)
    
    # Train model
    model.fit(X_train, y_train)
    
    # Log metrics
    f1 = evaluate_model(model, X_val, y_val)
    mlflow.log_metric("f1_score", f1)
    
    # Register the model
    mlflow.sklearn.log_model(model, "model", registered_model_name="AttritionModel")`
      },
      {
        type: "quote",
        text: "Automating validation and tracking parameters at every step saves hours of debugging model behavior post-deployment."
      },
      {
        type: "paragraph",
        text: "By establishing this flow, you ensure that every production model can be traced back to the exact code, parameters, and training dataset version used to build it."
      }
    ]
  },
  {
    id: "automating-ml-training-github-actions",
    title: "Automating ML Model Training with GitHub Actions",
    slug: "automating-ml-model-training-github-actions",
    category: "MLOps / CI/CD",
    tags: ["GitHub Actions", "Docker", "DVC", "Python"],
    excerpt: "Implement continuous training pipelines that automatically retrain models on new data commits, validate model metrics, and build Docker containers ready for deployment.",
    date: "2026-06-04",
    readTime: "6 min read",
    featured: true,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Continuous Integration isn't just for software applications; it's also a powerful pattern for Machine Learning. Automating your model training pipeline ensures your models are retrained and tested whenever your datasets or features undergo modifications."
      },
      {
        type: "heading",
        level: 2,
        text: "Designing the Continuous Training Workflow"
      },
      {
        type: "paragraph",
        text: "A production-grade ML training automation workflow should execute the following steps on every code or data update:"
      },
      {
        type: "list",
        items: [
          "Check out the repository and pull the data using DVC",
          "Set up the Python environment and install dependencies",
          "Run data validation checks (e.g. schema verification)",
          "Train the model and run evaluation tests",
          "Compare the new model's performance against a baseline (F1 score or accuracy thresholds)",
          "Push the trained model artifacts to S3 and build a production-ready serving container"
        ]
      },
      {
        type: "heading",
        level: 3,
        text: "GitHub Actions Configuration Example"
      },
      {
        type: "code",
        language: "yaml",
        code: `name: ML Training Pipeline

on:
  push:
    paths:
      - 'src/train.py'
      - 'data/**.dvc'

jobs:
  train-and-validate:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.10'

    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1

    - name: Pull Data from S3 via DVC
      run: |
        pip install dvc[s3]
        dvc pull

    - name: Run Model Training & Evaluation
      run: |
        pip install -r requirements.txt
        python src/train.py --eval-threshold 0.75`
      },
      {
        type: "quote",
        text: "Automated quality gates are the shield protecting production servers from degradation. If an automated model run yields an F1 score below your threshold, the build fails and stops the deployment."
      }
    ]
  },
  {
    id: "deploying-ml-inference-apis-fastapi",
    title: "Deploying Machine Learning Inference APIs with FastAPI",
    slug: "deploying-ml-inference-apis-fastapi",
    category: "MLOps / Backend",
    tags: ["FastAPI", "Python", "Docker", "AWS"],
    excerpt: "Learn why FastAPI is the developer choice for serving ML models and walk through creating a high-performance REST endpoint for real-time predictions.",
    date: "2026-06-25",
    readTime: "7 min read",
    featured: true,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Serving machine learning models requires a web framework that is fast, asynchronous, and easy to validate. FastAPI satisfies all these criteria, making it the industry standard for wrapping machine learning models into production-ready web APIs."
      },
      {
        type: "heading",
        level: 2,
        text: "Creating the Prediction Endpoint"
      },
      {
        type: "paragraph",
        text: "A clean API design separates the model loading logic (which should happen once at startup) from the incoming HTTP requests. Using Pydantic, we can enforce static type safety on incoming prediction payloads."
      },
      {
        type: "code",
        language: "python",
        code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="Model Inference Service")

# Load model during startup
model = joblib.load("models/attrition_model.pkl")

class AttritionRequest(BaseModel):
    Age: int
    TotalWorkingYears: int
    YearsAtCompany: int
    MonthlyIncome: float

@app.post("/predict")
def predict(data: AttritionRequest):
    try:
        features = np.array([[
            data.Age,
            data.TotalWorkingYears,
            data.YearsAtCompany,
            data.MonthlyIncome
        ]])
        
        prediction = model.predict(features)[0]
        probability = model.predict_proba(features)[0][1]
        
        return {
            "prediction": int(prediction),
            "probability": float(probability)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`
      },
      {
        type: "heading",
        level: 3,
        text: "Containerizing the API"
      },
      {
        type: "paragraph",
        text: "To ensure consistent behavior from development to cloud hosting, we write a Dockerfile. We build a minimal image based on python:3.10-slim."
      },
      {
        type: "code",
        language: "dockerfile",
        code: `FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`
      }
    ]
  },
  {
    id: "managing-ml-model-artifacts-s3",
    title: "Managing ML Model Artifacts with Amazon S3",
    slug: "managing-ml-model-artifacts-s3",
    category: "Cloud / MLOps",
    tags: ["AWS", "DVC", "Python", "Linux"],
    excerpt: "A deep dive into secure and version-controlled storage systems for large model binaries and datasets, focusing on Amazon S3 as a reliable artifact repository.",
    date: "2026-07-02",
    readTime: "5 min read",
    featured: false,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Model artifacts—such as large neural network weights, serialized scikit-learn models, and preprocessed datasets—are too large to commit to Git. Storing these objects in Git causes repositories to bloat. A scalable solution is storing these artifacts in cloud object stores, such as Amazon S3, using proper access patterns."
      },
      {
        type: "heading",
        level: 2,
        text: "Configuring S3 as a DVC Remote Storage"
      },
      {
        type: "paragraph",
        text: "By pointing your DVC configurations to an S3 bucket, your repository references lightweight pointers while keeping actual binaries safely backed up."
      },
      {
        type: "code",
        language: "bash",
        code: `# Define S3 remote storage
dvc remote add -d myremote s3://my-mlops-artifacts-bucket/dvc-store

# Push data to S3
dvc push`
      },
      {
        type: "heading",
        level: 3,
        text: "Access control and security best practices"
      },
      {
        type: "paragraph",
        text: "When configuring S3 access, always adhere to the principle of least privilege. Do not use your root account or admin users. Instead, configure specialized IAM policies:"
      },
      {
        type: "list",
        items: [
          "Restrict bucket access to specific IAM roles utilized by GitHub Actions or EC2 instances.",
          "Enable bucket versioning to recover older artifacts easily.",
          "Utilize AWS KMS encryption keys to encrypt weights and data at rest."
        ]
      }
    ]
  },
  {
    id: "kubernetes-mlops-serving",
    title: "Kubernetes for MLOps: From Training to Model Serving",
    slug: "kubernetes-mlops-serving",
    category: "Kubernetes / MLOps",
    tags: ["Kubernetes", "Docker", "AWS", "FastAPI"],
    excerpt: "Understand the architecture of machine learning deployments on Kubernetes, covering rolling updates, node selectors for GPU workloads, and scaling models.",
    date: "2026-07-15",
    readTime: "9 min read",
    featured: false,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Scaling model inference to handle millions of user requests requires orchestrating container workloads. Kubernetes excels at this, providing auto-scaling, self-healing endpoints, and resource-isolation features crucial for heavy ML computing."
      },
      {
        type: "heading",
        level: 2,
        text: "Deploying Models with High Availability"
      },
      {
        type: "paragraph",
        text: "A classic deployment configuration uses ReplicaSets to keep multiple copies of the API active, coupled with CPU/Memory limits to prevent model workloads from exhausting cluster resources."
      },
      {
        type: "code",
        language: "yaml",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: inference-api
  labels:
    app: inference
spec:
  replicas: 3
  selector:
    matchLabels:
      app: inference
  template:
    metadata:
      labels:
        app: inference
    spec:
      containers:
      - name: model-server
        image: shravanisu/inference-api:latest
        ports:
        - containerPort: 8000
        resources:
          limits:
            cpu: "2"
            memory: 2Gi
          requests:
            cpu: "500m"
            memory: 1Gi`
      },
      {
        type: "heading",
        level: 3,
        text: "Handling Heavy Computations & GPU Slicing"
      },
      {
        type: "paragraph",
        text: "For complex models requiring GPU resources, Kubernetes permits allocating node selectors or tolerations to isolate those containers on GPU-enabled instances (like AWS p3/g4 nodes)."
      },
      {
        type: "quote",
        text: "Leveraging node affinities guarantees that resource-intensive GPU containers only run on specialized machines, keeping clusters cost-efficient."
      }
    ]
  },
  {
    id: "realtime-infra-monitoring-websockets",
    title: "Building Real-Time Infrastructure Monitoring with WebSockets",
    slug: "realtime-infra-monitoring-websockets",
    category: "DevOps / Observability",
    tags: ["Monitoring", "FastAPI", "Linux", "Docker"],
    excerpt: "Learn how to build real-time monitoring solutions that stream system telemetry (CPU, memory, disk) to frontends using WebSockets and async Python.",
    date: "2026-07-28",
    readTime: "8 min read",
    featured: false,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Traditional monitoring tools rely on polling intervals, causing a delay between system anomalies and dashboard alerts. WebSockets allow servers to push metrics instantly as they occur, enabling real-time telemetry streaming."
      },
      {
        type: "heading",
        level: 2,
        text: "Streaming System Metrics in Python"
      },
      {
        type: "paragraph",
        text: "Using FastAPI's native WebSocket support and python's `psutil` library, we can continuously poll system stats and push them down to connected clients without blocking."
      },
      {
        type: "code",
        language: "python",
        code: `from fastapi import FastAPI, WebSocket
import asyncio
import psutil
import json

app = FastAPI()

@app.websocket("/ws/metrics")
async def websocket_metrics(websocket: WebSocket):
    await websocket.accept()
    try:
      while True:
          metrics = {
              "cpu": psutil.cpu_percent(),
              "ram": psutil.virtual_memory().percent,
              "disk": psutil.disk_usage('/').percent
          }
          await websocket.send_text(json.dumps(metrics))
          await asyncio.sleep(1) # stream every second
    except Exception as e:
        print(f"Connection closed: {e}")`
      },
      {
        type: "heading",
        level: 3,
        text: "Connecting from the Frontend"
      },
      {
        type: "paragraph",
        text: "In React, we listen to this WebSocket connection and dynamically update state variables to feed charts or progress bars."
      },
      {
        type: "code",
        language: "javascript",
        code: `useEffect(() => {
  const ws = new WebSocket("ws://localhost:8000/ws/metrics");
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    updateChart(data);
  };
  return () => ws.close();
}, []);`
      }
    ]
  },
  {
    id: "infrastructure-provisioning-terraform-aws",
    title: "Infrastructure Provisioning with Terraform on AWS",
    slug: "infrastructure-provisioning-terraform-aws",
    category: "Cloud / Infrastructure",
    tags: ["Terraform", "AWS", "Linux"],
    excerpt: "Dive into Infrastructure as Code (IaC) by automating the provisioning of VPCs, subnets, and EC2 instances using clean, modular Terraform files.",
    date: "2026-08-02",
    readTime: "7 min read",
    featured: false,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Deploying infrastructure manually via cloud consoles is error-prone, non-repeatable, and difficult to audit. Infrastructure as Code (IaC) treats infrastructure configurations as source code, bringing reliability and automation to operations."
      },
      {
        type: "heading",
        level: 2,
        text: "Writing a Modular Terraform Configuration"
      },
      {
        type: "paragraph",
        text: "A standard modular design defines a virtual private cloud (VPC) with public and private subnets, enabling secured entry via a bastion host."
      },
      {
        type: "code",
        language: "hcl",
        code: `resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  
  tags = {
    Name = "MLOpsVPC"
  }
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  
  tags = {
    Name = "PublicSubnet"
  }
}`
      },
      {
        type: "heading",
        level: 3,
        text: "Managing Terraform State Safely"
      },
      {
        type: "paragraph",
        text: "Never commit your state files (`terraform.tfstate`) to Git. They store confidential configurations. Instead, host your state files remotely in Amazon S3, configuring locking mechanism via DynamoDB tables."
      },
      {
        type: "quote",
        text: "Remote state locking prevents multiple developers from modifying infrastructure resources concurrently, preventing state corruption."
      }
    ]
  },
  {
    id: "dockerizing-production-applications",
    title: "Dockerizing Production Applications",
    slug: "dockerizing-production-applications",
    category: "Docker / DevOps",
    tags: ["Docker", "Linux", "Kubernetes"],
    excerpt: "Best practices for writing secure, optimized, and multi-stage Dockerfiles to build lightweight images for production environments.",
    date: "2026-08-10",
    readTime: "6 min read",
    featured: false,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Simply writing a working Dockerfile is not enough for production systems. Standard practices demand that container images remain compact to speed up deployment times and minimize security exploit surfaces."
      },
      {
        type: "heading",
        level: 2,
        text: "Leveraging Multi-Stage Builds"
      },
      {
        type: "paragraph",
        text: "Multi-stage building allows developers to use compiler tools (like compilers, SDKs, dev packages) in temporary intermediate images, transferring only built binaries to the final run-time image."
      },
      {
        type: "code",
        language: "dockerfile",
        code: `# Stage 1: Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Final runtime stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
      },
      {
        type: "heading",
        level: 3,
        text: "Security Guidelines for Containerization"
      },
      {
        type: "list",
        items: [
          "Avoid using 'latest' tags for base images; enforce specific version tags.",
          "Never run your application as the root user. Define specific user groups.",
          "Scan your built container images regularly for vulnerabilities using tools like Trivy."
        ]
      }
    ]
  },
  {
    id: "building-reliable-cicd-pipelines",
    title: "Building Reliable CI/CD Pipelines with GitHub Actions",
    slug: "building-reliable-cicd-pipelines",
    category: "CI/CD / DevOps",
    tags: ["GitHub Actions", "Docker", "AWS", "Linux"],
    excerpt: "Discover patterns for building resilient integration and deployment pipelines, with caching, environment environments, and rollback strategies.",
    date: "2026-08-15",
    readTime: "7 min read",
    featured: false,
    published: true,
    content: [
      {
        type: "paragraph",
        text: "Continuous Integration and Deployment (CI/CD) pipelines serve as the backbone of modern software engineering. They ensure that modifications to source code automatically undergo validation before entering production environments."
      },
      {
        type: "heading",
        level: 2,
        text: "Speeding up builds using caching"
      },
      {
        type: "paragraph",
        text: "A major bottleneck in pipeline run times is downloading dependencies (such as npm or pip modules) from scratch on every run. Utilizing Action caches shortens build times significantly."
      },
      {
        type: "code",
        language: "yaml",
        code: `- name: Cache npm modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-`
      },
      {
        type: "heading",
        level: 3,
        text: "Implementing Rollback Strategies"
      },
      {
        type: "paragraph",
        text: "Deployments can fail due to unforeseen bugs. Designing automated rollback strategies—such as retaining tags of previously built Docker images or configuring blue-green deployment routing—limits system downtime."
      },
      {
        type: "quote",
        text: "A pipeline is only as good as its fail-safe. Automated rollback routines guarantee system resilience when updates behave unexpectedly."
      }
    ]
  }
];

export const getCategoryCounts = () => {
  const categories = ['DevOps', 'MLOps', 'Cloud', 'Kubernetes', 'CI/CD', 'Linux', 'Backend', 'Tutorials'];
  const counts: { [key: string]: number } = {
    'All Blogs': blogs.filter(b => b.published).length
  };
  
  categories.forEach(cat => {
    counts[cat] = blogs.filter(b => {
      if (!b.published) return false;
      const lowerCat = cat.toLowerCase();
      const lowerBlogCat = b.category.toLowerCase();
      
      return lowerBlogCat.includes(lowerCat);
    }).length;
  });
  
  return counts;
};
