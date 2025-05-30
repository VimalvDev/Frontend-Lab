# JavaScript Functions

## What is a Function?

- A **function** is a block of **reusable code** that performs a specific task.
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
  - **ES5 Version (Older JavaScript)**
  - **ES6 Version (Modern JavaScript)**

---

## ES5 Version

- **ES5 (ECMAScript 5)** is the **older version of JavaScript**.
- Still widely supported and commonly used.
- Functions are defined using the traditional `function` keyword.

![](IMGs/js_es5_functions.png)

### 1. Function Statement

- Also known as **Function Declaration**
- A normal function with a name

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
greet("Vimal"); // Output: Hello, Vimal
```

### 2. Function Expression

- A function stored **inside a variable**

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
greet("Vimal"); // Output: Hello, Vimal
```

### 3. Anonymous Function

- A function without a name, often used in callbacks
- Cannot be called directly unless assigned or used inside another function

```javascript
setTimeout(function() {
  console.log("Hello after 2 seconds!");
}, 2000);
```

> **Note:**
>  A **callback** is a function passed as an argument to another function.  
> It is commonly used in asynchronous operations like `setTimeout`, `setInterval`, event listeners, or array methods (`map`, `forEach`, etc.).  
> In the example, the anonymous function is used as a callback that executes after 2 seconds.
