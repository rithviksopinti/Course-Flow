# 🎓 CourseFlow – Role-Based Learning Platform

CourseFlow is a full-stack web application designed for video-based learning. It allows **Creators** to upload courses and **Learners** to view them, with a simple role-based interface and real-time cloud storage.

---

## 🚀 Live Demo

🌐 Frontend: https://course-flow-two.vercel.app/
⚙️ Backend API: https://course-flow-33ox.onrender.com/api/courses

---

## 🛠️ Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript (ES6)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas

**Deployment**

* Frontend → Vercel
* Backend → Render

---

## 🌟 Features

* 🔄 **Role-Based UI**

  * Creator → Add & delete courses
  * Learner → View courses

* 📺 **YouTube Video Integration**

  * Supports multiple URL formats
  * Handles embed + fallback links

* ☁️ **Cloud Storage**

  * Courses stored in MongoDB Atlas
  * Real-time updates across users

* ⚡ **REST API**

  * GET → Fetch courses
  * POST → Create course
  * DELETE → Remove course

* 🌐 **Deployed Full Stack**

  * Frontend and backend hosted separately

---

## 📂 Project Structure

```
courseflow/
│
├── backend/
│   ├── models/
│   │   └── Course.js
│   ├── routes/
│   │   └── courses.js
│   ├── server.js
│   └── .env
│
└── frontend/
    └── index.html
```

---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/courseflow.git
cd courseflow
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

Run server:

```
node server.js
```

---

### 3️⃣ Frontend Setup

* Open `frontend/index.html` in browser

---

## 🔗 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | /api/courses     | Fetch all courses |
| POST   | /api/courses     | Create new course |
| DELETE | /api/courses/:id | Delete course     |

---

## ⚠️ Notes

* Render free tier may cause **initial delay (cold start)**
* Some YouTube videos may not embed due to restrictions

---

<img width="1919" height="972" alt="Screenshot 2026-04-19 112638" src="https://github.com/user-attachments/assets/01168566-5ff9-4603-ad88-17fa40968934" />
<img width="1919" height="969" alt="Screenshot 2026-04-19 112617" src="https://github.com/user-attachments/assets/6e71cd06-a19f-4dfb-a1ce-58b1c62bf57c" />


## 🚀 Future Improvements

* 🔐 User Authentication (JWT)
* 👤 Course ownership (creator-specific access)
* 🔍 Search & filtering
* 📱 Mobile responsiveness
* 🎨 UI enhancements

---

## 👨‍💻 Author

Rithvik Sopinti

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
