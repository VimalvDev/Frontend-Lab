//Reload on top
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});
//use this for more lag free animations on the smaller devices
if (window.innerWidth < 768) {
  gsap.ticker.lagSmoothing(1000, 16);
} else {
  gsap.ticker.lagSmoothing(0);
}
