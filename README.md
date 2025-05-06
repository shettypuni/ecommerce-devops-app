Phase 1: Prerequisites & Setup ✅ Local Setup Install: Terraform, Git, Node.js, Docker (for local testing)

GitHub:https://github.com/shettypuni/ecommerce-devops-app
Add folders: frontend/, backend/, infrastructure/terraform/, buildspec.yml, scripts/deploy.sh, README.md

🌐 Phase 2: Infrastructure Setup using Terraform ✅ Module 1: VPC and Networking (Skip if using existing VPC/Subnets) Since you've shared:


![image](https://github.com/user-attachments/assets/9c439d23-8d4b-4286-87d9-7f4e81466bef)

📁 Folder Structure
bash
CopyEdit
ecommerce-app/
├── frontend/          # React app
├── backend/           # Node.js + Express API
├── buildspec.yml      # CI/CD instructions
├── scripts/
│   └── deploy.sh      # Deployment script
├── infrastructure/
│   └── terraform/     # OR cloudformation/
├── README.md
________________________________________
Goal: Use Terraform or AWS CDK to provision infrastructure.
Basic Terraform Modules:
•	VPC, Subnets
•	EC2 (or ECS)
•	RDS (MySQL)
•	S3 Bucket
•	IAM Roles
•	CodePipeline, CodeBuild, CodeDeploy


![image](https://github.com/user-attachments/assets/fc313326-d8dc-4707-a4d5-835ba6e4f4a7)
![image](https://github.com/user-attachments/assets/75af776c-759c-4be1-bcd4-8d5e3446e46e)
![image](https://github.com/user-attachments/assets/9ff86208-c529-477b-a276-033da15b494d)
![image](https://github.com/user-attachments/assets/14c670db-1669-46f7-a5b4-306165cf8fb4)
![image](https://github.com/user-attachments/assets/36ff366c-b0dd-49ad-b420-bce79f8a40b9)
![image](https://github.com/user-attachments/assets/017f5a55-f66c-45bb-ac29-a2a470b0bdef)
![image](https://github.com/user-attachments/assets/f8ca0f08-72aa-4044-be29-4d1467857df0)
Build artifacts
![image](https://github.com/user-attachments/assets/16b42e29-5e53-48b0-9429-1a1ec2addaa3)
Module 4: RDS MySQL Private DB with:

username & password stored in AWS Secrets Manager

Subnet group from provided subnets

✅ Module 5: ECS with Fargate Deploy frontend and backend as separate services

Use ALB for routing

Dockerize both applications

✅ Module 6: Cognito For authentication (User Pool, App Client, Domain) -** Not configured**

⚙️ Phase 3: Application Development & Dockerization ✅ Folder Structure

ecommerce-app/ ├── frontend/ (React) ├── backend/ (Node.js + Express + MySQL config) ├── Dockerfile (for both apps) ├── buildspec.yml (frontend & backend) ├── scripts/deploy.sh └── infrastructure/terraform/ ✅ Add Dockerfiles Build React app

Serve via Nginx

Backend app with MySQL integration
![image](https://github.com/user-attachments/assets/4eadd599-79de-4fd5-8b5e-666a2eaa900d)
🚀 Phase 4: CI/CD Pipeline ✅ Pipeline Flow

GitHub Push → CodePipeline → CodeBuild (frontend/backend) → ECS deploy via CodeDeploy ✅ Terraform Resources aws_codepipeline

aws_codebuild_project

aws_codedeploy_app + deployment_group 
![image](https://github.com/user-attachments/assets/ba84cf29-fc05-4a79-a3c6-4fc9abadee79)
✅ Scripts buildspec.yml: For CodeBuild

deploy.sh: Push images to ECR & update ECS service

📊 Phase 5: Observability & Alerts ✅ CloudWatch Alarms: ECS Service metrics (CPU, memory)

RDS metrics

✅ Logging: Enable CloudWatch logs in ECS task definitions
![image](https://github.com/user-attachments/assets/b188b7f8-95cb-49e5-a6bb-882fe8aa9ba9)

Code Build
![image](https://github.com/user-attachments/assets/61774e35-5907-45b9-8b28-45b19ba4da95)
 Terraform modules attached:

vpc.tf, iam.tf, ecs.tf, rds.tf, s3.tf, cognito.tf, pipeline.tf

buildspec.yml files (frontend & backend)

Dockerfiles (for frontend and backend)

Application boilerplate (basic React frontend & Node.js backend)

GitHub project push structure

GitHub Push → CodePipeline → CodeBuild (frontend/backend) → ECS deploy via CodeDeploy
![image](https://github.com/user-attachments/assets/888c1787-abd7-4df1-899f-f97a7414a21d)
![image](https://github.com/user-attachments/assets/c2e65e2b-9754-444e-bdec-44c7d89b491a)


