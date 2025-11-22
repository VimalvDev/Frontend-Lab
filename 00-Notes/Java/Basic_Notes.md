# Java Notes for DSA & Interviews

These notes cover only the essential Java concepts required for DSA, interviews, and basic backend preparation.

---

## 1. Variables & Data Types

### What are variables?
Variables store data during program execution.

### Primitive data types
- `int` – whole numbers  
- `double` – decimal values (high precision)  
- `float` – decimal values (lower precision, requires `f`)  
- `char` – single character  
- `boolean` – true/false  
- `long` – larger whole numbers  

### Example
```java
int age = 20;
double marks = 94.5;
boolean pass = true;
```
---

## 2. Arrays

### Definition
Arrays store multiple values of the same type in continuous memory.

### Key points
- Indexed from `0`
- Fixed size
- Cannot store mixed types
- Use `Arrays.toString()` to print properly

### Example
```
int[] nums = {1, 2, 3, 4};
System.out.println(nums[0]);  // 1
```
### Printing array properly
```
import java.util.Arrays;
System.out.println(Arrays.toString(nums));
```


---

## 3. Strings

### Definition
A sequence of characters stored as an object.

### Key points
- Immutable (cannot be changed once created)  
- Supports many useful methods like length, substring, compare, etc.

### Example

```
String s = "Hello";
System.out.println(s.length());
System.out.println(s.charAt(1));  // e
```

---

## 4. Class & Object

### Class
A blueprint that defines variables and behaviors.

### Object
A real instance created from the class, having its own data.

### Example 
```
class Car {
    String model;
    int year;

    void display() {
        System.out.println(model + " " + year);
    }
}

Car c = new Car();
c.model = "Tata";
c.year = 2020;
c.display();
```


---

## 5. Constructors

### Definition
A special method that runs automatically when an object is created.

### Key points
- Same name as the class  
- No return type  
- Used to initialize object data  

### Example
```
class Car {
    String model;
    int year;

    Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}
```

---

## 6. this Keyword

### Use
Refers to the current object's variables and methods.

### Key points
- Helps differentiate between class fields and constructor parameters  
- Used when variable names are the same  

### Example
```
this.model = model;
```

---

## 7. Static Keyword

### Static variables
Shared by all objects of the class.

### Example
```
class Test {
    static int count = 0;
}
```

### Static methods
Belong to the class, not to individual objects.

### Key points
- Can be accessed using the class name  
- Cannot use non-static variables directly inside static methods  

### Example
```
static void show() {
    System.out.println("Hello");
}
```


---

## 8. Final Keyword

Controls modification.

### Usage
- `final variable` → value cannot change  
- `final method` → cannot be overridden  
- `final class` → cannot be inherited  

### Example
```
final int x = 10;  // cannot change
```
---

## 9. Inheritance (Basic)

### Definition
One class acquires properties and methods of another class.

### Key points
- Promotes code reusability  
- Achieved using the `extends` keyword  

### Example
```
class A {
    void show() { System.out.println("A"); }
}

class B extends A {
    void show() { System.out.println("B"); } // overriding
}
```

---

## 10. Method Overriding (Run-time Polymorphism)

### Definition
Child class redefines a method of the parent class with the same name and signature.

### Key points
- Runtime polymorphism  
- Used to change behavior in the child class  

### Example
```
class A {
    void show() { System.out.println("A"); }
}
class B extends A {
    void show() { System.out.println("B"); }
}
```
---

## 11. ArrayList (Important for DSA)

### Definition
A dynamic array that can grow or shrink automatically.

### Key points
- Allows indexed access  
- Supports adding/removing elements easily  
- Part of `java.util` package  

### Example
```
import java.util.ArrayList;

ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);

System.out.println(list.get(1)); // 20
```
---

## 12. HashMap (Very important for DSA)

### Definition
Stores data as key-value pairs.

### Key points
- Fast lookups (O(1) average)  
- Keys must be unique  
- Very important for DSA problems like frequency counting  

### Example
```
import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);

System.out.println(map.get("A")); // 1
```
---

## 13. For Loop & Enhanced For Loop

### For loop
Used for indexed iteration.

### Example
```
for(int i = 0; i < nums.length; i++) {
    System.out.println(nums[i]);
}
```

### Enhanced for loop
Used to iterate directly over elements of arrays or collections.

### Example
```
for(int x : nums) {
    System.out.println(x);
}
```

---

## 14. Scanner (Input)

### Use
Reads user input from the keyboard.

### Key points
- Can read integers, strings, booleans, etc.  
- Belongs to `java.util` package  

### Example
```
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int x = sc.nextInt();
String s = sc.nextLine();
```
---

## 15. Time Complexity (Required for DSA)

### Common complexities
- O(1) → constant time (array access)  
- O(n) → linear time (array searching)  
- O(1) average → HashMap get/put
- O(n log n) → sorting algorithms  
- O(n²) → nested loops  

---

## Returning Arrays in Java

When a method needs to return multiple values, Java allows returning an **array**.  
There are two common ways to do this.

## 1. Declaring an Array and Then Returning It

- In this approach, an array variable is created inside the method, values are assigned to it, and then the variable is returned.  

```java
int[] result = {p, q, r, s, t};
return result;
```
- This method is useful when you want to perform operations on the array before returning it.

## 2. Returning an Anonymous Array

- Java also allows returning an array **directly** without giving it a name.  
```java
return new int[]{p, q, r, s, t};
```

- This is called an **anonymous array** because it has no variable name.  
- It is commonly used in platforms like GFG and LeetCode, where the array is created only for returning the result.

## Why `{a, b, c}` Cannot Be Returned Directly

```java
return {p, q, r, s, t};   // ❌ Not valid in Java
```

- The shorthand `{...}` can only be used **during array declaration**.  
- It cannot be used by itself in a return statement.  
- Java requires either:
   - the name of an already-declared array, or  
   - a full array creation expression like `new int[]{...}`.

## Summary Table

| Syntax | Allowed? | Meaning |
|--------|----------|---------|
| `int[] arr = {a, b, c};` | ✔ | Declares and initializes an array |
| `return arr;` | ✔ | Returns an existing array |
| `return new int[]{a, b, c};` | ✔ | Creates and returns an anonymous array |
| `return {a, b, c};` | ✘ | Invalid, cannot return using shorthand |

## When to Use Each Approach?

- **Anonymous array (`new int[]{...}`)**  
  Use this when the array exists only for returning and is not needed inside the method.

- **Declared array (`int[] arr = {...}`)**  
  Use this when you need to store the array in a variable to modify or process

---

# Java Varargs (Variable Arguments) — Notes

## 1. Overview
Varargs (variable arguments) allow a method to accept zero or more values of the same type.  
They provide flexibility when the number of inputs is not fixed.  
The ellipsis/spread operator (`...`) in the parameter list indicates that the method can receive multiple arguments.

```java
void exampleMethod(int... numbers) { }
```

## 2. Why Varargs Are Used
- To simplify method calls.
- To avoid manually creating arrays.
- To handle a flexible number of parameters.
- To improve readability in utility or helper functions.

### Example without varargs:
```java
printNumbers(new int[]{1, 2, 3});
```

### Example with varargs:
```java
printNumbers(1, 2, 3);
```

## 3. How Varargs Work Internally
Varargs are internally treated as arrays.  
When a varargs method is called, Java automatically packs the provided values into an array before the method receives them.

```java
// This method
void printNumbers(int... nums)

// Is treated as:
void printNumbers(int[] nums)
```

## 4. Rules of Varargs
1. Only one varargs parameter is allowed per method.
2. The varargs parameter must always be the last parameter in the method signature.
3. Regular parameters must appear before the varargs parameter.

### Example
```java
// Valid:
void demo(String name, int... nums)

// Invalid:
void demo(int... nums, String name) // Error
```

## 5. Common Use Cases
- Logging frameworks that accept multiple arguments.
- String formatting utilities.
- Library methods that accept a flexible number of items.
- Utility methods where the number of arguments is not fixed.

## 6. Pros and Cons

### Pros
- More flexibility in method calls.
- Cleaner syntax.
- Reduces the need for multiple overloaded methods.

### Cons
- Can create ambiguity when combined with method overloading.
- May have a small performance cost due to array creation.
- Makes strict argument validation more difficult.

