# 🐛 Loader Scroll Issue — Bug Fix

## 🧩 Problem

While the loader was active and covering the screen, the main content underneath was still scrollable using mouse wheel or touchpad. On desktop devices, this caused the **actual website content to move behind the loader**, and parts of it became visible even before the loader ended.

## 💡 Root Cause

Even though the loader was using `position: fixed`, the `body` and `html` elements were **not locked from scrolling**. So the scroll events were affecting the underlying content.

## ✅ Solution

We used a combination of CSS and JavaScript to:

- Add a `.no-scroll` class to both `<body>` and `<html>`
- Apply `overflow: hidden`, `height: 100vh`, and `position: fixed` to prevent all scrolling
- Remove the scroll lock once the loader animation ends

## 🛠️ Fix Details

### ✅ CSS

```css
html.no-scroll,
body.no-scroll {
  overflow: hidden !important;
  height: 100vh;
  position: fixed;
  width: 100%;
}
```
### ✅ JS

- #### Add on loader start

```js
document.body.classList.add("no-scroll");
document.documentElement.classList.add("no-scroll");
window.scrollTo(0, 0);
```
- #### remove on loader end

```js
document.body.classList.remove("no-scroll");
document.documentElement.classList.remove("no-scroll");
```
### 📌 Notes

- Always call `window.scrollTo(0,0)` after adding .no-scroll to reset scroll position.
- This fix is necessary for both mobile and desktop devices.
- This bug typically occurs in animated loaders or splash screens that sit above the main site layout.
