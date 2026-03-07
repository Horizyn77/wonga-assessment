# Wong Auth System - Assessment Project

## 📌 Project Overview

This project is a **microservice-based authentication system** built using:

- Backend services written in **.NET 8**
- Frontend built with **React**
- Database powered by **PostgreSQL**
- Containerized deployment using **Docker Compose**

### Services

- ✅ AuthService — Handles authentication logic (registration, login, token generation)
- ✅ UserService — Manages user profiles and user data
- ✅ Frontend — React user interface
- ✅ PostgreSQL Database — Persistent storage

---

## 📦 Features

### 🔐 Authentication
- User Login
- User Registration
- JWT Authentication

### 👤 User Management
- Profile viewing

### ✅ Validation
- Registration form validation

---

## 📁 Project Structure

backend/

├ AuthService/

├ UserService/

frontend/

├ React application

docker-compose.yml

build.sh

build.ps1


---

## 🚀 How to Run the Project

### ✅ Prerequisites

Make sure you have installed:

- Docker
- Docker Compose

Also ensure the Docker engine is running

---
### ✅  1. Clone Repository

In a terminal window run:

```bash
git clone https://github.com/Horizyn77/wonga-assessment.git
```
---

### ✅ 2. Navigate into Project Directory

```bash
cd wonga-assessment
```

### ✅ 3. Build and Start All Services

Run the build script:

Linux/macOS

```bash
./build.sh
```

Windows (Powershell)

```powershell
.\build.ps1
```

You can also build and start services manually:

```bash
docker compose up --build
```

### ✅ 4. Access Application in Browser

After running the project, open your browser and visit:

### Frontend Application
👉 http://localhost:3000

### Backend Services

Auth Service API:
👉 http://localhost:5000/api

User Service API:
👉 http://localhost:5001/api<br><br>

⚠️ **Important Notes**

📌 **Database Migration Startup**

Migration may not execute instantly on the very first container startup due to database initialization timing.

You may encounter failed user registration with a response error such as: 
```
relation "Users" does not exist
```

Please allow the system a few seconds and retry.

You can also try running the following command again:

```bash
docker compose up --build 
```

## ⭐ Future Improvements

Refresh token mechanism

Role-based authorization

Unit and integration tests
