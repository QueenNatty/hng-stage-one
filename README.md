# HNG Stage One —

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

Accessibility & validation notes

- Form fields on `contact.html` include labels and `aria-describedby` attributes for errors.
- The contact form uses client-side validation (required fields, email format, message length) with accessible status messages (`role="status"` and `aria-live`).
- Buttons and interactive elements use focus-visible and hover states; `prefers-reduced-motion` is respected where applicable.

Development notes

- No build or package manager is required — this is a static site.
- Files edited while working on the project include `about.html`, `contact.html`, `src/about.css`, `src/contact.css`, `src/style.css`, and `src/main.js`.

---

Semantic HTML & ARIA

- Semantic elements used across the pages:

  - `<!DOCTYPE html>`, `<html>`, `<head>`, `<meta>`, `<title>` — document structure
  - `<main>` — primary page container (`contact.html`, `about.html`)
  - `<article>` — profile card wrapper (`index.html`)
  - `<header>` — page header containing title and navigation (`about.html`)
  - `<section>` — grouped page sections (about intro, cards, interests, image area)
  - `<nav>` — navigation for social links and page-level buttons
  - `<figure>` / `<img>` — avatar images with `alt` text
  - `<h1>`, `<h2>`, `<h3>` — headings for pages and sections
  - `<p>`, `<ul>`, `<li>` — paragraphs and lists for content
  - `<form>`, `<label>`, `<input>`, `<textarea>`, `<button>` — contact form and controls
  - `<footer>` — (not used currently but appropriate for extension)

- ARIA and accessibility usage:
  - `aria-describedby` on form inputs pointing at inline error elements
  - `role="status"` and `aria-live="polite"` for form success/error messages
  - `aria-label` on some elements (time display, social links) to express purpose
  - `data-testid` attributes used to aid testing (non-semantic, safe to keep)
