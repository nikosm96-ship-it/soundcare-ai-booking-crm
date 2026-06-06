# Decisions Log

## 2026-06-06: Initial WordPress Direction
Decision: The project originally started as a custom WordPress plugin.

Reason: WordPress matched Nikos's previous learning context and could demonstrate plugin development, PHP, and dashboard work.

Status: Superseded.

## 2026-06-06: Pivot to React
Decision: Rebuild SoundCare AI Booking CRM as a React app instead of a WordPress plugin.

Reason: Nikos decided the portfolio project should focus on React. This better supports frontend developer learning goals and avoids WordPress-specific complexity.

## 2026-06-06: Use Vite
Decision: Use Vite for the React starter app.

Reason: Vite is simple, fast, common in modern React projects, and beginner-friendly compared with heavier frameworks.

## 2026-06-06: Use JavaScript First
Decision: Use JavaScript instead of TypeScript for the first MVP.

Reason: Nikos is still learning React. JavaScript keeps the first version easier to understand. TypeScript can be added later if useful.

## 2026-06-06: Use localStorage First
Decision: Store bookings in browser localStorage for the first working MVP.

Reason: localStorage lets Nikos learn React state, forms, and persistence before adding backend complexity. A backend can be added later as an optional phase.

## 2026-06-06: Mock AI First
Decision: The AI assistant will start with mock output.

Reason: This keeps the MVP safe, avoids secrets, and lets Nikos finish the core product before adding optional external API configuration.

## 2026-06-06: Demo Data Only
Decision: The project must not use real patient data.

Reason: The project is a portfolio demo, not a medical system. Privacy and medical safety must stay clear from the beginning.
