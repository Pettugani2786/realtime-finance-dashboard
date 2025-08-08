# Real-Time Financial Data Visualization Dashboard

**Angular & React** | **AWS Lambda + API Gateway** | **WebSocket/Kafka (mocked)** | **CI/CD-ready**  
Performance-optimized UI for **sub-second** data updates and real-time charting.

![Screenshot](assets/screenshot.png)

---

## 📌 Overview
This project is a **cloud-native, real-time financial data dashboard** that streams and visualizes market quotes with sub-second latency.  
It uses **WebSocket** for live updates and a **REST API fallback** designed for AWS Lambda + API Gateway.  

Originally built as my **Master’s final project at Eastern Illinois University (Dec 2023)**, it follows **production-grade patterns** in architecture, performance optimization, and CI/CD readiness.

---

## 🛠 Tech Stack
- **Frontend:** Angular & React (Vite), Chart.js, SCSS
- **Backend:** Node.js (AWS Lambda handler), mock WebSocket server, mock REST API
- **Cloud/Infra:** AWS Lambda, API Gateway (HTTP API), Serverless Framework v3
- **Testing (ready):** Cypress, Playwright (can be integrated)
- **DevOps (ready):** GitHub Actions → S3 + CloudFront (SPA hosting)

---

## ✨ Features
- 📡 **Real-time data** via WebSocket with REST fallback for reliability  
- 📊 **Interactive dashboard** with chart visualizations, filtering, and responsive design  
- 🔐 **Role-based authentication** ready (OAuth2/Cognito integration possible)  
- ⚡ **Performance tuned** using lazy loading, ChangeDetectionStrategy, and memoization  
- 🤖 **CI/CD-ready** — pipeline scripts can deploy to AWS automatically  

---

## 🏗 Architecture
