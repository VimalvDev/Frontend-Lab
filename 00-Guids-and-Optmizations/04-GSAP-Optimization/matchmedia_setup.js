ScrollTrigger.matchMedia({
  // 🌐 Very large desktops (e.g. 2K, 4K)
  "(min-width: 1600px)": function () {
    console.log("🔵 Ultra-wide Desktop");
    // GSAP animations for ultra large screens
  },

  // 💻 Standard desktops & laptops
  "(min-width: 1200px) and (max-width: 1599px)": function () {
    console.log("🟢 Desktop / Laptop");
    // GSAP animations for normal desktops
  },

  // 📺 Small laptops & large tablets (landscape)
  "(min-width: 992px) and (max-width: 1199px)": function () {
    console.log("🟡 Small Laptop / Large Tab");
    // GSAP animations for small laptops or large tablets
  },

  // 📱 Tablets (portrait)
  "(min-width: 768px) and (max-width: 991px)": function () {
    console.log("🟠 Tablet (Portrait)");
    // GSAP animations for tablets
  },

  // 📲 Mobiles
  "(max-width: 767px)": function () {
    console.log("🔴 Mobile");
    // GSAP animations for mobile
  },
});
