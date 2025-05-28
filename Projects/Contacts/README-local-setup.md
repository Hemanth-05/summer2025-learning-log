# 📦 React Contacts App - Local Setup Guide

This guide explains how to set up and run the Contacts App locally on your machine.

---

## 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 recommended for Create React App)
- npm (comes with Node.js)

You can check your versions using:

```bash
node -v
npm -v
```

---

## 🚀 Steps to Run Locally

### 1. Clone or Download the Project

```bash
git clone <repository-url>
cd contacts-app
```

### 2. Install Dependencies

Inside the project folder, run:

```bash
npm install
```

This will install all the required packages listed in `package.json`.

### 3. Start the Development Server

```bash
npm start
```

This will launch the app in your default browser at:

```
http://localhost:3000
```

---

## ⚠️ Common Issues

### ❌ Missing `start` Script

If you get:
```
npm ERR! Missing script: "start"
```
Make sure you are in the correct folder — the one containing `package.json`.

### ❌ CSS Import Error

If you're trying to import a CSS file from `public/` and get an error, move it into `src/`, or include it via a `<link>` in `public/index.html` like:

```html
<link rel="stylesheet" href="%PUBLIC_URL%/styles.css" />
```

---

## 🧪 Useful Commands

- `npm run build` – Builds the app for production
- `npm test` – Runs tests (if any)
- `npm run eject` – Ejects CRA configuration (not recommended unless necessary)

---

## 📝 Notes

This project was initially created in CodeSandbox and ported to a local setup to simulate real-world development workflows and improve understanding of local dev environments.

