# 💰 SpendStack

SpendStack is a modern full-stack personal expense tracker designed to help users manage and visualize their daily expenses. The application focuses on providing a clean user interface, secure authentication, and a scalable backend architecture.

---

## 🚀 Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS

### Backend

* FastAPI
* Python

### Database

* PostgreSQL

### Authentication

* JWT (JSON Web Token)
* bcrypt Password Hashing

---

## ✨ Current Features

* Responsive and modern user interface
* User Registration
* Secure User Login
* JWT-based Authentication
* Password Hashing using bcrypt
* FastAPI Backend APIs
* PostgreSQL Database Integration
* Modular Project Structure

---

## 📂 Project Structure

```text
SpendStack/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── Backend/
│   ├── app/
│   │   ├── core/          # Configuration & Security
│   │   ├── models/        # SQLAlchemy Models
│   │   ├── routes/        # API Endpoints
│   │   ├── schemas/       # Pydantic Schemas
│   │   └── services/      # Business Logic
│   │
│   | 
│   ├── main.py
│   ├── requirements.txt
│   ├── pyproject.toml
│   └── README.md
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd SpendStack
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

### Backend

```bash
cd Backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🗄️ Database

Create a PostgreSQL database and configure your database credentials in the backend environment file before starting the application.

---

## 📌 Project Status

Current development progress:

* ✅ Frontend Completed
* ✅ Authentication Implemented
* ✅ Basic Backend APIs
* 🚧 Expense Management APIs
* 🚧 Dashboard Integration
* 🚧 Analytics & Reports
* 🚧 Docker Support
* 🚧 CI/CD Pipeline
* 🚧 Cloud Deployment

---

## 🎯 Upcoming Features

* Add/Edit/Delete Expenses
* Expense Categories
* Monthly Analytics
* Budget Tracking
* Search & Filters
* Docker Containerization
* GitHub Actions CI/CD
* Cloud Deployment
* Unit & Integration Testing

---

## 📖 Learning Objectives

This project is being developed to gain hands-on experience with:

* Full-Stack Development
* REST API Design
* Authentication & Authorization
* PostgreSQL Database Design
* Docker
* CI/CD Automation
* Backend Security Best Practices

---

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

---

## 📄 License

This project is licensed under the MIT License.
