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
intro.apply(person, ["Delhi"]); // Vimal from Delhi
```

### 3. `bind()`
- Returns a new function instead of calling the function **immediately**

```js
const greetLater = greet.bind(person, "Delhi");
greetLater(); // → Vimal from Delhi
```
> **Note:**
> **Method call** -> Implicit binding ->Automatically set `this`
> **Function borrowing** -> Explicit binding ->Manually set `this`
