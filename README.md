
# Transglobal Hiring LLC — Recruitment Reinvented

Welcome to the official codebase of **Transglobal Hiring LLC**, a modern, no-nonsense recruitment platform built with purpose, precision, and the kind of finesse that sets it apart.

This project started as an idea — to cut through the noise and build a hiring experience that’s as seamless as it is scalable. The result? A full-stack web app that delivers both for job seekers and internal teams, styled with intention and built for impact.

---

## ⚙️ Tech That Powers It

Here’s the stack — handpicked for flexibility, speed, and future-readiness:

- **Frontend:** React.js + Custom CSS + Tailwind (in some parts)
- **Routing:** React Router DOM v6
- **State:** useState, useEffect — no heavy frameworks needed
- **Auth:** AWS Cognito (via Amplify)
- **Storage:** S3 for resume uploads
- **Database:** DynamoDB for job posts & applications
- **API:** Lambda + API Gateway
- **File Uploads:** Pre-signed URLs to keep the bucket safe
- **Hosting:** AWS Amplify

---

## 🧠 Core Philosophy

> Design smart. Build lean. Keep it human.

From dynamic job views and resume uploads, to the admin panel that works like a charm on mobile — everything here is designed with real-world workflows in mind. No filler. Just what works.

---

## 💼 Key Features

### ✨ Public-Facing
- Clean, gradient-driven homepage
- ScrollSpy-enabled navbar with animated transitions
- Careers page with dynamic job routing (`/careers/:jobId`)
- Duplicate application protection by email & jobId
- Resume upload directly to S3 — secure, no bloat
- Responsive layout that adapts smoothly across breakpoints

### 🔐 Admin Side
- Secure Amplify login — welcome, Admin
- Dashboard-less structure (because I said no to bloat)
- Job management with expire/available/edit buttons
- Candidate pool with resume downloads
- Auto-scrolling cards for mobile with zero horizontal drag
- Solid navbar (not transparent — we keep it pro in admin)

---

## 🚀 Running Locally


AWS setup happens via Amplify CLI (`amplify init`)  
Resumes go to S3 with pre-signed security  
Applications write directly to DynamoDB  
And yes — all of that actually works.

---

## ✅ Progress Tracking (For Me & The Team)

- [x] ScrollSpy for top nav
- [x] Card-based layout for candidates (LinkedIn style)
- [x] Responsive table switch to stacked cards on mobile
- [x] One job per candidate (email + jobId logic)
- [x] No navbar transparency issues on pages without hero
- [x] No horizontal scroll. Period.
- [ ] Light/dark mode toggle (maybe)
- [ ] Future: employer login & resume search

---

## 🙌 Final Words

This app isn’t a clone, a tutorial, or a toy project.  
It’s a working system that’s gone through planning, iterations, setbacks, and polish. It’s built for real-world use, and it reflects the kind of detail and decision-making I care about.

If you want to build something like this — start with clarity, focus on flow, and don’t be afraid to rip things apart if they don’t feel right.

Peace.
