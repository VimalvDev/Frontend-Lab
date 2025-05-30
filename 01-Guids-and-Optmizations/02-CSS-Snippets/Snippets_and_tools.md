# 🎨 CSS Structure & Best Practices

This stylesheet is optimized for maintainability, performance, and responsiveness. It uses CSS custom properties (variables), a global reset, and well-defined media queries to ensure a clean, responsive design across all devices.

---

## 1. CSS Variables (Custom Properties)

Defined at the `:root` level to ensure consistency across the entire project:

```css
:root {
  --primary-color: #000;
  --secondary-color: #fff;
}
```

---

## 2. Global Reset & Base Styling

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
```

---

## 2. Responsive Media Qeuries
- visit style.css

---

## Tools

- W3C CSS Validator: https://jigsaw.w3.org/css-validator
- Add Prefixes: https://autoprefixer.github.io
- Testing Responsiveness: https://responsively.app
- Minify CSS: https://www.minifier.org or minify vs code extention (press f1)
