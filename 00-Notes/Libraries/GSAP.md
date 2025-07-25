## ✨ GSAP (GreenSock Animation Platform)

A **JavaScript animation library** used to create **smooth, performant animations**.

---

### 🚀 Two Ways to Apply Animations

#### 1️⃣ Initial ➔ Final Position
```js
gsap.to("elemName", { /* properties */ });
```

#### 2️⃣ Final ➔ Initial Position
```js
gsap.from("elemName", { /* properties */ });
```

---

## ⏱️ GSAP Timeline

- Allows **chaining multiple animations** to play in sequence.
- All animations inside a timeline will **play one after another**.
- Useful for **complex animation sequences**.

#### Pause / Play / Reverse Timeline:
```js
tl.pause();      // Pauses timeline
tl.play();       // Plays timeline
tl.reverse();    // Reverses timeline
```

---

### 🆚 Timeline vs Delay

- **Timeline:** Method to animate **different elements with different names** in sequence.
- **Delay:** Property to delay animations on **same-named elements with same animations**.

---

### ✅ Example:
```js
let tl = gsap.timeline();
tl.to("#box1", {
  x: 1000,
  duration: 2,
});
tl.to("#box2", {
  x: 1000,
  duration: 2,
});
```

---

## ⚙️ Some GSAP Properties

- `x` / `y`: Move element horizontally/vertically in pixels relative to parent (`x: 100`).
- `xPercent` / `yPercent`: Move relative to element’s width/height.
- `rotation`: Rotate the element in degrees.
- `scale`: Scale element size.
- `stagger`: Delay between animations for multiple elements.
- `repeat`: Number of times to repeat (`0` = 1 time, `1` = 2 times, `-1` = infinite).
- `yoyo`: `true/false` - Animation reverses direction on each repeat.

---

## 🪐 GSAP Easing

- **Easing** defines the **animation curve** (speed variation) between initial and final positions for smoother animations.

---

## 🌀 ScrollTrigger (GSAP Plugin)

Used for **scroll-based animations** on websites.

---

### ⚡ ScrollTrigger Properties

1. `trigger`: `"elemName"` ➔ Element that triggers the animation.
2. `scroller`: `"parentName"` ➔ Parent element acting as the scrollbar (default `body`).
3. `start`: `"top 10%"` ➔ Animation starts when top of element reaches 10% of viewport.
4. `end`: Defines when animation ends relative to viewport.
5. `markers: true` ➔ Shows start/end markers for debugging.
6. `scrub: 1-5` ➔ Smooth scroll-linked animation (higher = smoother).
7. `pin: true` ➔ Pins element during scroll for scroll-based animations.

---

### ✅ Example:
```js
gsap.to("#parent-element", {
  scrollTrigger: {
    trigger: "#parent-element",
    start: "top 0",
    end: "top -100%",
    pin: true,
  },
});
```

---

## 📱 Responsive GSAP Animations with `ScrollTrigger.matchMedia()`

Allows you to **change GSAP animations based on screen sizes**.

#### ✅ Example:
```js
ScrollTrigger.matchMedia({
  "(max-width: 600px)": function () {
    document.querySelector(".btn").addEventListener("click", () => {
      gsap.to(".box", { x: 200 });
    });
  },
});
```

---

### 📊 Media Sizes Reference:

```js
ScrollTrigger.matchMedia({
  // 🌐 Very large desktops (2K, 4K)
  "(min-width: 1600px)": function () {
    console.log("🔵 Ultra-wide Desktop");
    // GSAP animations for ultra-large screens
  },

  // 💻 Standard desktops & laptops
  "(min-width: 1200px) and (max-width: 1599px)": function () {
    console.log("🟢 Desktop / Laptop");
    // GSAP animations for normal desktops
  },

  // 📺 Small laptops & large tablets
  "(min-width: 992px) and (max-width: 1199px)": function () {
    console.log("🟡 Small Laptop / Large Tab");
    // GSAP animations for small laptops / large tablets
  },

  // 📱 Tablets (portrait)
  "(min-width: 768px) and (max-width: 991px)": function () {
    console.log("🟠 Tablet (Portrait)");
    // GSAP animations for tablets
  },

  // 📲 Mobiles
  "(max-width: 767px)": function () {
    console.log("🔴 Mobile");
    // GSAP animations for mobiles
  },
});
```
