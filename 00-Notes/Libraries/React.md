# ReactJS Notes

## Introduction to React

### Why Do We Need React?
- **Before React**: Web pages were mostly static, and updating UI dynamically required manually manipulating the DOM using JavaScript or libraries like jQuery.
- **Problems Without React**:
  - Complex code when UI updates frequently.
  - Hard to manage changes in large applications.
  - DOM manipulation is slow and error-prone.
- **React’s Solution**:
  - Creates **fast, interactive, and reusable UI components**.
  - Uses **Virtual DOM** to efficiently update only the necessary parts of the UI.

### Library vs Framework
- Library is to give a particular feature to the website like animation (GSAP), UI elements (React), smooth scrolling (Lenis).
- Framework is to give everything together like nexjs gives bundling, routing, SEO etc.

### Import and Export
[JavaScript Modules](../JavaScript/06-JS_Advance.md#javascript-modules)

### What is React?
- **React** is an **open-source JavaScript library** developed by **Facebook** for building **user interfaces (UI)**.
- It is **component-based**: UI is divided into small, reusable building blocks.
- React is **declarative**: You describe what the UI should look like, and React takes care of updating it when data changes.
- React is not a framework — it focuses only on the **view layer** in the MVC pattern.

### Why Do We Use React?
- **Performance**:
  - Uses **Virtual DOM** for faster UI rendering.
- **Reusability**:
  - Components can be reused across the app.
- **Simplicity**:
  - Easy to read, debug, and maintain.
- **Strong Community & Ecosystem**:
  - Huge library of tools and support.
- **Cross-Platform**:
  - Can be used for web (React) and mobile (React Native) apps.

---

## React Virtual DOM & Rendering
### What is Virtual DOM?
- A **Lightweight JS object** representing the real DOM
- React keeps this Virtual DOM in memory for faster updates
- Updates are first applied to the **Virtal DOM**, then synchronized with the real DOM

### How Virtual DOM works?
- First, React creates a copy of the Real dom
- then, whenever there are changes in the copy dom, it compares it with real dom
- after comparing, it changes/updates only the changed part not full dom

### Why Virtal DOM?
- Direct manipulation of **real DOM is slow**
- Virtal DOM maked updates **fast and efficient** by:
  - Minimizing direct DOM operations
  - Batching and applying only **necessary changes**
>**Note:** <br>
>**Batching** means grouping multiple UI updates together and applying them in a single render cycle instead of one at a time**

## Reconciliation
- It is the **process** React used to **sync** the Virtual DOM with the **real DOM**
- Steps:
  - React builds a new Virtual DOM tree after state/props change
  - It compares (diffs) with the previous Virtual DOM
  - Updates **only the changed nodes** in the real DOM
---

## What is JSX?
- - **JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write **HTML-like code inside JavaScript**.
- It makes UI code easier to read, write, and maintain.
- Browsers **cannot understand JSX directly**. It must be **transpiled by Babel** into standard JavaScript using `React.createElement()`.

> **Note: Syntax extension -** <br>
> Adding new rules or new ways of writing code to a language’s existing syntax, without changing the language itself.

### Key Points about JSX:
1. **Single Parent Element**
  - JSX must return one root element
  - Use `<></>` (React Fragments) if you don't want an extra HTML wrapper.

---

## React Fragments

### What are Fragments?
- Fragments **allow grouping multiple elements without adding extra nodes to the DOM**.
- Useful when a component needs to return **multiple sibling elements**.
- **Syntax:**
```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

---

## Props in React
### What are Props?
- Props (short for **properties**) are used to **pass data** from only **parent component** to a **child component**
- Props are **read-only** -> child components **can't modify** them
- The prop is in the form of object not a string or number form.
```jsx
//Parent component
<>
   <Greeting name="vimal" age={20} /> //name is a prop
</>

//Child component
function Greeting({ name, age }) {
  return <h1>Hello, {name}!</h1>;
}
```
---

## Object Destructuring
- It is highly used to simplfy the objects in react

[Click here to read](../JavaScript/06-JS_Advance.md#object-destructuring)

---

## React Hooks
- **Functional components** were originally just for showing UI (they couldn't store data or run lifecycle code)
- Hooks were introduced (React 16.8) to give **functional components more power**
- Hooks are special **functions** that let **functional components remember** things and **react** to changes

### Example without hooks (old way)
```jsx
class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```
### Example with hooks (modern way)
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <h1>{count}</h1>;
}
```

### Common React Hooks
1. `useState` -> state management
2. `useRef` -> refs & mutable values
3. `useEffect` -> side effects (API calls, timers)
4. `useReducer` -> complex state logic
5. `useContext` -> global state via Context API
6. `useMemo` -> memoize expensive calculations
7. `useCallback` -> memoize functions

---

## React `useState()`
### What is `useState()`
- `useState` is a **React Hook** used to add **state** to functional components
- **State** lets components **store values** and **re-render** when updated

### Basic Syntax
```jsx
const [stateVariable, setStateFunction] = useState(initialValue); // Destructuring useState array values
```

### Example
```jsx
import { useState } from "react"; 

export default function Counter() {
    const [count, setCount] = useState(0); // Destructuring array elements

    return (
        <> // Fragments
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button> // Functional updater
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
}
```

## Updating `Objects` and `Arrays` in `useState`
### Why cant we update objects/arrays directly?
- Objects and arrays are **reference types** in JavaScript
- If we **mutate them directly**, React may **not detect the change** and **skip re-rendering**
- React re-renders only when the **reference changes**

### Use `Spread` Operator for Safe Updates
```jsx
const [user, setUser] = useState({ name: "Alex", age: 20 });

const increaseAge = () => {
  setUser(prev => ({ // setUser takes aa arrow function which returns an **Object**
    ...prev, // Copies all previous key-value pairs
    age: prev.age + 1 // overwritten with updated value
  }));
};
```

---

## Conditional Rendering in React
### What is Conditional Rendering?
- It means **show** or **hide** something based on a **condition**

## Method 1: Using Logical AND (`&&`)
```jsx
import { useState } from "react";

export default function ToggleVisibility() {
    const [show, setShow] = useState(false);

    return (
        <>
            {show && <h1>Hello, I am visible!</h1>}

            <button onClick={() => setShow(prev => !prev)}>
                Toggle
            </button>
        </>
    );
}
```
- The `<h1>` shows only if `show` is `true`
- Clicking `Toggle` changes `show`, toggling visibility
- Useful if rendering something when `show` is `true` and dont need `false`

## Method 2: Using Ternary Operator
```jsx
import { useState } from "react";

export default function TernaryToggle() {
    const [show, setShow] = useState(false);

    return (
        <>
            {show ? (
                <h1>👋 I am visible now!</h1>
            ) : (
                null
            )}

            <button onClick={() => setShow(prev => !prev)}>
                Toggle
            </button>
        </>
    );
}
```
- Usefull if rendering something when `show` is `true`
---

## React `useRef()`
### What is `useRef()`
- `useRef` is a **React Hook** that lets you create a **mutable reference** (an object with a `.current` property)
- Unlike `useState`, **changing `.current` does not cause re-render**
- Commonly used to:
  - Access and manipulate **DOM elements** directly
  - Store **mutable values** that you don’t want to trigger re-renders
  - Keep **values persistent** across renders (like a variable that survives re-renders)

### Basic Syntax
```jsx
const refName = useRef(initialValue); // refName.current = initialValue

---

## React Routing (React Router DOM)
- React uses **React Router DOM** to navigate between pages without regreshing the browser. This is called **client-side routing**.
### Installation
- React Routing is an external pack, which we need to install using:
```bash
npm install react-router-dom
```

## Basic Setup
- Wrap the `App` with `BroswerRouter` in `main.jsx`
```jsx
import { BrowserRouter } from 'react-router-dom';

<StrictMode>
  <BrowserRouter>
     <App />
  </BrowserRouter>
</StrictMode>,
```

## Define Routes
- Use `Routes` and `Route` to map paths to **components**:
```jsx
import { Routes, Route } from 'react-router-dom';

<Routes> // Structure for  paths
  <Route path="/" element={<Home />} /> // Path value and element on which we want to redirect
  <Route path="/about" element={<About />} />
</Routes>
```

## Navigation
- Use `<Link>` instead of `<a>` to navigate without reloading:
```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

---
## AJAX, Fetch, Axios & API

## What is AJAX?
- **AJAX (Asynchronous JavaScript and XML)** allows communication between **frontend** and **backend** without reloading the page.
- It helps update parts of a web page dynamically with data from the server.

## Fetch & Axios
- `fetch()` and **Axios** are tools used to make **AJAX requests**
- **`fetch()`**
   - Built-in JavaScript function
   - Returns a **Promise**
- **Axios**
   - External library (needs to be installed**
   - Easier syntax, supports older browsers, and handles JSON automatically

## What is an API?
- **API** (Application Programming Interface)** = A set of backend **rules/endpoints** that define how frontend and backend communicate.
- An **endpoint** (like `https://api.example.com/users`) is an **URL** where the frontend sends requests.
- The **backend** process the request (often interacts with database) and returns a response.

---

# 📘 React Router Notes (Vite + React)

Short and clear notes covering React Router basics, common mistakes, and correct usage.  
Designed for quick revision and GitHub README.

---

## 1️⃣ What is React Router?

- React Router is used to change UI based on the URL without reloading the page  
- Provides a multi-page feel in React apps
- Works on the client side (Single Page Application – SPA)

---

## 2️⃣ Correct package to install (Very Important)

### ✅ For Vite / browser React apps
```bash
npm install react-router-dom
```

### ❌ Do NOT use directly

react-router

### Why?

- react-router → core routing logic (low-level)
- react-router-dom → browser support (BrowserRouter, Link, etc.)
- react-router-dom already includes react-router

---

## 3️⃣ If installed both by mistake (common issue)

### Problem

- Editor auto-imports from react-router ❌

### Solution
```bash
npm uninstall react-router  
npm install react-router-dom  
```
---

## 4️⃣ BrowserRouter – what & why
### main.jsx
```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

- Required for browser/web apps
- Uses browser URL (window.history)
- Must be imported from react-router-dom

---

## 5️⃣ `<Routes />` vs `<Route />`

### `<Routes />`

- Decides which route matches the URL
- Renders only one route at a time
- Like a container for the `<Route />`

### `<Route />`

- Defines path → component
- Does nothing alone
- Must be inside `<Routes />`

### Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```
### Meaning

- / → Home  
- /about → About  
- Anything else → NotFound (404)

---

## 6️⃣ path="*" (Catch-all route)

- Matches any unmatched URL
- Used for 404 / Not Found pages

```jsx
<Route path="*" element={<NotFound />} />
```
---

## 7️⃣ Navigation types (Very important distinction)

### Routing (page change)

Used when:
- Different pages
- Different layouts
- Different data
  
---

### Navigation on a single long page

If **all content** is on **ONE** page:
- Do **NOT** use React Router
- Use section (`<a/>`) scrolling

---

## 8️⃣ Single-page section navigation

### Step 1: Add section IDs

```jsx
<section id="home">Home</section>
<section id="about">About</section>
```

### Step 2: Navbar links

```jsx
<a href="#home">Home</a>
<a href="#about">About</a>
```

### Step 3: Smooth scrolling

```css
html {
  scroll-behavior: smooth;
}
```
---

## 9️⃣ Navigation ≠ Routing

- Navigation → scroll inside the same page
- Routing → change page via URL

---

## 1️⃣0️⃣ React Router docs confusion (Important clarity)

You may see:
- @react-router/dev/routes
- routes.ts
- loaders, actions

### This is:

React Router Framework Mode (Advanced)

- No BrowserRouter
- File/config-based routing
- Similar to Next.js / Remix

### For learning & normal frontend apps:

- Ignore framework mode
- Use react-router-dom + BrowserRouter

---

## Folder Structure

```bash
src/
│
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   └── Loader.jsx
│
├── layouts/             # Page layouts (structure)
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
│
├── pages/               # Page-level components (routes)
│   ├── Home/
│   │   ├── HomePage.jsx
│   │   ├── Hero.jsx
│   │   └── FAQ.jsx
│   │
│   ├── About/About.jsx
│   ├── Contact/Contact.jsx
│   └── NotFound.jsx
│
├── routes/              # Routing logic
│   └── AppRoutes.jsx
│
├── hooks/               # Custom hooks
│   └── useScrollToTop.js
│
├── App.jsx
├── main.jsx
└── index.css
```
