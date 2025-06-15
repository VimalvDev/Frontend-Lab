Error handling – try(), catch() and finally
	Error handling is a way to manage exceptions (errors) that occur during code execution **without crashing the program**.
	Why use try-catch?
•	Prevents the program from stopping due to runtime errors.
•	Helps in debugging by showing custom error messages.
•	Improves user experience by handling failures smoothly
	How try-catch Works?
1.	The try block contains the code that might cause an error
2.	If an error occurs, throw Error(‘message’) is used to send the error to the catch() block
3.	The catch() block receives the error and handles it without stopping the whole program
4.	If no error occurs, the code inside try() runs normally, and catch is ignored


	Example: 
function divide(a, b) {
  try { // Code that may cause an error
    if (b == 0) throw Error("Can't divide by 0!"); // Throwing an error
    console.log(a / b); // Code runs if no error
  } catch (error) { // Code that runs if an error occurs
    console.log(error); // Catching and displaying the error
  }
finally { // Code that always runs (optional)
    console.log("Division function executed.");
  }
}
divide(12, 0); 
// Caught Error: Can't divide by 0!
Division function executed.

`error parameter` in catch(error)
Error.name – Name/type of error (referenceError, typeError etc)
Error.message – Error description (what went wrong)
Error.stack – Tracing error location (line number + call path of the error code)

---

## Understanding `this` Keyword in JavaScript

### What is a Keyword?
- A keyword is a **reserved word that has a special meaning in programming language.

### What is `this` in JavaScript?
- `this` keyword value depends on **how a function is called**, not where it is defined. It means, the value of `this` keeps changing based on different conditions.

### Types of `this` in different conditions

#### 1. Global Scope
Value of `this`: `window` object (in browser) or `global` object (in Node.js)
```js
console.log(this); // → Window object (in browser)
```

#### 2. `this` inside an Object (method call -> implicit binding)
When a function is called using an object (as a method), `this` refers to the **object**
```js
const user = {
  name: "Vimal",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.greet(); // "Hi, I'm Vimal"
```

### 3. Function Borrowing (Using this in multiple objects)
- We can reuse a function across objects by assigning it as a method. This is called **function borrowing**.
- In Function Borrowing, the value of `this` refers to the **object** calling the function.
```js
function sayHello() {
  console.log(`Hello, I am ${this.name}`);
}

const person1 = { name: "Vimal", greet: sayHello };
const person2 = { name: "Ravi", greet: sayHello };

person1.greet(); // Hello, I am Vimal
person2.greet(); // Hello, I am Ravi
```

### 4. `this` in Regular Function (Not inside an object)
If we call a regular function without any **object*, this will point to the **global object** (window in browser).

```js
function show() {
  console.log(this); // window (in browser)
}
show();
```

### 5. Arrow Functions and `this`
Arrow functions do not have their own `this`. They inherit `this` from their parent (lexical scope).

```js
const obj = {
  name: "Vimal",
  arrowFunc: () => {
    console.log(this.name); // ❌ undefined (arrow doesn't bind `this`)
  },
  normalFunc() {
    console.log(this.name); // ✅ "Vimal"
  }
};

obj.arrowFunc();
obj.normalFunc();
```

### 6. Explicit Binding (call, apply, bind)
- We can manually `bind` the value of `this` using:
- `call`, `apply` and `bind` are built-in **methods** of all functions in JavaScript
  
- `call()`
Calls function immediately, lets us pass arguments one by one.
```js
function intro(city) {
  console.log(`${this.name} from ${city}`);
}
const person = { name: "Vimal" };
intro.call(person, "Delhi"); // Vimal from Delhi
```

- `apply()`
Same as call but arguments are passed as **an array**.

```js
intro.apply(person, ["Delhi"]); // Vimal from Delhi
```

- `bind()`
Returns a new function with `this` bound. We can call it later.

```js
const boundIntro = intro.bind(person, "Delhi");
boundIntro(); // Vimal from Delhi
```
