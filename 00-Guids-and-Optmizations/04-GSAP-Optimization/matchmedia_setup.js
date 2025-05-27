ScrollTrigger.matchMedia({
  // 🌐 Desktop and laptops
  "(min-width: 1024px)": function () {
    ScrollTrigger.refresh();
  },

  // 📱 Tablets
  "(min-width: 768px) and (max-width: 1023px)": function () {
    console.log("🟡 Tablet");
    // Tablet animations (optional)
    ScrollTrigger.refresh();

  },

  // 📲 Mobiles
  "(max-width: 767px)": function () {
    console.log("🔴 Mobile");
    // Mobile animations (can skip some heavy ones)
    ScrollTrigger.refresh();
  },
});
