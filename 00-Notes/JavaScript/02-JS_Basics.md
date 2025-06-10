# Basics of JavaScript

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
→ Can use `return` to skip the current iteration in a callback.
  
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
