# HNG Stage One — Personal Profile Site

A small static site (HTML/CSS/JS) built for the HNG internship stage one assignment.

This repository contains a simple personal profile site with three pages:
- `index.html` — profile card (avatar, name, title, social links)
- `about.html` — longer about page with avatar, bio, and four content cards
- `contact.html` — contact form with client-side validation

Assets and code
- `images/` — avatar image used across the site
- `src/style.css` — global styling for the profile card
- `src/about.css` — styles for the About page
- `src/contact.css` — styles for the Contact page
- `src/main.js` — small JS used for the clock and contact form validation

Quick preview
1. Open `index.html`, `about.html` or `contact.html` directly in your browser (double-click the file).
2. Or serve the folder with a simple static server, for example with Python 3:

```powershell
# from the project root (Windows PowerShell)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Accessibility & validation notes
- Form fields on `contact.html` include labels and `aria-describedby` attributes for errors.
- The contact form uses client-side validation (required fields, email format, message length) with accessible status messages (`role="status"` and `aria-live`).
- Buttons and interactive elements use focus-visible and hover states; `prefers-reduced-motion` is respected where applicable.

Development notes
- No build or package manager is required — this is a static site.
- Files edited while working on the project include `about.html`, `contact.html`, `src/about.css`, `src/contact.css`, `src/style.css`, and `src/main.js`.

If you want, I can:
- Move inline styles into CSS files for a cleaner codebase.
- Add a small npm dev script to run a local server.
- Add unit tests for the form validation logic.

---
Updated: Oct 22, 2025