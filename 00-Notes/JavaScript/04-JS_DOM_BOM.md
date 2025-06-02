# 🌐 Window, BOM, and DOM in JavaScript

## Window Object

- The `window` object represents the **browser window or tab**.
- It is the **global object** in the browser — all global variables and functions are part of it.
- It holds **everything** — BOM, DOM, and JavaScript core functions.

## BOM - Browser Object Model
BOM allows JavaScript to **interact with the browser**.

### Window Object (Global Browser Object)
- `innerWidth` / `innerHeight` → Get viewport size (excluding toolbars)
- `outerWidth` / `outerHeight` → Get full browser window size
- `scrollX` / `scrollY` → Get scroll position
- `window.open("URL")` → Open a new tab/window

### Location Object (URL & Navigation)
- `location.href` → Get or set page URL
- `location.reload()` → Reload current page
- `location.hostname` → Get domain name
- `location.pathname` → Get path (`/about.html`)

### Timing Functions
- `setTimeout(fn, ms)` → Run once after delay
- `setInterval(fn, ms)` → Run repeatedly
- `clearTimeout(id)` → Stop `setTimeout`
- `clearInterval(id)` → Stop `setInterval`

### History Object (Browser Navigation)
- `history.back()` → Go back a page
- `history.forward()` → Go forward a page

### Dialog Boxes
- `alert("message")` → Show alert popup
- `confirm("message")` → Confirm dialog (OK/Cancel)

### Navigator Object
- `navigator.userAgentData` → Get browser info
- `navigator.language` → Get user language
- `navigator.onLine` → Check if user is online

---

## DOM - Document Object Model

- DOM is a programming interface that lets JavaScript interact with HTML and CSS.
- It allows dynamic manipulation of the **webpage content and structure**.
  
### Why Use the DOM?
- HTML alone can’t handle user interactions (scroll,click etc).
- DOM enables JavaScript to add **events**, **animations**, and **dynamic content**.
- Any JavaScript code that changes the webpage is part of the DOM manipulation
  

## DOM Manipulation Steps
-	Select : Selecting the HTML element using JS
-	Modify : Modifying the selected elements
-	Event : Add an Event Listener to respond to user actions
  
---

### 1. Accessing Elements
#### Most Important
- `document.querySelector(".class or #id or tag")`
- `document.body //Select the <body> tag of HTML`
- `document.documentElement //Select the <html> tag of HTML`
- `document.querySelectorAll("selector") //Selecting multiple elements, Give a Nodelist`

> **Note:**
> 
> `document.querySelectorAll()` returns a **NodeList**, not a real array.  
> It looks like an array and supports `.forEach()`, but lacks methods like `.map()` or `.filter()`.

#### Less Common, Rarely needed
- `document.getElementById("id")`
- `document.getElementsByClassName("class")`
- `document.getElementsByTagName("tag")`
- `parent.firstElementChild`
- `parent.lastElementChild`
- `document.querySelector('element[attribute="value"]')`

---

### 2. Modifying HTML Elements

- `element.textContent = "Text only"` <br>
Changes only the plain text of elements like `<h1>`, `<p>` etc (ignores HTML tags).

- `element.innerHTML = "<h2>Text inside with tag</h2>"` <br>
Updates the content and also parses HTML tags (can create or replace elements)

- `input.value = "Set input value"` <br>
Gets or sets the value of input fields (like textboxes, forms)

- `element.setAttribute("href", "link.html")` <br>
Sets or changes any attribute (eg, `href`, `src`, `id`)

- `element.getAttribute("href")` <br>
Gets the value of a given attribute

- `element.innerText = "shows text with its tag"` <br>
Similar to textContent but respects CSS (e.g. hides text with `display: none`) <br>
Rarely used today — use `textContent` for cleaner and more reliable output

---

### 3. Manipulate CSS with JavaScript

#### Changing **CSS style** of elements
- `element.style.color = “red”`
- `element.style.fontSize = “20px”`
- `element.style.backgroundColor =  “blue”`
- Any CSS style can be given just by writing the **style name(in camelCase)** after `style.`

#### Adding/Removing CSS Classes (classList)
- `element.classList.add(“className”)`
-	`element.classList.remove(“className”)`
-	`element.classList.toggle(“className”)`
    -	Toggles a class on/off
    - If the class does not exist, it adds it
    - if the class already exists, it removes it

---

### 4. Creating and Deleting Elements using DOM
#### a) Creating HTML elements steps

- Creating an Element `.createElement(")`
    - This creates an element in JavaScript, but it does NOT appear on the webpage yet.
    - It's created in JavaScript memory, not on the actual webpage.
    - We can add content, styles, classes, and decide where to place it in the HTML.

```js
let create = document.createElement("h5"); // Create an h5 tag
create.textContent = "This is a created h5"; // Add text inside it
create.classList.add("makeitblue"); // Add a class
```

- Add the Element to the Webpage `append()`
    - This places the created element inside the specified parent element.
    - `append()` means "add at the end" of the selected parent and supports multiple nodes or text.
```js
document.querySelector("parentName").append(elementName);
```

> Note: appendChild() vs append()
>
> appendChild()
> → Only accepts Node elements (like elements created with createElement)
> → Cannot insert text directly
>
> append()
> → Can insert both Node elements and text strings
> → Supports adding multiple elements or strings at once
>
> Example:
> ```js
> parent.appendChild(div);       // Works only with elements
> parent.append(div, "Text");    // Can append element + text together
> ```

#### b) Removing HTML elements

- `removeChild(elementName)` <br>
Removes the element which is created using DOM.
- `.remove()`
Directly removes an existing HTML element.
```js
document.body.removeChild(newElement); // Removes the created element
document.body.remove(h2); // Removes an existing element
```

---

### 5. Event Handling 

Example:
```js
const btn = document.querySelector(".btn"); //selecting element

btn.addEventListener("click", function () { //adding event listener
  btn.textContent = "Starting...";
});
```

#### Event Listeners:

- **Mouse Events** <br>
`clickw` - Triggers when an element is clicked <br>
`dblclick` - When an element is double-clicked <br>
`mouseover` -	When the mouse moves over an element (triggers once, Also work on child) <br>
`mousemove` - Tracks the mouse movement over an element (triggers continously) <br>
`mouseenter` - When the mouse enters an element (Doesn't work on parent's child) <br>
`mouseleave` - When the mouse leaves an element <br>

- **Keyboard Events**
`keydown` -	Triggers when a key is pressed down
`keyup` -	Triggers when a key is released

- **Forms & Inputs Events**
`input` -	Fires when a user types or changes value in an input/textarea
`submit` -	When a form is submitted


- **Scroll & Load Events**
- `scroll` - Fires when the page or a scrollable element scrolls
`DOMContentLoaded` -	When the HTML is fully loaded and parsed
`load` -	When all resources (images, scripts, etc.) finish loading

---

### 6. Event Object in JavaScript

- The event object provides detailed information about the event that occurred — such as which key was pressed, mouse position, scroll data, and more.
- When you attach an event listener, you can access the event object by passing a parameter (commonly named event, e, or ev).

#### Common Event Object Properties:

- 1. Click Events (click, dblclick)
`event.target` → The exact element that was clicked

- 2. Mouse Events (mousemove, mouseover, mousedown, mouseup)
`event.clientX` / `clientY` → Position of the mouse relative to the viewport (visible part of the page)

`event.pageX` / `pageY` → Position of the mouse relative to the entire document

- 3. Scroll Events (wheel)
`event.deltaX` / `deltaY` → Measures scroll distance
    - `+` value = scrolling down/right

    - `-` value = scrolling up/left

- 4. Keyboard Events (keydown, keyup)
`event.key` → The actual key pressed (e.g., "Enter", "a", "Shift")

- Example:
```js
document.body.addEventListener("mousemove", function (event) {
  console.log("Mouse is moving...");
  console.log("X:", event.clientX, "Y:", event.clientY); // Logs mouse position
});
```
