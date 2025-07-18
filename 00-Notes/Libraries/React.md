# ReactJS Beginner Notes

## What is React?
- A **JavaScript library for building user interfaces** (UIs).
- Created by **Facebook** in 2013.
- Helps in building **component-based, reusable UI** easily.
- Allows **declarative programming**: you describe what the UI should look like, React updates it efficiently.

---

## What is JSX?
- **JSX (JavaScript XML)** allows writing **HTML-like syntax inside JavaScript**.
- It makes UI code easier to read and write.
- Browsers **do not understand JSX**; it is **transpiled by Babel into `React.createElement()`**.

---

### Example:
```jsx
const element = <h1>Hello, Frazix!</h1>;
// Transpiled to:
const element = React.createElement('h1', null, 'Hello, Frazix!');
```

---

## Key Points about JSX:
- Must return a **single parent element** (use fragments if needed).  
- Use **camelCase** for attributes (`className`, `htmlFor`).  
- **JS expressions inside `{ }`**:
```jsx
const name = "Frazix";
const element = <h1>Hello, {name}!</h1>;
```
- Supports **conditional rendering**:
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

## How React Renders
- React uses **virtual DOM** to track changes.
- On state or props change:
  - React updates the virtual DOM.
  - Compares with the previous version.
  - Updates **only the changed parts** in the real DOM for performance.

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
