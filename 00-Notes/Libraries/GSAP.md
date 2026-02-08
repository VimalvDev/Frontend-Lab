## ✨ GSAP (GreenSock Animation Platform)

A **JavaScript animation library** used to create **smooth, performant animations**.

---

### 🚀 Two Ways to Apply Animations

#### 1️⃣ Initial ➔ Final State
- Used when the element is already in its starting position.
```js
gsap.to(".box", { x: 300, duration: 1 });
```

#### 2️⃣ Final ➔ Initial State
```js
gsap.from(".box", { opacity: 0, y: 100 });
```

---

## ⏱️ GSAP Timeline
- A **timeline** lets you sequence multiple animations in a controlled order
- Animations play one after another
- Useful for **page load animations**, **menus**, **hero sections**
- Can be controlled at any time

### Common Timeline Controls
```js
tl.play();       // Plays timeline
tl.pause();      // Pauses timeline
tl.reverse();    // Reverses timeline
tl.restart()     // Restarts from beginning
```

### Timeline vs Delay

- **Timeline:** different elements, different animations, ordered
- **Delay:** same animation, just starts later

### Example:
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

## Frequently Used GSAP Properties

### Transform Properties
- `x` / `y`: Move in pixels
- `xPercent` / `yPercent`: Move relative to element size
- `scale`: Resize element
- `rotation`: Rotate the element in degrees

### Timing & Control
- `duration`: Animation length
- `delay`: Wait before animation starts
- `stagger`: Delay between multiple elements
- `repeat`: Number of times to repeat (`-1` = infinite)
- `yoyo`: `true/false` - Reverses direction on each repeat

### Overwrite
Controls how GSAP handles **conflicting animations** on the same element
- `overwrite: auto` -> safest, GSAP cancels conflicting tweens automatically
- `overwrite: true` -> forcefully kills existing animations
- `overwrite: false` -> allows multiple tweens (can cause bugs)

---

## 🌀 ScrollTrigger (GSAP Plugin)
- Used for **scroll-based animations**

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

## ScrollTrigger Properties

### Trigger & Scroll Position
- `trigger: "elemName"` ➔ Element that controls the animation
- `scroller: "parentName"` ➔ Scroll container (default `body`)
- `start: "top 10%"` ➔ When animation starts (ex: "top 10%")
- `end: "top -100%` ➔ When animation end

### Debugging
- `markers: true` ➔ shows start/end markers

### Scroll Sync
- `scrub: true` ➔ Links animation progress to scroll
- `scrub: 1-5` ➔ Smoother interpolation

### Pin Elements
- `pin: true` ➔ Pins element during scroll for scroll-based animations
- `pinSpacing: true/false` ➔ True keeps layout space. False removes extra spaces (overlappping sections)
- `pinReparent: true` ➔ Moves pinned element to body
> (Used when parent has overflow hidden or z-index issues occur)
- `pinType: "transform"` ➔ default (better performance)
- `pinType: "fixed"` ➔ needed for some mobile layouts

- `anticipatePin: 0.5 - 1` ➔ Smooths jumps when pin starts
> (Used when you see a visual jump on pin start or large pinned elements)

### Refresh
- `invalidateOnRefresh: true` ➔ recalculates values on resize/refresh

Essential when:
- Using dynamic heights
- Responsive layouts
- `vh` / `%` animations

### Recalculation
- `ScrollTrigger.refresh()` ➔ Manually recalculates all triggers
  
Used after:
- DOM changes
- Image loads
- Layout updates
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
