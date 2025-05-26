# 🐞 Bug: Loader Timer Not Completing on Mobile

## 📁 File
`loader-delay.js`

---

## 🧩 Issue Description

When testing a GSAP-based loader with a timer (`0 to 100` in `25ms` intervals), the loader works fine on desktop but **fails to reach 100 on mobile** before the main content appears.

- The timer starts at `0` and should go to `100` in `2.5 seconds`.
- However, on mobile, it often cuts off early (e.g., stops at 80–90).
- This causes the loader to disappear before it’s actually done.

---

## 💣 Cause

The loader animation and timer run **independently**. GSAP continues playing the timeline while the timer is still running.

> On slower mobile devices, `setInterval()` runs slower due to frame drops or performance throttling, so it **doesn't sync** with the GSAP animation.

---

## ✅ Solution

Pause the GSAP timeline when the timer starts and **resume it only after the timer reaches 100**.

### Fix Summary:
- Use `tl.add()` to insert a `setInterval` countdown inside the timeline.
- Pause the timeline with `tl.pause()` when the timer starts.
- Resume the timeline with `tl.resume()` when the counter reaches 100.

---

## 🛠️ Code Snippet

```js
tl.add(() => {
  let count = 0;
  let countdown = document.querySelector(".countdown");

  let interval = setInterval(() => {
    if (count <= 100) {
      countdown.textContent = count++;
    } else {
      clearInterval(interval);
      tl.resume(); // resume the paused timeline
    }
  }, 25);

  tl.pause(); // pause timeline until counter hits 100
});
```
