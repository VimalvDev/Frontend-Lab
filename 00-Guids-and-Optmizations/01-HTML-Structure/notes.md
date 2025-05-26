# ✅ HTML Optimization Guide

This guide lists all best practices and steps to optimize HTML for performance, SEO, accessibility, and clean code architecture.

---

## ✅ Step-by-Step Optimization

### 1. Use Semantic HTML Tags
Use `<main>`, `<section>`, `<article>`, `<nav>`, etc., instead of too many `<div>`s.

---

### 2. Proper DOCTYPE & Language
```html
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Page description here" />.```


---


### 3. Essential Meta Tags

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Page description here" />


---


### 4. Clean Indentation & Nesting

Keep 2-space or 4-space indentation

Avoid deeply nested HTML


### 5. Lazy Load Images

<img src="image.png" loading="lazy" alt="Example image" />

### 6. Descriptive Class & ID Names

<section class="hero-banner"> instead of <div class="box1">

### 7. Avoid Inline Styles & JS

Keep all CSS and JS in external files.

### 8. Defer Scripts for Performance

<script src="main.js" defer></script>

### 9. Use Accessibility Attributes

<button aria-label="Close menu">X</button>

### 10. Use HTML Validators

Check with W3C HTML Validator before deployment.

### 11. Remove Unused Code

No extra <div>, no unused comments or test sections.

### 12. Favicon and Manifest

<link rel="icon" href="favicon.ico" />
<link rel="manifest" href="site.webmanifest">


---

### ✅ Final Checklist

[x] Semantic structure

[x] Mobile meta + responsive image loading

[x] SEO-friendly titles, meta, alt tags

[x] External CSS & JS

[x] Accessibility + clean code

[x] Script defer & lazy load

[x] W3C validation passed



---

### 📘 Tools

HTML Validator: https://validator.w3.org/

Minify HTML: https://kangax.github.io/html-minifier/

SEO Test: https://www.seoptimer.com/



---