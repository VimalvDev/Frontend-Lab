# ✅ HTML Optimization Guide

This guide lists all best practices and steps to optimize HTML for performance, SEO, accessibility, and clean code architecture.

---

### 1. Essential Meta Tags
## ✅ Step-by-Step Optimization

#### a. SEO-Based Meta Tags
- `<meta charset="UTF-8"/>`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<meta name="description" content=""/>`
- `<meta name="robots" content="index, follow">`
- `<meta name="author" content="Your Name">`

#### b. Social media sharing tags

- `<meta property="og:title" content="Your Page Title">`
- `<meta property="og:description" <content="Description for social sharing">`
- `<meta property="og:image" content="https://example.com/image.jpg">`
- `<meta property="og:url" content="https://example.com">`

---

### 2. Use Semantic HTML Tags

`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<header>`

---

### 3. Descriptive Class & ID Names

`<section class="hero-banner">` instead of `<div class="box1">`

--

### 4. Lazy Load Images

`<img src="image.png" loading="lazy" alt="Example image" />`

---

### 5. Defer Scripts for Performance

- To improve page load speed
- To avoid blocking the browser from rendering your HTML
- To make scripts run after the HTML is ready
  
`<script src="main.js" defer></script>`

---

### 6. Use Accessibility Attributes

#### When should we use aria-label?
- Icon-only buttons	`<button aria-label="Close menu">X</button>`
- SVG-based icons	`<svg ... aria-label="Search" role="img"></svg>`
  
---

### 7. Use HTML Validators

Check with W3C HTML Validator before deployment.
- https://validator.w3.org/#validate_by_input

---

### 8. Favicon and Manifest

- `<link rel="icon" href="favicon.ico" />`
- `<link rel="manifest" href="site.webmanifest">`

---

### 📘 Tools

- HTML Validator: https://validator.w3.org/
- Minify HTML: https://kangax.github.io/html-minifier/
- SEO Test: https://www.seoptimer.com/
