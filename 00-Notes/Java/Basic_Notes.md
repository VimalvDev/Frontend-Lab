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
