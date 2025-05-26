// Bug: Loader timer finishes early on mobile before reaching 100%
// Cause: setInterval and GSAP timeline not synced
// Fixed by: Pausing GSAP timeline until counter hits 100

let tl = gsap.timeline();
tl.add(() => {
  let countdown = document.querySelector(".countdown");
  let count = 0;

  let interval = setInterval(() => {
    if (count <= 100) {
      countdown.textContent = count++;
    } else {
      clearInterval(interval);

      // 3️⃣ Continue the rest of the timeline only after timer completes
      resumeTimeline();
    }
  }, 25);

  // Pause GSAP timeline until resumeTimeline is called
  tl.pause();
}, "+=0.3");

// 4️⃣ Define the rest of the animation in another timeline or function
function resumeTimeline() {
  // Resume GSAP timeline
  tl.resume();
}
