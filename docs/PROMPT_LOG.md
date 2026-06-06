# Prompt Log

## Prompt 001: Initial WordPress Plugin Skeleton
Date: 2026-06-06

Purpose: Ask the Coding Agent to create the safe starter WordPress plugin structure only.

Status: Superseded by the React pivot on 2026-06-06.

## Prompt 002: Add WordPress Bookings Database Table
Date: 2026-06-06

Purpose: Ask the Coding Agent to add only the custom bookings table during plugin activation.

Status: Not used. Superseded by the React pivot on 2026-06-06.

## Prompt 003: Restart as React + Vite Skeleton
Date: 2026-06-06

Purpose: Ask the Coding Agent to remove the obsolete WordPress skeleton and create the first React + Vite app skeleton only.

```text
You are working on the portfolio MVP "SoundCare AI Booking CRM".

Important project pivot:
This project is no longer a WordPress plugin. It is now a React app.

First inspect the existing files and explain what is currently present. You should find existing documentation plus obsolete WordPress plugin skeleton files. Then make the smallest safe Phase 1 Restart change only.

Goal:
Replace the obsolete WordPress plugin skeleton with a clean React + Vite app skeleton.

Strict scope:
- Set up the React + Vite app skeleton only.
- Remove obsolete WordPress plugin files and folders.
- Preserve and update the existing documentation.
- Do not add the booking form yet.
- Do not add localStorage persistence yet.
- Do not add an admin booking dashboard yet.
- Do not add analytics yet.
- Do not add AI logic yet.
- Do not add a backend API yet.
- Do not add authentication, payments, Docker, Next.js, TypeScript, or external UI libraries.

Remove these obsolete WordPress files/folders if they exist:
- soundcare-ai-booking-crm.php
- uninstall.php
- includes/
- admin/
- public/

Create this React/Vite structure:
- package.json
- index.html
- vite.config.js
- src/main.jsx
- src/App.jsx
- src/styles/global.css
- src/components/AppShell.jsx
- src/components/Header.jsx
- src/components/PlaceholderPanel.jsx

Implementation requirements:
- Use React with Vite.
- Use JavaScript, not TypeScript.
- Use plain CSS, not Tailwind or a UI framework.
- Keep the app beginner-friendly and readable.
- The first screen should show:
  - "SoundCare AI Booking CRM"
  - Current phase: "React Skeleton"
  - A short note that this is a portfolio demo and not medical advice.
  - Placeholder panels for future Booking Form, CRM Dashboard, Analytics, and Mock AI Assistant.
- Use accessible semantic HTML where reasonable.
- Keep components small and clearly named.
- Do not create fake bookings yet.
- Do not use localStorage yet.

Documentation requirements:
- Keep docs/ intact.
- Update README.md only if needed to explain how to run the React app.
- Update docs/CHANGELOG.md after the change.
- Do not bring back WordPress-specific instructions.

Acceptance criteria:
- The old WordPress plugin files/folders are removed.
- React + Vite app files exist.
- `npm install` works if Node/npm are available.
- `npm run dev` starts the dev server if Node/npm are available.
- The app loads a simple SoundCare AI Booking CRM skeleton screen.
- No booking form, dashboard data, localStorage, backend, analytics, or AI behavior is implemented yet.

Validation steps:
1. List the final file tree.
2. Run `npm install` if npm is available.
3. Run `npm run dev` if npm is available and report the local URL.
4. Open the app in a browser if possible and confirm the skeleton screen appears.
5. Scan the code and confirm there is no WordPress PHP, no localStorage usage, no backend API, and no AI logic.
6. Report changed files, assumptions, blockers, and any errors.

After finishing, explain:
- What files were removed.
- What files were created.
- How Nikos can run the app locally.
- What the next phase should be.
```
