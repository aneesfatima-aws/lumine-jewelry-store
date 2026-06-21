## 📌 Project Overview

Lumine Jewelry Store is a fully automated DevOps project where a static e-commerce website is deployed on AWS using a CI/CD pipeline.

Every code change pushed to GitHub automatically triggers deployment to AWS S3 and invalidates CloudFront cache, ensuring real-time updates with zero manual intervention.


---

🏗️ Architecture

`Developer
   ↓
GitHub Repository
   ↓
GitHub Actions (CI/CD)
   ↓
AWS S3 Bucket
   ↓
CloudFront CDN
   ↓
End Users (Global Access)`


---

⚙️ Tech Stack

🧑‍💻 Git & GitHub (Version Control)

⚡ GitHub Actions (CI/CD Automation)

☁️ AWS S3 (Static Hosting)

🌍 AWS CloudFront (CDN)

🔐 IAM (Security & Access Management)

🌐 HTML, CSS, JavaScript (Frontend)



---

🚀 Features

🔄 Fully automated CI/CD pipeline

🚫 No manual deployment required

⚡ Fast global content delivery via CloudFront

♻️ Automatic cache invalidation on updates

🔐 Secure AWS IAM-based deployment

📦 Production-like DevOps workflow



---

🔄 CI/CD Workflow

1. Developer pushes code to GitHub
2. GitHub Actions pipeline is triggered
3. Files are synced to AWS S3 bucket
4. CloudFront cache is invalidated
5. Updated website goes live instantly


---

📁 Project Structure

`Lumine-Jewelry-Store/
│
├── index.html
│
└── .github/
    └── workflows/
        └── deploy.yml`


---

⚙️ GitHub Actions Pipeline

The pipeline automatically:

Checks out repository code

Configures AWS credentials securely

Syncs files to S3 bucket

Invalidates CloudFront cache



---

🧠 Key Learnings

CI/CD pipeline automation using GitHub Actions

AWS S3 static hosting setup

CloudFront CDN integration

IAM security best practices

Real-world DevOps deployment workflow



---

📊 Project Outcome

✔️ Fully automated deployment system
✔️ Zero downtime updates
✔️ Global CDN-based website delivery
✔️ Production-ready DevOps architecture


---

💼 Use Case

This project demonstrates real-world DevOps skills including:

Cloud automation

CI/CD implementation

Infrastructure integration

Scalable static website deployment



---

📸 (Optional Add-ons)

Website homepage + CloudFront URL output
<img width="1366" height="670" alt="1" src="https://github.com/user-attachments/assets/df67880c-0ef7-44f8-8702-2ddf1fb1a730" />

GitHub Actions success pipeline





---

🏁 Final Status

🚀 Project Successfully Deployed & Automated


---

👨‍💻 Author

Anees Fatima
junior DevOps Engg | Cloud Enthusiast | AWS Learner


---

⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!


---
# lumine-jewelry-store
Phase 1 (Lab 1)

## GitHub Repository

Create:

lumine-jewelry-store

Upload:

index.html
README.md

Commit:

`git init
git add .
git commit -m "Initial Lumine website"
git push`

Deliverable:

✅ GitHub Repo


---

Phase 2 (Lab 2)

S3 Hosting

Create Bucket:

`lumine-jewelry-store`

Enable:

Static Website Hosting

Upload:

index.html

Result:

`http://bucket-name.s3-website-us-east-1.amazonaws.com`

Deliverable:

✅ Website Live on AWS


---

Phase 3 (Lab 3)

CloudFront

Create CloudFront Distribution.

Origin:

S3 Bucket

Output:

`https://dxxxx.cloudfront.net`

Benefits:

✅ HTTPS

✅ CDN

✅ Global Performance


---

Phase 4 (Lab 4)

Security Enhancement

Instead of:

Public Bucket

Use:

Private Bucket
↓
Origin Access Control (OAC)
↓
CloudFront

This is production-grade.

Interviewers LOVE this.


---

Phase 5 (Lab 5)

GitHub Actions CI/CD

Workflow:

GitHub
 ↓
Push
 ↓
GitHub Actions
 ↓
S3 Sync
 ↓
CloudFront Cache Invalidation

Whenever code changes:

git push

Website updates automatically.

No manual upload.


---

Phase 6 (Lab 6)

Monitoring

Create:

SNS Topic

CloudWatch Dashboard


Track:

CloudFront Requests

Error Rate


Deliverable:

✅ Monitoring ✅ Alerts


---

Final Architecture

`Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ▼
Amazon S3 (Private)
    │
    ▼
CloudFront (HTTPS)
    │
    ▼
End Users`


---

LinkedIn Project Description

> Designed and deployed Lumine, a cloud-hosted static jewelry store website on AWS. Implemented secure static hosting using Amazon S3 and CloudFront, enabled HTTPS delivery, automated deployments with GitHub Actions CI/CD, and integrated monitoring using CloudWatch and SNS while following cloud security best practices.




---
