

---
# Grievance Portal

A web-based platform designed to facilitate the submission, tracking, and resolution of grievances. This application allows users to submit complaints or issues, view their status, and receive updates. The portal is built using modern web technologies and follows best practices for maintainability and scalability.


---

## 🚀 Features

- **User Authentication**: Secure (OAUTH2) login and registration system.
- **Grievance Submission**: Users can submit grievances with detailed descriptions, attachments, and categories.
- **Status Tracking**: Real-time tracking of grievance status (e.g., Pending, In Progress, Resolved).
- **Admin Dashboard**: Comprehensive admin panel for managing grievances, users, and reports.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Notifications**: Automated notifications for grievance updates.


---

## 🗂️ Project Structure

```

.
├── public/
│   ├── assets/              # Public static assets
│   └── 404.html             # Custom 404 page
│
├── src/
│   ├── assets/              # App-specific assets (images, icons)
│   ├── components/          # React components
│   │   ├── A\_Reply.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Login.jsx
│   │   ├── O\_Subject.jsx
│   │   ├── Register.jsx
│   │   ├── Reply.jsx
│   │   ├── Subject.jsx
│   │   ├── ThankYou.jsx
│   │   └── WelcomePage.jsx
│   ├── styles/
│   │   └── tailwind.css     # Tailwind CSS config
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
│
├── .gitignore
├── index.html
├── vite.config.js
├── vercel.json
├── README.md
├── package.json
├── postcss.config.mjs
├── eslint.config.js
├── DEPLOY\_TARGET=gh-pages
└── package-lock.json

````

---

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/<your-username>/portal-abuju.git
cd portal-abuju

# Install dependencies
npm install

# Start development server
npm run dev
````

---

## 🛠️ Tech Stack

* **React** – UI library
* **Vite** – Lightning-fast bundler
* **Tailwind CSS** – Utility-first styling
* **ESLint** – Code linting
* **Vercel / GitHub Pages** – Deployment platforms

---

## 🚀 Deployment

To deploy to GitHub Pages:

1. Set the `DEPLOY_TARGET=gh-pages`
2. Run:

```bash
npm run build
npm run deploy
```

To deploy to Vercel:

1. Install [Vercel CLI](https://vercel.com/docs/cli)
2. Run:

```bash
vercel
```

---
- ## 🛡️ License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and share this project with proper attribution.

#### **Contact**
For any questions or feedback, please reach out to:

[![dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=DevdotTo&logoColor=white)](https://dev.to/brian_otina_)
[![github](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/otinabrayo)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white)](mailto:brianotina20@gmail.com)
[![telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/just_otina)
[![discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@otina_)

