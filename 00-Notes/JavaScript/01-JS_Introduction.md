# Introduction

- JavaScript (JS) was created by Brendan Eich in 1995.  
- JS is a programming language used for both frontend (web browsers) and backend (Node.js).  
- Managed by **ECMAScript**: ECMAScript (ES) sets the standards for JavaScript, introducing new features, removing outdated ones, and improving the language over time.

- JS has two major versions:  
  - **ES5** – Older version, still widely used and supported.  
  - **ES6 (ECMAScript 2015)** and beyond – Introduced modern features like `let`, `const`, arrow functions, classes, and more.

---

## Built-In Browser Interfaces

- **DOM**, **BOM**, and **WINDOW** are built-in browser interfaces accessible via JavaScript.  
- Think of it like this:  
  - `WINDOW` is the big box (browser window).  
  - `BOM` (Browser Object Model) is a set of tools inside the box to control the browser.  
  - `DOM` (Document Object Model) is the webpage inside the box.

---

## JavaScript Code Execution Process

![JS Code Execution Process](IMGs/js_code_execution_process.png)

1. **Source code** – The JavaScript code you write, usually in a `.js` file.  
2. **Parsing** – The JS engine reads the code and converts it into an **Abstract Syntax Tree (AST)** representing the code’s structure.  
3. **Compilation** – The Just-In-Time (JIT) compiler translates the AST into machine code that the computer understands.  
4. **Execution** – The machine code runs in the **Call Stack**, where functions execute one by one.  
5. **Optimization** – The engine optimizes the code during execution using techniques like JIT compilation, inline caching, and hidden classes to improve performance.

### Key Optimization Techniques

- **JIT Compilation**  
  Instead of translating all code upfront, JIT compiles parts of the code during program execution to speed things up.

- **Inline Caching**  
  When a function accesses the same object property repeatedly, the engine caches the location to avoid repeated lookups.

- **Other Speed-Up Tricks**:  
  - Hidden Classes: Organizes objects internally to speed up property access.  
  - Dead Code Removal: Removes unused code for efficiency.  
  - Loop Unrolling: Rewrites loops to run faster.

---

## JIT Compiler in JavaScript

- Originally, JS used an interpreter, but modern engines like **V8 (Chrome)** use a JIT compiler combining compilation and interpretation for better performance.

- JIT behaves both like an interpreter and a compiler:  
  - Executes code line-by-line for fast startup (interpreter-like).  
  - Compiles frequently used code to machine code for fast execution (compiler-like).

---

## How JS Runs in the Browser

- JavaScript code runs inside browsers like Chrome.  
- The code instructs the browser to store and process values in the computer’s RAM.  
- The browser executes these values while running JavaScript to create dynamic, interactive web pages.

---

