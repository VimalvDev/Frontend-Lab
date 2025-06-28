# JavaScript Code Optimization
> Goal: Make JS code faster, memory-efficient, clean, and scalable for modern web development.

---

## 1. Use `defer` / `type="module"`

- Avoid blocking HTML parsing.
- Scripts execute after DOM is ready.
- Improves load speed.
- Learn more about [`defer` and `async` in JavaScript](/00-Notes/JavaScript/01-JS_Introduction.md#defer-and-async-in-javascript).

## 2. Use Efficient DOM Selection

- Use `document.getElementById()` when selecting elements **by ID** for faster selection.
- Use `document.querySelector()` for flexible selection when IDs aren't available.

```js
// Fastest: Using getElementById
const btn = document.getElementById("submitBtn");

// Flexible: Using querySelector
const card = document.querySelector(".card");
```
