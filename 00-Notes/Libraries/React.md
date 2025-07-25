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


## What is State?

- **State** is a **built-in React object** used to store **dynamic, changeable data within a component**.
- When state changes, the component **re-renders automatically** to reflect the new data.
- Used for data that **changes over time** (like form inputs, counters, toggles, API data).

### Key Points:
- **Mutable** within the component.
- Local to the component unless passed via props.
- Managed using the **`useState` hook** in functional components.

### Example:
```jsx
import React, { useState } from "react";
```
