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

## Pure Functions in JavaScript

- A **Pure function** returns the same output for the same inputs.
- Doesn't modify external variables, data or state.
- Uses only the data given to it through parameters, doesn't depend on any variabels or state from outside.
- Example
```js
//Pure function
function add(a, b) {
  return a + b; // Always same output for same inputs
}
console.log(add(2, 3)); // Output: 5

//Not a pure function
let total = 0;
function addToTotal(num) { 
  total += num; // Modifies external variable → Side effect
  return total;
}
```

---

## Types of Functions in JavaScript

## a) User-Defined Functions (Custom Functions)

- These are functions that we **create ourselves** to perform specific tasks.
- They are primarily categorized based on JavaScript versions:
  - **ES5 Version (Older JavaScript)**
  - **ES6 Version (Modern JavaScript)**

## ES5 Version (Older JavaScript)

- **ES5 (ECMAScript 5)** is the **older version of JavaScript**.
- Still widely supported and commonly used.
- Functions are defined using the traditional `function` keyword.

![](IMGs/js_es5_functions.png)

### 1. Function Statement

  - Also known as **Function Declaration**
  - A normal function with a name
  - Function statements are **hoisted**.

  ```javascript
  function greet(name) {
    console.log("Hello, " + name);
  }
  greet("Vimal"); // Output: Hello, Vimal
  ```

> **Note:**
> In JavaScript, **function statement** and `var` are **hoisted**, meaning they’re moved to the top of their scope.  
> So you can call a function **before it's defined** in the code:
>
> ```js
> print(); // ✅ Works due to hoisting
> function print() {
>   console.log("Hoisted function!");
> }
> ```

### 2. Function Expression

  - A function stored **inside a variable**. The function may and may not have name also.
  - **Not hoisted** like function declarations. You must **define** them before use.

  ```javascript
  const greet = function (name) { // Anonymous function expression
  console.log("Hello, " + name);
  };
  greet("Vimal"); // Output: Hello, Vimal

  const greet = function greetFun(name) { named function expression
  console.log("Hello, " + name);
  };
  greet("Vimal"); // Output: Hello, Vimal
  ```

### 3. Anonymous Function

  - A function without a name, often used as a **callback**
  - Cannot be called directly unless assigned to a variable or passed into another function

  ```javascript
  setTimeout(function () {
    console.log("Hello after 2 seconds!");
  }, 2000);
  ```

> **Note:**
>
> - A **callback** is a function passed as an argument to another function.
> - It is commonly used in asynchronous operations like `setTimeout`, `setInterval`, event listeners, or array methods (`map`, `forEach`, etc.).
> - In the example above, the anonymous function is used as a callback that runs after 2 seconds.

---

## ES6 Version (Modern JavaScript)
- ES6 introduced arrow functions, shorter and cleaner alternatives to regular functions.

### 4. Arrow Function

  - Shorter syntax for writing functions.
  - Doesn't need `{}` and `return` if there is single expression to execute.
  - Doesn't need `()` if there is a single parameter only.
  ```js
  const sum = (x,y) => x>y ? x+y : x-y;
  let output = sum(150,70); // Optional but recommaned to store output in a variable.
  console.log(output);
  ```

### 5. Arrow Function with One Parameter

  - Parentheses are optional if there's only one parameter.

  ```js
  const greet = name => {
  console.log("Hello, " + name);
  };
  greet("Vimal"); // Output: Hello, Vimal
  ```

### 6. Arrow Function with Implicit Return
  - If the function body is a single line, `{}` and `return` are not needed.
  ```js
  const add = (a, b) => a + b;
  console.log(add(3, 5)); // Output: 8
  ```

---
## b) In-Built Functions (Predefined Functions)
JavaScript provides several built-in functions and methods that can be used directly.

### 1. **Timing Functions**

- `setInterval(()=>{},1000)` – Runs a function **repeatedly** after a specified interval.
- `clearInterval(intervalID)` – Stops an ongoing setInterval.
- `setTimeout(()=>{},1000)` – Runs a function once after a specified **delay**.
- `clearTimeout(timeoutID)` – Stops a setTimeout.

### 2. **Event Functions**

- `addEventListener()` – Executes a function when a specific event occurs (e.g. click, mouseover).
- `preventDefault()` – Stops the default behavior of events (like preventing a form from reloading the page).

> **Note:**
> - Sometimes, we don’t want the **default behavior of an event** (like stopping a form from submitting, preventing a link from opening, or avoiding a page reload).
> - The preventDefault() method helps us stop such actions.
> - Mostly used with forms, buttons, and links where we want to control the behavior manually.
>
> ```js
> document.querySelector("form").addEventListener("submit", function (event) {
>   event.preventDefault(); // Stops the form from submitting
>   console.log("Form submission prevented!");
> });
> ```

### 3. **Console & Debugging Functions**

- `console.log()` – Displays **output** in the console.
- `console.error()` – Displays an **error** message.
- `console.warn()` – Displays a **warning** message.


### 4. **User Interaction Functions** (Not used anymore)

- `alert()` – Shows a message box.
- `prompt()` – Prompts the user for input and returns the entered value.


### 5. **String Functions**

- `slice("from","upto")` - Extracts a part of a string and returns it as a new substring without modifying the orignal string.
	- `slice(0,5)` - Retruns the substring from `index 0` up to (but not including) `index 5`
	- `slice(6)` - Returns the substring from index 6 to the **end of the string**
- `split()` – Divides a string into an array based on a condition.
	- `split(“”)` – Splits every character of the string
	- `split(“ “)` – Splits every word on the basis of space
  	- `split(“a“)` – Splits on the basis of character
- `join()` - Joins all elements of the array into one string.
	- `join(“”)` – Join every characters of the array
	- `join(“ “)` – Join all array elements into a string with a space between each character
- `includes()` – Checks if the given sequence of characters exists in the string.
```js
const vowels = "aeiou";
console.log(vowels.includes(string[i));   // true
```
- `indexOf("searchValue")` - Returns the **first** index at which a given **value** is found in a String. If the value is **not found**, it returns `-1`.
- `trim()` – Removes extra spaces (blank space) from the string.
- `startsWith()` – Checks if a string starts with a specific character or sequence of characters.
- `toUpperCase()` - Converts entire string to **UPPERCASE**
- `toLowerCase()` - Converts entire string to **lowercase**
- `replaceAll("what","to")` - Replaces **all** occurences of a spcecific character or substring with another.
- `repeat("what","times")` - Repeats the given string `n` times

### 6. **Array Functions** (Most Important)

- `reverse()` – Reverses the order of array elements.

  ```js
  const arr = [1, 2, 3];
  arr.reverse();  // Result: [3, 2, 1]
  ```
- `flat()` – Flattens nested arrays.
  ```js
  const nested = [1, 2, [3, 4]];
  const flatArr = nested.flat();  // Result: [1, 2, 3, 4]
  ```
- `push()` – **Adds** an element to the **end** of array.
  ```js
  const arr = [1, 2];
  arr.push(3);  // Result: [1, 2, 3]
  ```
- `unshift()` – **Adds** an element to the **start** of array.
```js
const arr = [2, 3];
arr.unshift(1);  // Result: [1, 2, 3]
```
- `pop()` – **Removes** the **last** element from array.
  ```js
  const arr = [1, 2, 3];
  arr.pop();  // Returns: 3, arr becomes [1, 2]
  ```
- `shift()` – **Removes** the **first** element from array.
  ```js
  const arr = [1, 2, 3];
  arr.shift();  // Returns: 1, arr becomes [2, 3]
  ```
- `map()` – Transforms each element in an array based on a condition.
   ```js
  const arr = [1, 2, 3];
  const doubled = arr.map(x => x * 2);  // Result: [2, 4, 6]
  ```
- `filter()` – Filters elements based on a condition.
  ```js
  const arr = [1, 2, 3, 4];
  const evens = arr.filter(x => x % 2 === 0);  // Result: [2, 4]
  ```
- `indexOf()` - Returns the **first** index at which a given **value** is found in an Array. If the value is **not found**, it returns `-1`
  ```js
  let arr = [10, 20, 30, 40, 20];
  console.log(arr.indexOf(20));     // Output: 1
  console.log(arr.indexOf(50));     // Output: -1
  ```
- `reduce()` – Reduces the array to a single value.
  - ```
    const arr = [1, 2, 3, 4];
    const sum = arr.reduce((acc, curr) => acc + curr, 0);  // Result: 10
    ```
> **Note**
> How reduce() Works:
> 
> `reduce()` is used to combine all elements of an array into a single value.
> 
> In this example:
> ```js
> const arr = [1, 2, 3, 4];
> const sum = arr.reduce((acc, curr) => acc + curr, 0);  // Result: 10
> ```
> - `acc` (accumulator) starts at `0` (the **initial value** we passed).
> - It then adds each `curr` (current element) in the array:
>     - Step 1: acc = 0 + 1 → 1
>     - Step 2: acc = 1 + 2 → 3
>     - Step 3: acc = 3 + 3 → 6
>     - Step 4: acc = 6 + 4 → 10
> - Final result: `10`

- `forEach(()=>{})` – Executes a function for each element.
  ```js
  const arr = [1, 2, 3];
  arr.forEach(x => console.log(x));  // Logs: 1 2 3 (each on new line)
  ```
- `Array.isArray()` – Checks if a value is an array or not.
  ```js
  console.log(Array.isArray([1, 2, 3]));  // true
  console.log(Array.isArray("hello"));    // false
  ```


### 7. **Type Conversion and Validation Functions**

- `Number()` – Converts **strings to numbers**.
- `String()` – Converts **values to string** format.
- `isNaN()` – Checks if a value is **not a number** then returns true or false.


### 8. **Math Functions** (Important)

- `Math.random()` – Generates a random number between 0 and 1.
  ```js
  const num = Math.random();
  console.log(num); // e.g., 0.5379283
  ```
>**Note**
> Generating Random Numbers Beyong 0 and 1
>```js
>Math.floor(Math.random() * 10); //Random numbers between 0 and 9
>Math.floor(Math.random() * 100) + 1; //Random numbers between 1 and 100
>Math.floor(Math.random() * (max - min + 1)) + min; //Random numbers between min and max
> - we add `+ min` to shift the **starting point** of the range. 
> - Eg, if `min=5` and `max=10`, then `(10 - 5 + 1) = 6` → becomes 0 to 5
> - Adding `min`, shifts the range to 5 to 10

- `Math.floor()` – Rounds down a number.
- `Math.ceil()` – Rounds up a number.
- `Math.round()` – Rounds to the nearest integer.
- `Math.max()` – Returns the largest number.
- `Math.min()` – Returns the smallest number.


### 9. **Type Checking**

- `typeof` – Returns the type of a value (e.g. number, string, object).
  ```js
  console.log(typeof 42);          // Output: "number"
  console.log(typeof "Hello");     // Output: "string"
  console.log(typeof true);        // Output: "boolean"
  console.log(typeof {});          // Output: "object"
  console.log(typeof []);          // Output: "object" (arrays are also considered objects)
  console.log(typeof undefined);   // Output: "undefined"
  console.log(typeof null);        // Output: "object" (this is a known JavaScript long-standing bug)
  ```
