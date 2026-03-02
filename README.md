# 🎓 CourseFlow: Role-Based Learning Platform

CourseFlow is a full-stack web application designed for video-based learning. It features a dual-user system where **Creators** can manage content and **Learners** can view it, all powered by a live cloud database.

## 🚀 Live Demo
**View the project here:** [https://course-flow-two.vercel.app/](https://course-flow-two.vercel.app/)

---

## 🔑 Test Credentials
Use these accounts to explore the different permissions within the app. 

> **Note:** These are pre-staged accounts with specific metadata roles.

| Role | Email | Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Admin (Creator)** | `admin@test.com` | `123456789` | Upload videos, Delete videos, View Gallery |
| **Student (Learner)** | `student@test.com` | `123456789` | View Gallery, Watch Videos (No Delete/Upload) |

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **Database:** Supabase (PostgreSQL)
* **Authentication:** Supabase Auth with Role-Based Access Control (RBAC)
* **Hosting:** Vercel
* **Video Integration:** YouTube Embedded API

---

## 🌟 Key Features
* **Role-Based UI:** The interface dynamically changes based on the logged-in user's metadata (Creator vs. Learner).
* **Cloud Persistence:** Courses are stored in a live PostgreSQL database; changes reflect globally in real-time.
* **Secure Permissions:** Database Row-Level Security (RLS) ensures only authorized requests are processed.
* **Single Page Application (SPA):** Seamlessly switch between the "Learn" and "Create" tabs without page refreshes.

---

## 📂 Project Structure
```text
├── index.html         # The main application (Login, Gallery, and Creator tools)
└── README.md          # Project documentation and credentials
