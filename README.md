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
