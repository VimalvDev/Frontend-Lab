# 🌐 Window, BOM, and DOM in JavaScript

## 🪟 Window Object

- The `window` object represents the **browser window or tab**.
- It is the **global object** in the browser — all global variables and functions are part of it.
- It holds **everything** — BOM, DOM, and JavaScript core functions.

---

## 🌍 BOM - Browser Object Model

BOM allows JavaScript to **interact with the browser**.

### 🔳 Window Object (Global Browser Object)
- `innerWidth` / `innerHeight` → Get viewport size (excluding toolbars)
- `outerWidth` / `outerHeight` → Get full browser window size
- `scrollX` / `scrollY` → Get scroll position
- `window.open("URL")` → Open a new tab/window
- `window.close()` → Close current window (only if opened via JS)

### 📍 Location Object (URL & Navigation)
- `location.href` → Get or set page URL
- `location.reload()` → Reload current page
- `location.hostname` → Get domain name
- `location.pathname` → Get path (`/about.html`)
- `location.port` → Get port number

### ⏱️ Timing Functions
- `setTimeout(fn, ms)` → Run once after delay
- `setInterval(fn, ms)` → Run repeatedly
- `clearTimeout(id)` → Stop `setTimeout`
- `clearInterval(id)` → Stop `setInterval`

### 📚 History Object (Browser Navigation)
- `history.back()` → Go back a page
- `history.forward()` → Go forward a page
- `history.length` → Get number of pages in session history

### ⚠️ Dialog Boxes
- `alert("message")` → Show alert popup
- `confirm("message")` → Confirm dialog (OK/Cancel)
- `prompt("message")` → Prompt input from user

### 🌐 Navigator Object
- `navigator.userAgent` → Get browser info
- `navigator.language` → Get user language
- `navigator.platform` → Get OS info
- `navigator.onLine` → Check if user is online

### 🖥️ Screen Object
- `screen.width` / `screen.height` → Get screen dimensions
- `screen.availWidth` / `availHeight` → Get available screen space (excluding taskbars)

---

## 📄 DOM - Document Object Model

- DOM is the **interface** between JavaScript, HTML, and CSS.
- It allows dynamic manipulation of the **webpage content and structure**.

### 🧠 Why Use the DOM?
- HTML alone can’t handle user interactions.
- DOM enables JavaScript to add **events**, **animations**, and **dynamic content**.

---

## 🧩 DOM Manipulation Steps

### 1. 🕵️‍♂️ Accessing Elements
```js
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("tag")
document.querySelector(".class or #id or tag")
document.querySelectorAll("selector")
document.body
document.documentElement
parent.firstElementChild
parent.lastElementChild
document.querySelector('element[attribute="value"]')
