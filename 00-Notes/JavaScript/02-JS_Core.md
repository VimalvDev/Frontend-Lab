# 📘 JavaScript Core Notes – Table of Contents

1. [Data Types](#data-types)
   - [Primitive Data Types](#1-primitive-data-types)
   - [Reference Data Types](#2-reference-data-types-non-primitive)
2. [Object in JavaScript](#object-in-javascript)
   - [Object Literal & Properties](#object-literal--properties)
   - [Accessing Object Properties](#accessing-object-properties)
   - [Functions as Object Properties (Methods)](#functions-as-object-properties-methods)
   - [Computed Properties](#computed-properties)
   - [Adding New Properties](#adding-new-properties-to-an-object)
   - [Object Shorthand Property](#object-shorthand-property)
   - [keys, values, and entries](#keys-values-and-entries)
   - [Some advance object Topics](#some-advance-object-topics)
3. [Truthy and Falsy Values](#truthy-and-falsy-values)
4. [Variables and Constants](#variables-and-constants)
5. [Operators](#operators)
   - [Arithmetic Operators](#1-arithmetic-operators)
   - [Assignment Operators](#2-assignment-operators)
   - [Comparison Operators](#3-comparison-operators)
   - [Logical Operators](#4-logical-operators)
   - [Nullish Coalescing Operator](#5-nullish-coalescing-operator)
   - [Optional Operators](#6-optional-operators)
6. [Template Literals / Interpolation](#template-literal--interpolation)
7. [Conditional Statements](#conditional-statements)
8. [Loops](#loops)
   - [for Loop](#for-loop)
   - [forEach Loop](#foreach-loop)
   - [while Loop](#while-loop)
   - [for...in Loop](#forin-loop)
   - [for...of Loop](#forof-loop)
   - [do...while Loop](#dowhile-loop)
9. [Controlling Loop Execution](#controlling-loop-execution)
   - [break](#break)
   - [continue](#continue)
 
---

## Data Types

### 1. Primitive Data Types

- **String** - Text (e.g., `"Hello"`)  
- **Numbers**:  
  - Integer – (e.g., `1`, `2`, `4`)  
  - Float – (e.g., `1.5`, `2.5`)  
- **Boolean** – `true` or `false`  
- **Null** – A variable intentionally set to "empty" (nothing). **Declared but has no value**.  
- **Undefined** – A variable that is **declared** but **not assigned any value**. It is also the default value for uninitialized variables.

### 2. Reference Data Types (Non-Primitive)

- **Object** – Collection of key-value pairs > `{ name: "vimal", age: 19 }`
- **Array** - A container that holds a list of values, which can be of any type (numbers, strings, objects, functions).
- **Function** – Reusable blocks of code.

> **Note:**  
> - Primitive data types store a **copy** of the value.  
> - Non-primitive data types store a **reference** to the original data.  
>  
> When assigned to another variable:  
> - **Primitive:** A copy of the value is made. Changing the new variable does **NOT** affect the original.  
> - **Non-primitive:** A reference (memory address) is stored. Changing the new variable **also affects** the original.  
>  
> Use the Spread operator (`...array_name`) to copy, merge, or manipulate arrays and objects.

---

## Object in JavaScript
Objects are **reference data** types used to store collections of **key-value pairs**.

### Object Literal & Properties

#### Properites:
- Objects are made of **key-value pairs**.
- Keys are also known as **properties**

#### Creating Objects:
We can define an object using **object literal syntax** with `{}`
```js
const person = { // Object literal
  name: "Vimal", // Key and Value
  age: 20,
  isStudent: true
};
```

### Accessing Object Properties

#### 1. Dot Notation:
Used when the **property name is valid identifier** (No spaces, starts with letter).
```js
console.log(person.name); // Output: "Vimal"
```

#### 2. Bracket Notation:
Used when the **key is stored in a variable** or has **special characters or spaces**.
```js
console.log(person["age"]);        // Output: 20

const key = "isStudent";
console.log(person[key]);          // Output: true
```
> **Note:**
> Bracket notation is also used for **computed properties**, where the key is **calculated at runtime**.

### Functions as **Object Properties** (Methods)
- A function can be used as a **property** in an object
- When a function is used this way, it's called a **method**
```js
const user = {
  name: "Vimal",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};
user.greet(); // Output: Hello, Vimal
```
> **Note:**
> Do not use **arrow functions** as object methods because
>     - Arrow functions **don't have their own `this`
>     - They inherit `this` from the outer scope, which is outside the object.
> ```js
> const user = {
>   name: "Vimal",
>   greet: () => {
>     console.log("Hello, " + this.name); // ❌ 'this' will be undefined or global
>   }
> };
> user.greet(); // Output: Hello, undefined (or error)
> ```

### Computed Properties
#### What is **computed properties**
Computed properties allow us to **dynamically** define the property key using a variable or an expression inside **square brackets** `[]`.
```js
const keyName = "email"; // Adding this value into the object
const user = { // object
  name: "Vimal",
  [keyName]: "vimal@example.com"
};
console.log(user);
// Output: { name: 'Vimal', email: 'vimal@example.com' }
```

#### Adding new properties to an `object`
```js
const user = {
  name: "Vimal"
};

user.age = 20; // Dot notation
user["age"] = 20; // Bracket notation (Key as string)
console.log(user); 
// Output: { name: 'Vimal', age: 20 }
```

### Object Shorthand Property
- What is it?
When the **property name and variable name are the same**, we can use shorthand syntax to make object creation more short and can use the same object for multiple values
```js
function getObject(name, age) {
  return {
    name,
    age
  };
}
let student1 = getObject("Vimal", 19); // 1st value
console.log(student1); // { name: "Vimal", age: 19 }

let student2 = getObject("Advik", 18); //2nd value
console.log(student2); // { name: "Advik", age: 18 }
```

### `keys`, `values` and `entries`
These are built-in JavaScript methods used to extract data from objects in **array format**

#### 1. `Object.keys(obj)`
Returns an **array of keys (property names) from the object.
```js
const user = {
  name: "Vimal",
  age: 19
};
console.log(Object.keys(user)); 
// Output: [ "name", "age" ]
``` 
#### 2. `Object.values(obj)`
Returns an **array of values from the object.
```js
console.log(Object.values(user)); 
// Output: [ "Vimal", 19 ]
``` 
#### 3. `Object.entries(obj)`
Returns an **array of entries**, where each entry is a `[key, value]` pair in its own array.
```js
console.log(Object.entries(user)); 
// Output: [ ["name", "Vimal"], ["age", 19] ]
``` 
## Some advance `object` Topics:
- [Optional chaining in Object](06-JS_Advance.md#optional-chaining)
- [Object Destructuring in Object](06-JS_Advance.md#Object-Destructuring)

---

## Truthy and Falsy Values

Every value in JavaScript is either **Truthy** or **Falsy** in a Boolean context (e.g., inside an `if` statement).

### Falsy values (behave as false):

- `false`  
- `0` (zero)  
- `""` or `''` (empty strings)  
- `null`  
- `undefined`  
- `NaN` (Not a Number)  
- `document.all` (special case)

### All other values are **Truthy** (behave as true).

---

## Variables and Constants

### 1. Let
- Block-scoped — `{}`  
- Redeclaration **not allowed**, but reassignment **is allowed**  
  - `let a = 5; let a = 10;` → **not allowed**  
  - `let a = 5; a = 10;` → **allowed**  

**Example:**
```js
{
  let x = 10;
  console.log(x); // ✅ Output: 10
}
console.log(x); // ❌ Error! x is not defined outside the block
```

### 2. Const
- Block-scoped — `{}`  
- Redeclaration and reassignment **Both aren't allowed**  
  - `const a = 5; const a = 10;` → **not allowed**  
  - `const a = 5; a = 10;` → **not allowed**  

### 3. Var (Older Version)
- Function-scoped  
- Redeclaration and reassignment **Both are allowed**  
  - `var a = 5; var a = 10;` → **allowed**  
  - `var a = 5; a = 10;` → **allowed**  

**Example:**
```js
function myFunction{
  var x = 10;
  console.log(y); // ✅ Output: 10
}
console.log(y); // ❌ Error! y is not defined outside the block
```

## JavaScript Scope and Scope Chain

### What is Scope?
Scope means where a variable is accessible in our code. JavaScript has 3 main types of scope.

### 1. Global Scope
- Declared **outside** of any function or block
- Can be accessed **anywhere** in the program
```js
let a = 10;

function show() {
  console.log(a); // ✅ Accessible
}
```

### 2. Function (Local) Scope
- Variables declared **inside a function**
- Accessible only **insdie that function**
```js
function test() {
  let x = 5;
  console.log(x); // ✅
}
console.log(x); // ❌ Not defined
```

### 3. Block Scope
- Variables declared inside `{}` using `let` or `const` (not `var`)
- Accessible only **inside that block**
```js
if (true) {
  let y = 20;
  const z = 30;
}
console.log(y); // ❌ Not accessible
```

### Lexical Scope - Scope Rule
- Lexical Scope means Scope is decided **by where a function is written**, not where it's called
- A function can access variables from:
  - Its own scope
  - Its outer function
  - The global scope
```js
function outer() {
  let a = 10;
  function inner() {
    console.log(a); // ✅ accessible due to lexical scope
  }
  inner();
}
```

### Scope Chain - Scope Behavior
- When a variable is not found in the current scope, JavaScript goes outward to find it
- In the Example, `c()` can access everything from `b()` and `a()`
```js
function a() { //Parent function
  let x = 1;
  function b() { // Inner function
    let y = 2;
    function c() { // Inner inner function
      console.log(x); // ✅ from a()
      console.log(y); // ✅ from b()
    }
    c();
  }
  b();
}
a();
```

### Lexical Environment - Internal Mechanism
- Each function/block has a hidden object:
   - **Environment Record** → Stores declared variables/functions
   - **Outer Reference → Points to its parent scope
- Used internally to build the **scope chain**.
- Its similar to how [Code Execution](
---

## Operators

### 1. Arithmetic Operators
- `+` - Addition
- `-` - Subtraction
- `*` - Multiplication
- `/` - Division
- `%` - Modulus (Remainder)
- `**` - Exponentiation (Power)

### 2. Assignment Operators
- `=` - Assigning 
- `+=` - Addition + assigning
- `-=` - Subtraction + assigning
- `*=` - Multiplication + assigning
- `/=` - Division + assigning

### 3. Comparison Operators
- `==` - Equal to (Ignore Data Type of values)
- `===` - Strictly Equal to (Strictly checks Data type of values)
- `!=` - Not equal
- `!==` - Strictly Not equal
- `<` - Less than
- `>` - Greater than
- `>=` - Greater or Equal
- `<=` - Less or Equal

### 4. Logical Operators
- `&&` - AND (Both must be true)
- `||` - OR (At least one must be true)
- `!` - NOT ( Changes `True` into `False`, and `False` into `True`)

### 5. Nullish Coalescing Operator
- `??` - Returns the **Right** value only if the **Left** value is `null` or `undefined`.
```js
let name = null;
console.log(name ?? "Guest"); // Output: "Guest"
```
>**Note:**
> Difference from `||`(OR):
> `||` returns right value if **left** is any `falsy` (`null`, `undefined`, `0`, `''`, `false`, etc.)
> `??` operator doesn't consider `Truthy` or `Falsy` values unlike `||`.
> `??` returns right value only if **left** is `null` or `undefined`.

### 6. Optional Operators
- `typeof` - Checks the data types
- `delete` - Remove a property from object
 
---

## Template literal / Interpolation

- A way to insert **variables** or **expressions** inside a string without using concatenation (`+`).
- Use **backticks "``"** instead of quotes (" " or ' ') and place variables or expressions inside **${}*.

**Example:**
```js
let name = "John";
console.log(`Hello, my name is ${name}`); // Output: Hello, my name is John.
```

---

## Conditional Statements
JavaScript provides several ways to make decisions and control the flow of your program:

- ### `if`
Executes a block of code **if** a specified condition is true.

**Example:**

```js
if (score > 80) {
  console.log("Great job!");
}
```

- ### `else if`
Checks another condition if the previous **`if`** condition was false.

**Example:**

```js
if (score > 80) {
  console.log("Great job!");
} else if (score > 50) {
  console.log("Good effort!");
}
```

- ### `else`
Executes this block if none of the **`if`** or **`else if`** conditions are true.

**Example:**

```js
if (score > 80) {
  console.log("Great job!");
} else {
  console.log("Keep practicing!");
}
```

- ### Ternary Operator
A shorthand for `if...else`.

Syntax: `condition ? value_if_true : value_if_false`

**Example:**

```js
let age = 18;
let message = age >= 18 ? "You can vote" : "You are too young";
console.log(message); // Output: You can vote
```

- ### `switch` Statement
Best for checking multiple values of a single expression.

**Example:**

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Another day");
}
```

---

## Loops
JavaScript provides several types of loops to perform repetitive tasks efficiently:

- ### `for` loop
→ Best when you **know the exact number of iterations** (arrays)

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- ### `forEach` loop
→ Calls a function once for each element in array element.
→ Cannot be stopped using `break` or `continue`.
→ Can use `return` to exits the current iteration in a callback.
  
**Example:**

```js
const arr = [1, 2, 3];
arr.forEach(function(item) {
  console.log(item);
});
```

- ### `while` loop
→ Runs a block while the condition is **true**.
→ Condition is checked **before** each iteration.

**Example:**

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

- ### `for...in` loop
→ Best suited for objects.
→ Not recommended for **array**.
→ Iterates over the keys (properties names) of an object.

**Example:**

```js
const person = { name: "John", age: 30 };

for (let key in person) {
  console.log(key, person[key]);
}
```

- ### `for...of` loop
→ Iterates over the values of arrays, strings, maps, sets.
→ Returns values, not keys.
→ Best suited for iterable objects (`string`, `arrays`).

**Example:**

```js
const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
```

- ### `do...while` loop
→ Executes the block at **least once**, then checks the condition.

**Example:**

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## Controlling Loop Execution

- ### `break`
  Exits the loop completely.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // Output: 0, 1, 2
}
```
- ### `continue`
  Skips the current iteration and moves to the next one.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // Output: 0, 1, 3, 4
}
```
