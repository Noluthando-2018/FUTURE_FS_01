# Noluthando Sekhula — Portfolio Website

A full-stack personal portfolio website built with **React** (frontend) and **Node.js + Express + MySQL** (backend).

---

## ✨ Features

- React + React Router — single page app with smooth scroll navigation
- Dark / Light mode — toggle saved to localStorage
- Animated typing effect — cycles through role descriptions
- Scroll reveal animations — sections animate in as you scroll
- Contact form — saves message to MySQL and sends email notification
- SEO-ready — Open Graph, Twitter Card, meta description and keywords
- Download CV — navbar and About section buttons
- Fully responsive — mobile, tablet, desktop

---

## 🗂 Project Structure

```
portfolio_project/
├── frontend/               React app (Create React App)
│   ├── public/
│   └── src/
│       ├── components/     Hero, Skills, Projects, About, Contact, Navbar, Footer
│       ├── context/        ThemeContext (dark/light mode)
│       ├── data/           index.js — all site content lives here
│       ├── hooks/          useTypingEffect, useScrollReveal
│       ├── pages/          Home.jsx
│       ├── styles/         index.css — global styles and theme variables
│       ├── App.jsx
│       └── index.js
│
└── backend/                Node.js + Express API
    ├── database/
    │   └── schema.sql      Run this in MySQL Workbench to set up the DB
    ├── db/
    │   └── connection.js   MySQL connection pool
    ├── middleware/
    │   └── emailService.js Nodemailer email notifications
    ├── routes/
    │   └── contact.js      POST /api/contact
    ├── server.js           Express entry point
    ├── .env.example
    └── package.json
```

---

## 🚀 Getting Started

You need two terminals open at the same time.

### Terminal 1 — Backend

**Step 1: Set up the database**

1. Open MySQL Workbench
2. Connect to your local MySQL server
3. Click File → Open SQL Script
4. Select `backend/database/schema.sql`
5. Click the lightning bolt button to run it
6. Refresh the Schemas panel — `portfolio_db` will appear

**Step 2: Configure environment**

```bash
cd backend
copy .env.example .env
```

Edit `.env` and fill in your values:

```
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_email@gmail.com
FRONTEND_URL=http://localhost:3000
```

**Step 3: Install and run**

```bash
npm install
npm run dev
```

Backend runs at http://localhost:5000

---

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at http://localhost:3000

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Check if backend is running |
| POST | /api/contact | Save message to MySQL and send email |
| GET | /api/contact | View all messages |
| PATCH | /api/contact/:id/read | Mark a message as read |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Create React App |
| Routing | React Router 6 |
| HTTP client | Axios |
| Icons | React Icons |
| Styling | Pure CSS with CSS custom properties |
| Backend | Node.js, Express 4 |
| Database | MySQL 8, mysql2 |
| Email | Nodemailer (Gmail SMTP) |
| Validation | express-validator |
| Rate limiting | express-rate-limit |



---

## 📄 License

This project is open source and available under the MIT License.

---

## 📬 Contact

**Noluthando Vutomi Sekhula**

- Email: noluthandosekhula63@gmail.com
- LinkedIn: linkedin.com/in/noluthando-sekhula
- GitHub: github.com/Noluthando-2018
