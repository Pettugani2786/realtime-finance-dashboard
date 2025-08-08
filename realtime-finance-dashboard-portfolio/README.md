# Real-Time Financial Data Visualization Dashboard

**Angular & React** | **AWS Lambda + API Gateway** | **WebSocket/Kafka (mocked)** | **CI/CD-ready**  
Performance-optimized UI for **sub-second** data updates and real-time charting.

![Screenshot](assets/screenshot.png)

## Overview
Cloud-native, real-time dashboard that visualizes streaming market quotes. Uses a mock WebSocket feed for live updates and a REST fallback endpoint suitable for AWS Lambda + HTTP API. Built to demonstrate production patterns (auth-ready architecture, performance tuning, and testability) as part of a Master’s project at **Eastern Illinois University** (Dec 2023).

## Tech Stack
- **Frontend:** React (Vite), TypeScript-ready, Chart.js  
- **Backend:** Node.js (AWS Lambda handler), mock WebSocket & REST servers  
- **Cloud/Infra:** AWS Lambda, API Gateway (HTTP API), Serverless Framework v3  
- **Testing (ready):** Cypress/Playwright (not included in this minimal starter)  
- **DevOps (ready):** GitHub Actions → S3 + CloudFront (SPA) [pipeline not included]

## Features
- Live quotes via **WebSocket** (mock server) with **REST** polling fallback  
- Interactive line chart; responsive UI; performance-oriented rendering  
- Production-style structure: `frontend/`, `backend/`, `serverless.yml`  
- Easy path to add **OAuth2/Cognito** and CI/CD  
- Clear local run + AWS deploy instructions

## Architecture (High Level)
```
WebSocket (mock)  ---> Frontend (React/Vite) ---> Chart.js
REST (Lambda/API) ---> Frontend REST fallback  ---> UI updates
```

## Local Development

### 1) Start mock backends
```bash
cd backend
npm install
npm run start:ws         # ws://localhost:8080
npm run start:local      # http://localhost:3000/dev/quotes
```

### 2) Run the frontend
```bash
cd ../frontend
npm install
cp .env.example .env     # optional: edit VITE_WS_URL / VITE_API_URL
npm run dev              # http://localhost:5173
```

You should see a live-updating chart.  
> Last update time shows under the chart.

## Deploy Minimal API to AWS (Optional)
Prereqs: AWS credentials configured; Node 18+; Serverless Framework v3.

At repo root:
```bash
npm i -g serverless
sls deploy --verbose
```
Set `VITE_API_URL` in `frontend/.env` to your deployed **HTTP API URL + /quotes**, rebuild, and host the SPA (e.g., S3 + CloudFront).

## Roadmap
- Swap demo data for a real provider (e.g., polygon.io / AlphaVantage)
- Add **Cognito** for OAuth2/JWT + role-based UI
- Add **Cypress/Playwright** regression suites
- GitHub Actions → deploy frontend to **S3 + CloudFront**

## Credits
Portfolio project by **Venkata Arun Kumar Pettugani**  
LinkedIn: https://www.linkedin.com/in/venkata-arun-kumar-pettugani