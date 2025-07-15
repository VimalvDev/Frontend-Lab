# Advance JavaScript notes - Table content

## 📑 Table of Contents

- [Error Handling – try, catch](#error-handling--try-catch)
- [Advance Object Concepts](#advance-object-concepts)
  - [Optional Chaining](#optional-chaining)
  - [Object Destructuring](#object-destructuring)
- [Understanding `this` Keyword](#understanding-this-keyword-in-javascript)
  - [Value of `this` in different conditions](#value-of-this-in-different-conditions)
  - [Explicit Binding - call, apply, bind](#explicit-binding---call-apply-bind)
- [JavaScript Modules](#javascript-modules)
- [Asynchronous JavaScript](#asynchronous-javascript)
  - [Fetch API](#fetch-api)
  - [Axios](#axios-in-javascript)
  - [JavaScript Promises](#javascript-promises)
  - [Asynchronous Callback Functions](#asynchronous-callback-function)
  - [JavaScript async/await](#javascript-asyncawait)
- [JavaScript Generators](#javascript-generators)
- [JavaScript Web Workers](#javascript-web-workers)
- [Form Validation using RegEx](#form-validation-using-regular-expressions-regex)


---

## Error Handling- `try`, `catch`
- Used to **handle errors without crashing the program**
- Helps in debugging by showing custom error messages.

### How try-catch Works?
1. The `try` block contains the code that might cause an error
2. If an error occurs, `throw Error ("message")` is used to send the error to the `catch()` block
3. The `catch()` block receives the error and handles it without stopping the whole program
4. If no error occurs, the code inside `try()` runs normally, and `catch()` is ignored

### Example:
```js
try{
// risky code
} catch(err) {
// Handle error
}
```

---
## Advance `object` Concepts

## Optional Chaining
`?.` Used to safely access **nested values** without getting an error if something is `undefined` or `null`

#### Key points
- Helps avoid `TypeError` when accessing deep (nested) properties.
- Returns `undefined` if value doesn't exist, instead of showing error.
- Works with objects, arrays, and functions.

#### Example
```js
const user = {
  name: "Alex",
  address: {
    city: "Mumbai"
  }
};
console.log(user.address.city);     // "Mumbai"
console.log(user.contact?.email);    // undefined (no error)
console.log(user.contact.email);     // ❌ Error
```

#### When to use?
- Accessing API data
- Handling **optional user inputs**
- Dealing with **DOM elements** that may no exist

## Object Destructuring
Object destructuring is a simple way to **extract values** from an object and store them in variables.

### ✅ Basic Syntax

```js
const person = {
  name: "Vimal",
  age: 19
};
const { name, age } = person;

console.log(name); // "Vimal"
console.log(age);  // 19
```

### Destructuring with Rest Operator
The `...rest` syntax collects the remaining properties into a new object.

```js
const object1 = {
  name: "Vimal",
  age: 19,
  country: "India"
};
const { name, ...rest } = object1;

console.log(name); // "Vimal"
console.log(rest); // { age: 19, country: "India" }
```

### Renaming Variables (Rare but useful)
We can rename the destructured variables:

```js
const { age: userAge } = object1;
console.log(userAge); // 19
```

### Nested Object Destructuring (Very Useful)
If an object has another object inside, we can directly extract inner values.

```js
const object1 = {
  completion: {
    html: "Full",
    css: "Full",
    js: "learning"
  }
};
const { completion: { html, css, js } } = object1; // Extracting values using `:{}`

console.log(completion) //Error
console.log(html); // "Full"
console.log(css);  // "Full"
console.log(js);   // "learning"
```
> **Note:**
> `completion` is not a `variable` here, only its properties (`html`, `css`, `js`) are extracted.

---

## Understanding `this` Keyword in JavaScript

### What is a Keyword?
A keyword is a **reserved word that has a special meaning in programming language.

### What is `this` in JavaScript?
`this` keyword value depends on **how a function is called**, not where it is defined. It means, the value of `this` keeps changing based on different conditions.

## Value of `this` in different conditions

### 1. Global Scope
- Calling outside `Function` or `object`
- Value of `this`: `window` object (in browser) or `global` object (in Node.js)
```js
console.log(this); // → Window object (in browser)
```
### 2. Function Scope (Regular Function)
- Calling inside a `Function`
- Value of `this`: `window` object (not bound to any `object`)
```js
function show() {
  console.log(this); // → Window object
}
show();
```

### 3. Method (Known as Implicit Binding)
- A method is a function that is either **written** as a key inside an **object** or defined inside a **class**
- Value of `this`: The `object` itself
```js
const user = {
  name: "Vimal",
  greet() {
    console.log(`Hi, I'm ${this.name}`); //Hi, I'm Vimal
  }
};
user.greet();
```

### 4. Function Inside Method (ES5)
- Value of `this`:
    - Method (function inside the object) gets `object` itself
    - Inner Method (Method inside Method) gets `window` object
```js
const obj = { // Object
  age: 25,
  fun: function () { //Object Method
    console.log(this); // → obj
    function inner() { // Method inside a Method 
      console.log(this); // → window
    }
    inner();
  }
};
obj.fun();
```

### 5. Arrow Function Inside Method (ES6)
- Value of `this`: The `object`
> **Note**:
> Arrow function inherits `this` from the parent, if its inside the method, then value of `this` is `object`, but if its outside the method, then value of `this` is `window` object
```js
const obj = {
  name: "Vimal",
  fun: function () {
    const arrow = () => {
      console.log(this.name); // → "Vimal"
    };
    arrow();
  }
};
obj.fun();
```

### 6. Constructor Function
- Value of `this`: A **new** blank `object` created by `new` keyword
```js
function Person(name, age) {
  this.name = name;
  this.age = age; // Assign values to the blank object
}
const newPerson = new Person("Vimal", 19); //Creates blank object
console.log(newPerson); // → {name: "Vimal", age: 19}
```



### 7. Event Listener
- Value of `this`: The **element** on which the event is triggered
```js
document.querySelector("button").addEventListener("click", function () {
  console.log(this); // → the button element
});
```

## Explicit Binding - `call()`, `apply()`, `bind()`
- These methods are built-in **methods** of all functions in JavaScript
- These methods are used when we want to **manually set** the value of `this`
- **Function Borrowing** is a use-case of `call`, `apply`, and `bind` where we borrow a method from one object to use with another
  
### 1. `call()`
- Calls function immediately
- let us pass arguments one by one.
- Change the value of `this` to a specific **object or function**

```js
function greet(city) {
  console.log(`${this.name} from ${city}`);
}
const person = { name: "Vimal" };
greet.call(person, "Delhi"); // → Vimal from Delhi
```

### 2. `apply()`
- Same as `call()` but passes arguments as **an array**.

```js
function greet(city) {
  console.log(`${this.name} from ${city}`);
}
const person = { name: "Vimal" };
greet.apply(person, ["Delhi"]); // → Vimal from Delhi
```

### 3. `bind()`
- Returns a new function instead of calling the function **immediately**

```js
const greetLater = greet.bind(person, "Delhi");
greetLater(); // → Vimal from Delhi
```
> **Note:**
>- **Method call** -> Implicit binding ->Automatically set `this`
>- **Function borrowing** -> Explicit binding ->Manually set `this`

---

## JavaScript Modules
JavaScript Modules help us split code into smaller, reusable files. This makes projects easier to manage, debug, and scale.

## Why Use Modules?

- Avoid messy, long single files.
- Reuse code in multiple files.
- Keep functions and variables in their own files.

## Types of Modules

### 1. ES Modules (Modern JavaScript Modules)

- Use `import` and `export` keywords.
- Supported in all modern browsers and Node.js (with `.js` or `.mjs` extension).
- Mostly used in frontend web development.

```js
// utils.js
export function greet(name) {
console.log(`Hello, ${name}`);
}
```
```js
// main.js
import { greet } from './utils.js';
greet("ThugZone");
```

### 2. CommonJS (Older Module System in Node.js)
- Uses `require()` and `module.exports`
- Stil used in many Node.js packages (especially backend tools)
- Not natively supported in browsers

```js
// utils.js
function greet(name) {
  console.log(`Hello, ${name}`);
}
module.exports = { greet };
```
```js
// main.js
const { greet } = require('./utils');
greet("ThugZone");
```

## Named Export and Default Export
### Named Export
- We can export **multiple functions or variables**
```js
// math.js
export const PI = 3.14;
export function square(x) { return x * x; }
```
```js
// main.js
import { PI, square } from './math.js';
```

### Default Export
- Export **only one value** (function, object,class)
```js
// greet.js
export default function(name) {
  console.log("Hi", name);
}
```
```js
// main.js
import greet from './greet.js';
greet("ThugZone");
```

## Dynamic Import (Lazy Loading)
- Loads Module **only when needed** (e.g on button click)
- Returns a Promise.
```js
// On demand loading
async function loadModule() {
  const module = await import('./utils.js');
  module.greet("ThugZone");
}
```
```js
// Using .then()
import('./utils.js')
  .then((mod) => mod.greet("ThugZone"))
  .catch(err => console.log("Failed to load", err));
```

## File Extensions in ES Modules
1. `.js` -> Default, works in both browser and Node.js
2. `.mjs` -> Used in Node.js if `type: module` is **not set** in package.json
3. `.ts`/`.mts` -> For TypeScript-Based modules

---

## Asynchronous JavaScript
### What are `sync` and `async`?
- `sync`(Synchronous): Tasks run **one by one in order** inside the **main call stack**. Js will **not move to the next task** untill **current task finishes**.
- `async`(Asynchronous): Tasks that **take time**(like API calls, timers) are moved to the **async environment** or **callback queue**.

## Event Loop - How Async tasks execute
- The event looop **continously checks** if the **main call stack** is **empty**.
- If **empty**, it **moves async tasks (from the callback queue) into the **main call stack** so they can run.
- This ensures **non-blocking behavior** in JavaScript

## When do we use Async Code?
- Any task that **takes time** should be handled asynchronously, such as:
   - `setTimeout`, `setInterval`
   - Fetching data using `fetch` or `axios`
   - Promises and `async/await`
   - Event listeners

>**Note:**
> - In Js, **time-consuming** tasks automatically moves ot the **side stack** and **wait untill the main call stack is empty to run.

---

## Fetch API
- `fetch()` is used to **get data from other sites or APIs**
- It **makes HTTPS requests and returns a Promise**

### How `fetch()` works:
- 1. We call the `fetch()` with a URL which requests data from the API (server)
  2. The first `.then()` recevies a **response object** (raw data). This data is in **machine reabable format**
  3. We use `.json()` on the response to convert the raw stream into **JSON data**
  4. The second `.then()` receives the **parsed JSON data**, which is now **human-readable** and usable in our app
```js
fetch("https://api.example.com/data")
  .then(response => response.json()) // converts raw response to JSON
  .then(data => console.log(data))   // usable, readable data
```

---

## Axios in JavaScript
- Axios is a popular **promise-based** HTTP client library for making requests to APIs in JavaScript
- Works in **browsers and Node.js**
- Used to fetch, post, update, or delte data from APIs

### Why use Axios?
- Automatically **transforms JSON data**
- Handles **HTTP errors** easily
- Supports **request cancellation**
- Allows **request and response interceptors** (helpful for adding tokens automatically)
- Supports timeouts
- Easy to handle **custom headers**
- Works well for large scale projects with many API calls.

```js
axios.get("https://api.example.com/data")
  .then(response => {
    console.log(response.data);
  })
```

---

## JavaScript Promises
### What is a Promise?
- A `Promise` is a **JS object** for handling **asynchronous operations**
- Represents a **future value**, either:
   - Fulfilled (Resolved)
   - Rejected (Error)
   - Pending (In-progress)

### Why use Promises?
- Avoid callback hell
- Write clean, chainable async code
- Handle API calls, timers, file reads, etc

## Handling Promises
- `.then(data => {...})` → runs on `resolve`, receives data
- `.catch(error => {...})` → runs on `reject`, receives error.
```js
promise
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

## Visual Diagram
```js
new Promise((resolve, reject) => {
    // do something
    if (ok) {
        resolve(result);
    } else {
        reject(error);
    }
});

          |
          V
        Promise
          |
    +-----------+
    | pending   |  → (resolve called) → fulfilled → triggers .then(data)
    |           |  → (reject called)  → rejected  → triggers .catch(error)
    +-----------+
```

## Example
```js
const userPromise = new Promise((resolve, reject) => {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      if (data.results[0].gender === "male") resolve(data);
      else reject("Gender is not male");
    })
    .catch(err => reject(err));
});

userPromise
  .then(data => console.log("Success:", data.results[0].gender))
  .catch(err => console.log("Error:", err));
```

---

## Asynchronous Callback Function
### What is a Callback Function?
- A **callback** is a function passed as **argument** to **another function** to be executed later

### What are Asynchronous Callback?
- Callbacks executed after an asynchronous task completes
- They do not block code execution while waiting for the async task to finish
```js
function userData(url, callback) {
  fetch(url)
    .then(raw => raw.json())
    .then(result => {
      callback(result); // async callback execution
    });
}

userData("https://randomuser.me/api/", function(result) {
  console.log(result.results[0].name.first);
});
```
---

## JavaScript `async/await`
### What is `async/await`?
- `async/await` is **syntax** for writing **asynchronouse** code in a synchronouse style
- It works with `Promises` but makes the code cleaner (no `.then()` chaining)
- It does not **block the main thread** while waiting for async operations

### Why do we use it?
- When we **fetch data from an API** or read files, it takes time,
- We don't want to block the browser during that time
- Using `Promises` with `.then()` can get messy:
```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
- Using `async/await`:
```js
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
getData();
```

## How does it work?;
### 1. `async` keyword before function
```js
async function getData() {...}
```
- This makes the function **always return a `Promise`

### 2.`await` before a **Promise-returning function** to **pause** until the Promise resolves:
```js
const data = await fetch(url);
```

## Error Handling with `try/catch`
```js
async function getData() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
getData();
```
---

## JavaScript Generators
### What are Generators?
- Generators are **special functions** in JavaScript that can **pause and resume** execution
- Created using `function*` syntax
- Use the `yield` keyword to **pause and return a value
- Execution resumes when you call `.next()` on the generator
```js
function* prinNum() {
    for (let i = 0; i < 10; i++) {
        yield i; // pauses and returns i
    }
}

const ans = prinNum();

console.log(ans.next().value); // 0
console.log(ans.next().value); // 1
console.log(ans.next().value); // 2
```

---

## JavaScript Web Workers
### What are Web Workers?
- Web Workers allow **running JavaScript** in a **background or additional thread**
- They **do not block the main thread (UI)** while running heavy tasks
- Useful for **Large data processing, heavy calculations, or parsing files** without freezing the website

>**Note:**
> - A **Thread** is a like a single path of execution in your program.
> - By default, JavaScript runs on a single thread, meaning it can only do **one thing at a time**.
> - Web Workers help you **create another thread in the background** so we can run heavy tasks on the additional thread.

### Example:
- main.js
```js
const worker = new Worker("worker.js");

worker.postMessage([1,2,3,4,5); // Sending data to the worker

worker.onmessage = function(event) { // Receiving the processed data from the worker
  console.log("Sum from worker:", event.data); // Output: 15
};
```
- worker.js
```js
onmessage = function(event) {
  const numbers = event.data
  const sum = numbers.reduce((acc,item) => acc + item, 0)
  postMessage(sum);
```

---

## Form Validation using Regular Expressions (RegEx)
### What is RegEx?
- It is a **pattern** used to match, search, and manipulate strings.
- Used for **validation (emails, phone numbers, passwords)**.
- `.test()` return `true` if the RegEx code matches, otherwise `false`

### Example for form validation:
```js
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission
    
    const userEmail = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Can be created for other validations
    
    if (emailPattern.test(userEmail)) {
        alert("✅ Email is valid");
        // proceed with form submission or AJAX call
    } else {
        alert("❌ Please enter a valid email address");
    }
});
```

