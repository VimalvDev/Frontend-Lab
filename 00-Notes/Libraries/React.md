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

### What is React?
- **React** is an **open-source JavaScript library** developed by **Facebook** for building **user interfaces**.
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

## React Virtual DOM & Rendering
### What is Virtual DOM?
- A **Lightweight JS object** representing the real DOM
- React keeps this Virtual DOM in memory for faster updates
- Updates are first applied to the **Virtal DOM**, then synchronized with the real DOM

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

## React `useState()`
### What is `useState()`
- `useState` is a **React Hook** used to add **state** to functional components
- It allows components to **store** and update data

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

## Conditonal Rendering in React
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
- The `<h1` shows only if `show` is `true`
- Clicking `Toggle` changes `show`, toggling visibility
- Usefull if rendering something when `show` is `true` and dont need `false`

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

## Updating `Objects` and `Arrays` in `useState`
### Why cant we update objects/arrays directly?
- Objects and arrays are **reference types** in JavaScript
- If we **mutate them directly**, React may **not detect the change** and **skip re-rendering**
- React re-renders only when the **reference changes**

## Use `Spread` Operator for Safe Updates
```jsx
const [user, setUser] = useState({ name: "Alex", age: 20 });

const increaseAge = () => {
  setUser(prev => ({ // setUser passes a arrow function which returns an **Object**
    ...prev, // Copies all previous key-value pairs
    age: prev.age + 1 // overwritten with updated value
  }));
};
```

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

