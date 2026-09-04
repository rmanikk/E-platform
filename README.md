# 🎓 ANPADD — Learn. Explore. Evolve.

> **ANPADD** is a modern e-learning platform concept designed to bring courses, books, articles, instructors, and learner-focused resources together in one place.

The project combines a responsive educational frontend with a Node.js/Express backend that provides user authentication and protected API access.

---

## ✨ What is ANPADD?

ANPADD is built around a simple idea:

**Learning should be accessible, engaging, and broader than a single classroom.**

The platform's interface brings together:

- 📚 Curated learning resources
- 🎓 Multiple course categories
- 📖 Educational and literary books
- 📝 Learning-focused blogs and articles
- 👨‍🏫 Instructor/mentor profiles
- 💬 Learner testimonials
- 📊 Platform statistics
- 🔐 User registration and login
- 🛡️ Cookie-based authenticated API access
- 📱 Responsive navigation for smaller screens

The current repository represents the foundation of the platform, with the frontend and authentication backend developed as separate layers.

---

## 🚀 Highlights

### 🎓 Course Discovery

ANPADD presents a broad collection of learning paths, including:

- Computer Science
- Data Science
- Full-Stack Development
- UI/UX
- Civil Engineering
- Mathematics
- Probability & Statistics
- Chemistry
- Entrepreneurship
- Photography
- Communication & Languages
- Project Management
- Online Course Creation

The course interface includes category filtering so learners can quickly narrow down the available courses.

### 📖 Books & Reading

The platform includes a dedicated books section with featured titles, descriptions, and links to available full-text resources.

Featured literary works include titles such as:

- *The Trial*
- *The Castle*
- *Crime and Punishment*
- *The Tempest*
- *The Metamorphosis*
- *The Idiot*
- *The Stranger*

### 📝 Learning & Articles

ANPADD includes a blog area designed for educational and informational content, with individual article pages and "Read more" navigation.

### 👨‍🏫 Expert Instructors

The team section presents instructors and mentors with different areas of focus, including:

- Motivation
- Strategy & critical thinking
- Strategic planning
- Creative learning
- Consistency & discipline
- Resilience & growth
- Technology and leadership

### 💬 Learner Experience

The homepage includes learner testimonials and animated platform statistics to make the experience feel more interactive and engaging.

---

# 🏗️ Architecture

ANPADD is organized into two primary layers:

```text
                         ┌──────────────────────┐
                         │      ANPADD UI       │
                         │ HTML + CSS + JS      │
                         └──────────┬───────────┘
                                    │
                             HTTP / JSON
                                    │
                         ┌──────────▼───────────┐
                         │   Express Backend    │
                         │      Node.js         │
                         └──────────┬───────────┘
                                    │
                   ┌────────────────┴────────────────┐
                   │                                 │
             Authentication                     Database
                   │                                 │
          JWT + HTTP Cookie                    MongoDB
                   │                                 │
                   └────────────────┬────────────────┘
                                    │
                             Protected Routes
```

---

# 🧩 Frontend

The frontend is currently implemented with:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Font Awesome**

The interface is organized into individual pages:

```text
Overview/
├── files/
│   ├── index.html
│   ├── course-detail.html
│   ├── books.html
│   ├── blog.html
│   ├── blog1.html
│   ├── team.html
│   ├── contact.html
│   ├── login.html
│   └── signup.html
│
├── js/
│   ├── script.js
│   └── coursesfilter.js
│
└── styles/
    ├── style.css
    ├── coursestyle.css
    ├── books.css
    ├── blogcss.css
    ├── blog1.css
    ├── contact.css
    ├── team.css
    └── auth.css
```

### Frontend interactions

The JavaScript layer currently provides:

- Course category filtering
- Mobile navigation toggling
- Animated statistics when the statistics section enters the viewport
- Login form submission
- Signup form validation
- Authentication-aware navigation
- Client-side storage of user session information used by the dashboard flow

---

# ⚙️ Backend

The backend lives inside the `loginsignup` directory and uses a lightweight Express architecture.

```text
loginsignup/
├── Model/
│   └── userModel.js
│
├── controller/
│   └── userController.js
│
├── db/
│   └── db.js
│
├── middlware/
│   └── AuthApi.js
│
├── routes/
│   └── userRoutes.js
│
├── index.js
├── package.json
├── package-lock.json
└── vercel.json
```

## 🔐 Authentication

ANPADD's backend includes a complete initial authentication flow:

### Sign Up

```http
POST /api/user/signup
```

Expected body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "password": "your-password"
}
```

The backend:

1. Validates required fields
2. Checks whether the email already exists
3. Generates a bcrypt salt
4. Hashes the password
5. Stores the user in MongoDB
6. Creates a JWT
7. Places the JWT in an HTTP-only cookie

### Login

```http
POST /api/user/login
```

Expected body:

```json
{
  "email": "you@example.com",
  "password": "your-password"
}
```

The backend:

1. Finds the user by email
2. Compares the supplied password against the bcrypt hash
3. Generates a JWT after successful authentication
4. Sends the token through an HTTP-only cookie

### Protected API

The project also includes authentication middleware for protected routes.

```text
Request
   │
   ▼
Cookie containing JWT
   │
   ▼
AuthApi middleware
   │
   ├── No token ──► reject request
   │
   └── Valid token
           │
           ▼
      Decode user ID
           │
           ▼
       next()
           │
           ▼
     Protected route
```

---

# 🗄️ Database

ANPADD uses:

**MongoDB + Mongoose**

The user model currently contains:

| Field | Type | Description |
|---|---|---|
| `name` | String | User's name |
| `email` | String | Unique user email |
| `password` | String | Hashed password |
| `createdAt` | Date | Automatically generated |
| `updatedAt` | Date | Automatically generated |

Mongoose timestamps are enabled for user records.

---

# 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5 |
| Styling | CSS3 |
| Frontend Logic | Vanilla JavaScript |
| Backend | Node.js |
| Server | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JSON Web Tokens |
| Password Security | bcryptjs |
| Cookies | cookie-parser |
| CORS | cors |
| Environment Variables | dotenv |
| Deployment Configuration | Vercel |

---

# 🔌 API Reference

## Authentication Endpoints

### Create Account

```http
POST /api/user/signup
```

### Login

```http
POST /api/user/login
```

## Protected Route Example

```http
GET /home
```

This route is protected by the authentication middleware and demonstrates how authenticated requests can be handled.

---

# ⚙️ Environment Variables

Create a `.env` file inside `loginsignup`:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
TOKEN_SECRET=your_jwt_secret
```

> Never commit `.env` files, database credentials, JWT secrets, or other private configuration to GitHub.

---

# 🧑‍💻 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/rmanikk/anpadd-backend.git
cd anpadd-backend
```

## 2. Enter the backend

```bash
cd loginsignup
```

## 3. Install dependencies

```bash
npm install
```

## 4. Configure environment variables

Create `.env`:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
TOKEN_SECRET=your_secret
```

## 5. Start the backend

```bash
node index.js
```

The server will start on the configured port, or `8000` by default.

---

# 🌐 Frontend Setup

The frontend is a static HTML/CSS/JavaScript application.

Open the `Overview/files/index.html` page through a local static server.

For example, with VS Code, a static development server such as Live Server can be used.

> The authentication pages currently point to the local backend API during development. When deploying the frontend, update the API base URL to the deployed backend URL.

---

# ☁️ Deployment

The backend includes a Vercel configuration:

```text
loginsignup/vercel.json
```

The configuration routes incoming requests through the Node.js entry point:

```text
Request
   │
   ▼
Vercel
   │
   ▼
index.js
   │
   ├── CORS
   ├── JSON parser
   ├── Cookie parser
   └── Express routes
           │
           ▼
      /api/user/*
```

For production deployment, configure the required environment variables in the hosting provider rather than committing secrets to the repository.

---

# 🎯 Project Goals

ANPADD is designed to evolve from a static educational interface and authentication foundation into a complete learning ecosystem.

The long-term direction can include:

- [ ] User profiles
- [ ] Student dashboards
- [ ] Instructor dashboards
- [ ] Course enrollment
- [ ] Course progress tracking
- [ ] Video lessons
- [ ] Quizzes and assessments
- [ ] Certificates
- [ ] Search
- [ ] Course reviews and ratings
- [ ] Bookmarks / saved courses
- [ ] Admin content management
- [ ] Role-based authorization
- [ ] Course creation tools
- [ ] Notifications
- [ ] Learning analytics
- [ ] Production-ready API documentation

---

# 🔒 Security Notes

The project already establishes several important security foundations:

- Passwords are hashed with `bcryptjs`
- Authentication uses signed JWTs
- JWTs are stored through HTTP-only cookies
- CORS is configured for the frontend
- Environment variables are used for secrets and database configuration

For a production-ready release, additional hardening should be considered, including:

- Secure and `SameSite` cookie settings
- JWT expiration and refresh-token strategy
- Rate limiting
- Stronger server-side validation
- Centralized error handling
- Role-based authorization
- Security headers
- Production CORS configuration
- Input sanitization
- Request logging and monitoring

---

# 🗺️ Roadmap

### Phase 1 — Foundation
- [x] Educational landing page
- [x] Course discovery interface
- [x] Books section
- [x] Blog section
- [x] Instructor section
- [x] Contact page
- [x] Responsive navigation
- [x] Signup
- [x] Login
- [x] MongoDB integration
- [x] Password hashing
- [x] JWT authentication
- [x] Protected route middleware

### Phase 2 — Learning System
- [ ] Course database
- [ ] Course enrollment
- [ ] Student dashboard
- [ ] Instructor dashboard
- [ ] Course progress
- [ ] Lessons and modules
- [ ] Quizzes

### Phase 3 — Platform
- [ ] Admin panel
- [ ] Role-based access
- [ ] Search and filtering
- [ ] Reviews
- [ ] Certificates
- [ ] Analytics
- [ ] Notifications

### Phase 4 — Production
- [ ] API documentation
- [ ] Automated testing
- [ ] CI/CD
- [ ] Security hardening
- [ ] Monitoring
- [ ] Performance optimization

---

# 📁 Repository

**Backend:** `rmanikk/anpadd-backend`

The backend repository contains the Node.js/Express authentication service, while the accompanying frontend contains the user-facing ANPADD learning experience.

---

# 🤝 Contributing

Contributions, ideas, and improvements are welcome.

A typical contribution workflow:

```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

Then open a pull request describing the change.

---

# 📜 License

This project was developed for academic and educational purposes.

Copyright © 2026 Anpadd.

---

<div align="center">

### 🎓 ANPADD

**Learn something new. Build something meaningful. Become something greater.**

Made with curiosity, code, and a vision for better learning.

</div>
