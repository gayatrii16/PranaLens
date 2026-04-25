# PranaLens Wellness Frontend-Only

PranaLens Wellness Frontend-Only is a static React + Vite wellness platform that runs fully in the browser using `localStorage`. It is designed for easy demo deployment on Vercel, Netlify, or GitHub Pages without any backend setup.

## What Works

- Landing page, about, services, and knowledge hub
- Frontend-only signup and login
- Assessment questionnaire and score generation
- Dashboard charts and recommendation engine
- Appointment booking history
- Profile page and assessment history
- Demo data seeded automatically into browser storage

## Important Note

This version is for demo, portfolio, and project submission use.

- Data is stored in the browser with `localStorage`
- Passwords are not securely hashed
- Data is browser-specific
- Clearing browser storage resets the app

## Prerequisites

1. `Node.js` version 18 or later
2. `npm`
3. Chrome or Edge
4. Optional: GitHub + Vercel or Netlify account for deployment

Check installation:

```bash
node -v
npm -v
```

## Run Locally

```bash
cd PranaLens-Wellness-Frontend-Only
npm install
npm run dev
```

Open the app at:

```text
http://localhost:5173
```

## Demo Login

- Email: `aarav@pranalens.com`
- Password: `Demo@123`

## Before Running

1. Install Node.js
2. Open terminal in the project folder
3. Run `npm install`
4. Run `npm run dev`
5. No backend setup is needed

## Reset Demo Data

Clear local storage for the site in browser dev tools, then refresh.

## Deploy on Vercel

Use:

- Framework: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

## Deploy on Netlify

Use:

- Build command: `npm run build`
- Publish directory: `dist`
