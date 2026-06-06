# React Restart Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the obsolete WordPress plugin skeleton with a clean React + Vite starter app.

**Architecture:** The project becomes a frontend-first React app. Documentation remains in `docs/`; app source lives in `src/`; Vite provides the local dev server. Data persistence, booking forms, dashboard logic, analytics, and AI behavior are intentionally deferred.

**Tech Stack:** React, Vite, JavaScript, CSS.

---

## File Structure

- Remove: `soundcare-ai-booking-crm.php`
- Remove: `uninstall.php`
- Remove: `includes/`
- Remove: `admin/`
- Remove: `public/`
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles/global.css`
- Create: `src/components/AppShell.jsx`
- Create: `src/components/Header.jsx`
- Create: `src/components/PlaceholderPanel.jsx`
- Keep: `README.md`
- Keep: `docs/`

### Task 1: Inspect Existing Files

- [ ] **Step 1: List files**

Run:

```bash
rg --files
```

Expected: Documentation files plus obsolete WordPress skeleton files.

- [ ] **Step 2: Identify obsolete WordPress files**

Expected obsolete files/folders:

```text
soundcare-ai-booking-crm.php
uninstall.php
includes/
admin/
public/
```

### Task 2: Remove WordPress Skeleton

- [ ] **Step 1: Remove obsolete files and folders**

Remove only the WordPress plugin skeleton. Preserve `README.md` and `docs/`.

- [ ] **Step 2: Verify removal**

Run:

```bash
rg -n "WordPress|ABSPATH|wp_enqueue|add_menu_page|register_activation_hook|dbDelta|shortcode|\\$wpdb" .
```

Expected: Matches may exist only in docs as historical/superseded notes, not in app source files.

### Task 3: Create React + Vite Skeleton

- [ ] **Step 1: Create package metadata**

Create `package.json` with scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {}
}
```

- [ ] **Step 2: Create Vite entry files**

Create `index.html`, `vite.config.js`, `src/main.jsx`, and `src/App.jsx`.

- [ ] **Step 3: Create starter components**

Create:

```text
src/components/AppShell.jsx
src/components/Header.jsx
src/components/PlaceholderPanel.jsx
src/styles/global.css
```

The screen should show the product name, current phase, safety note, and placeholder panels for future modules.

### Task 4: Validate React Skeleton

- [ ] **Step 1: Install dependencies**

Run:

```bash
npm install
```

Expected: Dependencies install without errors.

- [ ] **Step 2: Start dev server**

Run:

```bash
npm run dev
```

Expected: Vite prints a local dev server URL.

- [ ] **Step 3: Browser check**

Open the local URL and confirm the skeleton screen appears.

### Task 5: Update Docs

- [ ] **Step 1: Update changelog**

Add a changelog entry for the React restart.

- [ ] **Step 2: Report results**

Report removed files, created files, validation output, local URL, and blockers.
