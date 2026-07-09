# Cloudkart
# ☁️ CloudCart – Scalable E-Commerce Platform on AWS

CloudCart is a cloud-native e-commerce platform built to demonstrate how a modern, secure, and scalable web application can be designed, deployed, and managed using Amazon Web Services (AWS).

This project combines full-stack web development with cloud infrastructure, security, scalability, and monitoring to simulate a production-ready e-commerce environment. It showcases industry best practices for deploying highly available applications on AWS while providing hands-on experience with cloud-native architecture.

> 🚧 **Project Status:** In Development

---

# 🚀 Project Objectives

* Build a scalable three-tier web application.
* Deploy a full-stack application on AWS.
* Implement secure user authentication and authorization.
* Store product images using Amazon S3.
* Use Amazon RDS (MySQL) for persistent storage.
* Configure networking and security using AWS VPC and IAM.
* Implement high availability using an Application Load Balancer and Auto Scaling.
* Monitor application performance with Amazon CloudWatch.

---

# 🏗️ Architecture

```text
                    Internet
                        │
                        ▼
         Application Load Balancer (ALB)
                        │
          ┌─────────────┴─────────────┐
          │                           │
     EC2 Instance 1             EC2 Instance 2
 (Node.js + Express)       (Node.js + Express)
          │                           │
          └─────────────┬─────────────┘
                        │
                  Amazon RDS (MySQL)
                        │
                  Amazon S3 Bucket
                 (Product Images)
```

---

# ✨ Features

## 👤 Customer Features

* User Registration
* Secure Login & Authentication
* Browse Products
* Search Products
* Product Details Page
* Shopping Cart
* Checkout
* Order History

## 🛠️ Admin Features

* Admin Dashboard
* Add Products
* Edit Products
* Delete Products
* Upload Product Images to Amazon S3
* Manage Customer Orders
* View Sales Overview

---

# ☁️ AWS Services Used

| Service                   | Purpose                        |
| ------------------------- | ------------------------------ |
| Amazon EC2                | Hosts the backend application  |
| Amazon S3                 | Stores product images          |
| Amazon RDS (MySQL)        | Relational database            |
| Amazon VPC                | Secure networking              |
| AWS IAM                   | Access control and permissions |
| Application Load Balancer | Traffic distribution           |
| Auto Scaling              | Automatic instance scaling     |
| Amazon CloudWatch         | Monitoring and logging         |
| Route 53 *(Optional)*     | DNS management                 |
| AWS WAF *(Optional)*      | Web application firewall       |

---

# 💻 Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MySQL

## Cloud

* Amazon EC2
* Amazon S3
* Amazon RDS
* Amazon VPC
* IAM
* CloudWatch
* ALB
* Auto Scaling

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```text
cloudcart-aws/
│
├── frontend/          # Frontend source code
├── backend/           # Backend APIs
├── database/          # Database scripts
├── diagrams/          # Architecture diagrams
├── docs/              # Project documentation
├── screenshots/       # Application screenshots
├── README.md
└── LICENSE
```

---

# 🎯 Learning Outcomes

This project focuses on developing practical experience in:

* AWS Cloud Computing
* Cloud-Native Application Development
* Full-Stack Web Development
* Scalable System Design
* Cloud Security Best Practices
* Infrastructure Deployment
* DevOps Fundamentals
* Monitoring & Logging
* High Availability Architecture

---

# 📌 Project Roadmap

* [x] Design System Architecture
* [ ] Develop Frontend
* [ ] Build Backend REST APIs
* [ ] Design MySQL Database
* [ ] Implement Authentication & Authorization
* [ ] Deploy Backend on Amazon EC2
* [ ] Configure Amazon RDS
* [ ] Integrate Amazon S3 for Image Storage
* [ ] Configure AWS VPC & IAM
* [ ] Deploy Application Load Balancer
* [ ] Configure Auto Scaling
* [ ] Enable CloudWatch Monitoring
* [ ] Testing & Performance Optimization
* [ ] Complete Documentation

---

# 📷 Screenshots

Project screenshots, deployment images, and architecture diagrams will be added as development progresses.

---

# 📚 Future Enhancements

* Product Reviews & Ratings
* Wishlist
* Payment Gateway Integration
* Email Notifications
* JWT Authentication
* Docker Containerization
* CI/CD Pipeline using GitHub Actions
* Infrastructure as Code using Terraform
* AWS CloudFront CDN
* AWS WAF Security Rules

---

# 📜 License

This project is intended for educational, portfolio, and learning purposes.

---

# 👨‍💻 Author

**Raj Mahto**

Aspiring **AI & Cloud Engineer** passionate about building scalable cloud-native applications, exploring AWS services, and continuously improving through hands-on projects.

* 🌐 Cloud Computing
* 🤖 Artificial Intelligence
* 🚀 Full-Stack Development
* ☁️ AWS Solutions

---

# ⭐ Support

If you found this project helpful or inspiring, consider giving it a **⭐ Star** on GitHub. Your support motivates me to continue building cloud-native applications and sharing my learning journey.
