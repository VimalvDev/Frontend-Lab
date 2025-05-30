# Basics of JavaScript

---

## Data Types

### 1. Primitive Data Types

- **String** - Text (e.g., `"Hello"`)  
- **Numbers**:  
  - Integer – (e.g., `1`, `2`, `4`)  
  - Float – (e.g., `1.5`, `2.5`)  
- **Boolean** – `true` or `false`  
- **Null** – A variable intentionally set to "empty" (nothing). Declared but has no value.  
- **Undefined** – A variable that is declared but not assigned any value. It is also the default value for uninitialized variables.

---

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
