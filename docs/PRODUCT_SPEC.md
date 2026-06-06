# Product Spec

## Product Name
SoundCare AI Booking CRM

## One-Sentence Summary
A React demo app that lets a hearing-care clinic collect booking requests, manage them in a CRM-style dashboard, and generate safe mock AI-assisted follow-up suggestions.

## Problem
Small clinics often need a simple way to collect appointment requests and follow up with potential customers. This MVP demonstrates that workflow in a React app without requiring WordPress or a complex backend.

## Primary Users
- Website visitor: submits a booking request.
- Clinic admin: reviews bookings, updates status, checks basic analytics, and uses AI-assisted summaries.
- Nikos: learns and demonstrates React application development.

## MVP Scope
The MVP includes:

- Public booking form inside the React app
- Local booking data model
- Browser localStorage persistence for the first version
- Admin dashboard-style bookings page
- Booking status workflow
- Mock AI assistant for summaries, next actions, and follow-up messages
- Basic analytics page/section
- README and learning documentation

## Booking Statuses
- New
- Contacted
- Scheduled
- Completed
- Follow-up
- Cancelled

## User Stories
- As a visitor, I want to submit my name, contact details, preferred service, notes, and appointment preference so the clinic can contact me.
- As an admin, I want to see all booking requests in one dashboard so I can manage follow-up work.
- As an admin, I want to change booking status so I can track progress.
- As an admin, I want a safe AI summary so I can quickly understand a request.
- As an admin, I want basic analytics so I can understand demand by status and service.
- As Nikos, I want clean documentation so I can explain the project in a job interview.

## Non-Goals
- No real medical diagnosis.
- No real patient data.
- No payments.
- No authentication system in the first MVP.
- No backend API in the first MVP.
- No WordPress, PHP plugin architecture, MySQL table, or WordPress REST API.
- No Next.js, Laravel, Docker, or mobile app.
- No production-grade CRM complexity.

## Safety Requirements
- The AI assistant must not diagnose medical conditions.
- The README must clearly state this is a portfolio demo and not a medical advice system.
- Demo/fake data only.
- No hardcoded API keys or secrets.

## Technical Requirements
- React
- Vite
- JavaScript
- CSS
- Component-based structure
- Form validation
- Safe rendering of user-entered text
- localStorage persistence for bookings
- Mock AI service with deterministic safe output

## Success Criteria
- The app runs locally with Vite.
- Each phase can be manually tested.
- Code is beginner-friendly but professional.
- Documentation tells the project story clearly.
