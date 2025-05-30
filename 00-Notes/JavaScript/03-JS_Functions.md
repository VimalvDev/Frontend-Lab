# JavaScript Functions

## What is a Function?

- A **function** is a block of reusable code that performs a specific task.
- Functions **run only when called**, they are not executed automatically.
- Can be executed **at specific times**, like after a delay or on a particular event.
- In JavaScript:
  - No need to specify a **return type** (like `int`, `string`, etc.) as in other languages.
  - Functions are defined using the `function` keyword.

## First-Class Functions in JavaScript

- JavaScript treats functions as **first-class citizens**, which means:
  - Functions can be **assigned to variables**.
  - Functions can be **passed as arguments** to other functions.
  - Functions can be **returned from another function**.

## Types of Functions in JavaScript

### 1. User-Defined Functions (Custom Functions)

- These are functions that we **create ourselves** to perform specific tasks.
- They are primarily categorized based on JavaScript versions:
  - **ES5 Version**
  - **ES6 Version**

### ES5 Version

- **ES5 (ECMAScript 5)** is the **older version of JavaScript**.
- Still widely supported and commonly used.
- Functions are defined using the traditional `function` keyword.

```javascript
// Example of an ES5 function
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
```
