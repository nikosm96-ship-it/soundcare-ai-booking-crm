# React Pivot Design

## Context
SoundCare AI Booking CRM started as a WordPress plugin MVP, but the project has pivoted to React. The previous PHP plugin skeleton is now obsolete.

## Recommended Approach
Use a React + Vite app with JavaScript and CSS. Keep the first implementation phase to project setup only. Use browser localStorage later for the first data persistence layer, then optionally add a backend after the React MVP works.

## Tradeoffs

### React + Vite + localStorage
Pros:
- Fast to build.
- Beginner-friendly.
- Good for frontend portfolio skills.
- Avoids backend complexity at the start.

Cons:
- Not a true production data layer.
- Data stays in the user's browser.

### React + Node/Express immediately
Pros:
- More full-stack.
- Can demonstrate API work.

Cons:
- Too much scope for the next step.
- More setup and debugging before Nikos learns the core React workflow.

### Next.js
Pros:
- Modern and powerful.
- Can support frontend and backend routes.

Cons:
- More framework complexity than needed for this MVP.
- Less beginner-friendly for the first React project.

## Decision
Start with React + Vite + JavaScript. Add localStorage in Phase 2. Add backend only as an optional later phase.

## Initial Structure
The next Coding Agent prompt should create:

- `package.json`
- `index.html`
- `vite.config.js`
- `src/main.jsx`
- `src/App.jsx`
- `src/styles/global.css`
- `src/components/AppShell.jsx`
- `src/components/Header.jsx`
- `src/components/PlaceholderPanel.jsx`

It should remove obsolete WordPress files:

- `soundcare-ai-booking-crm.php`
- `includes/`
- `admin/`
- `public/`
- `uninstall.php`

It should preserve:

- `README.md`
- `docs/`

## First Screen
The first screen should be a simple working app shell with:

- Product name: SoundCare AI Booking CRM
- Current phase: React skeleton
- Short safety note that this is demo software, not medical advice
- A small placeholder area for future booking form, dashboard, analytics, and AI assistant

## Validation
The next phase is accepted when:

- `npm install` works.
- `npm run dev` starts a Vite dev server.
- The app loads in the browser.
- The old WordPress plugin files are gone.
- No booking form, localStorage persistence, backend, analytics, or AI logic has been added yet.
